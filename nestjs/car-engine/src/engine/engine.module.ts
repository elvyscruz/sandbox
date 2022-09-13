import { Module } from '@nestjs/common';
import { EngineController } from './engine.controller';
import { StarterModule } from 'src/starter/starter.module';
import { FuelTankModule } from 'src/fuel-tank/fuel-tank.module';

@Module({
  imports: [StarterModule, FuelTankModule],
  controllers: [EngineController],
})
export class EngineModule {}
