import {
  CacheModule,
  Module,
  CacheInterceptor,
  CacheTTL,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      CacheTTL: 10,
      socket: { host: 'localhost', port: 6379 },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // cache intercept for all controllers
      provide: APP_INTERCEPTOR, // global interceptor
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
