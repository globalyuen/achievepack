const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({ 
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new' 
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/products/custom-printed-corrugated-boxes', { waitUntil: 'networkidle2' });
  const url = page.url();
  const title = await page.title();
  
  const h1 = await page.evaluate(() => {
    const h1s = document.querySelectorAll('h1');
    return Array.from(h1s).map(h => h.innerText);
  });
  console.log('URL:', url);
  console.log('Title:', title);
  console.log('H1 tags:', h1);
  
  await browser.close();
})();
