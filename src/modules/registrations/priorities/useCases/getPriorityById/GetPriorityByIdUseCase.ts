import { prisma } from 'shared/infra/prisma/prisma';

export class GetPriorityByIdUseCase {
  async execute(id: string) {
    const priority = await prisma.priority.findUniqueOrThrow({ where: { id: Number(id) } });

    return priority;
  }
}
