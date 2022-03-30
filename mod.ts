import { serve } from 'https://deno.land/std/http/server.ts';

const handler = (_req: Request): Response => {
  return new Response('Hello world');
};

console.log('Listening on http://localhost:8000');

serve(handler);
