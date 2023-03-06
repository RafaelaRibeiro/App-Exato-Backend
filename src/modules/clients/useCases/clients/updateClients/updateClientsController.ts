import { Request, Response } from 'express';

import { UpdateClientsUseCase } from './updateClientsUseCase';

export class UpdateClientController {
  // eslint-disable-next-line consistent-return
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { ...client } = request.body;

    const updateClientUseCase = new UpdateClientsUseCase();

    try {
      const result = await updateClientUseCase.execute(client, id);
      return response.json(result);
    } catch (err) {
      console.error(err);
      response.status(400).send('An error occurred');
    }
  }
}
