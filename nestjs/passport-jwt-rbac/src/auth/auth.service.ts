import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthenticate, Role } from './interfaces/user.interface';
import { AuthenticateDto } from './dto/authenticate.dto';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  users = [
    {
      id: faker.string.uuid(),
      username: 'elvys',
      password: 'sekret',
      role: Role.Admin,
    },
    {
      id: faker.string.uuid(),
      username: 'John Smith',
      password: 'notSecure',
      role: Role.Customer,
    },
  ];

  authenticate(authenticateDto: AuthenticateDto): IAuthenticate {
    const user = this.users.find(
      (u) =>
        u.username === authenticateDto.username &&
        u.password === authenticateDto.password,
    );
    if (!user) throw new NotFoundException('Invalid Credentials');
    const token = sign({ ...user }, 'sekret');
    return { token, user };
  }
}
