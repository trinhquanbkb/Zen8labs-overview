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
authRouter.post("/refresh-token", AuthController.refreshToken);
authRouter.post(
  "/send-mail-forget-password",
  AuthController.sendMailForgetPassword
);
authRouter.post(
  "/check-code-forget-password",
  AuthController.checkCodeForgetPassword
);
authRouter.post("/reset-password", AuthController.resetPassword);

// oauth login
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
    console.log(token.dataStoredInToken);
    res.cookie("access_token", token.access_token);
    res.cookie("refresh_token", token.refresh_token);
    res.cookie("user_infor", token.dataStoredInToken);
    res.redirect(process.env.URL_REDIRECT_SUCCESS as string);
  }
);
