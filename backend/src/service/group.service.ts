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

const createGroup = async (req: any) => {
  const group = await db.groups.create({
    name: req.name,
    avatar: req.avatar,
  });

  if (req.users.length <= 2) {
    return new Error("Cannot create group with quantity user < 2");
  } else {
    await Promise.all(
      req.users.map(async (item: number) => {
        return await db.user_groups.create({
          group_id: group.id,
          user_id: item,
        });
      })
    );
    return group;
  }
};

export const groupService = {
  getDetailGroup,
  getListGroup,
  searchGroup,
  createGroup,
};
