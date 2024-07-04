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

const getMessageInConvertation = async ({
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
  const convertation = await db.convertations.findOne({
    where: {
      [Op.or]: [
        { user_one: user_id_1, user_two: user_id_2 },
        { user_one: user_id_2, user_two: user_id_1 },
      ],
      status: 0,
    },
  });
  if (convertation) {
    const messages = await db.messages.findAll({
      where: { convertation_id: convertation.dataValues.id },
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
    convertation_id: req.convertation_id,
  });
};

export const messageService = {
  getDetailMessage,
  getListMessage,
  getMessageInConvertation,
  createMessage,
};
