import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsObject,
  ValidateNested,
} from 'class-validator';

import { ProductDto } from './product.dto';

enum action {
  create = 'create',
  update = 'update',
  delete = 'delete',
}

enum type {
  card = 'card',
  presentation = 'presentation',
}

export class ProductDataDto {
  @IsDefined()
  @IsEnum(action)
  action!: string;

  @IsDefined()
  @IsEnum(type)
  type!: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductDto)
  product!: ProductDto;

  @IsNotEmpty()
  @IsObject()
  presentation!: Record<string, unknown>;
}
