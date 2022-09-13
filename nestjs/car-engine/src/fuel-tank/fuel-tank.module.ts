import { Module } from '@nestjs/common';
import { FuelTankService } from './fuel-tank.service';
import { BatteryModule } from 'src/battery/battery.module';

@Module({
  imports: [BatteryModule],
  exports: [FuelTankService],
  providers: [FuelTankService],
})
export class FuelTankModule {}
