import { prisma } from 'shared/infra/prisma/prisma';

export class UsersByClientUseCase {
  async execute(id: string) {
    const users = await prisma.user.findMany({
      where: {
        client_id: Number(id),
      },
      select: {
        id: true,
        email: true,
        name: true,
        profile: true,
        fone: true,
        whatsapp: true,
        status: true,
        remote_connection: true,
        observation: true,
        department_id: true,
        created_at: true,
        updated_at: true,
        department: {
          select: {
            name: true,
          },
        },
      },
    });

    return users;
  }
}
