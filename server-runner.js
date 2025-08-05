import { serve } from '@hono/node-server';
import app from './dist/server.js';

const port = process.env.PORT || 3000;

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`Server running at http://localhost:${info.port}`);
  }
);
