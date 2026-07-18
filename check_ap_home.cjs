const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://127.0.0.1:5173', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 8000)); // wait 8 seconds
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log('BODY TEXT LENGTH:', text.length);
  console.log('TEXT:', text.substring(0, 500));
  
  await browser.close();
})();
