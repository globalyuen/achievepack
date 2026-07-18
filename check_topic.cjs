const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR LOG:', msg.text());
    } else {
      console.log('PAGE LOG:', msg.text());
    }
  });
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:5173/topics/mono-material', { waitUntil: 'networkidle2' });
  
  const rootHtml = await page.evaluate(() => document.getElementById('root')?.innerHTML || document.body.innerHTML);
  console.log('ROOT HTML LENGTH:', rootHtml.length);
  if (rootHtml.length < 100) {
    console.log('ROOT HTML CONTENT:', rootHtml);
  }
  
  await browser.close();
})();
