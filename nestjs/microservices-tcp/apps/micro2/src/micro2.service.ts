import { Injectable } from '@nestjs/common';

@Injectable()
export class Micro2Service {
  max(data: number[]): number {
    return Math.max(...data)
  }
}
