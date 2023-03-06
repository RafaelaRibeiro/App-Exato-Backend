import { prisma } from 'shared/infra/prisma/prisma';

export class ListPrioritiesUseCase {
  async execute() {
    const priorities = await prisma.priority.findMany();
    return priorities;
  }
}
