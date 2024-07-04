import { IConvertationRequest } from "../interface/convertation";
import db from "../models";
import { Op } from "sequelize";

const getDetailConvertation = async (req: IConvertationRequest) => {
  return await db.convertations.findOne({
    where: {
      ...req,
    },
  });
};

const getDetailConvertationWithUserId = async (
  user_one: number,
  user_two: number
) => {
  return await db.convertations.findOne({
    where: {
      [Op.or]: [
        { user_one: user_one, user_two: user_two },
        { user_one: user_two, user_two: user_one },
      ],
    },
  });
};

const getListConvertation = async (req: IConvertationRequest) => {
  return await db.convertations.findAll({
    where: { ...req },
  });
};

const createConvertation = async (req: IConvertationRequest) => {
  return await db.convertations.create({
    user_one: req.user_one,
    user_two: req.user_two,
    status: 0,
  });
};

export const convertationService = {
  getDetailConvertation,
  getDetailConvertationWithUserId,
  getListConvertation,
  createConvertation,
};
