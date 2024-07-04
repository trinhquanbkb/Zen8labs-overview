import { IConversationRequest } from "../interface/conversation";
import db from "../models";
import { Op } from "sequelize";

const getDetailConversation = async (req: IConversationRequest) => {
  return await db.conversations.findOne({
    where: {
      ...req,
    },
  });
};

const getDetailConversationWithUserId = async (
  user_one: number,
  user_two: number
) => {
  return await db.conversations.findOne({
    where: {
      [Op.or]: [
        { user_one: user_one, user_two: user_two },
        { user_one: user_two, user_two: user_one },
      ],
    },
  });
};

const getListConversation = async (req: IConversationRequest) => {
  return await db.conversations.findAll({
    where: { ...req },
  });
};

const createConversation = async (req: IConversationRequest) => {
  return await db.conversations.create({
    user_one: req.user_one,
    user_two: req.user_two,
    status: 0,
  });
};

export const conversationService = {
  getDetailConversation,
  getDetailConversationWithUserId,
  getListConversation,
  createConversation,
};
