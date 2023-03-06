import { Request, Response } from 'express';

import { CreatePriorityUseCase } from './CreatePriorityUseCase';

export class CreatePriorityController {
  async handle(request: Request, response: Response) {
    const { ...priorities } = request.body;

    const createPriorityUseCase = new CreatePriorityUseCase();
    const result = await createPriorityUseCase.execute({ ...priorities });

    response.json(result);
  }
}
