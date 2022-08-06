import db from "../config/database.js";
import {
  CreateService,
  InputService
} from "../schemas/serviceSchema.js";

async function findByUserIdAndName(userId: number, serviceName: string) {
  return await db.service.findFirst({
    where: {
      userId,
      name: serviceName,
      deleteAt: null,
    },
  });
}

async function findByIdAndUserId(id: number, userId: number) {
  return await db.service.findFirst({
    where: { id, userId, deleteAt: null }
  });
}

async function findByUserId(userId: number) {
  return await db.service.findMany({
    where: { userId, deleteAt: null },
  });
}

async function insertService(serviceData: CreateService) {
  return await db.service.create({ data: serviceData });
}

async function updateServiceById(id: number, updateData: InputService) {
  return await db.service.update({
    where: { id },
    data: updateData,
  });
}

async function deleteServiceById( id: number) {
  const dataTime = new Date();
  return await db.service.update({
    where: { id },
    data: {deleteAt:dataTime},
  });
}

const serviceRepository = {
  findByUserIdAndName,
  insertService,
  findByUserId,
  findByIdAndUserId,
  updateServiceById,
  deleteServiceById
};

export default serviceRepository;
