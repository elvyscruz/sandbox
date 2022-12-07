import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    const environment = configService.get('ENVIRONMENT', 'local');
    const projectName = configService.get(
      'PROJECT_NAME',
      'product-update-lambda',
    );

    let ssmPassword;

    // if environment is different from local, get password from aws ssm
    if (environment !== 'local') {
      const ssmConfig = {
        region: configService.get('AWS_REGION', 'us-east-1'),
      };
      const client = new SSMClient(ssmConfig);
      const paramName = `/${environment}/${projectName}/postgres_database_password`;
      const params = { Name: paramName, WithDecryption: true };

      const command = new GetParameterCommand(params);

      const ssmResponse = await client.send(command);
      ssmPassword = ssmResponse.Parameter?.Value;
    }

    return {
      type: 'postgres',
      host: configService.get('POSTGRES_HOST', '127.0.0.1'),
      port: Number(configService.get('POSTGRES_PORT', '5432')),
      database: configService.get('POSTGRES_DB', 'circuit'),
      username: configService.get('POSTGRES_USER', 'postgre'),
      password: configService.get('DB_PASSWORD', 'password'),
      schema: configService.get('POSTGRES_SCHEMA', 'circuit'),
      logger: 'file',
      autoLoadEntities: true,
      keepConnectionAlive: true,
      synchronize: true,
    };
  },
};
