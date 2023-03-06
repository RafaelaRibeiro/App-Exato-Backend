import { prisma } from "shared/infra/prisma/prisma";

export class ListTimesheetsUseCase {
  async execute(selectedMonth: any, selectedYear: any) {
    // eslint-disable-next-line operator-linebreak
    const timesheets = await prisma.$queryRaw`select 
timesheet.id,
formulas.date,
timesheet.client_id, 
timesheet.start_time_morning, 
timesheet.end_time_morning, 
timesheet.start_time_afternoon, 
timesheet.end_time_afternoon, 
clients.trade_name,
CONCAT( LPAD(FLOOR(t/60),2,0), ':' , LPAD(FLOOR(t%60),2,0)) AS timediff,
format(ifnull(contracts.price *(t/60),0),2,'da_DK') AS price,
case when start_time_morning IS NULL then 2 ELSE 1 END
from timesheet 
inner join clients on timesheet.client_id = clients.id
left join contracts ON clients.id = contracts.client_id
inner join (SELECT id, 
DATE_FORMAT(timesheet.date, '%d/%m/%Y') AS date, 
(IFNULL(TIMESTAMPDIFF(MINUTE, CONCAT(timesheet.date, ' ', start_time_morning), CONCAT(timesheet.date, ' ', end_time_morning)),0) + 
IFNULL(TIMESTAMPDIFF(MINUTE, CONCAT(timesheet.date, ' ', start_time_afternoon), CONCAT(timesheet.date, ' ', end_time_afternoon)),0)) as t

FROM timesheet WHERE month(date) = ${selectedMonth} and year(date)= ${selectedYear} ) as formulas on timesheet.id = formulas.id

order by 2, 3, 11, 4,6
      
       `;

    return timesheets;
  }
}
