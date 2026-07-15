const fs = require('fs');
const filePath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/components/LearnNavigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const pagesToAdd = [
  { name: "AI Packaging Barcodes Bottom Fold", pathName: "ai-packaging-barcodes-bottom-fold" },
  { name: "AI Packaging Bleed Dimensions", pathName: "ai-packaging-bleed-dimensions" },
  { name: "AI Packaging Safe Margins", pathName: "ai-packaging-safe-margins" },
  { name: "AI Packaging Layered Assets", pathName: "ai-packaging-layered-assets" },
  { name: "AI Packaging Resolution", pathName: "ai-packaging-resolution" },
  { name: "Apparel Zipper", pathName: "apparel-zipper" },
  { name: "Beef Jerky Barrier", pathName: "beef-jerky-barrier" },
  { name: "Beverage Soft Stand Up Pouch", pathName: "beverage-soft-stand-up-pouch" },
  { name: "Cheese Pocket Zipper", pathName: "cheese-pocket-zipper" },
  { name: "Cocktail Spout", pathName: "cocktail-spout" },
  { name: "Collagen High Barrier", pathName: "collagen-high-barrier" },
  { name: "Cacao Stand Up", pathName: "cacao-stand-up" }
];

let itemsStr = '';
pagesToAdd.forEach(page => {
  if (!content.includes(`link: '/topics/${page.pathName}'`)) {
    itemsStr += `\n      { name: '${page.name}', link: '/topics/${page.pathName}', image: '/imgs/illustrated/a_all_options_card_v3_3800862.webp' },`;
  }
});

if (itemsStr) {
  // Find topics section
  const topicsRegex = /(topics:\s*{\s*title:\s*'Topics',\s*icon:.*?pages:\s*\[)([\s\S]*?)(\n\s*\]\s*})/g;
  let found = false;
  content = content.replace(topicsRegex, (match, p1, p2, p3) => {
    found = true;
    return p1 + p2 + itemsStr + p3;
  });
  
  if (found) {
    fs.writeFileSync(filePath, content);
    console.log('Successfully updated LearnNavigation.tsx topics array');
  } else {
    console.log('Failed to find topics array regex match');
  }
} else {
  console.log('No items needed to be added.');
}
