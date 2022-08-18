import Joi from "joi";
import { Service } from "@prisma/client";

export type CreateService = Omit<Service, "id" | "createAt" | "deleteAt">;
export type InputService = Omit<CreateService, "userId">;

export const postServiceSchema = Joi.object<InputService>({
  name: Joi.string().required(),
  value: Joi.number().integer().min(0).required(),
  description: Joi.string(),
});

export const updateServiceSchema = Joi.object<InputService>({
  name: Joi.string(),
  value: Joi.number().integer().min(0),
  description: Joi.string(),
});
