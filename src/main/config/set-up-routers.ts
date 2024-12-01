import { Express, Router } from 'express';
import fs from 'fs';
export default function (app: Express) {
  const router = Router();

  app.use('/api', router);
}
