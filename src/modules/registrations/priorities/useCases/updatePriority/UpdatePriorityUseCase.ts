import { prisma } from 'shared/infra/prisma/prisma';

interface IPriority {
  id: string;
  name: string;
}

export class UpdatePriorityUseCase {
  async execute({ id, name }: IPriority) {
    await prisma.priority.findUniqueOrThrow({ where: { id: Number(id) } });

    const priority = await prisma.priority.update({ where: { id: Number(id) }, data: { name } });
    return priority;
  }
}
