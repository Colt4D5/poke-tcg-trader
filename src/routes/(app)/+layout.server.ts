import { redirect } from '@sveltejs/kit';
import { connection } from '$db';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const user_email = locals.user_email;
  const logged_in = locals.logged_in;
  const user = locals.user;

  const [results, fields] = await connection.query(`SELECT * FROM Balance WHERE user_id = ${user.uid} LIMIT 1`);
  locals.user.balance = +results[0].balance;
  user.balance = +results[0].balance;

  if (!user_email || !logged_in) {
    throw redirect(302, '/login');
  }

  return {
    user
  };
};
