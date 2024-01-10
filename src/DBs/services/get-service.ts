import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { Service } from "./service";

const region = "us-east-2"; // your preferred region
const client = new DynamoDBClient({ region });

export const getService = async (req: any) => {
  const command = new GetItemCommand({
    TableName: "Service",
    Key: {
      Id: { S: `${req["id"]}` },
    },
  });

  const response = await client.send(command);
  if (response.Item) {
    const service: Service = {
      id: response.Item.Id["S"],
      serviceName: response.Item.Name["S"] ?? "",
      description: response.Item.Description["S"] ?? "",
      amount: parseInt(response.Item.Amount["N"] ?? "0"),
      serviceLength: parseInt(response.Item.ServiceLength["N"] ?? "0"),
      category: response.Item.Category["S"] ?? "",
    };
    return service;
  } else {
    return {};
  }
};
