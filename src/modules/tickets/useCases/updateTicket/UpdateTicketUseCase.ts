import { prisma } from 'shared/infra/prisma/prisma';

interface ITicket {
  id: string;
  category_id: number;
  priority_id: number;
  situation_id: number;
  approver_id: number;
  agent_id: number;
}

export class UpdateTicketUseCase {
  async execute({ id, category_id, priority_id, situation_id, approver_id, agent_id }: ITicket) {
    const ticket = await prisma.ticket.update({
      where: { id: Number(id) },
      data: { category_id, priority_id, situation_id, approver_id, agent_id },
    });

    return ticket;
  }
}
