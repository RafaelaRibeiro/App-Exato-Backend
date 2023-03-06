import { Ticket, TicketContent } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class CreateTicketUseCase {
  async execute(user_id: number, tickets: Ticket, ticketContent: TicketContent) {
    const ticket = await prisma.ticket.create({
      data: { ...tickets, user_id, TicketContent: { create: { content: Buffer.from(ticketContent.content) } } },
    });
    return ticket;
  }
}
