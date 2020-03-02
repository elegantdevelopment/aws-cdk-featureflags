import { Construct, RemovalPolicy } from '@aws-cdk/core';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class FeatureFlags extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new Table(this, 'table', {
      partitionKey: {
        name: 'Key',
        type: AttributeType.STRING,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const fn = new Function(this, 'function', {
      code: Code.fromAsset(path.join(__dirname, 'lambda')),
      handler: 'index.handler',
      runtime: Runtime.NODEJS_12_X,
      environment: {
        TABLE_NAME: table.tableName,
      },
    });
    table.grantReadWriteData(fn);

    const api = new RestApi(this, 'api', {
      restApiName: this.toString()
    });
    const resource = api.root.addResource("{key}");
    resource.addMethod('ANY', new LambdaIntegration(fn), {
      methodResponses: [
        {
          statusCode: '200',
        },
        {
          statusCode: '201',
        },
        {
          statusCode: '204',
        },
        {
          statusCode: '400',
        },
      ],
    });
  }
}
