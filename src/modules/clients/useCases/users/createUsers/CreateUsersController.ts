import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUsersUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, password, department_id } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ name, email, password, department_id, id });

    return response.json(result);
  }
}
