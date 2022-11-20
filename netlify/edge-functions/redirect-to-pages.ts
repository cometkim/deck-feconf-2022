import type { Context } from 'https://edge.netlify.com';

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  url.hostname = 'the-future-of-frontend-is-edge.pages.dev';

  const response = await context.next();
  response.headers.set('Location', url.toString());

  return response;
};