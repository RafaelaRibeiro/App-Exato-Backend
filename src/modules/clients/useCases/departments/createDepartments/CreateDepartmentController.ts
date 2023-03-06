import { Request, Response } from 'express';

import { CreateDepartmentUseCase } from './CreateDepartmentUseCase';

export class CreateDepartmentController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { ...department } = request.body;

    const createDepartmentUseCase = new CreateDepartmentUseCase();

    const result = await createDepartmentUseCase.execute({ ...department }, id);

    return response.json(result);
  }
}
