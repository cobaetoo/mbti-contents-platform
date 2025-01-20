import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import prerender from "@prerenderer/rollup-plugin";
// import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";
import { PrerenderPlugin } from "vite-plugin-prerender";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // prerender({
    //   routes: [
    // "/",
    // "/personalColor",
    // "/personalColorEng",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //     "/personalColorEng/result/ESTJ",
    //   ],
    //   renderer: PuppeteerRenderer,
    //   server: {
    //     port: 3000,
    //     host: "localhost",
    //   },
    //   rendererOptions: {
    //     maxConcurrentRoutes: 1,
    //     renderAfterTime: 500,
    //   },
    //   postProcess(renderedRoute) {
    //     renderedRoute.html = renderedRoute.html
    //       .replace(/http:/i, "https:")
    //       .replace(
    //         /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
    //         "https://mbti-platform.shop/"
    //       );
    //   },
    // }),
    PrerenderPlugin({
      staticDir: path.join(__dirname, "dist"),
      routes: ["/", "/personalColor", "/personalColorEng"],
    }),
  ],
});
