import { Project, SyntaxKind } from 'ts-morph';
import fs from 'fs';

const project = new Project();
project.addSourceFileAtPath('./src/App.tsx');
const sourceFile = project.getSourceFileOrThrow('./src/App.tsx');

const extracted = [];
let keyCounter = 1;

function processNode(node) {
  // JSX Text
  if (node.getKind() === SyntaxKind.JsxText) {
    const text = node.getText().trim();
    if (text && text.length > 1 && /[a-zA-Z]/.test(text)) {
      extracted.push({ type: 'jsx-text', text, original: node.getText(), start: node.getStart(), end: node.getEnd() });
    }
  }
  
  // String Literals inside JSX Attributes (e.g. placeholder="...", title="...")
  if (node.getKind() === SyntaxKind.StringLiteral && node.getParentIfKind(SyntaxKind.JsxAttribute)) {
    const name = node.getParent().getNameNode().getText();
    if (['placeholder', 'title', 'alt', 'label'].includes(name)) {
      const text = node.getLiteralText().trim();
      if (text && text.length > 1 && /[a-zA-Z]/.test(text)) {
        extracted.push({ type: 'jsx-attribute', attr: name, text, original: node.getText(), start: node.getStart(), end: node.getEnd() });
      }
    }
  }

  node.forEachChild(processNode);
}

processNode(sourceFile);

// Deduplicate
const unique = [];
const seen = new Set();
for (const item of extracted) {
  if (!seen.has(item.text)) {
    seen.add(item.text);
    unique.push({ key: `appHome.string_${keyCounter++}`, text: item.text, original: item.original });
  }
}

fs.writeFileSync('scratch/app_extracted.json', JSON.stringify(unique, null, 2));
console.log(`Extracted ${unique.length} unique strings.`);
