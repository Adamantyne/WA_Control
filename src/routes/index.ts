import { Router } from "express";

import authRouter from "./authRouter.js";
import customerRouter from "./customerRouter.js";
import serviceRouter from "./serviceRouter.js";
import calendarRouter from "./calendarRouter.js";

const routers = Router();

routers.use(authRouter);
routers.use(customerRouter);
routers.use(serviceRouter);
routers.use(calendarRouter);

export default routers;