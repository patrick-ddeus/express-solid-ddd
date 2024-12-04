import { HttpResponse } from '@/main/protocols/http/IResponse';
import { IController } from '../../protocols/IController';
import { inject, singleton } from 'tsyringe';

type Request = {
  id: string;
};

@singleton()
export class ListOneUserController implements IController<Request> {
  constructor(
    @inject('UserService') private readonly UserService: UserUseCase,
  ) {}
  async handle(request: Request): Promise<HttpResponse> {
    return {
      body: {},
      statusCode: 400,
    };
  }
}
