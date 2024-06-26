import { Request, Response } from "express";
import db from "../models";
import { IUserRequest, UsersModel } from "../interface/users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface DataStoredInToken {
  id?: number;
  first_name?: string;
  last_name?: string;
  nick_name?: string;
}

interface IRegisterUser {
  first_name?: string;
  last_name?: string;
  nick_name?: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
}

const createToken = (user: UsersModel) => {
  const HASH_ACCESS_TOKEN: string = process.env.HASH_ACCESS_TOKEN || "";
  const HASH_REFRESH_TOKEN: string = process.env.HASH_REFRESH_TOKEN || "";

  const dataStoredInToken: DataStoredInToken = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    nick_name: user.nick_name,
  };

  const expiresIn = 60 * 5;
  const access_token = jwt.sign(dataStoredInToken, HASH_ACCESS_TOKEN, {
    expiresIn,
  });
  const refresh_token = jwt.sign(dataStoredInToken, HASH_REFRESH_TOKEN, {
    expiresIn: expiresIn * 3600,
  });

  return { expiresIn, access_token, refresh_token };
};

const getDetailUser = async (req: IUserRequest) => {
  return await db.users.findOne({
    where: {
      ...req,
    },
  });
};

const getListUser = async (req: IUserRequest) => {
  return await db.users.findAll({ where: { ...req } });
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

export const UserService = { getDetailUser, getListUser, createUser, createToken };
