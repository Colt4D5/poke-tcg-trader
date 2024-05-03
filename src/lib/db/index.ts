import mysql from 'mysql2/promise';

const connConfig = {
	host: 'localhost',
	user: 'root',
	database: 'pokemondb',
	password: 'Muffinita1'
}

export const connection = await mysql.createConnection(connConfig);
