import { Router } from "express";
import {
  createUser,
  updateUser,
  getAllUsers,
  getUser,
  userDelete,
} from "../controller/user.js";

const userRouter = Router();

userRouter
  .post("/create", createUser)
  .get("/:id", getUser)
  .delete("/:id", userDelete)
  .put("/:id", updateUser)
  .get("/", getAllUsers);

export { userRouter };
