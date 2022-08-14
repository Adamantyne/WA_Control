import { Request, Response } from "express";

import {
  CreateService,
  InputService
} from "../schemas/serviceSchema.js";
import serviceService from "../services/serviceServices.js";

export async function postService(req: Request, res: Response) {
  const serviceData: CreateService = res.locals.createServiceData;
  await serviceService.createService(serviceData);

  res.sendStatus(201);
}

export async function getServices(req: Request, res: Response) {
  const { userId }: { userId: number } = res.locals.userId;
  const services = await serviceService.findServices(userId);
  res.status(200).send(services);
}

export async function getService(req: Request, res: Response) {
  const { userId }: { userId: number } = res.locals.userId;
  const { id: serviceId } = req.params;
  const service = await serviceService.findService(serviceId, userId);
  res.status(200).send(service);
}

export async function updateService(req: Request, res: Response) {
  const {id:serviceId} = req.params;
  const updateServiceData:InputService = req.body;
  await serviceService.updateService(serviceId,updateServiceData);
  res.sendStatus(201);
}

export async function deleteService(req: Request, res: Response) {
  const {id:serviceId} = req.params;
  await serviceService.deleteService(serviceId);
  res.sendStatus(204);
}
