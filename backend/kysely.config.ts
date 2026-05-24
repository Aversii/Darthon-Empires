import * as dotenv from 'dotenv';
import { PostgresDialect } from 'kysely';
import { defineConfig } from 'kysely-ctl';
import { Pool } from 'pg';

dotenv.config();

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({ connectionString: process.env.DATABASE_URL }),
  }),
  migrations: {
    migrationFolder: 'src/db/migrations',
    migrationTableSchema: 'internal',
    allowUnorderedMigrations: true,
  },
});
