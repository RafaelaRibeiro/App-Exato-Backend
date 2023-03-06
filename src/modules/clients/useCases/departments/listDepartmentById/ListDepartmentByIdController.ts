import { Request, Response } from 'express';

import { ListDepartmentByIdUseCase } from './ListDepartmentByIdUseCase';

export class ListDepartmentByIdController {
  async handle(request: Request, response: Response) {
    const { id, client_id } = request.params;

    const listDepartmentByIdUseCase = new ListDepartmentByIdUseCase();

    const result = await listDepartmentByIdUseCase.execute(id, client_id);

    return response.json(result);
  }
}
