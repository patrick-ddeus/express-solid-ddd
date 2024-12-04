export class AppError {
  statusCode: number;
  name: string;
  message: string;
  body: unknown;

  constructor(message: string, statusCode: number, name: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.name = name;
  }
}

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400, 'Bad Request');
  }
}
