import { prisma } from 'shared/infra/prisma/prisma';

export class GetClientByIdUseCase {
  async execute(id: string) {
    const clients = await prisma.client.findUnique({
      where: {
        id: Number(id),
      },
    });

    return clients;
  }
}
