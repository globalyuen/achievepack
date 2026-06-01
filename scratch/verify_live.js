import https from 'https';

const slugs = [
  'usa-coffee-packaging',
  'compostable-humidity-control-guide',
  'eco-friendly-food-packaging-guide',
  'eco-packaging-regulations-guide',
  'usa-labeling-guide',
  'compostable-stand-up-pouches-guide',
  'compostable-baby-food-packaging-guide',
  'recyclable-snack-packaging-guide',
  'coffee-degassing-valve-guide',
  'organic-compliance-support-guide'
];

function verifyLiveStatus(url, depth = 0) {
  return new Promise((resolve) => {
    if (depth > 3) {
      resolve('OFFLINE (TOO MANY REDIRECTS)');
      return;
    }
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith('http') 
          ? res.headers.location 
          : new URL(res.headers.location, url).href;
        resolve(verifyLiveStatus(redirectUrl, depth + 1));
      } else {
        resolve(res.statusCode === 200 ? 'ONLINE (200 OK)' : `OFFLINE (${res.statusCode})`);
      }
    }).on('error', () => {
      resolve('OFFLINE / DNS ERROR');
    });
  });
}

async function run() {
  console.log("Starting verification of 10 live B2C SEO blog pages on www.pouch.eco...");
  for (const slug of slugs) {
    const url = `https://www.pouch.eco/blog/${slug}`;
    const status = await verifyLiveStatus(url);
    console.log(`- ${url} ➔ ${status}`);
  }
}

run();
