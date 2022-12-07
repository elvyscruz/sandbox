import { Product } from './product.entity';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product_sources' })
export class ProductSource extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  productSourceId!: string;

  @Column({ name: 'name' })
  name!: string;

  @OneToMany(() => Product, (product) => product.productSource, {
    eager: false,
  })
  product!: Product[];

  @Column({ name: 'description' })
  description!: string;

  @Column({ name: 'url' })
  url!: string;

  @Column({ name: 'deleted' })
  deleted!: boolean;

  @Exclude()
  @CreateDateColumn({ name: 'created_date' })
  createdDate!: Date;

  @Exclude()
  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate!: Date;
}
