const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ 
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new' 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173/products/custom-printed-corrugated-boxes', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot.png' });
  
  await browser.close();
})();
