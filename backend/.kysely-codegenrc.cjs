require('dotenv').config();

module.exports = {
  connectionString: process.env.DATABASE_URL,
  outFile: 'src/db/generated/schema.ts',
  // We only query our app tables (in `public`) via Kysely.
  // This keeps table names unqualified (e.g. `users` instead of `public.users`)
  // and avoids pulling in Supabase internal schemas (auth/storage/etc).
  defaultSchema: 'public',
  includePattern: 'public.*',
};
