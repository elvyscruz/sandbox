import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  productId!: string;

  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  productTypeId!: string;

  @IsNotEmpty()
  @IsString()
  productSourceId!: string;

  @IsNotEmpty()
  @IsNumber()
  createdAt!: number;

  @IsNotEmpty()
  @IsNumber()
  updatedAt!: number;

  attributes!: Record<string, unknown>;
}
