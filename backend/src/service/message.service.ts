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
  group_id,
}: {
  user_id_1: number;
  user_id_2: number;
  offset: number;
  limit: number;
  group_id: number;
}) => {
  if (group_id) {
    const group = await db.groups.findOne({
      where: {
        id: group_id,
        is_delete: false,
      },
    });
    if (group) {
      const messages = await db.messages.findAll({
        where: { group_id: group.dataValues.id },
        order: [["updated_at", "DESC"]],
        offset: offset * limit,
        limit: limit,
        include: [
          {
            model: db.users,
            as: "user",
            attributes: ["id", "full_name"],
          },
        ],
      });
      return messages;
    } else {
      return [];
    }
  } else {
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
        include: [
          {
            model: db.users,
            as: "user",
            attributes: ["id", "full_name"],
          },
        ],
      });
      return messages;
    } else {
      return [];
    }
  }
};

const createMessage = async (req: IMessageRequest) => {
  return await db.messages.create({
    content: req.content,
    user_id: req.user_id,
    convertation_id: req.convertation_id,
    group_id: req.group_id,
  });
};

export const messageService = {
  getDetailMessage,
  getListMessage,
  getMessageInConvertation,
  createMessage,
};
