import { prisma } from 'shared/infra/prisma/prisma';

export class ListSituationsUseCase {
  async execute() {
    const status = await prisma.situation.findMany({ orderBy: { order: 'asc' } });
    return status;
  }
}
