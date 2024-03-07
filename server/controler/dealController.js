import { dealModel } from "../models/dealModel.js";

export const dealRoute = (req, res) => {
  res.send("Deal Route Test");
};

export const getAllDeals = async (req, res) => {
  try {
    const allDeals = await UserModel.find();
    res.status(200).json(allDeals);
  } catch {
    res.status(404).json({ message: error.message });
  }
};
