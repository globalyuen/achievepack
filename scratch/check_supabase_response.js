import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  page.on('requestfailed', request => {
    console.log(`[REQ FAILED] ${request.url()} - Error: ${request.failure()?.errorText}`);
  });

  page.on('response', response => {
    if (response.url().includes('supabase.co')) {
      console.log(`[REQ SUCCESS] ${response.url()} - Status: ${response.status()}`);
    }
  });

  try {
    console.log('Navigating to https://www.pouch.eco/blog ...');
    await page.goto('https://www.pouch.eco/blog', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait a couple of seconds
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
