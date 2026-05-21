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
const spoutedPouchRegex = /(id:\s*'spouted-foil-pouch'[\s\S]*?sizeVariants:\s*\[)([\s\S]*?)(\]\s*,)/;

content = content.replace(spoutedPouchRegex, (match, prefix, variantsBlock, suffix) => {
  let updatedVariantsBlock = variantsBlock;

  // Variant blocks matching pattern
  const variantRegex = /(\{\s*id:\s*"[^"]+",[\s\S]*?totalPrice:\s*)(\d+)(,[\s\S]*?unitPrice:\s*)([0-9.]+)(,)/g;

  updatedVariantsBlock = updatedVariantsBlock.replace(variantRegex, (vMatch, vPrefix, totalPriceStr, vMiddle, unitPriceStr, vSuffix) => {
    const oldTotalPrice = parseFloat(totalPriceStr);
    const newTotalPrice = convert(oldTotalPrice);
    const roundedUnitPrice = Number((newTotalPrice / 100).toFixed(2));

    console.log(`Converting variant: oldTotalPrice=${oldTotalPrice} -> newTotalPrice=${newTotalPrice}, newUnitPrice=${roundedUnitPrice}`);
    return `${vPrefix}${newTotalPrice}${vMiddle}${roundedUnitPrice}${vSuffix}`;
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
  const oldPrice = parseFloat(price);
  // For single piece, if old was 0.35 (which is basePrice 35 / 100), new is convert(35) / 100
  const newPrice = Math.round((convert(oldPrice * 100) / 100) * 100) / 100;
  console.log(`Converting pricePerPiece: ${price} -> ${newPrice}`);
  return `${prefix}${newPrice}${suffix}`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated productData.ts!');
