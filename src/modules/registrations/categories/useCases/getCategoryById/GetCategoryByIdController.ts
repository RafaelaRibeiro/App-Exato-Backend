import { Request, Response } from 'express';

import { GetCategoryByIdUseCase } from './GetCategoryByIdUseCase';

export class GetCategoryByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getCategoryByIdUseCase = new GetCategoryByIdUseCase();
    const result = await getCategoryByIdUseCase.execute(id);

    response.json(result);
  }
}
