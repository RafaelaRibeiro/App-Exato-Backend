import { Request, Response } from 'express';

import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { cgc, corporate_name, trade_name, municipal_registration, state_registration, status } = request.body;

    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({ cgc, corporate_name, trade_name, municipal_registration, state_registration, status });

    return response.json(result);
  }
}
