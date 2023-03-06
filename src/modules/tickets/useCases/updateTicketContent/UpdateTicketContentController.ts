import { Request, Response } from 'express';

import { UpdateTicketContentUseCase } from './UpdateTicketContentUseCase';

export class UpdateTicketContentController {
  async handle(request: Request, response: Response) {
    const { content_id } = request.params;
    const { content } = request.body;
    const updateTicketContentUseCase = new UpdateTicketContentUseCase();
    const result = await updateTicketContentUseCase.execute({ content_id, content });

    return response.json(result);
  }
}
