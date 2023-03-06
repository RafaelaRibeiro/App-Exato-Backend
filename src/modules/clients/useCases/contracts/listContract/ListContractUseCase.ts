/* eslint-disable operator-linebreak */

import { prisma } from 'shared/infra/prisma/prisma';

export class ListContractUseCase {
  async execute(id: string) {
    const contracts =
      await prisma.$queryRaw`select contracts.id, clients.trade_name, DATE_FORMAT(contracts.initial_date,'%d/%m/%Y') AS initial_date, DATE_FORMAT(contracts.final_date,'%d/%m/%Y') AS final_date, if(contracts.type="H","Hora", "Fixo") as type, replace(format(contracts.price, 2),'.',',') as price, contracts.observation, contracts.status
      from contracts inner join clients on contracts.client_id = clients.id
      WHERE contracts.client_id = ${Number(id)}
      order by contracts.id`;

    return contracts;
  }
}
