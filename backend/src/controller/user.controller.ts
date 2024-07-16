import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { decodeToken } from "../utils/functions/decodeToken";

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
    const decode: any = decodeToken(req);
    const users = await UserService.searchListUser(keyword, Number(decode.id));
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const users = await UserService.updateUser(req.body, {
      id: Number(req.params.id),
    });
    if (users) {
      res.status(200).send("Update success!");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const UserController = {
  getAllUsers,
  getUserDetail,
  searchUser,
  updateUser,
};
