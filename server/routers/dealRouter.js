import express from "express";
import {
  createDeal,
  getAllDeals,
  getOneDeal,
} from "../controler/dealController.js";
import { multerUpload } from "../middleware/multer.js";
import jwtAuth from "../middleware/jwtAuth.js";

const DealRouter = express.Router();

DealRouter.get("/alldeals", getAllDeals);
DealRouter.post("/create", jwtAuth, multerUpload.single("image"), createDeal);
DealRouter.get("/:id", getOneDeal);
export default DealRouter;
