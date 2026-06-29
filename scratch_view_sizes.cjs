const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

const start = content.indexOf("id: 'spouted-foil-pouch'");
if (start !== -1) {
  const sizeVariantsStart = content.indexOf("sizeVariants: [", start);
  if (sizeVariantsStart !== -1) {
    console.log(content.substring(sizeVariantsStart, sizeVariantsStart + 4000));
  } else {
    console.log('sizeVariants not found');
  }
} else {
  console.log('Product not found');
}
