import express from "express";
import { validateBody, authenticate, upload } from "../../middlewars/index.js";
import { schemas } from "../../schemas/userSchemas.js";
import { userControllers } from "../../controllers/auth.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(schemas.registerSchema),
  userControllers.register
);

authRouter.get("/verify/:verificationToken", userControllers.verifyEmail);
authRouter.post(
  "/verify",
  validateBody(schemas.emailSchema),
  userControllers.resendVerifyEmail
);

authRouter.post(
  "/login",
  validateBody(schemas.loginSchema),
  userControllers.login
);

authRouter.get("/current", authenticate, userControllers.getCurrent);
authRouter.post("/logout", authenticate, userControllers.logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  userControllers.updateAvatar
);

export default authRouter;
