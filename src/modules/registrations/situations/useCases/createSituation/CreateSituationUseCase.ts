import { Situation } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class CreateSituationUseCase {
  async execute(situation: Situation) {
    const situations = await prisma.situation.create({
      data: {
        ...situation,
      },
    });
    return situations;
  }
}
