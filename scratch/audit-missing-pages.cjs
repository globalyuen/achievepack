const fs = require('fs');
const path = require('path');

const mainFilePath = path.join(__dirname, '../src/main.tsx');
if (!fs.existsSync(mainFilePath)) {
  console.error("main.tsx not found!");
  process.exit(1);
}

const content = fs.readFileSync(mainFilePath, 'utf8');

// We will extract routes from the "pouch" block and the "else" (achievepack) block.
// The pouch block starts with "if (getDomain() === 'pouch') {" and ends before "else {"
// The else block starts with "else {" and ends before the end of the file/App return

const pouchStartIndex = content.indexOf("if (getDomain() === 'pouch') {");
const elseIndex = content.indexOf("} else {", pouchStartIndex);

if (pouchStartIndex === -1 || elseIndex === -1) {
  console.error("Could not locate domain blocks in main.tsx!");
  process.exit(1);
}

const pouchBlockContent = content.substring(pouchStartIndex, elseIndex);
const elseBlockContent = content.substring(elseIndex);

// Regex to extract all <Route path="X" element={...} />
const routeRegex = /<Route\s+path="([^"]+)"/g;

function extractRoutes(blockText) {
  const routes = [];
  let match;
  // Reset regex
  routeRegex.lastIndex = 0;
  while ((match = routeRegex.exec(blockText)) !== null) {
    const routePath = match[1];
    // Exclude wildcards or admin pages to keep comparison focused on user-facing SEO/product/knowledge content
    if (routePath !== '*' && !routePath.includes('/ctrl-x9k7m') && routePath !== '/signin' && routePath !== '/forgot-password' && routePath !== '/reset-password' && routePath !== '/auth/callback' && routePath !== '/unsubscribe' && routePath !== '/view-quote/:id') {
      routes.push(routePath);
    }
  }
  return [...new Set(routes)];
}

const pouchRoutes = extractRoutes(pouchBlockContent);
const b2bRoutes = extractRoutes(elseBlockContent);

console.log(`--- Audit Summary ---`);
console.log(`Total active Pouch.eco (B2C) routes: ${pouchRoutes.length}`);
console.log(`Total active AchievePack (B2B) routes: ${b2bRoutes.length}\n`);

const missingInPouch = b2bRoutes.filter(route => !pouchRoutes.includes(route));

console.log(`Pages on achievepack.com NOT covered in pouch.eco (${missingInPouch.length}):`);
missingInPouch.forEach(route => {
  console.log(` - ${route}`);
});
