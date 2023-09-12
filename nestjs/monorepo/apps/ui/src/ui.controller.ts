import { Controller, Get } from '@nestjs/common';
import { UiService } from './ui.service';

@Controller()
export class UiController {
  constructor(private readonly uiService: UiService) {}

  @Get()
  getHello(): string {
    return this.uiService.getHello();
  }
}
