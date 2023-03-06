import { Request, Response } from 'express';

import { ListSituationsUseCase } from './ListSituationsUseCase';

export class ListSituationsController {
  async handle(request: Request, response: Response) {
    const listSituationsUseCase = new ListSituationsUseCase();
    const result = await listSituationsUseCase.execute();

    response.status(200).json(result);
  }
}
