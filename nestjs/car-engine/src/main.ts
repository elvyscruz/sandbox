import { NestFactory } from '@nestjs/core';
import { EngineModule } from './engine/engine.module';

async function bootstrap() {
  const app = await NestFactory.create(EngineModule);
  await app.listen(3000);
}
bootstrap();
