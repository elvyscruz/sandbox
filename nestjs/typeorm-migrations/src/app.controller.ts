import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAllUsers(): Promise<User[]> {
    return this.appService.findAllUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: string): Promise<User> {
    return this.appService.findOneUser(+id);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<User> {
    return this.appService.removeUser(+id);
  }

  updateUser(@Param('id') id: string, name: string): Promise<User> {
    return this.appService.updateUser(+id, name);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
