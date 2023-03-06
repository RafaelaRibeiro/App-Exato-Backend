import { Request, Response } from 'express';

import { ListDepartmentByClientUseCase } from './ListDepartmentByClientUseCase';

export class ListDepartmentByClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listDepartmentClientUseCase = new ListDepartmentByClientUseCase();
    const result = await listDepartmentClientUseCase.execute(id);

    return response.json(result);
  }
}
