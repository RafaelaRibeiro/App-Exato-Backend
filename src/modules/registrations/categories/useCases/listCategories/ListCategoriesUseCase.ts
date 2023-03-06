import { prisma } from 'shared/infra/prisma/prisma';

export class ListCategoriesUseCase {
  async execute() {
    const categories = await prisma.category.findMany();
    return categories;
  }
}
