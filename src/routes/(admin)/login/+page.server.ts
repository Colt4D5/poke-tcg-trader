import type { Actions } from './$types';
import { connection } from '$db';
import bcrypt from 'bcrypt';

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
      return {
	status: 500,
	success: false,
	test: "whoops!"
      }
    }

    const [results, fields] = await connection.query(`SELECT * FROM Users WHERE username = '${username}' LIMIT 1`);
    console.log(results);

    const user = results[0];

    if (!user) {
      return {
      status: 500,
      success: false,
      test: "whoops!"
      }
    }
    bcrypt.compare(password, user.password, (err, data) => {
      if (err) throw err

      if (data) {
	console.log(data)
      } else {
	console.log("nope");
      }

    })

    return { status: 200, success: true, test: "login form" }; 
  },
  signup: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
      return {
	status: 500,
	success: false,
	test: "whoops!"
      }
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(password, salt);

    const [results, fields] = await connection.query('INSERT INTO Users (first_name, last_name, email, password) VALUES (?,?,?,?)', [firstName, lastName, email, hashedPw]);

    return { status: 200, success: true, test: "sign up form" }; 
  },
} satisfies Actions;
