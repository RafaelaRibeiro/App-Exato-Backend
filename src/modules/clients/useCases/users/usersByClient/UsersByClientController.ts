import { Request, Response } from 'express';

import { UsersByClientUseCase } from './UsersByClientUseCase';

export class UsersByClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const usersByClientUseCase = new UsersByClientUseCase();

    const result = await usersByClientUseCase.execute(id);

    return response.json(result);
  }
}
