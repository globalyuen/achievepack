const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser for mobile Taobao shop home...');
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
    console.log('Emulating mobile device...');
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1');
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });

    const mobileUrl = 'https://shop592756875.m.taobao.com/';
    console.log(`Navigating to: ${mobileUrl}`);
    
    await page.goto(mobileUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('Page loaded. Waiting 10s...');
    await new Promise(r => setTimeout(r, 10000));

    // Save screenshot
    const screenshotPath = path.join(__dirname, 'mobile_screenshot.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved to ${screenshotPath}`);

    const title = await page.title();
    console.log('Page Title:', title);

    const bodyText = await page.evaluate(() => document.body.innerText);
    fs.writeFileSync(path.join(__dirname, 'mobile_body.txt'), bodyText);
    console.log('Body text saved to mobile_body.txt');

    // Extract links
    const links = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('a').forEach(a => {
        const href = a.href;
        const text = a.innerText ? a.innerText.trim() : '';
        if (href && (href.includes('item.taobao.com') || href.includes('detail.tmall.com') || href.includes('m.tb.cn') || href.includes('item.htm'))) {
          results.push({ href, text });
        }
      });
      return results;
    });

    console.log(`Found ${links.length} potential product links on mobile:`);
    console.log(JSON.stringify(links, null, 2));

  } catch (error) {
    console.error('Error during execution:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
})();
