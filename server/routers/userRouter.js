import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
  loginUser,
} from "../controler/userController.js";
import { multerUpload } from "../middleware/multer.js";
const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);
UserRouter.get("/:id", getOneUser);
UserRouter.post("/register", multerUpload.single("avatar"), createUser);
UserRouter.post("/login", loginUser);

export default UserRouter;
