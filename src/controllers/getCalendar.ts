import { Request, Response } from "express";

import calendarService from "../services/calendarService.js";

export function getMonthlyCalendar(req: Request, res: Response){
    const month = req.params.month;
    const calendar = calendarService.monthlyCalendar(month);
    res.status(200).send(calendar);
}

export function getAnnualCalendar(req: Request, res: Response){
    const calendar = calendarService.annualCalendar();
    res.status(200).send(calendar);
}