import { prisma } from 'shared/infra/prisma/prisma';

export class GetClientUseCase {
  async execute() {
    const clients = await prisma.client.findMany();

    return clients;
  }
}
