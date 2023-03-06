import { Request, Response } from 'express';

import { GetPriorityByIdUseCase } from './GetPriorityByIdUseCase';

export class GetPriorityByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getPriorityByIdUseCase = new GetPriorityByIdUseCase();
    const result = await getPriorityByIdUseCase.execute(id);

    response.json(result);
  }
}
