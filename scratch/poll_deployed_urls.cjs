const https = require('https');

const host = process.argv[2] || 'achievepack-gkbgp9jz1-globalyuens-projects.vercel.app';
console.log(`Polling host: ${host}`);

const paths = [
  '/function/carbon-neutral-bags',
  '/function/spout-pouches-juice',
  '/function/rice-paper-bags',
  '/function/pva-water-soluble-bags',
  '/function/pre-zippered-rollstock',
  '/materials/recyclable-mono-pp'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: host,
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        // We can simulate accessing from the pouch domain by setting a host header or using host directly.
        // But Vercel's multi-domain routing works based on domain names, so we check the page exists first.
      }
    };

    const req = https.request(options, (res) => {
      console.log(`Path: ${path} | Status Code: ${res.statusCode} | Headers: ${res.headers['content-type']}`);
      resolve(res.statusCode === 200);
    });

    req.on('error', (e) => {
      console.error(`Error fetching ${path}:`, e.message);
      resolve(false);
    });

    req.end();
  });
}

async function run() {
  let allOk = true;
  for (const p of paths) {
    const ok = await checkUrl(p);
    if (!ok) allOk = false;
  }
  
  if (allOk) {
    console.log('✅ ALL PAGES VERIFIED SUCCESSFULLY!');
    process.exit(0);
  } else {
    console.error('❌ SOME PAGES FAILED VERIFICATION.');
    process.exit(1);
  }
}

run();
