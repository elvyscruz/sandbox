import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  NotFoundException,
  Session,
} from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
//import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('auth')
//@Serialize(UserDto)
export class UsersController {
  constructor(
    private UsersService: UsersService,
    private authService: AuthService,
  ) {}

  // @Get('/whoami')
  // async whoami(@Session() session: any) {
  //   console.log('okkkk');
  //   const user = await this.UsersService.findOne(session.userId);
  //   console.log(user);
  //   return user;
  // }

  @Get('/whoami')
  whoami(@CurrentUser() user: 'string') {
    return user;
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  //@UseInterceptors(new SerializeInterceptor(UserDto))
  @Get('/:id') //incoming request is always string
  async findUser(@Param('id') id: string) {
    const user = await this.UsersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.UsersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.UsersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.UsersService.update(parseInt(id), body);
  }
}
