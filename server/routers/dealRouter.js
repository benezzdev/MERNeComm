import express from "express";
import { getAllDeals } from "../controler/dealController.js";

const DealRouter = express.Router();

DealRouter.get("/alldeals", getAllDeals);

export default DealRouter;
