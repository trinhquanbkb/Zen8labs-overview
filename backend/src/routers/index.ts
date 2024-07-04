import express from "express";
import { authRouter } from "./auth.route";
import { userRouter } from "./user.router";
<<<<<<< Updated upstream
=======
import { transactionRouter } from "./transaction.router";
import { messageRouter } from "./message.route";
>>>>>>> Stashed changes

export const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
<<<<<<< Updated upstream
=======
rootRouter.use("/transactions", transactionRouter);
rootRouter.use("/messages", messageRouter);
>>>>>>> Stashed changes
