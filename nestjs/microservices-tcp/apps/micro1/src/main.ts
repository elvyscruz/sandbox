import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Micro1Module } from './micro1.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(Micro1Module, {
    transport: Transport.TCP,
  })
  await app.listen()
}
bootstrap();
