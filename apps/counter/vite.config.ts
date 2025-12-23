import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  /**
   * pnpm 워크스페이스 덕분에 @jsx-runtime/runtime 임포트가 잘 동작하지만
   * Vite 개발 서버가 packages/runtime의 소스 코드 변경을 즉시 감지하고
   * HMR을 적용하게 하려면, 명시적으로 별칭(alias)을 추가하는 것을 권장
   */
  resolve: {
    alias: {
      "@jsx-runtime/classic-runtime": resolve(__dirname, "../../packages/classic-runtime/src"),
      "@jsx-runtime/runtime": resolve(__dirname, "../../packages/runtime/src"),
    },
  },
  /* JSX Classic Runtime */
  // esbuild: {
  //   jsxFactory: "toElement",
  //   jsxFragment: "Fragment",
  //   jsxInject: `import { toElement, Fragment } from "@jsx-runtime/classic-runtime"`,
  // },
});
