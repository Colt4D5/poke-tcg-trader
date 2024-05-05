import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } from '$env/static/private';

const connConfig = {
	host: DB_HOST, 
	user: DB_USER,
	database: DB_NAME,
	password: DB_PASSWORD
}

export const connection = await mysql.createConnection(connConfig);
