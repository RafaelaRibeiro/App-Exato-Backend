import { Request, Response } from 'express';

import { ListTimesheetsByDateUseCase } from './ListTimesheetsByDateUseCase';

export class ListTimesheetsByDateController {
  async handle(request: Request, response: Response) {
    const { startDate, endDate, client_id } = request.query;
    const listTimesheetByDateUseCase = new ListTimesheetsByDateUseCase();

    const result = await listTimesheetByDateUseCase.execute(startDate, endDate, client_id);

    return response.json(result);
  }
}
