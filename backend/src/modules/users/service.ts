import { ConflictError, NotFoundError } from '../../errors/custom-error';
import {
  insertUser,
  retrieveUserByEmail,
  retrieveUserById,
  retrieveUsers,
  softDeleteUser,
  updateUser,
} from './model';
import type { CreateUserInput, UpdateUserInput, UserParams, UserResponse } from './schema';

type UserRow = Awaited<ReturnType<typeof insertUser>>;

export function mapUser(user: UserRow): UserResponse {
  return {
    userId: user.user_id,
    name: user.name,
    lastName: user.last_name,
    email: user.email,
    status: user.status,
    createdAt: user.created_at.toISOString(),
    updatedAt: user.updated_at.toISOString(),
    deletedAt: user.deleted_at?.toISOString() ?? null,
  };
}

export async function createUser({ input }: { input: CreateUserInput }): Promise<UserResponse> {
  await throwIfEmailAlreadyExists({ email: input.email });

  const user = await insertUser({
    user: input,
  });

  return mapUser(user);
}

export async function getUsers(): Promise<UserResponse[]> {
  const users = await retrieveUsers();

  return users.map(mapUser);
}

export async function getUserById({
  userId,
}: {
  userId: UserParams['userId'];
}): Promise<UserResponse> {
  const user = await retrieveUserById(userId);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return mapUser(user);
}

export async function patchUser({
  userId,
  input,
}: {
  userId: UserParams['userId'];
  input: UpdateUserInput;
}): Promise<UserResponse> {
  await throwIfUserNotFound({ userId });

  if (input.email !== undefined) {
    await throwIfEmailAlreadyExists({ email: input.email, userId });
  }

  const user = await updateUser({
    userId,
    user: input,
  });

  return mapUser(user);
}

export async function deleteUser({ userId }: { userId: UserParams['userId'] }): Promise<void> {
  await throwIfUserNotFound({ userId });
  await softDeleteUser(userId);
}

async function throwIfUserNotFound({ userId }: { userId: UserParams['userId'] }): Promise<void> {
  const user = await retrieveUserById(userId);

  if (!user) {
    throw new NotFoundError('User not found');
  }
}

async function throwIfEmailAlreadyExists({
  email,
  userId,
}: {
  email: CreateUserInput['email'];
  userId?: UserParams['userId'];
}): Promise<void> {
  const user = await retrieveUserByEmail(email);

  if (user && user.user_id !== userId) {
    throw new ConflictError('Email already exists');
  }
}
