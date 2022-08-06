import serviceRepository from "../repositories/serviceRepository.js";
import {
  CreateService,
  InputService,
} from "../schemas/serviceSchema.js";
import { isNaNValidate } from "../utils/suportFunctions.js";
import { serviceValidate } from "../utils/serviceValidations.js";

async function createService(
  serviceData: CreateService
) {
  const { id } = await serviceRepository.insertService(serviceData);
}

async function findServices(userId: number) {
  const services = await serviceRepository.findByUserId(userId);
  return services;
}

async function findService(serviceId: string, userId: number) {
  isNaNValidate(+serviceId);
  const service = await serviceValidate(+serviceId, userId);
  return service;
}

async function updateService(
  serviceId: string,
  serviceData: InputService
) {
  await serviceRepository.updateServiceById(+serviceId, serviceData);
}

async function deleteService(serviceId: string) {
  await serviceRepository.deleteServiceById(+serviceId);
}

const serviceService = {
  createService,
  findServices,
  findService,
  updateService,
  deleteService,
};

export default serviceService;
