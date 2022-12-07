import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

const client = new SSMClient({ region: 'us-east-2' });

const params = {
  Name: '/staging/product-update-lambda/postgress_database_password',
  WithDecryption: true,
};

const command = new GetParameterCommand(params);

const response = await client.send(command);

console.log(response.Parameter.Value);
