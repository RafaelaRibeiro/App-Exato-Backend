import { prisma } from 'shared/infra/prisma/prisma';

export class ListDepartmentByIdUseCase {
  async execute(id: string, client_id: string) {
    const department = await prisma.department.findFirstOrThrow({
      where: {
        id: Number(id),
        client_id: Number(client_id),
      },
      include: {
        client: {
          select: {
            trade_name: true,
          },
        },
      },
    });

    return department;
  }
}
