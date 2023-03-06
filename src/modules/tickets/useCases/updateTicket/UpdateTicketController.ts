import { Request, Response } from 'express';

import { UpdateTicketUseCase } from './UpdateTicketUseCase';

export class UpdateTicketController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { category_id, priority_id, situation_id, approver_id, agent_id } = request.body;

    const updateTicketUseCase = new UpdateTicketUseCase();
    const result = await updateTicketUseCase.execute({ id, category_id, priority_id, situation_id, approver_id, agent_id });

    return response.json(result);
  }
}
