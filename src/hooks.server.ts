import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.user = event.cookies.get('username');

  const response = await resolve(event);
  return response;
}
