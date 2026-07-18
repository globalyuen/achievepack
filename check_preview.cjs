const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://localhost:4173', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 8000));
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log('PREVIEW BODY TEXT LENGTH:', text.length);
  
  await browser.close();
})();
