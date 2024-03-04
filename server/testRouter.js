import express from "express";
import { testFunction } from "./controler/testController.js";

const TestRouter = express.Router();

TestRouter.get("/getAll", testFunction);

export default TestRouter;
