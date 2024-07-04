import { Request, Response } from "express";
import { messageService } from "../service/message.service";

const getMessageInConvertation = async (req: Request, res: Response) => {
  try {
    const limit = 30;
    const listMessage = await messageService.getMessageInConvertation({
      ...(req.query as any),
      limit: limit,
    });
    res.status(200).send({
      user_id_1: Number(req.query.user_id_1),
      user_id_2: Number(req.query.user_id_2),
      offset: Number(req.query.offset),
      limit: limit,
      data: listMessage,
    });
  } catch (error) {
    res.status(500).send(`${error}`);
  }
};

export const MessageController = {
  getMessageInConvertation,
};
