import customerRepository from "../repositories/customerRepository.js";
import {
  CreateCustomer,
  PhoneNumbersData,
  InputCustomer,
  UpdateCustomer,
} from "../schemas/customerSchema.js";
import { isNaNValidate } from "../utils/suportFunctions.js";
import { customerValidate } from "../utils/customerValidations.js";

async function createCustomer(
  customerData: CreateCustomer,
  phones: PhoneNumbersData
) {
  const { id } = await customerRepository.insertCustomer(customerData);
  await customerRepository.insertPhoneNumbers(phones, id);
}

async function findCustomers(userId: number) {
  const customers = await customerRepository.findByUserId(userId);
  return customers;
}

async function findCustomer(customerId: string, userId: number) {
  const customer = await customerValidate(+customerId, userId);
  return customer;
}

async function updateCustomer(
  customerId: string,
  InputCustomer: InputCustomer
) {
  const { phoneNumber1, phoneNumber2, phoneNumber3 }: PhoneNumbersData =
    InputCustomer;
  const { address, establishment, name }: UpdateCustomer = InputCustomer;
  const updateCustomerData = { address, establishment, name };
  const phonesData = { phoneNumber1, phoneNumber2, phoneNumber3 };
  await customerRepository.updateCustomerById(+customerId, updateCustomerData);
  await customerRepository.updatePhoneNumbers(+customerId, phonesData);
}

async function deleteCustomer(customerId: string) {
  await customerRepository.deleteCustomerById(+customerId);
}

const customerService = {
  createCustomer,
  findCustomers,
  findCustomer,
  updateCustomer,
  deleteCustomer,
};

export default customerService;
