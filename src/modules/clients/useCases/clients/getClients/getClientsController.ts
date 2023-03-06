import { Request, Response } from 'express';

import { GetClientUseCase } from './getClientsUseCase';

export class GetClientController {
  async handle(request: Request, response: Response) {
    const getCLientUseCase = new GetClientUseCase();

    const result = await getCLientUseCase.execute();

    return response.json(result);
  }
}
