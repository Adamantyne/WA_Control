import { NextFunction, Request, Response } from "express";

import { InputService } from "../schemas/serviceSchema";
import { isNaNValidate, throwErr } from "../utils/suportFunctions.js";
import {
  serviceValidate,
  serviceAlreadyExist,
} from "../utils/serviceValidations.js";

export async function postServiceMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const serviceData: InputService = req.body;
  if (typeof serviceData.value !== "number") {
    throwErr("unprocessable_entity", `"value" must be a number`);
  }
  const { userId }: { userId: number } = res.locals.userId;
  const { name } = serviceData;

  const alreadyExist = await serviceAlreadyExist(userId, name);
  if (alreadyExist) {
    throwErr("conflict", `service "${name}" already exist`);
  }
  res.locals.createServiceData = { ...serviceData, userId };
  next();
}

export async function serviceMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id: serviceId } = req.params;
  const { userId }: { userId: number } = res.locals.userId;
  isNaNValidate(+serviceId);

  const currentService = await serviceValidate(+serviceId, userId);

  next();
}
