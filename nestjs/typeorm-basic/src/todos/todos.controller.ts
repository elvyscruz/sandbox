import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
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
  findAllTodos(@Query('isDone') isDone: string) {
    return this.todosService.find(isDone.toLowerCase() === 'true');
  }

  @Delete('/:id')
  removeTodo(@Param('id') id: string) {
    return this.todosService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todosService.update(parseInt(id), body);
  }
}
