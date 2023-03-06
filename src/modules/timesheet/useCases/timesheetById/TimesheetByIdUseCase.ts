import { prisma } from 'shared/infra/prisma/prisma';

export class TimesheetByIdUseCase {
  async execute(id: string) {
    const timesheet = await prisma.timesheet.findFirstOrThrow({
      where: {
        id: Number(id),
      },
      include: {
        client: {
          select: {
            trade_name: true,
          },
        },
      },
    });

    return timesheet;
  }
}
