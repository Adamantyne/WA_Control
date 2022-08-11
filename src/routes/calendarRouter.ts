import { Router } from "express";

import tokenValidator from "../middlewares/globalMiddlewares/tokenMiddleware.js";
import {getAnnualCalendar,getMonthlyCalendar} from "../controllers/getCalendar.js";

const calendarRouter = Router();

calendarRouter.get("/calendar", tokenValidator, getAnnualCalendar);
calendarRouter.get("/calendar/:month", tokenValidator, getMonthlyCalendar);

export default calendarRouter;