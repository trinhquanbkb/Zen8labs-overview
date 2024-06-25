import { Request, Response } from "express";
import db from "../models";
import { IUserRequest } from "../interface/users";
import bcrypt from "bcryptjs";

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

export const UserService = { getDetailUser, getListUser, createUser };
