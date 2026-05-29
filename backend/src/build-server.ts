import express, { type Express } from 'express';
import { errorHandler } from './middlewares/error-handler/error-handler';
import { routeNotFound } from './middlewares/route-not-found/route-not-found';
import { usersRouter } from './modules/users/routes';

export function buildServer(): Express {
  const app = express();

  app.use(express.json());
  app.use('/users', usersRouter);
  app.all('/{*route}', routeNotFound);
  app.use(errorHandler);

  return app;
}
