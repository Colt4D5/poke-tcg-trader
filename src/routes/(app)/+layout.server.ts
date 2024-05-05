import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const user_email = locals.user_email;
  const logged_in = locals.logged_in;

  if (!user_email || !logged_in) {
    throw redirect(302, '/login');
  }

  return {
    posts: [
      {
        id: 1,
        title: "First post"
      }
    ] 
  };
};
