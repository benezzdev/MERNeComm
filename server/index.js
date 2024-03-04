import express from "express";
import cors from "cors";
import TestRouter from "./testRouter.js";
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/api/test", TestRouter);
const port = process.env.PORT || 5049;
app.listen(port, () => {
  console.log("Server is running on port  " + port);
});

app.use("*", (req, res) =>
  res.status(404).json({ error: "Endpoint not found." })
);
