import { IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  todo: string;
  @IsBoolean()
  done: boolean;
}
