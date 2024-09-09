import { Router } from "express";
import {
  createUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "../controller/user.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/:id", getUser)
  .delete("/:id", deleteUser)
  .put("/:id", updateUser)
  .get("/", getAllUsers);

export { userRouter };
