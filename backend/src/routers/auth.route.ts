import express from "express";
import { AuthController } from "../controller/auth.controller";
import passport from "passport";
import dotenv from "dotenv";
import { UserService } from "../service/user.service";
import { UsersModel } from "../interface/users";

dotenv.config();
export const authRouter = express.Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.URL_REDIRECT_FALSE,
    session: false,
  }),
  (req, res) => {
    const token = UserService.createToken(req.user as UsersModel);
    res.cookie("access_token", token.access_token);
    res.cookie("refresh_token", token.refresh_token);
    res.redirect(process.env.URL_REDIRECT_SUCCESS as string);
  }
);
