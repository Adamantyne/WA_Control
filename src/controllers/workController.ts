import { Request, Response } from "express";

import { CreateWork,InputUpdtaeWork } from "../schemas/workSchema.js";
import workService from "../services/workServices.js";

export async function postWork(req: Request, res: Response) {
  const workData: CreateWork = res.locals.createWorkData;
  await workService.createWork(workData);

  res.sendStatus(201);
}

export async function getWorks(req: Request, res: Response) {
  const { userId }: { userId: number } = res.locals.userId;
  const works = await workService.findWorks(userId);
  res.status(200).send(works);
}

export async function getWork(req: Request, res: Response) {
  const { userId }: { userId: number } = res.locals.userId;
  const { id: workId } = req.params;
  const work = await workService.findWork(workId, userId);
  res.status(200).send(work);
}

export async function updateWork(req: Request, res: Response) {
  const { id: workId } = req.params;
  const updateWorkData: InputUpdtaeWork = res.locals.updateWorkData;
  await workService.updateWork(workId,updateWorkData);
  res.sendStatus(201);
}

export async function deleteWork(req: Request, res: Response) {
  const { id: workId } = req.params;
  await workService.deleteWork(workId);
  res.sendStatus(204);
}
