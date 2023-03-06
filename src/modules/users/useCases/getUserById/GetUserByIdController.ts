import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

export class GetUserByIdController {
  async handle(request: Request, response: Response) {
    
    const { id } = request.params
    
    const getUserByIdUseCase = new GetUserByIdUseCase()
    const result = await getUserByIdUseCase.execute(id)

    return response.json(result)
  }
}