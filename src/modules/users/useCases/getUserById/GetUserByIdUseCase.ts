import { prisma } from "shared/infra/prisma/prisma";

export class GetUserByIdUseCase {

  async execute(id: string) {
    
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })
    
    if (user) {
      return user
    } else {
      throw new Error("User Invalid!");
      
    }
  }
}