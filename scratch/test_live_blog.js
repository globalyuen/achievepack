import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    consoleErrors.push(`[${msg.type().toUpperCase()}] ${msg.text()}`);
  });

  try {
    console.log('Navigating to https://www.pouch.eco/blog ...');
    await page.goto('https://www.pouch.eco/blog', { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait a couple of seconds for any dynamic fetching to complete
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));

    // Get all h3 texts
    const h3s = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h3')).map(el => el.textContent.trim());
    });
    console.log('\nRendered H3 elements:', h3s);

    // Get all card titles or similar
    const cardTitles = await page.evaluate(() => {
      // Find cards in the blog list
      const headings = Array.from(document.querySelectorAll('h3'));
      return headings.map(h => h.textContent.trim());
    });
    console.log('Total H3 headings:', cardTitles.length);

    // Check if the page says "Showing X of Y posts"
    const bodyText = await page.evaluate(() => document.body.innerText);
    const showingMatch = bodyText.match(/Showing \d+ of \d+ posts/i) || bodyText.match(/Showing/i);
    console.log('Showing Match in Body:', showingMatch ? showingMatch[0] : 'None');

    console.log('\nConsole Logs captured:');
    consoleErrors.forEach(err => console.log(err));

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
