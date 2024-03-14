import express from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
} from "../controler/userController.js";
import { multerUpload } from "../middleware/multer.js";
const UserRouter = express.Router();

UserRouter.get("/allusers", getAllUsers);
UserRouter.get("/:id", getOneUser);
UserRouter.post("/register", multerUpload.single("avatar"), createUser);

export default UserRouter;
