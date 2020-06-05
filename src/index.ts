import {APIGatewayProxyHandler} from "aws-lambda";

export const lambdaInfo: APIGatewayProxyHandler = (event, context, callback) => {
  callback(undefined, {
    statusCode: 200,
    body: JSON.stringify({event, context})
  });
}

export const lambdaParams: APIGatewayProxyHandler = (event, context, callback) => {
  callback();
}
