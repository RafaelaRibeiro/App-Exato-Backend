import { Priority } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class CreatePriorityUseCase {
  async execute(priority: Priority) {
    const priorities = await prisma.priority.create({
      data: {
        ...priority,
      },
    });

    return priorities;
  }
}
