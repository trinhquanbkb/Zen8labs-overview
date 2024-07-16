import { Request, Response } from "express";
import dotenv from "dotenv";
import admin from "firebase-admin";
import { Op } from "sequelize";
import { UserService } from "../service/user.service";
import { notificationService } from "../service/notification.service";
import { serviceAccount } from "../config/push-notification-4880b-firebase-adminsdk-d9a5t-db84643803";
import { decodeToken } from "../utils/functions/decodeToken";

dotenv.config();

// config FCM
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

// define function to send a notification
const pushNotification = async (registrationToken: string, message: any) => {
  const messageSend = {
    token: registrationToken,
    notification: {
      title: message.title,
      body: message.content,
    },
  };

  admin
    .messaging()
    .send(messageSend)
    .then((response) => {
      console.log(`Success send messaging: ${response}`);
    })
    .catch((error) => {
      console.log(`Error send messaging: ${error}`);
    });
};

const setTokenFCM = async (req: Request, res: Response) => {
  try {
    const decode: any = decodeToken(req);
    await UserService.updateUser(
      { token_fcm: req.body.token_fcm },
      { id: decode.id }
    );

    res.status(201).send("Set token FCM success");
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const sendNotification = async (req: Request, res: Response) => {
  try {
    const decode: any = decodeToken(req);
    await notificationService.createNotification({
      ...req.body.notification,
      sender_id: decode.id,
    });

    const userSend = await UserService.getDetailUser({ id: decode.id });
    const listUser = await UserService.getListUser({
      id: { [Op.ne]: decode.id },
    });
    const listTokenFCM = listUser
      .filter(
        (item) =>
          item.token_fcm &&
          item.id !== decode.id &&
          item.token_fcm !== userSend.dataValues.token_fcm
      )
      .map((item) => {
        return item.token_fcm;
      });
    const listTokenFCMUnique = [...new Set(listTokenFCM)];

    await Promise.all(
      listTokenFCMUnique.map(async (registrationToken: string) => {
        return await pushNotification(registrationToken, req.body.notification);
      })
    );
    res.status(200).send("Push notification success!");
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const getNotificationOwn = async (req: Request, res: Response) => {
  try {
    const decode: any = decodeToken(req);
    const listNotifications = await notificationService.getListNotification(
      {},
      decode.id
    );
    res.status(200).send(listNotifications);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const NotificationController = {
  setTokenFCM,
  sendNotification,
  getNotificationOwn,
};
