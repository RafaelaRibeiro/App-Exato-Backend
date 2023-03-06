import { Request, Response } from 'express';

import { UpdatePriorityUseCase } from './UpdatePriorityUseCase';

export class UpdatePriorityController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updatePriorityUseCase = new UpdatePriorityUseCase();
    const result = updatePriorityUseCase.execute({ id, name });
    response.json(result);
  }
}
