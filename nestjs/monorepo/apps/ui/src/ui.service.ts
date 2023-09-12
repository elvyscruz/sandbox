import { Injectable } from '@nestjs/common';

@Injectable()
export class UiService {
  getHello(): string {
    return 'Hello World!';
  }
}
