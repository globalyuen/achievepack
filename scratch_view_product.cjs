const fs = require('fs');
const content = fs.readFileSync('src/store/productData.ts', 'utf8');

function extractProductBlock(id) {
  const index = content.indexOf(`id: '${id}'`);
  if (index === -1) {
    console.log(`Product ID ${id} not found.`);
    return;
  }
  // Find the end of the product object by looking for the next product or list end
  // Products are items inside a large array, so they end with something like `},`
  // We can just grab a large chunk and inspect it.
  console.log(`=== Block for ${id} ===`);
  console.log(content.substring(index, index + 3500));
}

extractProductBlock('spouted-foil-pouch');
extractProductBlock('stand-up-spout-pouch-10mm-pet12-al7-ny15-pe80-102x152-4-28-5');
