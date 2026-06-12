const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const http = require('http');

const PORT = 5173;
const HOST = `http://localhost:${PORT}`;
const PAGES = [
  '/packaging/flat-pouches',
  '/packaging/flat-bottom-bags',
  '/packaging/stand-up-pouches',
  '/packaging/spout-pouches',
  '/packaging/vacuum-pouches'
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForServer(url, timeout = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    function check() {
      http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else {
          checkNext();
        }
      }).on('error', checkNext);
    }

    function checkNext() {
      if (Date.now() - start > timeout) {
        reject(new Error('Timeout waiting for server'));
      } else {
        setTimeout(check, 1000);
      }
    }

    check();
  });
}

async function run() {
  console.log('Starting local dev server...');
  const devServer = spawn('pnpm', ['run', 'dev'], {
    stdio: 'ignore',
    shell: true,
    detached: true
  });

  try {
    await waitForServer(HOST);
    console.log('Server is ready! Running Puppeteer tests...');

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    let consoleErrors = [];

    page.on('pageerror', (err) => {
      consoleErrors.push(`[Page Error] ${err.toString()}`);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text().toLowerCase();
        if (text.includes('ipapi.co') || text.includes('cors') || text.includes('failed to load') || text.includes('err_failed')) {
          return; // Ignore external network resource loading issues in test env
        }
        consoleErrors.push(`[Console Error] ${msg.text()}`);
      }
    });

    let hasFailures = false;

    for (const path of PAGES) {
      consoleErrors = [];
      const url = `${HOST}${path}`;
      console.log(`\nNavigating to: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Wait a moment for dynamic rendering
      await wait(1000);

      // Check 1: Verify no console/page errors
      if (consoleErrors.length > 0) {
        console.error(`❌ Errors detected on ${path}:`);
        consoleErrors.forEach(err => console.error(`  ${err}`));
        hasFailures = true;
      } else {
        console.log(`✅ No console/page errors on ${path}`);
      }

      // Check 2: Verify no raw translation keys (e.g. seoPages.pages)
      const pageText = await page.evaluate(() => document.body.innerText);
      if (pageText.includes('seoPages.pages')) {
        console.error(`❌ Raw translation placeholder detected on ${path}!`);
        hasFailures = true;
      } else {
        console.log(`✅ No raw translation placeholders on ${path}`);
      }

      // Check 3: Verify no literal stray </strong> tags visible
      if (pageText.includes('</strong>') || pageText.includes('</td')) {
        console.error(`❌ Visible stray HTML tag detected on ${path}!`);
        hasFailures = true;
      } else {
        console.log(`✅ No stray HTML tags rendered on ${path}`);
      }
    }

    await browser.close();

    if (hasFailures) {
      console.error('\n❌ Verification failed.');
      process.exit(1);
    } else {
      console.log('\n🎉 Verification successful! All pages rendered perfectly without errors.');
      process.exit(0);
    }

  } catch (err) {
    console.error('Error running verification:', err);
    process.exit(1);
  } finally {
    console.log('Stopping dev server...');
    if (devServer.pid) {
      try {
        // Kill process group
        process.kill(-devServer.pid);
      } catch (e) {
        // Fallback
        devServer.kill();
      }
    }
  }
}

run();
