import { NextFunction, Request, Response } from "express";

import { InputCustomer } from "../schemas/customerSchema";
import { isNaNValidate, throwErr } from "../utils/suportFunctions.js";
import {customerValidate,customerAlreadyExist} from "../utils/queryValidations.js";

export async function postCustomerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const customerData: InputCustomer = req.body;
  const { userId }: { userId: number } = res.locals.userId;
  const { name, address, establishment } = customerData;
  const { phoneNumber1, phoneNumber2, phoneNumber3 } = customerData;

  const alreadyExist = await customerAlreadyExist(userId, name);
  if (alreadyExist) {
    throwErr("conflict", `customer "${name}" already exist`);
  }

  res.locals.createCustomerData = { name, address, establishment, userId };
  res.locals.phonesData = { phoneNumber1, phoneNumber2, phoneNumber3 };
  next();
}

export async function customerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id: customerId } = req.params;
  const { userId }: { userId: number } = res.locals.userId;
  isNaNValidate(+customerId);

  const currentCustomer = await customerValidate(+customerId, userId);

  next();
}
