import { Router } from "express";

import authRouter from "./authRouter.js";
import customerRouter from "./customerRouter.js";

const routers = Router();

routers.use(authRouter);
routers.use(customerRouter);

export default routers;