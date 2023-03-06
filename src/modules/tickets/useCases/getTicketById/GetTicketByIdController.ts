import { Request, Response } from 'express';

import { GetTicketByIdUseCase } from './GetTicketByIdUseCase';

export class GetTicketByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getTicketByIdUseCase = new GetTicketByIdUseCase();
    const result = await getTicketByIdUseCase.execute(id);

    return response.json(result);
  }
}
