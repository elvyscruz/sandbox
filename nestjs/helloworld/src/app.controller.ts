import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hi')
  hiThere() {
    return 'hi there!';
  }

  @Get('/bye')
  byThere() {
    return 'bye there..';
  }
}
