import { hash } from 'bcrypt';
import tokens from 'src/config/tokens';
import { prisma } from 'src/shared/infra/prisma/prisma';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  department_id: number;
  client_id: number;
}

export class CreateUserUseCase {
  async execute({ name, email, password, department_id, client_id }: ICreateUser) {
    if (!email) throw new Error('Email invalid');

    // const userLogged = await prisma.user.findUnique({ where: { id: user_id } });

    const checkEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (checkEmail) throw new Error('E-mail already exists');

    if (!name) throw new Error('Name invalid');

    if (!password) throw new Error('Password invalid');

    const passwordHash = await hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        department_id,
        password: passwordHash,
        client_id,

        Token: {
          create: {
            tokenActivate: tokens.token,

            tokenActivateExpires: tokens.tokenExpires,
          },
        },
      },
    });

    return createUser;
  }
}
