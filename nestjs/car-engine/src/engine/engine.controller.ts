import { Controller, Get } from '@nestjs/common';
import { StarterService } from 'src/starter/starter.service';
import { FuelTankService } from 'src/fuel-tank/fuel-tank.service';

@Controller('engine')
export class EngineController {
  constructor(
    private starterService: StarterService,
    private fuelTankService: FuelTankService,
  ) {}

  @Get('start')
  start() {
    this.fuelTankService.injectFuel();
    this.starterService.ignite();
    return `Engine Started...`;
  }

  @Get('stop')
  stop() {
    return 'Engine Stoped!..';
  }
}
