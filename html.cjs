const puppeteer = require('puppeteer-core');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch({ 
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new' 
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/products/custom-printed-corrugated-boxes', { waitUntil: 'networkidle2' });
  const html = await page.content();
  fs.writeFileSync('page.html', html);
  
  await browser.close();
})();
