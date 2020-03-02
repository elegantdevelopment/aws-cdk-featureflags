import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

if (!process.env.TABLE_NAME) {
  throw new Error('TABLE_NAME is not set');
}

interface Feature {
  Key: string;
  Active: boolean;
  Name?: string;
}

const db = new DocumentClient();

const get = async (key: string): Promise<Feature | undefined> => {
  const item = (
    await db
      .get({
        TableName: process.env.TABLE_NAME!,
        Key: {
          Key: key,
        },
      })
      .promise()
  ).Item;
  if (!item) {
    return undefined;
  }
  return {
    Key: item!.Key,
    Active: item!.Active,
    Name: item!.Name,
  };
};

const response = (statusCode: number, body?: object): APIGatewayProxyResult => {
  return {
    statusCode,
    body: body ? JSON.stringify(body) : ""
  };
};

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (event.pathParameters && event.pathParameters.key) {
    const feature = get(event.pathParameters.key);
    if (feature) {
      if (event.httpMethod === "GET") {
        return response(200, feature);
      }
    }
  }
  return response(400);
}
