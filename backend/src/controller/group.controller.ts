import { Request, Response } from "express";
import { groupService } from "../service/group.service";
import jwt from "jsonwebtoken";

const searchGroup = async (req: Request, res: Response) => {
  try {
    const keyword = req.query.keyword;
    const access_token = req.headers.authorization
      ? req.headers.authorization.split("Bearer ")[1]
      : "";
    const decode: any = jwt.verify(
      access_token,
      process.env.HASH_ACCESS_TOKEN as string
    );
    const groups = await groupService.searchGroup(
      keyword as string,
      Number(decode.id)
    );
    if (groups) {
      res.status(200).send(groups);
    } else {
      res.status(401).send([]);
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const createGroup = async (req: Request, res: Response) => {
  try {
    const group = await groupService.createGroup(req.body);
    console.log(group);
    if (group) {
      res.status(201).send(group);
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const GroupController = {
  searchGroup,
  createGroup,
};
