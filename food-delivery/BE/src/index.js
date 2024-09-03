import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (_, res) => {
  return res.status(200).json("hello world");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
