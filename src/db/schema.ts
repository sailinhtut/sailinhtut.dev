import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
	id: int('id').autoincrement().primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	age: int('age').notNull(),
	email: varchar('email', { length: 255 }).notNull().unique(),
});
