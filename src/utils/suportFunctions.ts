import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
//import Cryptr from "cryptr";

import userRepository from "../repositories/userRepository.js";
import { SessionData } from "../schemas/authSchemas.js";
import sessionRepository from "../repositories/sessionRepository.js";

interface JWTData {
  email: string;
  id: number;
}

dotenv.config();
//const cryptr = new Cryptr(process.env.CRYPTER_CODE);

const JWTDataValidate = (input: object | string): input is JWTData => {
  return typeof input === "object" && "email" && "id" in input;
};

export function throwErr(
  type: "conflict" | "not_found" | "unauthorized" | "unprocessable_entity",
  message: string
) {
  throw { type, message };
}

export function createToken(data: { email: string; id: number }) {
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token;
}

export function validateToken(token: string) {
  try {
    const jwtData = jwt.verify(token, process.env.JWT_SECRET);
    if (JWTDataValidate(jwtData) && jwtData.email && jwtData.id) {
      return jwtData;
    } else {
      throwErr("unauthorized", "Invalid Token");
    }
  } catch (error) {
    throwErr("unauthorized", "Invalid Token");
  }
}

export async function validateUser(email: string) {
  const validUser = await userRepository.findByEmail(email);
  if (!validUser) {
    throwErr("unauthorized", "unregistered email");
  }
  return validUser;
}
export async function validatePassword(
  password: string,
  encryptPassword: string
) {
  const validPassword = bcrypt.compareSync(password, encryptPassword);
  if (!validPassword) {
    throwErr("unauthorized", "incorrect password");
  }
}

export async function validateSession(sessionData: SessionData) {
  const validSession = await sessionRepository.findByTokenAndId(sessionData);
  if (!validSession) {
    throwErr("unauthorized", "invalid or expired token");
  }
}

export function isNaNValidate(value:number) {
  if (Number.isNaN(value)) {
    throwErr("unprocessable_entity", "customer id must be a numeric value");
  }
}

// export function decryptString(encryptedString:string){
//   return cryptr.decrypt(encryptedString);
// }

// export function encryptString(string:string){
//   return cryptr.encrypt(string);
// }
