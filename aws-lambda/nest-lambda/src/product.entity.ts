import { Status } from './status.enum';
import { ProductSource } from './product-source.entity';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  productId!: string;

  @Column({ name: 'name' })
  name!: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: Status,
  })
  status!: Status;

  @ManyToOne(() => ProductSource, (productSource) => productSource.product, {
    eager: false,
  })
  @JoinColumn({ name: 'product_source_id' })
  productSource!: ProductSource;

  @Column({ name: 'deleted' })
  deleted!: boolean;

  productLink?: string;

  @CreateDateColumn({ name: 'created_date' })
  @Exclude()
  createdDate?: Date;

  @Exclude()
  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate?: Date;
}
