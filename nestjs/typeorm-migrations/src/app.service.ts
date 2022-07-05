import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async createUser(name: string) {
    const user = this.userRepo.create({ name });
    return await this.userRepo.save(user);
  }
  async findOneUser(id: number) {
    return await this.userRepo.findOneBy({ id: id });
  }
  async findAllUsers() {
    return await this.userRepo.find();
  }
  async updateUser(id: number, name: string) {
    const user = await this.findOneUser(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    user.name = name;
    return this.userRepo.save(user);
  }
  async removeUser(id: number) {
    const user = await this.findOneUser(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.userRepo.remove(user);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
