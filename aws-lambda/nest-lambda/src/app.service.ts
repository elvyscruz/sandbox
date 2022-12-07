import { SendMessageCommandOutput } from '@aws-sdk/client-sqs';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { SQS_ENDPOINT } from './constants';
import { ProductUpdateLambdaDto } from './dto/product-update-lambda.dto';
import { SqsService } from './sqs/sqs.service';
import { ProductSource } from './product-source.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductSource)
    private readonly productSourceRepo: Repository<ProductSource>,
    private readonly configService: ConfigService,
    private readonly sqsService: SqsService,
  ) {}

  // validate input with Dto
  async validateInput(input: object): Promise<boolean> {
    const updateObject = plainToClass(ProductUpdateLambdaDto, input);
    const validationErrors = await validate(updateObject);
    return validationErrors.length === 0;
  }

  // validate productSourceId
  async validateProductSourceId(productSourceId: string): Promise<boolean> {
    const result = await this.productSourceRepo.findOneBy({ productSourceId });
    return result?.productSourceId.toString() === productSourceId;
  }

  // sends message to SQS Queue
  async enqueueMessage(
    productUpdate: ProductUpdateLambdaDto,
  ): Promise<SendMessageCommandOutput> {
    const productSourceId = productUpdate.data.product.productSourceId;

    // send message to the queue
    try {
      const sqsResponse = await this.sqsService.sendMessage({
        QueueUrl: this.configService.get<string>(SQS_ENDPOINT),
        MessageBody: JSON.stringify(productUpdate),
        MessageGroupId: productSourceId,
        MessageDeduplicationId: productSourceId,
      });

      return sqsResponse;
    } catch (err) {
      throw new Error('Error sending message to Queue');
    }
  }
}
