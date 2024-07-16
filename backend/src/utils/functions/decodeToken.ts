import { Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const decodeToken = (req: Request) => {
  const access_token = req.headers.authorization
    ? req.headers.authorization.split("Bearer ")[1]
    : "";
  return jwt.verify(access_token, process.env.HASH_ACCESS_TOKEN as string);
};
