const fs = require('fs');

const mainFile = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx';
let main = fs.readFileSync(mainFile, 'utf8');

// Remove broken comment line 48
main = main.replace(/\/\/ Custom MultilingualRoutes\\nconst Topic550370b477134f3289cb48e0a6ba2fe3[^\n]+\n/g, '');

// Remove lowercase Topic import
main = main.replace(/const Topic550370b477134f3289cb48e0a6ba2fe3 = lazyWithRetry\(\(\) => import\('\.\/pages\/topics\/Topic550370b477134f3289cb48e0a6ba2fe3'\)\);\n/g, '');

// Remove other Topic imports
main = main.replace(/const Topic[a-zA-Z0-9]+ = lazyWithRetry\(\(\) => import\('\.\/pages\/topics\/Topic[a-zA-Z0-9]+'\)\);\n/g, '');

// Remove route definitions for Topic components
main = main.replace(/<Route path="[^"]+" element=\{<Topic[a-zA-Z0-9]+ \/>\} \/>\n\s*/g, '');

// Also remove `topic-550370b4` paths
main = main.replace(/<Route path="\/topics\/topic-[0-9a-f\-]+" element=\{<[^>]+>\} \/>\n\s*/g, '');

// Fix any `<Topic550370b477134f3289cb48e0a6ba2fe3 />` in other routes
main = main.replace(/element=\{<Topic550370b477134f3289cb48e0a6ba2fe3 \/>\}/g, 'element={<IllustratedPouchDesignVariation />}');

fs.writeFileSync(mainFile, main);
console.log('Fixed main.tsx');
