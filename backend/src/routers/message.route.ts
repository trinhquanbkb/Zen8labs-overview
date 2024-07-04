import express from "express";
import { authenticate } from "../middleware/authentication";
import { MessageController } from "../controller/message.controller";

export const messageRouter = express.Router();

messageRouter.get("/", authenticate, MessageController.getMessageInConversation);
