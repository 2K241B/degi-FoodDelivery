import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";
import mongoose from "mongoose";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (_, res) => {
  return res.status(200).json("hello world");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
