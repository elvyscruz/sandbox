import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SqsModule } from './sqs/sqs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { ProductSource } from './product-source.entity';
import { Product } from './product.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SqsModule,
    TypeOrmModule.forRootAsync(TypeOrmConfig),
    TypeOrmModule.forFeature([ProductSource, Product]),
  ],
  providers: [AppService],
})
export class AppModule {}
