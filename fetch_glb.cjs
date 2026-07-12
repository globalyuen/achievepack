const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('.glb') || url.includes('.gltf')) {
      console.log('Found GLB:', url);
    }
  });

  console.log('Navigating...');
  // This is a typical URL structure for a model on baoxiaohe, but let's just go to a generic model page if possible
  // Let's go to their templates/models directory
  await page.goto('https://www.baoxiaohe.com/templates/', { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('Page loaded');
  await browser.close();
})();
