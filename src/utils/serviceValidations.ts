import serviceRepository from "../repositories/serviceRepository.js";
import { throwErr } from "./suportFunctions.js";

export async function serviceValidate(serviceId: number, userId: number) {
  const service = await serviceRepository.findByIdAndUserId(
    serviceId,
    userId
  );
  if (!service) {
    throwErr("not_found", "service not found");
  }
  return service;
}

export async function serviceAlreadyExist(userId: number, name: string) {
  const alreadyExist = await serviceRepository.findByUserIdAndName(
    userId,
    name
  );
  return alreadyExist;
}
