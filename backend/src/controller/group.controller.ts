import { Request, Response } from "express";
import { groupService } from "../service/group.service";
import { decodeToken } from "../utils/functions/decodeToken";

const searchGroup = async (req: Request, res: Response) => {
  try {
    const keyword = req.query.keyword;
    const decode: any = decodeToken(req);
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

const getDetailGroup = async (req: Request, res: Response) => {
  try {
    const groups = await groupService.getDetailGroup({
      id: Number(req.params.id),
    });
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const createGroup = async (req: Request, res: Response) => {
  try {
    const group = await groupService.createGroup(req.body);
    if (group) {
      res.status(201).send(group);
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const updateGroup = async (req: Request, res: Response) => {
  try {
    const group = await groupService.updateGroup(
      Number(req.params.id),
      req.body
    );
    if (group) {
      res.status(201).send("Update group success!");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

const deleteGroup = async (req: Request, res: Response) => {
  try {
    const group = await groupService.deleteGroup(Number(req.params.id));
    if (group) {
      res.status(200).send("Delete group success!");
    }
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const GroupController = {
  searchGroup,
  createGroup,
  getDetailGroup,
  updateGroup,
  deleteGroup,
};
