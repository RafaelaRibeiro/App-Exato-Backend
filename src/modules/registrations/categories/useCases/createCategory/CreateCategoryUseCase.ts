import { Category } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class CreateCategoriesUseCase {
  async execute(categories: Category) {
    const category = await prisma.category.create({
      data: {
        ...categories,
      },
    });

    return category;
  }
}
