import * as fs from 'fs';
import * as path from 'path';
import { FEATURED_PRODUCTS } from './src/store/productData';

const output = {
  products: {} as Record<string, any>
};

FEATURED_PRODUCTS.forEach(product => {
  output.products[product.id] = {
    name: product.name,
    shortDesc: product.shortDesc,
    description: product.description,
    features: product.features
  };
});

fs.writeFileSync(
  path.join(process.cwd(), 'extracted_products_en.json'),
  JSON.stringify(output, null, 2),
  'utf-8'
);

console.log('Successfully extracted', FEATURED_PRODUCTS.length, 'products to extracted_products_en.json');
