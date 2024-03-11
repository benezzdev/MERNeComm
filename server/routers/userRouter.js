import express from "express";
import { getAllUsers, getOneUser } from "../controler/userController.js";

const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);
UserRouter.get("/:id", getOneUser);

export default UserRouter;
