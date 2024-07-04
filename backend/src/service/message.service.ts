import { Op } from "sequelize";
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

const getMessageInConversation = async ({
  user_id_1,
  user_id_2,
  offset,
  limit,
}: {
  user_id_1: number;
  user_id_2: number;
  offset: number;
  limit: number;
}) => {
  const conversation = await db.conversations.findOne({
    where: {
      [Op.or]: [
        { user_one: user_id_1, user_two: user_id_2 },
        { user_one: user_id_2, user_two: user_id_1 },
      ],
      status: 0,
    },
  });
  if (conversation) {
    const messages = await db.messages.findAll({
      where: { conversation_id: conversation.dataValues.id },
      order: [["updated_at", "DESC"]],
      offset: offset * limit,
      limit: limit,
    });
    return messages;
  } else {
    return [];
  }
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
  getMessageInConversation,
  createMessage,
};
