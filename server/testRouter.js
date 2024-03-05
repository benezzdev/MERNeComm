import express from "express";
import { testFunction } from "./controler/testController.js";
import { getAllUsers } from "./controler/userController.js";

const TestRouter = express.Router();

TestRouter.get("/getAll", testFunction);
TestRouter.get("/allusers", getAllUsers);

export default TestRouter;
