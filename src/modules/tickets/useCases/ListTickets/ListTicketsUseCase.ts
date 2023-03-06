import { prisma } from 'shared/infra/prisma/prisma';

export class ListTicketsUseCase {
  async execute() {
    const listTicket = await prisma.ticket.findMany({
      include: {
        user: { select: { name: true } },
        category: { select: { name: true } },
        situation: { select: { name: true, colors: true } },
        agent: { select: { name: true } },
        priority: { select: { name: true } },
      },
      orderBy: {
        updated_at: 'desc',
      },
    });
    return listTicket;
  }
}
