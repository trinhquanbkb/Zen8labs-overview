import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const access_token = req.headers.authorization
      ? req.headers.authorization.split("Bearer ")[1]
      : "";
    // decode token
    const decode = jwt.verify(
      access_token,
      process.env.HASH_ACCESS_TOKEN as string
    );
    if (decode) {
      req.user = decode;
      next();
    } else {
      res.status(404).send("You are not loggin");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
