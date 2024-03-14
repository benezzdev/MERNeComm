import { DealModel } from "../models/dealModel.js";

export const dealRoute = (req, res) => {
  res.send("Deal Route Test");
};

export const getAllDeals = async (req, res) => {
  try {
    const allDeals = await DealModel.find().sort({ timestamps: -1 }).limit(20);
    res.status(200).json(allDeals);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

// TODO: 2 x getAllDeals functions. One for pending (admin), one for approved (users)
