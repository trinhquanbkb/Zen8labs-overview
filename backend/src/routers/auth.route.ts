import express from "express";
import { AuthController } from "../controller/auth.controller";

export const authRouter = express.Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);
authRouter.get("/google", AuthController.googleAuth);
authRouter.get("/google/callback", )
