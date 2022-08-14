import { isNaNValidate, throwErr } from "../utils/suportFunctions.js";

function annualCalendar() {
  const currentYear = new Date().getFullYear();
  const numberOfMonths = getNumberOfDaysInMonths(currentYear);
  const calendar = getDaysInMont(currentYear, numberOfMonths);
  return calendar;
}

function monthlyCalendar(params:string){
  isNaNValidate(+params);
  const month = +params;
  if(month<1||month>12){
    throwErr("unprocessable_entity","month value must be between 1 and 12");
  }
  const currentYear = new Date().getFullYear();
  const numberOfMonth = getNumberOfDaysInMonths(currentYear,month,month);
  const calendar = getDaysInMont(currentYear, numberOfMonth);
  return calendar;
}


function getNumberOfDaysInMonths(year: number,min=1,max=12) {
  const numberOfaysInMonth = [];
  for (let i = min; i <= max; i++) {
    numberOfaysInMonth.push([i, new Date(year, i, 0).getDate()]);
  }
  return numberOfaysInMonth;
}

function getDaysInMont(year: number, numberOfMonths: any) {
  const yearCalendar = [];
  for (let i = 0; i < numberOfMonths.length; i++) {
    const month = numberOfMonths[i][0];
    const numberOfDays = numberOfMonths[i][1];
    const monthCalendar = [];
    for (let j = 1; j <= numberOfDays; j++) {
      const day = j;
      const dayOfWeek = new Date(year, month-1, day).getDay();
      monthCalendar.push({day:j,dayOfWeek});
    }
    yearCalendar.push(monthCalendar);
  }
  return yearCalendar;
}

const calendarService = { annualCalendar,monthlyCalendar };

export default calendarService;
