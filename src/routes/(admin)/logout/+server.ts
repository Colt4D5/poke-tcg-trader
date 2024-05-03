import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ cookies }) => {
  cookies.set("user", "", { 
    secure: true, 
    httpOnly: true, 
  	path: '/' 
  });
	return new Response(JSON.stringify({ status: 200, msg: "successfully logged out" }));
};
