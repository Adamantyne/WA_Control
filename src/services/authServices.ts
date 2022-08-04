import bcrypt from "bcrypt";
import { User } from "@prisma/client";

import userRepository from "../repositories/userRepository.js";
import { createToken } from "../utils/suportFunctions.js";
import { InsertUser } from "../schemas/authSchemas.js";
import sessionRepository from "../repositories/sessionRepository.js";

async function createUser({ email, password, username }: InsertUser) {
  const sault = 10;
  const encryptedPassword = bcrypt.hashSync(password, sault);
  const insertUserData = { email, username, password: encryptedPassword };
  await userRepository.insertUser(insertUserData);
}

async function createSession({ email, id }: User) {
  const token = createToken({ email, id });
  await invalidatingLastSession(id);
  await sessionRepository.createSession({ userId: id, token });
  return token;
}

async function invalidatingLastSession(id: number) {
  const lastSession = await sessionRepository.findLastSession(id);
  if (lastSession) {
    await sessionRepository.invalidatingSessionById(lastSession.id);
  }
}

const authServices = { createUser, createSession, invalidatingLastSession };
export default authServices;
