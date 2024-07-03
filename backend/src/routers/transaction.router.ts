import express from "express";
import { authenticate } from "../middleware/authentication";
import { TransactionController } from "../controller/transaction.controller";

export const transactionRouter = express.Router();

transactionRouter.post(
  "/create_payment_url",
  authenticate,
  TransactionController.createTransaction
);
