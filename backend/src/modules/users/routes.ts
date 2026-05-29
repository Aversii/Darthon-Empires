import { type Router as ExpressRouter, Router } from 'express';
import { methodNotAllowed } from '../../middlewares/route-not-found/route-not-found';
import { validateRequest } from '../../middlewares/validate-request/validate-request';
import { CreateUserSchema, UpdateUserSchema, type UserParams, UserParamsSchema } from './schema';
import { createUser, deleteUser, getUserById, getUsers, patchUser } from './service';

export const usersRouter: ExpressRouter = Router();

usersRouter.get('/', async (_req, res) => {
  const users = await getUsers();

  res.json(users);
});

usersRouter.get<UserParams>(
  '/:userId',
  validateRequest({
    params: UserParamsSchema,
  }),
  async (req, res) => {
    const { userId } = req.params;
    const user = await getUserById({ userId });

    res.json(user);
  }
);

usersRouter.post(
  '/',
  validateRequest({
    body: CreateUserSchema,
  }),
  async (req, res) => {
    const input = req.body;
    const user = await createUser({ input });

    res.status(201).json(user);
  }
);

usersRouter.patch<UserParams>(
  '/:userId',
  validateRequest({
    params: UserParamsSchema,
    body: UpdateUserSchema,
  }),
  async (req, res) => {
    const { userId } = req.params;
    const input = req.body;
    const user = await patchUser({ userId, input });

    res.json(user);
  }
);

usersRouter.delete<UserParams>(
  '/:userId',
  validateRequest({
    params: UserParamsSchema,
  }),
  async (req, res) => {
    const { userId } = req.params;
    await deleteUser({ userId });

    res.status(204).send();
  }
);

usersRouter.all('/', methodNotAllowed);
usersRouter.all('/:userId', methodNotAllowed);
