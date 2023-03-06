import { Request, Response } from 'express';

import { ListContractUseCase } from './ListContractUseCase';

export class ListContractController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const listContractUseCase = new ListContractUseCase();
    const result = await listContractUseCase.execute(id);

    return response.json(result);
  }
}
