import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  todo: string;

  @IsBoolean()
  @IsOptional()
  done: boolean;
}
