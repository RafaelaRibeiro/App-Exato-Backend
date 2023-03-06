import { Request, Response } from 'express';

import { ListPrioritiesUseCase } from './ListPrioritiesUseCase';

export class ListPrioritiesController {
  async handle(request: Request, response: Response) {
    const listPrioritiesUseCase = new ListPrioritiesUseCase();
    const result = await listPrioritiesUseCase.execute();

    response.json(result);
  }
}
