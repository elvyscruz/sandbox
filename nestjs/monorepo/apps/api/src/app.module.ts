import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from '@shared/utils'

@Module({
  imports: [UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
