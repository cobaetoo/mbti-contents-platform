import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/personalColor",
        "/personalColorEng",
        "/personalColorEng/result/ESTJ",
      ],
      renderer: PuppeteerRenderer,
      server: {
        port: 3000,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://mbti-platform.shop/"
          );
      },
    }),
  ],
});
