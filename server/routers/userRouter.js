import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  loginUser,
  addFavouriteToUser,
  deleteFavouriteFromUser
} from "../controler/userController.js";
import { multerUpload } from "../middleware/multer.js";
const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);
UserRouter.patch("/addFavourite", addFavouriteToUser);
UserRouter.patch("/deleteFavourite", deleteFavouriteFromUser);

UserRouter.post("/register", multerUpload.single("avatar"), createUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/:id", getOneUser);

export default UserRouter;
