import { prisma } from 'shared/infra/prisma/prisma';

export class GetCategoryByIdUseCase {
  async execute(id: string) {
    const category = await prisma.category.findUniqueOrThrow({ where: { id: Number(id) } });

    return category;
  }
}
