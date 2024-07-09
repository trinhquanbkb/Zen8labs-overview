import express from "express";
import { authenticate } from "../middleware/authentication";
import { GroupController } from "../controller/group.controller";

export const groupRouter = express.Router();

groupRouter.get("/search", authenticate, GroupController.searchGroup);
groupRouter.get("/:id", authenticate, GroupController.getDetailGroup);
groupRouter.post("/", authenticate, GroupController.createGroup);
groupRouter.put("/:id", authenticate, GroupController.updateGroup);
