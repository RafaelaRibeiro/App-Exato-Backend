import { prisma } from 'shared/infra/prisma/prisma';

export class GetSituationByIdUseCase {
  async execute(id: string) {
    const situation = await prisma.situation.findUniqueOrThrow({ where: { id: Number(id) } });

    return situation;
  }
}
