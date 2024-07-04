import db from "../models";
import { IUserRequest, UsersModel } from "../interface/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Op } from "sequelize";

dotenv.config();

interface DataStoredInToken {
  id?: number;
  first_name?: string;
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
    nick_name: user.nick_name,
    avatar: user.avatar,
  };

  const expiresIn = 60 * 15;
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
      return {
        ...item.dataValues,
        converstations_id: converstations_id.map((c: any) => c.dataValues.id),
      };
    })
  );
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
    return await db.users.create({ ...req, password: hashPassword });
  } else {
    return new Error("Field missing filling");
  }
};

const updateUser = async (body: IUserRequest, params: IUserRequest) => {
  return await db.users.update(
    { ...body },
    {
      where: {
        ...params,
      },
    }
  );
};

export const UserService = {
  getDetailUser,
  getListUser,
  getListUserOnline,
  createUser,
  createToken,
  updateUser,
};
