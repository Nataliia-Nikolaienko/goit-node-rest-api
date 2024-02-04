import express from "express";

import validateBody from "../middlewars/validateBody.js";
import { registerSchema } from "../schemas/userSchemas.js";
import { userControllers } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), ctrl.register);

export default authRouter;
