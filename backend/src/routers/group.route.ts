import express from "express";
import { authenticate } from "../middleware/authentication";
import { GroupController } from "../controller/group.controller";

export const groupRouter = express.Router();

groupRouter.get("/search", authenticate, GroupController.searchGroup);
groupRouter.post("/", authenticate, GroupController.createGroup);
