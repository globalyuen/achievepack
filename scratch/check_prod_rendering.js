import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  try {
    console.log('Navigating to https://www.pouch.eco/blog ...');
    await page.goto('https://www.pouch.eco/blog', { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait 5 seconds
    console.log('Waiting for rendering to complete...');
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));

    const bodyText = await page.evaluate(() => document.body.innerText);
    const showingLines = bodyText.split('\n').filter(line => line.includes('Showing') && line.includes('posts'));
    console.log('\nLines containing "Showing" and "posts":');
    console.log(showingLines);

    // Get all rendering counts
    const countsText = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('*'));
      return els
        .map(el => el.textContent.trim())
        .filter(t => t.includes('Showing') && t.includes('posts') && t.length < 100);
    });
    console.log('\nElements containing "Showing ... posts":');
    console.log([...new Set(countsText)]);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
