import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';

import { ProductDataDto } from './product-data.dto';

export class ProductUpdateLambdaDto {
  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductDataDto)
  data!: ProductDataDto;
}
