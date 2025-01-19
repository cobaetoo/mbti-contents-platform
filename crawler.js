// crawler.js (수정된 부분)
import playwright from "playwright";
import { promises as fs } from "fs";
import path from "path";
import process from "node:process";

async function crawl(routes, outDir) {
  console.log("start");
  const browser = await playwright.chromium.launch({
    executablePath: process.env.CHROME_PATH,
  });
  console.log("browser launch");
  const page = await browser.newPage();
  console.log("new page");
  for (const route of routes) {
    console.log("route:", route);
    const url = `http://localhost:5173${route}`;
    await page.goto(url);
    console.log("goto:", url);
    await page.waitForLoadState("load");
    console.log("load");
    const html = await page.content();
    console.log("content");

    const filePath = path.join(
      outDir,
      route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`
    );
    const dirPath = path.dirname(filePath);
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(filePath, html);

    console.log(`Crawled ${url} -> ${filePath}`);
  }

  await browser.close();
  console.log("close");
}
