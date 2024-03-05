import { UserModel } from "../models/userModel.js";

export const testRoute = (req, res) => {
  res.send("User Route Test");
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch {
    res.status(404).json({ message: error.message });
  }
};
