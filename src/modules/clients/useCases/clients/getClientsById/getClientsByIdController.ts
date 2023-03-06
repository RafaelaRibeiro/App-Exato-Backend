import { Request, Response } from 'express';

import { GetClientByIdUseCase } from './getClientsByIdUseCase';

export class GetClientByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const getClientByIdUseCase = new GetClientByIdUseCase();

    const result = await getClientByIdUseCase.execute(id);

    return response.json(result);
  }
}
