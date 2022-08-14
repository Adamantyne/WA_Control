import { NextFunction, Request, Response } from "express";

import { InputCreateWork, InputUpdtaeWork } from "../schemas/workSchema";
import { isNaNValidate, dateValidate, throwErr } from "../utils/suportFunctions.js";
import { customerValidate } from "../utils/customerValidations.js";
import { workValidate } from "../utils/workValidations.js";

export async function postWorkMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const workData: InputCreateWork = req.body;
  const { userId }: { userId: number } = res.locals.userId;
  if(typeof (workData.customerId) !== "number"){
    throwErr("unprocessable_entity","custumerId must be a number");
  }

  const Customer = await customerValidate(workData.customerId, userId);
  res.locals.createWorkData = { ...workData, userId };
  next();
}

export async function updateWorkMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const workData: InputUpdtaeWork = req.body;
  const { userId }: { userId: number } = res.locals.userId;

  dateValidate(workData.deliveryDate);
  dateValidate(workData.budgetDate);

  await customerValidate(workData.customerId, userId);
  res.locals.updateWorkData = workData;
  next();
}

export async function workMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id: workId } = req.params;
  const { userId }: { userId: number } = res.locals.userId;
  const {customerId}:{customerId:number} = req.body;
  if(typeof (customerId) === "string"){
    throwErr("unprocessable_entity","custumerId must be a number");
  }
  isNaNValidate(+workId);

  const currentWork = await workValidate(+workId, userId);

  next();
}