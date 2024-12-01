import { HttpResponse } from './IResponse';

export interface IController<P = unknown, R = unknown> {
  handle(Request: P): Promise<HttpResponse<R>>;
}
