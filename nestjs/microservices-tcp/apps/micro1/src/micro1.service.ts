import { Injectable } from '@nestjs/common';

@Injectable()
export class Micro1Service {
  min(data: number[]): number {
    return Math.min(...data)
  }
}
