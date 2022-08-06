import { Router } from "express";

import authRouter from "./authRouter.js";
import customerRouter from "./customerRouter.js";
import serviceRouter from "./serviceRouter.js";

const routers = Router();

routers.use(authRouter);
routers.use(customerRouter);
routers.use(serviceRouter);

export default routers;