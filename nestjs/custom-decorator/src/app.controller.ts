import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Hello } from './hello.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Hello('hellos')
  getHello(): string {
    return this.appService.getHello();
  }
}
