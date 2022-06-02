import { Injectable } from '@nestjs/common';
// import { BatteryService } from '../battery/battery.service';

@Injectable()
export class StarterService {
  //  constructor(/private batteryService: BatteryService) {}
  ignite() {
    // this.batteryService.getPower();
    console.log(`Igniting the engine...`);
  }
}
