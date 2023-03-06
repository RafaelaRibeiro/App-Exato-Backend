import { Request, Response } from 'express';

import { UpdateSituationUseCase } from './UpdateSituationUseCase';

export class UpdateSituationController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, status } = request.body;

    const updateSituationUseCase = new UpdateSituationUseCase();
    const result = updateSituationUseCase.execute({ id, name, status });
    response.json(result);
  }
}
