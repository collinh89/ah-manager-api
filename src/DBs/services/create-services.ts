import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const region = "us-east-2"; // your preferred region

const client = new DynamoDB({ region });

export const createService = async (service: any) => {
  const item: any = {
    Id: { S: uuidv4() },
    ServiceName: { S: service["serviceName"] },
    Description: { S: service["description"] },
    Amount: { N: `${service["amount"]}` },
    ServiceLength: { N: `${service["serviceLength"]}` },
    Category: { S: `${service["category"]}` },
  };
  const params = {
    TableName: "Service",
    Item: item,
  };

  client.putItem(params, (err: any, data: any) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });

  return item.id;
};

// createService(serviceData);
