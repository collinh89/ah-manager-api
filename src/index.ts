import express, { Request, Response } from "express";
import { createService } from "./DBs/services/create-services";
import { getService } from "./DBs/services/get-service";
import { Service } from "./DBs/services/service";
import { getServices } from "./DBs/services/get-services";

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Get All Services
app.get("/services", async (req: Request, res: Response) => {
  const services = await getServices();
  if (services) {
    res.send(services);
  } else {
    res.status(404).send("Service not found");
  }
});
//Get Service with Id
app.get("/service", async (req: Request, res: Response) => {
  const service = await getService(req.body);
  if (service) {
    res.send(service);
  } else {
    res.status(404).send("Service not found");
  }
});
//Create Service
app.post("/services", (req: Request, res: Response) => {
  const services: any | undefined = createService(req.body);
  if (services) {
    res.send(services);
  } else {
    res.status(404).send("Service not found");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
