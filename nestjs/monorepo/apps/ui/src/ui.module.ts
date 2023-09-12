import { Module } from '@nestjs/common';
import { UiController } from './ui.controller';
import { UiService } from './ui.service';

@Module({
  imports: [],
  controllers: [UiController],
  providers: [UiService],
})
export class UiModule {}
