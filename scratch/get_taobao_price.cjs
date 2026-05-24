const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true, // we can try headless first
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    console.log('Navigating to Taobao...');
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    await page.goto('https://item.taobao.com/item.htm?id=841167084606', { waitUntil: 'networkidle2', timeout: 30000 });
    
    console.log('Page loaded. Waiting 5s...');
    await new Promise(r => setTimeout(r, 5000));

    // Save screenshot to check if blocked
    const screenshotPath = path.join(__dirname, 'taobao_screenshot.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved to ${screenshotPath}`);

    // Extract page title and text content
    const title = await page.title();
    console.log('Title:', title);

    const bodyText = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync(path.join(__dirname, 'taobao_body.txt'), bodyText);
    console.log('Body text saved to taobao_body.txt');

    // Attempt to extract SKUs and prices
    const data = await page.evaluate(() => {
      // Look for pricing elements
      const prices = [];
      document.querySelectorAll('[class*="price"], [class*="Price"]').forEach(el => {
        prices.push(el.innerText);
      });
      return {
        htmlLength: document.documentElement.outerHTML.length,
        prices: prices.slice(0, 50)
      };
    });

    console.log('Extracted Data:', JSON.stringify(data, null, 2));

  } catch (error) {
    console.error('Error during execution:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
})();
