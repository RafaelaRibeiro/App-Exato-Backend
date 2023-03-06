import { Client } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class UpdateClientsUseCase {
  async execute(client: Client, id: string) {
    await prisma.client.findUniqueOrThrow({ where: { id: Number(id) } });
    const updateClient = await prisma.client.update({
      where: { id: Number(id) },
      data: client,
    });

    return updateClient;
  }
}
