const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser for Taobao shop home...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled'
    ]
  });

  try {
    const page = await browser.newPage();
    console.log('Setting User Agent...');
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });

    const homeUrl = 'https://shop592756875.taobao.com';
    console.log(`Navigating to: ${homeUrl}`);
    
    await page.goto(homeUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('Page loaded. Waiting 10s...');
    await new Promise(r => setTimeout(r, 10000));

    // Save screenshot
    const screenshotPath = path.join(__dirname, 'home_screenshot.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved to ${screenshotPath}`);

    const title = await page.title();
    console.log('Page Title:', title);

    const bodyText = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync(path.join(__dirname, 'home_body.txt'), bodyText);
    console.log('Body text saved to home_body.txt');

  } catch (error) {
    console.error('Error during execution:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
})();
