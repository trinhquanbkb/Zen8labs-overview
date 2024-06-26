import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

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

export const AuthController = {
  login,
  register,
};
