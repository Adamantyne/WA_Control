import { Router } from "express";

import authRouter from "./authRouter.js";
import customerRouter from "./customerRouter.js";
import serviceRouter from "./serviceRouter.js";
import calendarRouter from "./calendarRouter.js";
import workRouter from "./workRouter.js";

const routers = Router();
console.log("estamos nas rotas");
routers.use(authRouter);
routers.use(customerRouter);
routers.use(serviceRouter);
routers.use(calendarRouter);
routers.use(workRouter);

export default routers;