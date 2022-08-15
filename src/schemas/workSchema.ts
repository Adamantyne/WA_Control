import Joi from "joi";
import { Work } from "@prisma/client";

export type CreateWork = Omit<Work, "id" | "createAt" | "deleteAt"|"budgetDate"| "value"|"budget"|"deliveryDate"|"delivered"|"payed">;
export type InputCreateWork = Omit<CreateWork, "userId">;
export type InputUpdtaeWork = Omit<Work, "userId"|"createAt"|"deleteAt"|"id">;

export const postWorkSchema = Joi.object<InputCreateWork>({
  description: Joi.string().required(),
  customerId: Joi.number().required(),
});

export const updateWorkSchema = Joi.object<InputUpdtaeWork>({
  description: Joi.string().max(100),
  customerId: Joi.number(),
  value: Joi.number().integer().min(0),
  budgetDate:Joi.string(),
  budget: Joi.string().max(100),
  deliveryDate: Joi.string(),
  delivered: Joi.boolean(),
  paydate:Joi.string(),
});
