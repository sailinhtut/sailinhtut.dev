import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
const pool = await mysql.createPool({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Saphire234!@#',
	database: 'drizzle',
});
const db = drizzle({ client: pool });

export default db;
