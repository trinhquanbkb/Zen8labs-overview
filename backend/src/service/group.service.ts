import { Op } from "sequelize";
import db from "../models";
import { IGroupRequest, IUserGroup } from "../interface/group";

const getDetailGroup = async (req: IGroupRequest) => {
  const group = await db.groups.findOne({
    where: {
      ...req,
      is_delete: false,
    },
  });
  if (group) {
    const userIds = await db.user_groups.findAll({
      where: {
        group_id: group.dataValues.id,
      },
      attributes: ["user_id"],
    });
    let users: any[] = [];

    await Promise.all(
      userIds.map(async (item: any) => {
        const u = await db.users.findOne({
          where: {
            id: item.dataValues.user_id,
          },
          attributes: ["id", "first_name", "last_name", "nick_name"],
        });
        users.push(u.dataValues);
        return u;
      })
    );
    return {
      ...group.dataValues,
      users: users,
    };
  } else return null;
};

const getListGroup = async (req: IGroupRequest) => {
  return await db.groups.findAll({
    where: { ...req, is_delete: false },
  });
};

const searchGroup = async (keyword: string, user_id: number) => {
  const userGroup = await db.user_groups.findAll({
    where: {
      user_id: user_id,
    },
  });
  if (userGroup.length > 0) {
    const userGroupId = userGroup.map((group: any) => {
      return group.dataValues.group_id;
    });

    const groups = await db.groups.findAll({
      where: {
        name: { [Op.iLike]: `%${keyword}%` },
        id: {
          [Op.or]: userGroupId,
        },
        is_delete: false,
      },
    });
    return groups;
  } else {
    return [];
  }
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

const updateGroup = async (id: number, data: any) => {
  if (data.userId && data.userId.length > 2) {
    const userGroups = await db.user_groups.findAll({
      where: {
        group_id: id,
      },
    });
    const userGroupId = userGroups.map((item: IUserGroup) => item.user_id);
    const userGroupIdDelete = userGroups
      .filter((item: IUserGroup) => !data.userId.includes(item.user_id))
      .map((item: IUserGroup) => item.user_id);
    const userGroupIdAdd = data.userId.filter(
      (item: number) => !userGroupId.includes(item)
    );
    // delete record
    if (userGroupIdDelete.length > 0) {
      await Promise.all(
        userGroupIdDelete.map(async (item: number) => {
          return await db.user_groups.destroy({
            where: {
              group_id: id,
              user_id: item,
            },
          });
        })
      );
    }
    // add record
    if (userGroupIdAdd.length > 0) {
      await Promise.all(
        userGroupIdAdd.map(async (item: number) => {
          return await db.user_groups.create({ group_id: id, user_id: item });
        })
      );
    }
  }
  return await db.groups.update(
    { ...data },
    {
      where: {
        id: id,
        is_delete: false,
      },
    }
  );
};

const deleteGroup = async (id: number) => {
  return await db.groups.update(
    { is_delete: true },
    {
      where: {
        id: id,
      },
    }
  );
};

export const groupService = {
  getDetailGroup,
  getListGroup,
  searchGroup,
  createGroup,
  updateGroup,
  deleteGroup,
};
