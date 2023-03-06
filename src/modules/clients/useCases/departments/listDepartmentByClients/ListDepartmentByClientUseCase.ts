import { prisma } from 'shared/infra/prisma/prisma';

export class ListDepartmentByClientUseCase {
  async execute(id: string) {
    // eslint-disable-next-line operator-linebreak
    const departments = await prisma.department.findMany({ where: { client_id: Number(id) } });

    return departments;
  }
}
