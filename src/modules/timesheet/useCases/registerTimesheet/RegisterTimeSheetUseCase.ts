import { prisma } from 'shared/infra/prisma/prisma';

interface IRegisterTimesheet {
  client_id: number;
  date: Date;
  start_time_morning: string;
  end_time_morning: string;
  start_time_afternoon: string;
  end_time_afternoon: string;
  activities: string;
}

export class RegisterTimesheetUseCase {
  async execute({ client_id, date, start_time_morning, end_time_morning, start_time_afternoon, end_time_afternoon, activities }: IRegisterTimesheet) {
    const checkTimesheet = await prisma.timesheet.findFirst({
      where: {
        client_id,
        date: new Date(date),
        start_time_morning,
        end_time_morning,
        start_time_afternoon,
        end_time_afternoon,
      },
    });

    if (checkTimesheet) throw new Error('Timesheet already exists');

    const timesheet = await prisma.timesheet.create({
      data: {
        date: new Date(date),
        start_time_morning,
        end_time_afternoon,
        start_time_afternoon,
        end_time_morning,
        client_id,
        activities,
      },
    });

    return timesheet;
  }
}
