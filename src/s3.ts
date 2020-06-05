import {APIGatewayProxyHandler} from "aws-lambda";
import AWS from "aws-sdk";

const s3 = new AWS.S3()

export const bucketList: APIGatewayProxyHandler = (event, context, callback) => {
  s3.listBuckets((err, data) => {
    if(err) {
      callback(err);
    } else {
      callback(undefined, {
        statusCode: 200,
        body: JSON.stringify(data.Buckets ? data.Buckets.map(bucket => bucket.Name) : [])
      });
    }
  });
}
