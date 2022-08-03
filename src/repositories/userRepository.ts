import db from "../config/database.js";

import { InsertUser } from "../schemas/authSchemas.js";

async function findByEmail(email: string) {
  return await db.user.findUnique({ where: { email } });
}

async function findByEmailAndId(email: string, id: number) {
  return await db.user.findFirst({ where: { email, id } });
}

async function insertUser(inputData: InsertUser) {
  return await db.user.create({ data: inputData });
}

const userRepository = {
  findByEmail,
  insertUser,
  findByEmailAndId,
};
export default userRepository;
