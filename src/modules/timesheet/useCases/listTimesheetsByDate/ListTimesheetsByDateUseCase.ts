import { prisma } from 'shared/infra/prisma/prisma';

export class ListTimesheetsByDateUseCase {
  async execute(startDate: any, endDate: any, client_id?: any) {
    // eslint-disable-next-line operator-linebreak
    const timesheets = await prisma.$queryRaw`select 
    clients.trade_name,
    formulas.date,
   timesheet.activities as activities,
    
    timesheet.start_time_morning, 
    timesheet.end_time_morning, 
    timesheet.start_time_afternoon, 
    timesheet.end_time_afternoon , 
    
    
    CONCAT( LPAD(FLOOR(t/60),2,0), ':' , LPAD(FLOOR(t%60),2,0)) AS timediff,
    CAST(contracts.price *(t/60) AS UNSIGNED) AS price
    from timesheet 
    inner join clients on timesheet.client_id = clients.id
    left join contracts ON clients.id = contracts.client_id
    inner join (SELECT id, 
    DATE_FORMAT(timesheet.date, '%d/%m/%Y') AS date, 
    (IFNULL(TIMESTAMPDIFF(MINUTE, CONCAT(timesheet.date, ' ', start_time_morning), CONCAT(timesheet.date, ' ', end_time_morning)),0) + 
    IFNULL(TIMESTAMPDIFF(MINUTE, CONCAT(timesheet.date, ' ', start_time_afternoon), CONCAT(timesheet.date, ' ', end_time_afternoon)),0)) as t
    
    FROM timesheet WHERE  timesheet.date >= ${startDate} and timesheet.date <=${endDate} and timesheet.client_id = ${client_id}) as formulas on timesheet.id = formulas.id
    
    
    UNION ALL
    
    select 
    
    'Total',
    '',
    '',
    '',
    
    '',
    '',
    '',
    CONCAT( LPAD(FLOOR(SUM(t)/60),2,0), ':' , LPAD(FLOOR(SUM(t)%60),2,0)),
    sum(CAST(contracts.price *(t/60) AS UNSIGNED)) AS price
    from timesheet 
    inner join clients on timesheet.client_id = clients.id
    left join contracts ON clients.id = contracts.client_id
    inner join (SELECT id, 
    DATE_FORMAT(timesheet.date, '%d/%m/%Y') AS date, 
    (IFNULL(TIMESTAMPDIFF(MINUTE, CONCAT(timesheet.date, ' ', start_time_morning), CONCAT(timesheet.date, ' ', end_time_morning)),0) + 
    IFNULL(TIMESTAMPDIFF(MINUTE, CONCAT(timesheet.date, ' ', start_time_afternoon), CONCAT(timesheet.date, ' ', end_time_afternoon)),0))  t
    
    FROM timesheet WHERE  timesheet.date >= ${startDate} and timesheet.date <=${endDate} and timesheet.client_id = ${client_id}) as formulas on timesheet.id = formulas.id
    
    
    
    
    `;

    return timesheets;
  }
}
