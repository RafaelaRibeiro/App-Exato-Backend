import { Request, Response } from 'express';

import { TimesheetByIdUseCase } from './TimesheetByIdUseCase';

export class TimesheetByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const timesheetByIdUseCase = new TimesheetByIdUseCase();

    const result = await timesheetByIdUseCase.execute(id);

    return response.json(result);
  }
}
