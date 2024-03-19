import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    descreption: { type: String, required: true },
    email: { type: String, required: true, unique: false },
    image: {
      type: String,

      default: "https://api.dicebear.com/8.x/shapes/svg?seed=Jasper",
    },
  },
  { timestamps: true }
);

export const DealModel = mongoose.model("Deal", dealSchema);
