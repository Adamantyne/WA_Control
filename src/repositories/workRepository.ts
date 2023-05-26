import db from "../config/database.js";
import { CreateWork, InputUpdtaeWork } from "../schemas/workSchema.js";
import customerRepository from "./customerRepository.js";

async function findByIdAndUserId(id: number, userId: number) {
  return await db.work.findFirst({
    where: { id, userId, deleteAt: null },
    select: {
      id: true,
      description: true,
      customerId: true,
      budgetDate: true,
      budget: true,
      value: true,
      deliveryDate: true,
      delivered: true,
      paydate: true,
      observation: true,
      payed: true,
      finished: true,
      createAt: true,
      customer: {
        select: {
          name: true,
        },
      },
    }
  });
}

async function findByUserId(userId: number) {
  return await db.work.findMany({
    where: { userId, deleteAt: null },
    select: {
      id: true,
      description: true,
      customerId: true,
      budgetDate: true,
      budget: true,
      value: true,
      deliveryDate: true,
      delivered: true,
      paydate: true,
      observation: true,
      payed: true,
      finished: true,
      createAt: true,
      customer: {
        select: {
          name: true,
        },
      },
    },orderBy:{
      createAt:"desc"
    }
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
