import db from "../config/database.js";
import {
  CreateCustomer,
  PhoneNumbersData,
  UpdateCustomer,
} from "../schemas/customerSchema.js";

async function findByUserIdAndName(userId: number, customerName: string) {
  return await db.customer.findFirst({
    where: {
      userId,
      name: customerName,
      deleteAt: null,
    },
  });
}

async function findByIdAndUserId(id: number, userId: number) {
  return await db.customer.findFirst({
    where: { id, userId, deleteAt: null },
    select: {
      id: true,
      userId: true,
      name: true,
      establishment: true,
      address: true,
      phoneNumbers: {
        select: {
          phoneNumber1: true,
          phoneNumber2: true,
          phoneNumber3: true,
        },
      },
    },
  });
}

async function findByUserId(userId: number) {
  return await db.customer.findMany({
    where: { userId, deleteAt: null },
    select: {
      id: true,
      userId: true,
      name: true,
      establishment: true,
      address: true,
      phoneNumbers: {
        select: {
          phoneNumber1: true,
          phoneNumber2: true,
          phoneNumber3: true,
        },
      },
    },
  });
}

async function insertCustomer(customerData: CreateCustomer) {
  return await db.customer.create({ data: customerData });
}

async function insertPhoneNumbers(
  phones: PhoneNumbersData,
  customerId: number
) {
  return await db.phoneNumbers.create({ data: { ...phones, customerId } });
}

async function updateCustomerById(id: number, updateData: UpdateCustomer) {
  return await db.customer.update({
    where: { id },
    data: updateData,
  });
}

async function updatePhoneNumbers(
  customerId: number,
  updateData: PhoneNumbersData
) {
  return await db.phoneNumbers.update({
    where: { customerId },
    data: updateData,
  });
}

async function deleteCustomerById( id: number) {
  const dataTime = new Date();
  return await db.customer.update({
    where: { id },
    data: {deleteAt:dataTime},
  });
}

const customerRepository = {
  findByUserIdAndName,
  insertCustomer,
  insertPhoneNumbers,
  findByUserId,
  findByIdAndUserId,
  updateCustomerById,
  updatePhoneNumbers,
  deleteCustomerById
};

export default customerRepository;
