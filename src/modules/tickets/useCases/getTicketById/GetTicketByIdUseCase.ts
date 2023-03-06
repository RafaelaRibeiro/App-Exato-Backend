import { prisma } from 'shared/infra/prisma/prisma';

export class GetTicketByIdUseCase {
  async execute(id: string) {
    const ticket = await prisma.ticket.findFirst({
      where: { id: Number(id) },
      include: {
        user: { select: { id: true, name: true, profile: true, email: true, client: { select: { trade_name: true } } } },
        approver: { select: { id: true, name: true } },
        category: { select: { name: true } },
        situation: { select: { name: true, colors: true } },
        agent: { select: { name: true } },
        priority: { select: { name: true } },
      },
    });
    const ticketContent = await prisma.ticketContent.findMany({
      where: { ticket_id: Number(id) },
      include: { user: { select: { name: true, profile: true } } },
      orderBy: { created_at: 'desc' },
    });
    const content = ticketContent.map((d) => ({
      ...d,
      content: d.content.toString(),
    }));

    return { ticket, content };
  }
}
