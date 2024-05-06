import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ cookies }) => {
  cookies.delete('user', { path: '/' });
  cookies.delete('logged_in', { path: '/' });
  cookies.delete('user_email', { path: '/' });

	throw redirect(302, '/login');
};
