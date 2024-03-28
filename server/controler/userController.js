import { generateToken } from "../middleware/jwt.js";
import { DealModel } from "../models/dealModel.js";
import { UserModel } from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../utils/bcrypt.js";
import { imageUpload } from "../utils/uploadImage.js";

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
  const { email, password } = req.body;

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
    const hashedPassword = await hashPassword(password);
    const newUser = new UserModel({
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(201).json({ message: "User Created", user: user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  console.log("Logging in User");
  const { email, password } = req.body;
  console.log("req.body", req.body);
  const user = await UserModel.findOne({
    email: email,
  });
  console.log("user :>>", user);

  if (user) {
    const { password: hashedPassword } = user;
    console.log("hashedPassword :>>", hashedPassword);
    const verified = await verifyPassword(password, hashedPassword);
    if (verified) {
      const token = generateToken(user);

      if (token) {
        console.log("User verified");
        res.status(201).json({ message: "User Logged in", token: token });
      } else {
        console.log("failed to generate token");
      }
    } else {
      console.log("Verification failed");
    }
  } else {
    return res.status(500).json({ message: "Wrong password" });
  }
};

export const updateUserFaves = async (req, res) => {
  console.log("testing user faves func");
  const { favDeal, userID } = req.body;
  const user = await UserModel.findOne({
    _id: userID,
  });
  console.log("user :>>", user);
  const deal = await DealModel.findOne({
    _id: favDeal,
  });
  console.log("favDeal :>>", deal);
  res.status(201).json({ message: "route working", user, deal });
};
