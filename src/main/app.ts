import './config/index';
import express from 'express';
import setExpressMiddlewares from './config/setup-express-middlewares';
export default async () => {
  const app = express();

  setExpressMiddlewares(app);

  return app
  
};
