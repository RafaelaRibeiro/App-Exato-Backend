import { Request, Response } from 'express';

import { RegisterTimesheetUseCase } from './RegisterTimeSheetUseCase';

export class RegisterTimesheetController {
  async handle(request: Request, response: Response) {
    const { client_id, date, start_time_morning, end_time_morning, start_time_afternoon, end_time_afternoon, activities } = request.body;
    const registerTimesheetUseCase = new RegisterTimesheetUseCase();

    const result = await registerTimesheetUseCase.execute({
      client_id,
      date,
      start_time_morning,
      end_time_morning,
      start_time_afternoon,
      end_time_afternoon,
      activities,
    });

    response.json(result);
  }
}
