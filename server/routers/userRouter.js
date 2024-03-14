import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
} from "../controler/userController.js";

const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);
UserRouter.post("/register", createUser);
UserRouter.get("/:id", getOneUser);

export default UserRouter;
