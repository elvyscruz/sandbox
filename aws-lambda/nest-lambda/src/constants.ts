import { HttpStatus } from '@nestjs/common';

export const SQS_API_VERSION = 'SQS_API_VERSION';
export const AWS_ACCESS_KEY_ID = 'AWS_KEY_ID';
export const AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_KEY';
export const AWS_REGION = 'AWS_REGION';
export const SQS_ENDPOINT = 'SQS_ENDPOINT';

export const BAD_REQUEST_RESPONSE = {
  response: 'BAD REQUEST',
  statusCode: HttpStatus.BAD_REQUEST,
  message: ' Input Data is Invalid',
};

export const BAD_GATEWAY_RESPONSE = {
  response: 'BAD GATEWAY',
  statusCode: HttpStatus.BAD_GATEWAY,
  message: 'Error sending SQS message',
};
export const OK_RESPONSE = {
  response: 'OK',
  statusCode: HttpStatus.OK,
  message: 'product update successful',
};
