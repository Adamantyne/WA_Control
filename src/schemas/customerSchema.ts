import Joi from "joi";
import { Customer, PhoneNumbers } from "@prisma/client";

import { numberMask } from "../utils/regexMasks.js";

export interface InputCustomer
  extends Omit<Customer, "id" | "userId" | "createAt" | "deleteAt">,
    Omit<PhoneNumbers, "id" | "customerId"> {}


export type CreateCustomer = Omit<Customer, "id" | "createAt" | "deleteAt">;
export type UpdateCustomer = Omit<CreateCustomer, "userId">;
export type PhoneNumbersData = Omit<PhoneNumbers, "id" | "customerId">;

export const postCustomerSchema = Joi.object<InputCustomer>({
  name: Joi.string().required(),
  establishment: Joi.string(),
  address: Joi.string(),
  phoneNumber1: Joi.string().min(9).pattern(numberMask),
  phoneNumber2: Joi.string().min(9).pattern(numberMask),
  phoneNumber3: Joi.string().min(9).pattern(numberMask),
});



