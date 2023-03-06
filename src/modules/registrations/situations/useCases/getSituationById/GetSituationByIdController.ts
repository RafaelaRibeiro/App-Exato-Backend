import { Request, Response } from 'express';

import { GetSituationByIdUseCase } from './GetSituationByIdUseCase';

export class GetSituationByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getSituationByIdUseCase = new GetSituationByIdUseCase();
    const result = await getSituationByIdUseCase.execute(id);

    response.json(result);
  }
}
