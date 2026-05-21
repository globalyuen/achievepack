const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/store/productData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The conversion factor: RMB / 7.2 * 3 = RMB * 0.41666667
const convert = (rmb) => {
  const usd = (rmb / 7.2) * 3;
  return Math.round(usd * 100) / 100;
};

// We will find the spouted-foil-pouch block and rewrite the prices.
// Let's parse sizeVariants inside the "spouted-foil-pouch" product.
// Since spouted-foil-pouch starts around line 1611 or so, we can specifically locate it.

// Let's extract the spouted-foil-pouch section or do a safe regex replace inside it.
const spoutedPouchRegex = /(id:\s*'spouted-foil-pouch'[\s\S]*?sizeVariants:\s*\[)([\s\S]*?)(\]\s*,)/;

content = content.replace(spoutedPouchRegex, (match, prefix, variantsBlock, suffix) => {
  // Let's replace each variant price in this block
  let updatedVariantsBlock = variantsBlock;

  // We want to match blocks like:
  // {
  //   id: "foil-50ml-slanted",
  //   ...
  //   totalPrice: 32,
  //   unitPrice: 0.32,
  //   ...
  // }
  const variantRegex = /(\{\s*id:\s*"[^"]+",[\s\S]*?totalPrice:\s*)(\d+)(,[\s\S]*?unitPrice:\s*)([0-9.]+)(,)/g;

  updatedVariantsBlock = updatedVariantsBlock.replace(variantRegex, (vMatch, vPrefix, totalPriceStr, vMiddle, unitPriceStr, vSuffix) => {
    const oldTotalPrice = parseFloat(totalPriceStr);
    const newTotalPrice = convert(oldTotalPrice);
    const newUnitPrice = Math.round((newTotalPrice / 100) * 100) / 100; // which is newTotalPrice / 100
    
    // Format to 2 decimal places if needed or keep it clean
    const formattedTotalPrice = Number(newTotalPrice.toFixed(2));
    const formattedUnitPrice = Number((newTotalPrice / 100).toFixed(4)); // let's keep 4 decimal places for unit price if it is under $1, e.g., 0.1458, or just round it to 2 decimals like 0.15? 
    // In productData.ts, old unitPrice was 0.32, 0.35 etc. Rounding to 2 decimal places:
    const roundedUnitPrice = Number((newTotalPrice / 100).toFixed(2));

    console.log(`Converting variant: oldTotalPrice=${oldTotalPrice} -> newTotalPrice=${formattedTotalPrice}, newUnitPrice=${roundedUnitPrice}`);
    return `${vPrefix}${formattedTotalPrice}${vMiddle}${roundedUnitPrice}${vSuffix}`;
  });

  return `${prefix}${updatedVariantsBlock}${suffix}`;
});

// Also update basePrice: 35.00 -> 14.58 and pricePerPiece: 0.35 -> 0.15
content = content.replace(/(id:\s*'spouted-foil-pouch'[\s\S]*?basePrice:\s*)([0-9.]+)(,)/, (match, prefix, price, suffix) => {
  const newBasePrice = convert(parseFloat(price));
  console.log(`Converting basePrice: ${price} -> ${newBasePrice}`);
  return `${prefix}${newBasePrice}${suffix}`;
});

content = content.replace(/(id:\s*'spouted-foil-pouch'[\s\S]*?pricePerPiece:\s*)([0-9.]+)(,)/, (match, prefix, price, suffix) => {
  const newPricePerPiece = Math.round((convert(parseFloat(price) * 100) / 100) * 100) / 100;
  // Let's just do basePrice / 100
  const oldPrice = parseFloat(price);
  const newPrice = Math.round((oldPrice / 7.2 * 3) * 100) / 100;
  console.log(`Converting pricePerPiece: ${price} -> ${newPrice}`);
  return `${prefix}${newPrice}${suffix}`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated productData.ts!');
