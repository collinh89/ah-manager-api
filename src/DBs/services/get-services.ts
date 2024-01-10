import { DynamoDB, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Service } from "./service";

const region = "us-east-2"; // your preferred region
const client = new DynamoDB({ region });

export const getServices = async () => {
  var params = {
    TableName: "Service",
  };

  const response = await client.scan(params);
  const services: Service[] = [];
  if (response.Items) {
    response.Items.forEach((val) => {
      const service: Service = {
        id: val.Id["S"],
        serviceName: val.ServiceName["S"] ?? "",
        description: val.Description["S"] ?? "",
        amount: parseInt(val.Amount["N"] ?? "0"),
        serviceLength: parseInt(val.ServiceLength["N"] ?? "0"),
        category: val.Category["S"] ?? "",
      };

      services.push(service);
    });

    return services;
  }
};
