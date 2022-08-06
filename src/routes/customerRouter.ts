import { Router } from "express";

import {
  postCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController.js";
import {
  postCustomerMiddleware,
  customerMiddleware,
} from "../middlewares/customerMiddleware.js";
import schemaValidator from "../middlewares/globalMiddlewares/schemaMiddleware.js";
import tokenValidator from "../middlewares/globalMiddlewares/tokenMiddleware.js";
import { postCustomerSchema } from "../schemas/customerSchema.js";

const customerRouter = Router();

customerRouter.get("/customers", tokenValidator, getCustomers);
customerRouter.get(
  "/customers/:id",
  tokenValidator,
  customerMiddleware,
  getCustomer
);
customerRouter.post(
  "/customers",
  tokenValidator,
  schemaValidator(postCustomerSchema),
  postCustomerMiddleware,
  postCustomer
);
customerRouter.post(
  "/customers/:id",
  tokenValidator,
  schemaValidator(postCustomerSchema),
  customerMiddleware,
  postCustomerMiddleware,
  updateCustomer
);
customerRouter.delete(
  "/customers/:id",
  tokenValidator,
  customerMiddleware,
  deleteCustomer
);

export default customerRouter;
