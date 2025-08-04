import honox from 'honox/vite';
import clientBuild from 'honox/vite/client';
import { defineConfig } from 'vite';
import { nodeAdapter } from '@hono/vite-dev-server/node';


export default defineConfig(({ mode }) => {
  return {
    plugins: [
      honox({
        devServer: {adapter: nodeAdapter()},
        client: {input: ['./app/style.css']}
      })
    ],
    ssr: {
      external: ['@prisma/client'],
    },
    server: {
    watch: {
      ignored: [
        '**/prisma/dev.db',
        '**/prisma/dev.db-shm',
        '**/prisma/dev.db-wal',
      ],
    },
  },
  };
});
