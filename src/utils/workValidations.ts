import workRepository from "../repositories/workRepository.js";
import { throwErr } from "./suportFunctions.js";

export async function workValidate(workId: number, userId: number) {
  const work = await workRepository.findByIdAndUserId(
    workId,
    userId
  );
  if (!work) {
    throwErr("not_found", "work not found");
  }
  return work;
}