import { Router } from "express";

import {
  postWork,
  getWorks,
  getWork,
  updateWork,
  deleteWork
} from "../controllers/workController.js";
import {
  postWorkMiddleware,
  workMiddleware,
  updateWorkMiddleware
} from "../middlewares/workMiddleware.js";
import schemaValidator from "../middlewares/globalMiddlewares/schemaMiddleware.js";
import tokenValidator from "../middlewares/globalMiddlewares/tokenMiddleware.js";
import { postWorkSchema,updateWorkSchema } from "../schemas/workSchema.js";

const workRouter = Router();

workRouter.get("/works", tokenValidator, getWorks);
workRouter.get("/works/:id", tokenValidator, getWork);
workRouter.post(
  "/works",
  tokenValidator,
  schemaValidator(postWorkSchema),
  postWorkMiddleware,
  postWork
);
workRouter.post(
  "/works/:id",
  tokenValidator,
  schemaValidator(updateWorkSchema),
  workMiddleware,
  updateWorkMiddleware,
  updateWork
);
workRouter.delete(
  "/works/:id",
  tokenValidator,
  workMiddleware,
  deleteWork
);

export default workRouter;
