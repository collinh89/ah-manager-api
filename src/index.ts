import express, { Request, Response } from 'express';
import { Service, getServices, getService } from './DBs/service-db';
const app = express();
const port = 3000;

app.get('/services/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const service: Service | undefined = getService(id);
  if (service) {
    res.send(service);
  } else {
    res.status(404).send('Service not found');
  }
});
app.get('/services', (req: Request, res: Response) => {
  const services: Service[] | undefined = getServices();
  if (services) {
    res.send(services);
  } else {
    res.status(404).send('Service not found');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
