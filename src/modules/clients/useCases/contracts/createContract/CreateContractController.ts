import { Request, Response } from 'express';

import { CreateContractUseCase } from './CreateContractUseCase';

export class CreateContractController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { ...contract } = request.body;

    const createContractUseCase = new CreateContractUseCase();
    const result = await createContractUseCase.execute({ ...contract }, id);

    return response.json(result);
  }
}
