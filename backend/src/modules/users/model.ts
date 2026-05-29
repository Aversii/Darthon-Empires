import { randomUUID } from 'node:crypto';
import { db } from '../../db';
import type { CreateUserInput, UpdateUserInput } from './schema';

export async function insertUser({ user }: { user: CreateUserInput }) {
  return db
    .insertInto('users')
    .values({
      user_id: randomUUID(),
      name: user.name,
      last_name: user.lastName,
      email: user.email,
      status: user.status,
    })
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function retrieveUsers() {
  return db.selectFrom('users').selectAll().where('deleted_at', 'is', null).execute();
}

export async function retrieveUserById(userId: string) {
  return db
    .selectFrom('users')
    .selectAll()
    .where('user_id', '=', userId)
    .where('deleted_at', 'is', null)
    .executeTakeFirst();
}

export async function retrieveUserByEmail(email: string) {
  return db
    .selectFrom('users')
    .selectAll()
    .where('email', '=', email)
    .where('deleted_at', 'is', null)
    .executeTakeFirst();
}

export async function updateUser({ userId, user }: { userId: string; user: UpdateUserInput }) {
  return db
    .updateTable('users')
    .set({
      updated_at: new Date(),
      name: user.name,
      last_name: user.lastName,
      email: user.email,
      status: user.status,
    })
    .where('user_id', '=', userId)
    .where('deleted_at', 'is', null)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function softDeleteUser(userId: string) {
  const now = new Date();

  return db
    .updateTable('users')
    .set({
      deleted_at: now,
      updated_at: now,
    })
    .where('user_id', '=', userId)
    .where('deleted_at', 'is', null)
    .returningAll()
    .executeTakeFirstOrThrow();
}
