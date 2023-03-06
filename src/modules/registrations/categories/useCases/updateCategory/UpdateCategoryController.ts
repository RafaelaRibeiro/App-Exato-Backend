import { Request, Response } from 'express';

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase';

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, status } = request.body;

    const updateCategoryUseCase = new UpdateCategoryUseCase();
    const result = updateCategoryUseCase.execute({ id, name, status });
    response.json(result);
  }
}
