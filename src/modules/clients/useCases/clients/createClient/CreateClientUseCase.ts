import { prisma } from 'shared/infra/prisma/prisma';

interface ICreateClient {
  cgc: string;
  corporate_name: string;
  trade_name: string;
  municipal_registration: string;
  state_registration: string;
  status: string;
}

export class CreateClientUseCase {
  async execute({ cgc, corporate_name, trade_name, municipal_registration, state_registration, status }: ICreateClient) {
    if (!corporate_name) throw new Error('Corporate name invalid');
    if (!cgc) throw new Error('CGC Invalid');

    const checkClient = await prisma.client.findFirst({ where: { cgc } });

    if (checkClient) throw new Error('O CNPJ já existe');

    const createClient = await prisma.client.create({
      data: {
        cgc,
        corporate_name,
        trade_name,
        municipal_registration,
        state_registration,
        status,
      },
    });

    return createClient;
  }
}
