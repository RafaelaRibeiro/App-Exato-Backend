import { Request, Response } from 'express';

import { CreateSituationUseCase } from './CreateSituationUseCase';

export class CreateSituationController {
  async handle(request: Request, response: Response) {
    const { ...situations } = request.body;

    const createSituationUseCase = new CreateSituationUseCase();
    const result = await createSituationUseCase.execute({ ...situations });

    response.json(result);
  }
}
