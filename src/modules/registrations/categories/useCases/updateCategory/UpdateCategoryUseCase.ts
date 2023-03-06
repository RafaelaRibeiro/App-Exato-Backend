import { prisma } from 'shared/infra/prisma/prisma';

interface ICategory {
  id: string;
  name: string;
  status: string;
}

export class UpdateCategoryUseCase {
  async execute({ id, name, status }: ICategory) {
    await prisma.category.findUniqueOrThrow({ where: { id: Number(id) } });

    const category = await prisma.category.update({ where: { id: Number(id) }, data: { name, status } });
    return category;
  }
}
