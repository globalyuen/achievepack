const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('https://achievepack.com', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 8000));
  
  const text = await page.evaluate(() => document.body.innerText);
  console.log('PROD BODY TEXT LENGTH:', text.length);
  console.log('PROD TEXT:', text.substring(0, 500));
  
  await browser.close();
})();
