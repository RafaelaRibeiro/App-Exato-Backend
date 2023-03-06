import { Request, Response } from 'express';

import { CreateCategoriesUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { ...category } = request.body;

    const createCategoryUseCase = new CreateCategoriesUseCase();
    const result = await createCategoryUseCase.execute({ ...category });

    response.json(result);
  }
}
