import './config/index';
import express from 'express';
import setExpressMiddlewares from './config/setup-express-middlewares';
export default async () => {
  const port = process.env.PORT || 8081;
  const app = express();

  setExpressMiddlewares(app);

  app.listen(port, () => console.log(`listening on port ${port}`));
};
