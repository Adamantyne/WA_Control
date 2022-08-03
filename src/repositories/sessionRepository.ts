import db from "../config/database.js";

import { sessionData } from "../schemas/authSchemas.js";

async function getByTokenAndId({userId,token}:sessionData) {
  return await db.session.findFirst({
    where: {
      userId,
      token:token,
      logoutAt: null,
    },
  });
}

async function getLastSession(id: number) {
  return await db.session.findFirst({
    orderBy: {
      id: "desc",
    },
    take: 1,
    where: {
      id,
      logoutAt: null,
    },
  });
}

async function invalidatingSessionById(id: number) {
  return await db.session.update({
    where: {
      id,
    },
    data: {
      logoutAt: new Date(),
    },
  });
}

async function createSession(sessionData:sessionData) {
    return await db.session.create({data:sessionData});
  }

const sessionRepository = {
  getLastSession,
  invalidatingSessionById,
  createSession,
  getByTokenAndId
};
export default sessionRepository;
