import { CacheKey, CacheTTL, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//@UseInterceptors(CacheInterceptor) //  Will cache the response from all get routes in this controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('some_route') // optionally customize endpoint
  @CacheTTL(60) // optionally customize controller endpoint
  async getHello() {
    return this.appService.getHello();
  }
}
