import customerRepository from "../repositories/customerRepository.js";
import { throwErr } from "./suportFunctions.js";

export async function customerValidate(customerId: number, userId: number) {
  const customer = await customerRepository.findByIdAndUserId(
    customerId,
    userId
  );
  if (!customer) {
    throwErr("not_found", "customer not found");
  }
  return customer;
}

export async function customerAlreadyExist(userId: number, name: string) {
  const alreadyExist = await customerRepository.findByUserIdAndName(
    userId,
    name
  );
  return alreadyExist;
}
