import express from "express";
import { UserController } from "../controller/user.controller";
import { authenticate } from "../middleware/authentication";

export const userRouter = express.Router();

userRouter.get("/", authenticate, UserController.getAllUsers);
