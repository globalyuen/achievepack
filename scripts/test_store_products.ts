import { FEATURED_PRODUCTS } from '../src/store/productData';

console.log(`Total products in FEATURED_PRODUCTS: ${FEATURED_PRODUCTS.length}`);

const p1 = FEATURED_PRODUCTS.find(p => p.id === 'media__1780570697340.jpg');
const p2 = FEATURED_PRODUCTS.find(p => p.id === 'transparent-colorful-cellophane-candy-wrapping-paper');

console.log("Product 1 (Rollstock) found:", p1 ? "YES" : "NO");
if (p1) {
  console.log(`  Name: ${p1.name}`);
  console.log(`  Category: ${p1.category}`);
  console.log(`  Shape: ${p1.shape}`);
}

console.log("Product 2 (Cellophane) found:", p2 ? "YES" : "NO");
if (p2) {
  console.log(`  Name: ${p2.name}`);
  console.log(`  Category: ${p2.category}`);
  console.log(`  Shape: ${p2.shape}`);
}
