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
console.log("1")
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
console.log("2")
cloudinaryConfig();

const port = process.env.PORT || 5049;

console.log("process.env.MONGO_URI", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(
        "Connection to MongoDB established, and server is running on port " +
          port
      );
    });
  })
  .catch((err) => console.log(err));
console.log("3")
app.use(passport.initialize());
console.log("4")
console.log(passportConfig());

app.use("/api/user", UserRouter);
app.use("/api/deal", DealRouter);

app.use("*", (req, res) =>
  res.status(404).json({ error: "Endpoint not found." })
);
