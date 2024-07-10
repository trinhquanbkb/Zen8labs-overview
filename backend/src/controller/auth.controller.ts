import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { mailService } from "../service/mail.service";
import { generateRandomString } from "../utils/functions/generateCode";
import schedule from "node-schedule";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const results = await UserService.getDetailUser({
      email,
      blocked: false,
      deleted: false,
      google_auth: null,
      facebook_auth: null,
    });
    if (results) {
      const isAuthen = bcrypt.compareSync(
        password,
        results.dataValues.password
      );
      if (isAuthen === true) {
        const token = UserService.createToken(results.dataValues);
        res.status(200).send({
          message: "Login user success",
          token: {
            expiresIn: token.expiresIn,
            access_token: token.access_token,
            refresh_token: token.refresh_token,
          },
        });
      } else {
        throw new Error(`Password is not exist`);
      }
    } else {
      throw new Error(`Email is not exist`);
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const results = await UserService.getDetailUser({
      email: req.body.email,
      deleted: false,
      blocked: false,
      facebook_auth: null,
      google_auth: null,
    });
    if (results) {
      res.status(401).send(`Email is exist`);
      return null;
    }

    const user = await UserService.createUser(req.body);
    if (user) {
      res.status(201).send(user);
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    const refresh_token = req.body.refresh_token;
    const decode: any = jwt.verify(
      refresh_token,
      process.env.HASH_REFRESH_TOKEN as string
    );
    if (decode) {
      const results = await UserService.getDetailUser({
        id: decode.id,
        blocked: false,
        deleted: false,
      });
      if (!results) {
        res.status(401).send("Account not exist or deleted!");
      }
      const token = UserService.createToken(results.dataValues);
      res.status(200).send({
        message: "Refresh token success",
        token: {
          expiresIn: token.expiresIn,
          access_token: token.access_token,
          refresh_token: token.refresh_token,
        },
      });
    } else {
      res.status(401).send("Refresh token expired!");
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
};

const sendMailForgetPassword = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getDetailUser({
      email: req.body.mail,
      facebook_auth: null,
      google_auth: null,
      deleted: false,
      blocked: false,
    });
    if (user.dataValues) {
      const code = generateRandomString(30);
      await UserService.updateUser(
        { code: code },
        {
          email: req.body.mail,
          facebook_auth: null,
          google_auth: null,
          deleted: false,
          blocked: false,
        }
      );

      // schedule delete code
      schedule.scheduleJob(new Date(Date.now() + 10 * 60 * 1000), async () => {
        await UserService.updateUser(
          { code: "" },
          {
            email: req.body.mail,
            facebook_auth: null,
            google_auth: null,
            deleted: false,
            blocked: false,
          }
        );
      });

      mailService
        .sendMail(
          req.body.mail,
          `<div style="padding: 4px; background-color: #003375">
            <div style="padding:10px;background-color:white;">
              <h4 style="color:#0085ff;margin-bottom: 6px;text-align: center;font-size: 22px;">Đây là thông báo từ Zen8labs về việc cập nhật mật khẩu!</h4>
              <p style="font-size: 18px;padding-bottom: 8px;color:black;text-align: center;">Xin vui lòng ấn nút dưới đây để xác nhận!</p>
              <div style="text-align:center"><a href="${process.env.URL_CODE}/${code}" style="background-color: red; color: white; border: 1px solid; padding: 9px 16px; cursor: pointer;">Xác nhận</a></div>
              </div>
            </div>
        `,
          "Zen8labs verify password",
          "abcd",
          "Xác nhận email cấp lại mật khẩu"
        )
        .then((info) => {
          console.log("Email sent successfully!");
          res.status(200).send(info);
        })
        .catch((error) => {
          console.error("Failed to send email: ", error);
          res.status(500).send("Send mail error!");
        });
    } else {
      res.status(400).send("Not exist email");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const checkCodeForgetPassword = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getDetailUser({ code: req.body.code });
    if (user) {
      res.status(200).send("Verify code success!");
    } else {
      res.status(404).send("Not found code!");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getDetailUser({ code: req.body.code });
    if (user) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(req.body.newPassword, salt);
      await UserService.updateUser(
        { password: hashPassword },
        { code: req.body.code }
      );
      res.status(200).send("Change password success!");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const AuthController = {
  login,
  register,
  refreshToken,
  sendMailForgetPassword,
  checkCodeForgetPassword,
  resetPassword,
};
