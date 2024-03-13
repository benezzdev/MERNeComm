import { UserModel } from "../models/userModel.js";

export const testRoute = (req, res) => {
  res.send("User Route Test");
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find().populate({
      path: "favDeals",
    });
    res.status(200).json(allUsers);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

export const getOneUser = async (req, res) => {
  console.log("testing get one user route");
  const { id } = req.params;
  console.log("id", id);

  const user = await UserModel.findById({ _id: id }).populate({
    path: "favDeals",
  });
  console.log("user", user);
  res.status(200).json(user);
};
