import { Router } from "express";
import { Login } from "../controller/auth.js";
import { createUser } from "../controller/user.js";

const authRouter = Router();

authRouter.post("/login", Login).post("/signup", createUser);

export { authRouter };
