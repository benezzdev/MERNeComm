import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    titel: { type: String, required: true },
    decreption: { type: String, required: true },
    email: { type: String, required: true, unique: false },
  },
  { timestamps: true }
);

export const dealModel = mongoose.model("Deal", dealSchema);
