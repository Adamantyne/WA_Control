import { Router } from "express";

import schemaValidator from "../middlewares/schemaMiddleware.js";
import { signUpSchema, signInSchema } from "../schemas/authSchemas.js";
import {
  signUpMiddleware,
  signInMiddleware,
} from "../middlewares/authMiddleware.js";
import { signIn, signUp, signOut } from "../controllers/authController.js";
import tokenValidator from "../middlewares/tokenMiddleware.js";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  schemaValidator(signUpSchema),
  signUpMiddleware,
  signUp
);
authRouter.post(
  "/sign-in",
  schemaValidator(signInSchema),
  signInMiddleware,
  signIn
);
authRouter.post("/sign-out", tokenValidator, signOut);

export default authRouter;
