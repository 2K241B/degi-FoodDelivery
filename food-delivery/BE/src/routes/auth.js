import { Router } from "express";
import { login } from "../controller/auth.js";

const authRouter = Router();

authRouter.post("/login", login);

export { authRouter };
