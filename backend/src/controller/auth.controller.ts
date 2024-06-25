import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UsersModel } from "../interface/users";
import passport from "passport";

dotenv.config();

interface DataStoredInToken {
  id?: number;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
}

interface IRegisterUser {
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
}

const createToken = (user: UsersModel) => {
  const HASH_ACCESS_TOKEN: string = process.env.HASH_ACCESS_TOKEN || "";
  const HASH_REFRESH_TOKEN: string = process.env.HASH_REFRESH_TOKEN || "";

  const dataStoredInToken: DataStoredInToken = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    nick_name: user.nick_name,
  };

  const expiresIn = 60 * 5;
  const access_token = jwt.sign(dataStoredInToken, HASH_ACCESS_TOKEN, {
    expiresIn,
  });
  const refresh_token = jwt.sign(dataStoredInToken, HASH_REFRESH_TOKEN, {
    expiresIn: expiresIn * 3600,
  });

  return { expiresIn, access_token, refresh_token };
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const results = await UserService.getDetailUser({
      email,
      blocked: false,
      deleted: false,
    });
    if (results) {
      const isAuthen = bcrypt.compareSync(
        password,
        results.dataValues.password
      );
      if (isAuthen === true) {
        const token = createToken(results.dataValues);
        res.status(200).send({ message: "Login user success", token });
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

const googleAuth = async (req: Request, res: Response) => {
  passport.authenticate("google", { scope: ["email", "profile"] });
};

const googleAuthCallBack = async (req: Request, res: Response) => {
  passport.authenticate("google", { failureRedirect: "/" }),
    (req: Request, res: Response) => {
      res.redirect("/");
    };
};

export const AuthController = {
  login,
  register,
  googleAuth,
  googleAuthCallBack,
};
