import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';

class App {
  private readonly express: Express = express();
  private readonly port = process.env.PORT;

  constructor() {
    this.express = express();
    this.express.use(express.json());
    this.express.use(cors());
  }

  init() {
    this.express.listen(this.port, () =>
      console.log(`Servidor iniciado na porta ${this.port}`)
    );
  }
}
