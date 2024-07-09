import { Request, Response } from "express";
import { UserService } from "../service/user.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const listUser = await UserService.getListUser({});
    res.status(200).send(listUser);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const getUserDetail = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getDetailUser({ id: Number(req.params.id) });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const searchUser = async (req: Request, res: Response) => {
  try {
    const keyword = req.query.keyword as string;
    const users = await UserService.searchListUser(keyword);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const UserController = {
  getAllUsers,
  getUserDetail,
  searchUser,
};
