import express from "express";
import { authRouter } from "./auth.route";
import { userRouter } from "./user.router";
import { transactionRouter } from "./transaction.router";
import { messageRouter } from "./message.route";
import { groupRouter } from "./group.route";
import { notificationRouter } from "./notification.route";

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/transactions", transactionRouter);
rootRouter.use("/messages", messageRouter);
rootRouter.use("/groups", groupRouter);
rootRouter.use("/notifications", notificationRouter);
