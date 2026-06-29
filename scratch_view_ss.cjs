const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

const idx = content.indexOf("id: 'recyclable-3ss-evoh-pe-102x152'");
if (idx !== -1) {
  console.log(content.substring(idx, idx + 3000));
} else {
  console.log('Not found');
}
