import honox from "honox/vite";
import clientBuild from "honox/vite/client";
import { defineConfig } from "vite";
import { nodeAdapter } from "@hono/vite-dev-server/node";
import tailwindcss from "@tailwindcss/vite";

const commonConfig = {
  server: {
    watch: {
      ignored: ["**/prisma/dev.db", "**/prisma/dev.db-shm", "**/prisma/dev.db-wal", "**/prisma/dev.db-journal"],
    },
  },
};

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [clientBuild(), tailwindcss()],
      ...commonConfig,
    };
  } else {
    return {
      plugins: [
        honox({
          devServer: { adapter: nodeAdapter() },
        }),
        tailwindcss(),
      ],
      build: { emptyOutDir: false, rollupOptions: { input: "app/server.ts" } },
      ssr: {
        external: ["@prisma/client", "node:async_hooks"],
        noExternal: ["honox"],
      },
      ...commonConfig,
    };
  }
});
