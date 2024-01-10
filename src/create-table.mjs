import { DynamoDB } from "@aws-sdk/client-dynamodb";

const region = "us-east-2"; // your preferred region

const client = new DynamoDB({ region });

const createCustomerTable = async () => {
  const params = {
    TableName: "Service",
    AttributeDefinitions: [
      {
        AttributeName: "Id",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "Id",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  client.createTable(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

createCustomerTable();
