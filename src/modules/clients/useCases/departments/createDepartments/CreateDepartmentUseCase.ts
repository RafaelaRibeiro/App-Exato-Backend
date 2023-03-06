import { Department } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class CreateDepartmentUseCase {
  async execute(department: Department, id: string) {
    const departments = await prisma.department.create({ data: { client_id: Number(id), ...department } });

    return departments;
  }
}
