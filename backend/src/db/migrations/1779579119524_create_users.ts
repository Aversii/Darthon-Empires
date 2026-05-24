import { sql, type Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
	//Enums
	await db.schema
		.createType('user_status')
		.asEnum(['active', 'inactive'])
		.execute()

	//Table
	await db.schema
		.createTable('users')
		.addColumn('user_id', 'uuid', col => col.primaryKey())
		.addColumn('name', 'varchar', col => col.notNull())
		.addColumn('last_name', 'varchar', col => col.notNull())
		.addColumn('email', 'varchar', col => col.notNull().unique())
		.addColumn('status', sql`user_status`, col => col.notNull().defaultTo('inactive'))
		.addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`now()`))
		.addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`now()`))
		.addColumn('deleted_at', 'timestamptz')
		.execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
	await db.schema.dropTable('users').ifExists().execute()
	await db.schema.dropType('user_status').ifExists().execute()
}
