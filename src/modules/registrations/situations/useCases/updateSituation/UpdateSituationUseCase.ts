import { prisma } from 'shared/infra/prisma/prisma';

interface ISituation {
  id: string;
  name: string;
  status: string;
}

export class UpdateSituationUseCase {
  async execute({ id, name, status }: ISituation) {
    await prisma.situation.findUniqueOrThrow({ where: { id: Number(id) } });

    const situation = await prisma.situation.update({ where: { id: Number(id) }, data: { name, status } });
    return situation;
  }
}
