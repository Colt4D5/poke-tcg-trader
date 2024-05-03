import type { Actions } from './$types';
import { connection } from '$db';

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    console.log(username, password);

    const [results, fields] = await connection.query('SELECT * FROM Users');
    console.log(results);
  	return { status: 200, success: true, test: "login form" }; 
  },
  signup: async (event) => {
  	return { status: 200, success: true, test: "sign up form" }; 
  },
} satisfies Actions;
