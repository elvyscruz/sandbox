import { SetMetadata } from '@nestjs/common';

export const Hello = (...args: string[]) => SetMetadata('hello', args);
