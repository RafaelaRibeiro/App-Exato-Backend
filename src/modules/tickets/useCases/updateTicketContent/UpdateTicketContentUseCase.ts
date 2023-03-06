import { prisma } from 'shared/infra/prisma/prisma';

interface ITicketContent {
  content_id: string;
  content: string;
}

export class UpdateTicketContentUseCase {
  async execute({ content_id, content }: ITicketContent) {
    prisma.ticketContent.findUniqueOrThrow({ where: { id: Number(content_id) } });
    console.log('Teste');
    const ticketContent = await prisma.ticketContent.updateMany({ where: { id: Number(content_id) }, data: { content } });

    return ticketContent;
  }
}
