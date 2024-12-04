import { Router } from 'express';
import routerControllerAdapter from '../adapter/router-controller-adapter';
import { container } from 'tsyringe';
import { IController } from '@/infra/protocols/IController';

const controllerListOne = container.resolve<IController>('ListOneUserController');
export default async () => {
  const router = Router();

  router.get('/users', routerControllerAdapter(controllerListOne));
};
