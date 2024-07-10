import db from "../models";
import { IUserRequest, UsersModel } from "../interface/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Op } from "sequelize";

dotenv.config();

export interface DataStoredInToken {
  id?: number;
  first_name?: string;
  full_name?: string;
  last_name?: string;
  nick_name?: string;
  avatar?: string;
}

const createToken = (user: UsersModel) => {
  const HASH_ACCESS_TOKEN: string = process.env.HASH_ACCESS_TOKEN || "";
  const HASH_REFRESH_TOKEN: string = process.env.HASH_REFRESH_TOKEN || "";

  const dataStoredInToken: DataStoredInToken = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    full_name: user.full_name,
    nick_name: user.nick_name,
    avatar: user.avatar,
  };

  const expiresIn = 60 * 10;
  const access_token = jwt.sign(dataStoredInToken, HASH_ACCESS_TOKEN, {
    expiresIn,
  });
  const refresh_token = jwt.sign(dataStoredInToken, HASH_REFRESH_TOKEN, {
    expiresIn: expiresIn * 3600,
  });

  return { expiresIn, access_token, refresh_token, dataStoredInToken };
};

const getDetailUser = async (req: IUserRequest) => {
  return await db.users.findOne({
    where: {
      ...req,
    },
  });
};

const getListUser = async (req: IUserRequest) => {
  const users = await db.users.findAll({
    where: { ...req },
    attributes: { exclude: ["password"] },
  });

  return await Promise.all(
    users.map(async (item: any) => {
      const converstations_id = await db.convertations.findAll({
        where: {
          [Op.or]: [
            { user_one: item.dataValues.id },
            { user_two: item.dataValues.id },
          ],
        },
      });
      const group_id = await db.user_groups.findAll({
        where: {
          user_id: item.dataValues.id,
        },
      });
      return {
        ...item.dataValues,
        converstations_id: converstations_id.map((c: any) => c.dataValues.id),
        group_id: group_id.map((c: any) => c.dataValues.group_id),
      };
    })
  );
};

const searchListUser = async (keyword: string, userId: number) => {
  const users = await db.users.findAll({
    where: {
      [Op.or]: [
        { first_name: { [Op.iLike]: `%${keyword}%` } },
        { last_name: { [Op.iLike]: `%${keyword}%` } },
        { full_name: { [Op.iLike]: `%${keyword}%` } },
        { nick_name: { [Op.iLike]: `%${keyword}%` } },
      ],
    },
    attributes: { exclude: ["password"] },
  });
  let result: any[] = [];
  await Promise.all(
    users.map(async (item: any) => {
      const conversation = await db.convertations.findAll({
        where: {
          [Op.or]: [
            { user_one: userId, user_two: item.dataValues.id },
            { user_two: userId, user_one: item.dataValues.id },
          ],
        },
      });
      if (conversation.length > 0) {
        const converstationId = conversation[0].dataValues.id;
        const messageLast = await db.messages.findOne({
          where: { convertation_id: converstationId },
          order: [["updated_at", "DESC"]],
        });
        return result.push({
          ...item.dataValues,
          conversation: messageLast
            ? {
                id: converstationId,
                last_message: messageLast.dataValues.content,
                sender: messageLast.dataValues.user_id,
              }
            : null,
        });
      } else {
        return result.push({
          ...item.dataValues,
          conversation: null,
        });
      }
    })
  );

  return result;
};

const getListUserOnline = async () => {
  const users = await db.users.findAll({
    where: {
      socket: {
        [Op.or]: [
          {
            [Op.notLike]: null,
          },
          {
            [Op.notLike]: "",
          },
        ],
      },
    },
    attributes: ["id"],
  });
  return users.map((i: { id: number }) => i.id);
};

const createUser = async (req: IUserRequest) => {
  if (req.email && req.password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.password, salt);
    const fullname = req.first_name + " " + req.last_name;
    return await db.users.create({
      ...req,
      password: hashPassword,
      full_name: fullname,
    });
  } else {
    return new Error("Field missing filling");
  }
};

const updateUser = async (body: IUserRequest, params: IUserRequest) => {
  let fullname;
  if (body.first_name && body.last_name) {
    fullname = body.first_name + " " + body.last_name;
    return await db.users.update(
      {
        ...body,
        full_name: fullname,
        dob: body.dob ? new Date(body.dob) : null,
      },
      {
        where: {
          ...params,
        },
      }
    );
  } else {
    return await db.users.update(
      { ...body, dob: body.dob ? new Date(body.dob) : null },
      {
        where: {
          ...params,
        },
      }
    );
  }
};

export const UserService = {
  getDetailUser,
  getListUser,
  getListUserOnline,
  searchListUser,
  createUser,
  createToken,
  updateUser,
};
