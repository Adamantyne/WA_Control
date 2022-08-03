import Joi from "joi";
import { User,Session } from "@prisma/client";

interface inputUserData extends User {
  confirmPassword: string;
}

export type SignUpData = Omit<inputUserData, "id">;
export type InsertUser = Omit<SignUpData, "confirmPassword">;
export type SignInData = Omit<SignUpData, "confirmPassword" | "username">;
export type sessionData = Omit<Session, "id"|"loginAt"|"logoutAt">;

export const signUpSchema = Joi.object<SignUpData>({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export const signInSchema = Joi.object<SignInData>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
