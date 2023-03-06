import { prisma } from 'shared/infra/prisma/prisma';

export class DeleteTimesheetUseCase {
  async execute(id: string) {
    await prisma.timesheet.findUniqueOrThrow({ where: { id: Number(id) } });

    const timesheet = await prisma.timesheet.delete({ where: { id: Number(id) } });

    return timesheet;
  }
}
