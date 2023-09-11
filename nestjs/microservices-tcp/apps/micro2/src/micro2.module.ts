import { Module } from '@nestjs/common';
import { Micro2Controller } from './micro2.controller';
import { Micro2Service } from './micro2.service';

@Module({
  imports: [],
  controllers: [Micro2Controller],
  providers: [Micro2Service],
})
export class Micro2Module {}
