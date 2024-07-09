import express from "express";
import { UserController } from "../controller/user.controller";
import { authenticate } from "../middleware/authentication";

export const userRouter = express.Router();

userRouter.get("/", authenticate, UserController.getAllUsers);
userRouter.get("/search", authenticate, UserController.searchUser);
userRouter.get("/:id", authenticate, UserController.getUserDetail);
userRouter.put("/:id", authenticate, UserController.updateUser);
