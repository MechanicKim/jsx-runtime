import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  esbuild: {
    jsxFactory: "toElement",
    jsxFragment: "Fragment",
    jsxInject: `import { toElement, Fragment } from '@jsx-runtime'`,
  },
  resolve: {
    alias: {
      "@jsx-runtime": resolve(__dirname, "src", "runtime", "jsx-runtime.ts"),
    },
  },
});
