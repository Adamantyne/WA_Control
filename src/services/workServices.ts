import customerRepository from "../repositories/customerRepository.js";
import workRepository from "../repositories/workRepository.js";
import { CreateWork, InputUpdtaeWork } from "../schemas/workSchema.js";
import { isNaNValidate } from "../utils/suportFunctions.js";
import { workValidate } from "../utils/workValidations.js";

async function createWork(workData: CreateWork) {
  await workRepository.insertWork(workData);
}

async function findWorks(userId: number) {
  const works = await workRepository.findByUserId(userId);
  return works;
}

async function findWork(workId: string, userId: number) {
  isNaNValidate(+workId);
  const work = await workValidate(+workId, userId);
  return work;
}

async function updateWork(workId: string, workData: InputUpdtaeWork) {
  await workRepository.updateWorkById(+workId, workData);
}

async function deleteWork(workId: string) {
  await workRepository.deleteWorkById(+workId);
}

const workService = {
  createWork,
  findWorks,
  findWork,
  updateWork,
  deleteWork,
};

export default workService;
