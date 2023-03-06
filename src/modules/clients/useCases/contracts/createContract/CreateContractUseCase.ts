import { Contract } from '@prisma/client';
import { prisma } from 'shared/infra/prisma/prisma';

export class CreateContractUseCase {
  async execute(contract: Contract, id: string) {
    const contracts = await prisma.contract.create({ data: { id: Number(id), ...contract } });

    return contracts;
  }
}
