import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const requests = [];
  const responses = [];

  page.on('request', req => {
    requests.push({
      url: req.url(),
      method: req.method(),
      headers: req.headers()
    });
  });

  page.on('response', res => {
    responses.push({
      url: res.url(),
      status: res.status(),
      statusText: res.statusText()
    });
  });

  try {
    console.log('Navigating...');
    await page.goto('https://www.pouch.eco/blog', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));

    console.log('\n--- Network Requests ---');
    requests.forEach(r => {
      if (r.url.includes('supabase') || r.url.includes('api')) {
        console.log(`[REQ] ${r.method} ${r.url}`);
      }
    });

    console.log('\n--- Network Responses ---');
    responses.forEach(r => {
      if (r.url.includes('supabase') || r.url.includes('api')) {
        console.log(`[RES] ${r.status} ${r.url}`);
      }
    });

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
