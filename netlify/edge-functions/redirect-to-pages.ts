import type { Context } from 'https://edge.netlify.com';

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  url.hostname = 'the-future-of-frontend-is-edge.pages.dev';

  return new Response('Redirected', {
    status: 301,
    headers: {
      'Location': url.toString(),
    },
  });
};