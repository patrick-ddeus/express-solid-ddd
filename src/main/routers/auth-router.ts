import { Router } from 'express';

export default () => {
  const router = Router();

  router.use('/auth');
};
