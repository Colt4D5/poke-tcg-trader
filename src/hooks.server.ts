import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const user_email = event.cookies.get('user_email');
  const logged_in = event.cookies.get('logged_in');
  
  if (user_email) {
    event.locals.user_email = user_email;
  }

  if (logged_in) {
    event.locals.logged_in = logged_in;
  }

  const response = await resolve(event);
  return response;
}
