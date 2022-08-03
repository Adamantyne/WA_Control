import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

import { SignUpData, SignInData } from "../schemas/authSchemas.js";
import {
  throwErr,
  validateUser,
  validatePassword,
} from "../utils/suportFunctions.js";
import userRepository from "../repositories/userRepository.js";
import { User } from "@prisma/client";

export async function signUpMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email }: SignUpData = req.body;
  const alreadyExist = await userRepository.findByEmail(email);
  if (alreadyExist) {
    throwErr("conflict", "email already registered");
  }
  next();
}

export async function signInMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const inputData: SignInData = req.body;

  const user: User = await validateUser(inputData.email);

  await validatePassword(inputData.password, user.password);

  res.locals.userData = user;
  next();
}
