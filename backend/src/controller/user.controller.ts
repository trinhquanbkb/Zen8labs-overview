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

export const UserController = {
  getAllUsers,
};
