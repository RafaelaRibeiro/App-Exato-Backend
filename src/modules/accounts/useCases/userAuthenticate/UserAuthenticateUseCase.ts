import { prisma } from "shared/infra/prisma/prisma";

export class UserAuthenticateUseCase {
  async execute(user_id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        email: true,
        profile: true,
        client_id: true,
      },
    });

    return { user };
  }
}
