import { Request, Response } from 'express';

import { CreateTicketUseCase } from './CreateTicketUseCase';

export class CreateTicketsController {
  async handle(request: Request, response: Response) {
    const { ticket, ticketContent } = request.body;
    const { user_id } = request;

    const createTicketUseCase = new CreateTicketUseCase();

    const result = await createTicketUseCase.execute(user_id, ticket, ticketContent);

    return response.status(200).json(result);
  }
}
