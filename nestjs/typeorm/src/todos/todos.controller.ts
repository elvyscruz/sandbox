import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    this.todosService.create(body.todo, body.done);
  }

  @Get('/:id')
  // Param is always string
  findTodo(@Param('id') id: string) {
    return this.todosService.findOne(parseInt(id));
  }

  @Get()
  findAllTodos() {
    return this.todosService.find();
  }
}
