import express from "express";
import {
  createDeal,
  getAllDeals, getListOfDeals,
  getOneDeal,
} from "../controler/dealController.js";
import { multerUpload } from "../middleware/multer.js";

const DealRouter = express.Router();

DealRouter.get("/alldeals", getAllDeals);
DealRouter.post("/getListOfDeals", getListOfDeals);

DealRouter.post("/create", multerUpload.single("image"), createDeal);
DealRouter.get("/:id", getOneDeal);
export default DealRouter;
