import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  loginUser,
  updateUserFaves,
} from "../controler/userController.js";
import { multerUpload } from "../middleware/multer.js";
import jwtAuth from "../middleware/jwtAuth.js";
const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);
UserRouter.patch("/updateFavourites", updateUserFaves);

UserRouter.post("/register", multerUpload.single("avatar"), createUser);
UserRouter.post("/login", loginUser);
UserRouter.get("/:id", getOneUser);

export default UserRouter;
