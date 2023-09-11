import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Micro1Service } from './micro1.service';

@Controller()
export class Micro1Controller {
  constructor(private readonly micro1Service: Micro1Service) { }

  @MessagePattern({ cmd: 'MIN' })
  min(data: number[]): number {
    return this.micro1Service.min(data)
  }
}
