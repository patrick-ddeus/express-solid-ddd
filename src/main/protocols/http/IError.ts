export type HttpError = {
  statusCode: number;
  body: {
    code: string;
    message: string;
  };
};
