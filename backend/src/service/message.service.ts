import { IMessageRequest } from "../interface/messages";
import db from "../models";

const getDetailMessage = async (req: IMessageRequest) => {
  return await db.messages.findOne({
    where: {
      ...req,
    },
  });
};

const getListMessage = async (req: IMessageRequest) => {
  return await db.messages.findAll({
    where: { ...req },
  });
};

const createMessage = async (req: IMessageRequest) => {
  return await db.messages.create({
    content: req.content,
    user_id: req.user_id,
    conversation_id: req.conversation_id,
  });
};

export const messageService = {
  getDetailMessage,
  getListMessage,
  createMessage,
};
