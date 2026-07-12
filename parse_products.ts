import { FEATURED_PRODUCTS } from './src/store/productData';

const products = FEATURED_PRODUCTS.map(p => ({
  id: p.id,
  name: p.name,
  category: p.category
}));

console.log(JSON.stringify(products, null, 2));
