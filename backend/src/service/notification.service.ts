import { IConvertationRequest } from "../interface/convertation";
import { INotificationRequest } from "../interface/interface";
import db from "../models";
import { Op } from "sequelize";

const getListNotification = async (req: IConvertationRequest) => {
  return await db.notifications.findAll({
    where: {
      ...req,
    },
  });
};

const getDetailNotification = async (req: IConvertationRequest) => {
  return await db.notifications.findOne({
    where: {
      ...req,
    },
  });
};

const createNotification = async (req: INotificationRequest) => {
  return await db.notifications.create({
    content: req.content,
    title: req.title,
    date: req.date,
    sender_id: req.sender_id,
  });
};

export const notificationService = {
  getListNotification,
  getDetailNotification,
  createNotification,
};
