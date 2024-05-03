import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.user) {
    redirect(307, "/login");
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
