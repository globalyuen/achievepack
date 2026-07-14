const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const wait = (ms) => new Promise(r => setTimeout(r, ms));

  console.log("Navigating to Catalog...");
  await page.goto('http://localhost:5175/app', { waitUntil: 'networkidle0' });
  await wait(2000);
  await page.screenshot({ path: '/Users/ryanmacmini/.gemini/antigravity/brain/e426e1aa-967a-42f8-8b32-844ad4b514d8/catalog_screenshot.png' });

  console.log("Navigating to Shape 1199...");
  await page.goto('http://localhost:5175/app?shape=1199', { waitUntil: 'networkidle0' });
  await wait(3000);
  
  // Try to simulate a mouse drag on the canvas
  console.log("Spinning 3D model...");
  await page.mouse.move(800, 400);
  await page.mouse.down();
  await page.mouse.move(600, 400, { steps: 20 });
  await page.mouse.up();
  
  await wait(1000);
  await page.screenshot({ path: '/Users/ryanmacmini/.gemini/antigravity/brain/e426e1aa-967a-42f8-8b32-844ad4b514d8/editor_screenshot.png' });

  await browser.close();
  console.log("Done!");
})();
