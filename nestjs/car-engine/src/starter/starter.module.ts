import { Module } from '@nestjs/common';
import { StarterService } from './starter.service';
// import { BatteryModule } from 'src/battery/battery.module';

@Module({
  // imports: [BatteryModule],
  exports: [StarterService],
  providers: [StarterService],
})
export class StarterModule {}
