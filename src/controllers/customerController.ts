import { Request, Response } from "express";

import {
  CreateCustomer,
  InputCustomer,
  PhoneNumbersData,
  UpdateCustomer,
} from "../schemas/customerSchema";
import customerService from "../services/customerServices.js";

export async function postCustomer(req: Request, res: Response) {
  const customerData: CreateCustomer = res.locals.createCustomerData;
  const phones: PhoneNumbersData = res.locals.phonesData;
  await customerService.createCustomer(customerData, phones);

  res.sendStatus(201);
}

export async function getCustomers(req: Request, res: Response) {
  const { userId }: { userId: number } = res.locals.userId;
  const customers = await customerService.findCustomers(userId);
  res.status(200).send(customers);
}

export async function getCustomer(req: Request, res: Response) {
  const { userId }: { userId: number } = res.locals.userId;
  const { id: customerId } = req.params;
  const customer = await customerService.findCustomer(customerId, userId);
  res.status(200).send(customer);
}

export async function updateCustomer(req: Request, res: Response) {
  const {id:customerId} = req.params;
  const updateCustomerData:InputCustomer = req.body;
  await customerService.updateCustomer(customerId,updateCustomerData);
  res.sendStatus(201);
}

export async function deleteCustomer(req: Request, res: Response) {
  const {id:customerId} = req.params;
  await customerService.deleteCustomer(customerId);
  res.sendStatus(201);
}
