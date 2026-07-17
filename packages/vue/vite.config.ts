import { resolve } from "node:path";

import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "./tsconfig.json",
      include: ["src"],
      outDirs: ["dist"],
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],

  build: {
    emptyOutDir: true,
    sourcemap: true,

    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "XronUI",
      formats: ["es"],
      fileName: () => "index.js",
    },

    rollupOptions: {
      external: ["vue"],
    },
  },
});
