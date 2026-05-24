import { Kysely, PostgresDialect } from 'kysely';
import type { DB } from './generated/schema';
import { pool } from './pool';

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool,
  }),
});
