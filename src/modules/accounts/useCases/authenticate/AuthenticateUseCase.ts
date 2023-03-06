import { compare } from 'bcrypt';
import jwtSecret from 'config/tokens';
import { sign } from 'jsonwebtoken';
import { prisma } from 'shared/infra/prisma/prisma';

interface IAuthenticate {
  email: string;
  password: string;
}

export class AuthenticateUseCase {
  async execute({ email, password }: IAuthenticate) {
    const checkEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!checkEmail) throw new Error('E-mail or password invalid!');

    const passwordMatch = await compare(password, checkEmail.password);
    if (!passwordMatch) throw new Error('E-mail or password invalid!');

    const token = sign({ email }, jwtSecret.jwtSecret, {
      subject: checkEmail.id.toString(),
      expiresIn: '7d',
    });

    return token;
  }
}
