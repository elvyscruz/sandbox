import {
  SQSClient,
  SendMessageCommand,
  SendMessageCommandInput,
  SendMessageCommandOutput,
} from '@aws-sdk/client-sqs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SqsService {
  constructor(private sqsClient: SQSClient) {}

  getSqsClient(): SQSClient {
    return this.sqsClient;
  }

  async sendMessage(
    params: SendMessageCommandInput,
  ): Promise<SendMessageCommandOutput> {
    return this.sqsClient.send(new SendMessageCommand(params));
  }
}
