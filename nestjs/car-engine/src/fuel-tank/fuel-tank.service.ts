import { Injectable } from '@nestjs/common';
import { BatteryService } from 'src/battery/battery.service';

@Injectable()
export class FuelTankService {
  fuelLevel: number;
  constructor(private batteryService: BatteryService) {}

  injectFuel() {
    this.batteryService.getPower();
    this.fuelLevel = 10;
    console.log('Injecting fuel to engine...');
  }
}
