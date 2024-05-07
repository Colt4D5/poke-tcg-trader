import { connection } from '$db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = locals.user.uid;

  const [results, fields] = await connection.query(`SELECT * FROM CardsPurchased WHERE user_id = ${userId} LIMIT 5`);

  return {
    cards: results
  };
};
