import express from "express";
import {
  createDeal,
  getAllDeals,
  getOneDeal,
} from "../controler/dealController.js";
import { multerUpload } from "../middleware/multer.js";

const DealRouter = express.Router();

DealRouter.get("/alldeals", getAllDeals);
DealRouter.get("/:id", getOneDeal);
DealRouter.post("/create", multerUpload.single("image"), createDeal);
export default DealRouter;
