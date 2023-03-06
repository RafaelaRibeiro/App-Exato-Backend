import { Request, Response } from 'express';

import { ListTimesheetsUseCase } from './ListTimesheetsUseCase';

export class ListTimesheetsController {
  async handle(request: Request, response: Response) {
    const { selectedMonth, selectedYear } = request.query;

    const listTimesheetsUseCase = new ListTimesheetsUseCase();
    const result = await listTimesheetsUseCase.execute(selectedMonth, selectedYear);

    response.json(result);
  }
}
