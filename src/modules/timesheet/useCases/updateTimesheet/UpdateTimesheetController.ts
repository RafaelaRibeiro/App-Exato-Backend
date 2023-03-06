import { Request, Response } from 'express';

import { UpdateTimesheetUseCase } from './UpdateTimesheetUseCase';

export class UpdateTimesheetController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { date, start_time_morning, end_time_morning, start_time_afternoon, end_time_afternoon, activities } = request.body;

    const updateTimesheetUseCase = new UpdateTimesheetUseCase();
    const result = await updateTimesheetUseCase.execute({
      id,
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
