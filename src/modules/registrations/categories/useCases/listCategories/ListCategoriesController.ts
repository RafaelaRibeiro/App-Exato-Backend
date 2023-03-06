import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  async handle(request: Request, response: Response) {
    const listCategoriesUseCase = new ListCategoriesUseCase();
    const result = await listCategoriesUseCase.execute();

    return response.json(result);
  }
}
