import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    descreption: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    // pending: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const DealModel = mongoose.model("Deal", dealSchema);
