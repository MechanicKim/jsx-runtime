import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "jsx-runtime": resolve(__dirname, "src/jsx-runtime.ts"),
        "jsx-dev-runtime": resolve(__dirname, "src/jsx-dev-runtime.ts"),
      },
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
