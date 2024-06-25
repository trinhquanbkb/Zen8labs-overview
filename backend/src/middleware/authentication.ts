import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const token = req.header("token");
    // //giải mã (decode) token
    // const decode = jwt.verify(token, HASH_ACCESS_TOKEN);
    // if (decode) {
    //   req.user = decode;
    //   next();
    // } else {
    //   res.send("You are not loggin");
    // }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  authenticate,
};
