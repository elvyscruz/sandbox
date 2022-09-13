import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  // We have to use @InjectRepository because dependency injection dont play nice with generics
  constructor(@InjectRepository(Todo) private repo: Repository<Todo>) {}

  create(todo: string, done: boolean) {
    const task = this.repo.create({ todo, done });
    return this.repo.save(task);
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  find(isDone: boolean) {
    return this.repo.find({ done: isDone });
  }

  async update(id: number, attrs: Partial<Todo>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    // Take all the properties of attrs and assign the to user (overriding existing ones)
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    return this.repo.remove(user);
  }
}
