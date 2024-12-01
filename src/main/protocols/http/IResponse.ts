export interface HttpResponse<T = unknown> {
  statusCode: number;
  response: T;
}
