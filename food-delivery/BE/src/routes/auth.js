import { Router } from "express";
import { login } from "../controller/auth.js";
import { createUser } from "../controller/user.js";

const authRouter = Router();

authRouter.post("/login", login).post("/signup", createUser);

export { authRouter };
