import { Request, Response } from 'express';

import { ListTicketsUseCase } from './ListTicketsUseCase';

export class ListTicketController {
  async handle(request: Request, response: Response) {
    const listTicketsUseCase = new ListTicketsUseCase();

    const result = await listTicketsUseCase.execute();

    return response.json(result);
  }
}
