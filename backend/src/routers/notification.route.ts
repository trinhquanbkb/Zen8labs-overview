import express from "express";
import { authenticate } from "../middleware/authentication";
import { NotificationController } from "../controller/notification.controller";

export const notificationRouter = express.Router();

notificationRouter.post(
  "/set-token-fcm",
  authenticate,
  NotificationController.setTokenFCM
);

notificationRouter.post(
  "/send-notification",
  authenticate,
  NotificationController.sendNotification
);
