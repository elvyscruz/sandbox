import { SQSClient, SQSClientConfig } from '@aws-sdk/client-sqs';
import { ConfigService } from '@nestjs/config';

import { AWS_REGION, SQS_API_VERSION, SQS_ENDPOINT } from '../constants';

export const SqsProvider = {
  provide: SQSClient,
  useFactory: async (configService: ConfigService): Promise<SQSClient> => {
    const SQSConfig: SQSClientConfig = {
      apiVersion: configService.get<string>(SQS_API_VERSION),
      region: configService.get<string>(AWS_REGION),
      endpoint: configService.get<string>(SQS_ENDPOINT),
    };

    const sqs = new SQSClient(SQSConfig);
    return sqs;
  },
  inject: [ConfigService],
};
