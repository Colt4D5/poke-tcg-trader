import type { Actions } from './$types';
import { connection } from '$db';
import bcrypt from 'bcrypt';

export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    if (!username || !password) {
      return {
	status: 500,
	success: false,
	message: "Missing fields"
      }
    }

    const [results, fields] = await connection.query(`SELECT * FROM Users WHERE username = '${username}' LIMIT 1`);
    // console.log(results);

    const user = results[0];

    if (!user) {
      return {
	status: 500,
	success: false,
	message: "Could not locate user"
      }
    }

    const pwdsMatch = await comparePasswordHashes(password, user.password);

    if (pwdsMatch) {
      cookies.set('user_email', user.email, { path: '/' })
      cookies.set('logged_in', 'true', { path: '/' })
      return { status: 200, success: true, message: "Successfully logged in!", location: '/' }; 
    } else {
      return { status: 500, success: false, message: "Could not authorize user" }; 
    }
  },
  signup: async ({ request }) => {
    const data = await request.formData();
    const firstName = data.get('firstname');
    const lastName = data.get('lastname');
    const email = data.get('email');
    const username = data.get('username');
    const password = data.get('password');
    const confPassword = data.get('confpassword');

    if (!firstName || !lastName || !username || !password || !confPassword) {
      return {
	status: 500,
	success: false,
	message: "Missing fields"
      }
    }

    if (password !== confPassword) {
      return {
	status: 500,
	success: false,
	message: "Password and confirmation password do not match"
      }
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPw = bcrypt.hashSync(password, salt);

    const [results, fields] = await connection.query('INSERT INTO Users (first_name, last_name, email, username, password) VALUES (?,?,?,?,?)', [firstName, lastName, email, username, hashedPw]);

    return { status: 200, success: true, test: "sign up form" }; 
  },
} satisfies Actions;

async function comparePasswordHashes(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
