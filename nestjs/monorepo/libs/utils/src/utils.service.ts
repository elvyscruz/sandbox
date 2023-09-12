import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {

  getName(name: string): string {
    return `hello ${name}`
  }
}
