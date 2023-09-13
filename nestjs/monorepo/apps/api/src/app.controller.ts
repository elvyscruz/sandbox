import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilsService } from '@shared/utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private utilService: UtilsService) { } @Get() getName(@Query('name') name): string {
    return this.utilService.getName(name)
  }
}
