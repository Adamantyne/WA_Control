import { Router } from "express";

import {
  postService,
  getServices,
  getService,
  updateService,
  deleteService
} from "../controllers/serviceController.js";
import {
  postServiceMiddleware,
  serviceMiddleware,
} from "../middlewares/serviceMiddleware.js";
import schemaValidator from "../middlewares/globalMiddlewares/schemaMiddleware.js";
import tokenValidator from "../middlewares/globalMiddlewares/tokenMiddleware.js";
import { postServiceSchema } from "../schemas/serviceSchema.js";

const serviceRouter = Router();

serviceRouter.get("/services", tokenValidator, getServices);
serviceRouter.get("/services/:id", tokenValidator, getService);
serviceRouter.post(
  "/services",
  tokenValidator,
  schemaValidator(postServiceSchema),
  postServiceMiddleware,
  postService
);
serviceRouter.post(
  "/services/:id",
  tokenValidator,
  schemaValidator(postServiceSchema),
  serviceMiddleware,
  postServiceMiddleware,
  updateService
);
serviceRouter.delete(
  "/services/:id",
  tokenValidator,
  serviceMiddleware,
  deleteService
);

export default serviceRouter;
