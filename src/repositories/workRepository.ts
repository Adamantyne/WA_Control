import db from "../config/database.js";
import { CreateWork, InputUpdtaeWork } from "../schemas/workSchema.js";

async function findByIdAndUserId(id: number, userId: number) {
  return await db.work.findFirst({
    where: { id, userId, deleteAt: null },
  });
}

async function findByUserId(userId: number) {
  return await db.work.findMany({
    where: { userId, deleteAt: null },
    orderBy: { createAt: "asc" }
  });
}

async function insertWork(workData: CreateWork) {
  return await db.work.create({ data: workData });
}

async function updateWorkById(id: number, updateData: InputUpdtaeWork) {
  return await db.work.update({
    where: { id },
    data: updateData,
  });
}

async function deleteWorkById(id: number) {
  const dataTime = new Date();
  return await db.work.update({
    where: { id },
    data: { deleteAt: dataTime },
  });
}

const workRepository = {
  findByIdAndUserId,
  findByUserId,
  insertWork,
  updateWorkById,
  deleteWorkById,
};

export default workRepository;
