const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to A4 Landscape-like aspect ratio (e.g. 1414 x 1000)
  await page.setViewport({ width: 1414, height: 1000 });
  
  // Listen for the native window.prompt dialog and enter the password
  page.on('dialog', async dialog => {
    console.log('Native Dialog opened:', dialog.message());
    await dialog.accept('8888****');
    console.log('Native Dialog accepted!');
  });
  
  console.log('Navigating to daily reports page...');
  await page.goto('http://localhost:5173/ctrl-x9k7m/daily-reports', { waitUntil: 'networkidle2' });
  
  console.log('Waiting for custom password input to render...');
  await page.waitForSelector('input[type="password"]', { timeout: 10000 });
  
  console.log('Entering secure PIN...');
  await page.type('input[type="password"]', '8888****');
  
  console.log('Clicking unlock button...');
  await page.click('button[type="submit"]');
  
  // Wait for the main dashboard to finish loading
  console.log('Waiting for dashboard buttons to render...');
  await page.waitForFunction(
    () => Array.from(document.querySelectorAll('button')).some(b => b.textContent.includes('Daily Reports')),
    { timeout: 15000 }
  );
  
  console.log('Logged in and dashboard loaded successfully!');
  
  console.log('Finding COA Gen tab...');
  const buttons = await page.$$('button');
  let coaButtonIndex = -1;
  for (let i = 0; i < buttons.length; i++) {
    const text = await page.evaluate(el => el.textContent, buttons[i]);
    if (text.includes('COA Gen') || text.includes('COA')) {
      coaButtonIndex = i;
      console.log(`Found COA button at index ${i}: "${text}"`);
      await buttons[i].click();
      break;
    }
  }
  
  if (coaButtonIndex === -1) {
    console.log('Could not find COA tab button!');
    await browser.close();
    process.exit(1);
  }
  
  // Wait for CoaTab to render
  console.log('Waiting for COA tab content...');
  await page.waitForSelector('.print-page', { timeout: 10000 });
  console.log('COA page rendered on screen!');
  
  const publicSpecDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/spec';
  if (!fs.existsSync(publicSpecDir)) {
    fs.mkdirSync(publicSpecDir, { recursive: true });
  }
  
  const pdfPath = path.join(publicSpecDir, 'Sega Pac Pty Ltd - COA - Batch SC3340634.pdf');
  const artifactPdfPath = '/Users/ryanmacmini/.gemini/antigravity/brain/a05ff6d8-2b67-4b6b-8691-bbbe51469bf5/coa_puppeteer_test.pdf';

  console.log('Emulating print media and generating landscape PDF...');
  await page.emulateMediaType('print');
  
  // Generate A4 Landscape PDF to public dir
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }
  });
  console.log('PDF generated successfully at:', pdfPath);

  // Also save a copy to the artifacts directory
  fs.copyFileSync(pdfPath, artifactPdfPath);
  console.log('PDF copy saved to artifacts directory:', artifactPdfPath);

  await browser.close();
  console.log('Done!');
}

main().catch(err => {
  console.error('Error in Puppeteer script:', err);
  process.exit(1);
});
