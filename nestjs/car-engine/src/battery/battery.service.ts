import { Injectable } from '@nestjs/common';

@Injectable()
export class BatteryService {
  volts: number;

  getPower(volts = 12) {
    this.volts = volts;
    console.log(`powering up the car with ${this.volts} volts..`);
  }
}
