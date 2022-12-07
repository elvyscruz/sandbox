import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppService } from './app.service';
import {
  BAD_GATEWAY_RESPONSE,
  BAD_REQUEST_RESPONSE,
  OK_RESPONSE,
} from './constants';

export const handler = async (event: any): Promise<object> => {
  return await bootstrap(event);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap(event: any) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);

  // Validate input data
  const isInputValid = await appService.validateInput(event);
  if (!isInputValid) return BAD_REQUEST_RESPONSE;

  // Validate productSourceId
  const isProductSourceIdValid = await appService.validateProductSourceId(
    event.data?.product?.productSourceId,
  );
  if (!isProductSourceIdValid) return BAD_REQUEST_RESPONSE;

  // Enqueue event data to SQS Queue and return response to handler
  try {
    await appService.enqueueMessage(event);
  } catch {
    return {
      BAD_GATEWAY_RESPONSE,
    };
  }

  return OK_RESPONSE;
}
