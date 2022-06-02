import { Test } from '@nestjs/testing';
import { NotFoundError } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    //create a fake copy of the users service

    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: fakeUsersService },
      ],
    }).compile();

    service = module.get(AuthService);

    expect(service).toBeDefined();
  });

  it('can create an instance of the auth service', async () => {});

  it('creates a new user with salted and hashed password', async () => {
    const user = await service.signup('addasd@test.com', 'abcde');
    expect(user.password).not.toEqual('abcde');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user sign in with email that is in use', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { id: 1, email: 'foo@test', password: 'abcde' } as User,
      ]);
    try {
      await service.signup('foo@test', 'abcde');
    } catch (err) {
      expect(err.name).toEqual('BadRequestException');
    }
  });

  it('throws if signin is called with an unused email', async () => {
    try {
      await service.signin('sdff@dfdf', 'abcde');
    } catch (err) {
      expect(err.name).toEqual('NotFoundException');
    }
  });
});
