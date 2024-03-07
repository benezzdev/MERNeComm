import express from "express";
import { getAllUsers } from "../controler/userController.js";

const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);

export default UserRouter;
