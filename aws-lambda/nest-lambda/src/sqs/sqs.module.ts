import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { SqsProvider } from './sqs.provider';
import { SqsService } from './sqs.service';

@Module({
  providers: [ConfigService, SqsProvider, SqsService],
  exports: [SqsService],
})
export class SqsModule {}
