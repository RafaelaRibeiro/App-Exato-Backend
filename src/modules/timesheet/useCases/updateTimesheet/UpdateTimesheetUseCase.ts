import { prisma } from 'shared/infra/prisma/prisma';

interface IUpdateTimesheet {
  id: string;
  date: Date;
  start_time_morning: string;
  end_time_morning: string;
  start_time_afternoon: string;
  end_time_afternoon: string;
  activities: string;
}
export class UpdateTimesheetUseCase {
  async execute({ id, date, start_time_morning, end_time_morning, start_time_afternoon, end_time_afternoon, activities }: IUpdateTimesheet) {
    // await prisma.timesheet.findFirstOrThrow({ where: { id: Number(id) } });

    const timesheet = await prisma.timesheet.update({
      where: { id: Number(id) },
      data: {
        date: new Date(date),
        start_time_morning,
        end_time_morning,
        start_time_afternoon,
        end_time_afternoon,
        activities,
      },
    });

    return timesheet;
  }
}
