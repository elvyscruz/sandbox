import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Micro2Service } from './micro2.service';

@Controller()
export class Micro2Controller {
  constructor(private readonly micro2Service: Micro2Service) { }

  @MessagePattern({ cmd: 'MAX' })
  max(data: number[]): number {
    return this.micro2Service.max(data);
  }
}
