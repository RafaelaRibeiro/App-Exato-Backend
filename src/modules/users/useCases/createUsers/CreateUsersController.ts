import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUsersUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, department_id, client_id } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ name, email, password, department_id, client_id });

    return response.json(result);
  }
}
