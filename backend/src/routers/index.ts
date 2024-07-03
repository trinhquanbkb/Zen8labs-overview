import express from "express";
import { authRouter } from "./auth.route";
import { userRouter } from "./user.router";
import { transactionRouter } from "./transaction.router";

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/transacgtions", transactionRouter);
