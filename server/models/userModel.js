import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    favDeals: { type: mongoose.Schema.Types.ObjectId, ref: "Deal" },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);

//TODO: add role field, with admin or user. (see enums)
