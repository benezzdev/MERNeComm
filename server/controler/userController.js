import { UserModel } from "../models/userModel.js";

export const testRoute = (req, res) => {
  res.send("User Route Test");
};

export const getAllUsers = async (req, res) => {
  console.log("get all users");
  try {
    const allUsers = await UserModel.find().populate("favDeals");
    console.log("allUsers", allUsers);

    res.status(200).json(allUsers);
  } catch {
    res.status(404).json({ message: "error" });
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

export const createUser = async (req, res) => {
  console.log("creating user");
  const { email, password, username } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }
  const existingUser = await UserModel.findOne({ email: email });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists, please sign in instead" });
  }

  try {
    const newUser = new UserModel({
      email: email,
      password: password,
      username: username,
    });
    const user = await newUser.save();
    res.status(201).json({ message: "User Created", user: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
