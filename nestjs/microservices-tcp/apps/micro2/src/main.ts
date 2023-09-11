import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Micro2Module } from './micro2.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(Micro2Module, {
    transport: Transport.TCP
  })
  await app.listen()
}
bootstrap();
