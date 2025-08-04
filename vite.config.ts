import honox from 'honox/vite';
import clientBuild from 'honox/vite/client';
import { defineConfig } from 'vite';
import { nodeAdapter } from '@hono/vite-dev-server/node';

export default defineConfig(({ mode }) => {
  return {
    // plugins: [honox({ devServer: { adapter: nodeAdapter() }})],
    plugins: [honox()],
    ssr: {
      external: ['@prisma/client', '.prisma'],
    },
  };
});
