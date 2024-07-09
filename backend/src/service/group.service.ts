import { Op } from "sequelize";
import db from "../models";
import { IGroup, IGroupRequest } from "../interface/group";

const getDetailGroup = async (req: IGroupRequest) => {
  return await db.groups.findOne({
    where: {
      ...req,
    },
  });
};

const getListGroup = async (req: IGroupRequest) => {
  return await db.groups.findAll({
    where: { ...req },
  });
};

const searchGroup = async (keyword: string, user_id: number) => {
  console.log(user_id);
  const userGroup = await db.user_groups.findAll({
    where: {
      user_id: user_id,
    },
  });
  const userGroupId = userGroup.map((group: any) => {
    return group.dataValues.group_id;
  });

  const groups = await db.groups.findAll({
    where: {
      name: { [Op.iLike]: `%${keyword}%` },
      id: {
        [Op.or]: userGroupId,
      },
    },
  });
  return groups;
};

const createGroup = async (req: IGroupRequest) => {
  return await db.groups.create({
    name: req.name,
    avatar: req.avatar,
  });
};

export const groupService = {
  getDetailGroup,
  getListGroup,
  searchGroup,
  createGroup,
};
