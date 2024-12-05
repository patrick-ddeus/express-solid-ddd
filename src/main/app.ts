import './config/index';

import express from 'express';
import setExpressMiddlewares from './config/setup-express-middlewares';
import { AppDataSource } from '../infra/database/datasource';
import { container } from 'tsyringe';
import { UserService } from '../services/application/user/user-service';

export default async () => {
  const app = express();

  await AppDataSource.initialize();
  const userService = container.resolve<UserService>(UserService)
  console.log(userService)
  setExpressMiddlewares(app);

  return app;
};
