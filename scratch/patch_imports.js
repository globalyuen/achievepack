const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/pages/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/import SEOPageLayout from '.*?\/components\/seo\/SEOPageLayout';/g, (match) => {
    // Determine the right relative path based on file depth
    const depth = file.split('/').length - 2; // src/pages is depth 2, minus 2 for src/components
    const prefix = '../'.repeat(depth);
    return `import SEOPageLayout from '${prefix}components/SEOPageLayout';`;
  });
  
  content = content.replace(/import PouchLayout from '\.\.\/PouchLayout';/g, (match) => {
    // For files in src/pages/pouch/packaging/PouchCustomBoxesPage.tsx
    return `import PouchLayout from '../../pouch/PouchLayout';`;
  });
  
  content = content.replace(/import PouchLayout from '\.\.\/pouch\/PouchLayout';/g, (match) => {
    // For files in src/pages/solutions/PackagingLineAutomationPage.tsx
    return `import PouchLayout from '../../components/pouch/PouchLayout';`;
  });

  content = content.replace(/import \{ isPouch \} from '\.\.\/\.\.\/utils\/domainHelper';/g, "import { isPouch } from '../../utils/domain';");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Patched', file);
  }
});
