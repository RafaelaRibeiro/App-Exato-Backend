import { Request, Response } from 'express';

import { DeleteTimesheetUseCase } from './DeleteTimesheetUseCase';

export class DeleteTimesheetController {
  async handle(request: Request, response: Response) {
    const deleteTimeSheetUseCase = new DeleteTimesheetUseCase();
    const { id } = request.params;

    await deleteTimeSheetUseCase.execute(id);

    return response.send('TimeSheet Deleted');
  }
}
