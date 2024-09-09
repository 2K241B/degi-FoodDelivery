import { userModel } from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req, res) => {
  const { email, password } = req.body;

  const SECRET_KEY = process.env.SECRET_KEY;

  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).send(message, "user not found");

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(403).send(message, "username or password is wrong");

    const token = jwt.sign({ user }, SECRET_KEY);
    console.log(token, "token");

    res.status(200).cookie("token", token).end();
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
