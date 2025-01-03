import * as dotenv from "dotenv";
// loading .env file
dotenv.config();
import passport from "passport";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./routers/userRouter.js";
import DealRouter from "./routers/dealRouter.js";
import { cloudinaryConfig } from "./config/cloudinary.js";
import { passportConfig } from "./config/passportConfig.js";

const app = express();
console.log("1");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
console.log("2");
cloudinaryConfig();

// MongoDB connection
console.log("process.env.MONGO_URI", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Example API endpoint
app.use("/api/user", UserRouter);
app.use("/api/deal", DealRouter);

const PORT = process.env.PORT || 6069;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});