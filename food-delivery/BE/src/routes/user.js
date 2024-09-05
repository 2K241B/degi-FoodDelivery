import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  userDelete,
} from "../controller/user.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/:id", getUser)
  .delete("/:id", userDelete)
  .get("/", getAllUsers);

export { userRouter };
