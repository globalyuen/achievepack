import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  page.on('request', req => {
    if (req.url().includes('supabase.co')) {
      console.log(`[REQ] ${req.method()} ${req.url()}`);
    }
  });

  page.on('response', async res => {
    if (res.url().includes('supabase.co')) {
      const method = res.request().method();
      console.log(`[RES] ${method} ${res.status()} ${res.url()}`);
      if (method === 'GET') {
        try {
          const text = await res.text();
          console.log(`[RES BODY] Length: ${text.length}. Sample: ${text.substring(0, 200)}`);
        } catch (err) {
          console.log(`[RES BODY ERROR] Could not read GET body: ${err.message}`);
        }
      }
    }
  });

  page.on('requestfailed', req => {
    if (req.url().includes('supabase.co')) {
      console.log(`[REQ FAILED] ${req.method()} ${req.url()} - Error: ${req.failure()?.errorText}`);
    }
  });

  try {
    console.log('Navigating...');
    await page.goto('https://www.pouch.eco/blog', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
