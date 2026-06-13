import { Project, SyntaxKind } from 'ts-morph';
import fs from 'fs';
import { translations } from './app_translated.mjs';

const project = new Project();
project.addSourceFileAtPath('./src/App.tsx');
const sourceFile = project.getSourceFileOrThrow('./src/App.tsx');

// Build reverse map for matching
const revMap = new Map();
for (const [key, tObj] of Object.entries(translations)) {
  revMap.set(tObj.en, key);
}

const targets = [];

function collectNode(node) {
  if (node.getKind() === SyntaxKind.JsxText) {
    const text = node.getText().trim();
    if (revMap.has(text)) {
      targets.push({ type: 'text', node, text, key: revMap.get(text), start: node.getStart() });
    }
  }

  if (node.getKind() === SyntaxKind.StringLiteral && node.getParentIfKind(SyntaxKind.JsxAttribute)) {
    const text = node.getLiteralText().trim();
    if (revMap.has(text)) {
      targets.push({ type: 'attr', node: node.getParent(), text, key: revMap.get(text), start: node.getStart() });
    }
  }

  node.forEachChild(collectNode);
}

collectNode(sourceFile);

// Sort backwards by start position so replacing doesn't shift later nodes!
targets.sort((a, b) => b.start - a.start);

let replacedCount = 0;

for (const target of targets) {
  try {
    if (target.type === 'text') {
      const originalFull = target.node.getText();
      const newFull = originalFull.replace(target.text, `{t('${target.key}')}`);
      target.node.replaceWithText(newFull);
      replacedCount++;
    } else if (target.type === 'attr') {
      const attrName = target.node.getNameNode().getText();
      target.node.replaceWithText(`${attrName}={t('${target.key}')}`);
      replacedCount++;
    }
  } catch (e) {
    console.error(`Failed to replace ${target.text}`);
  }
}

// 1. Add hook import if missing
const importDecls = sourceFile.getImportDeclarations();
const hasUseTranslation = importDecls.some(d => d.getModuleSpecifierValue() === 'react-i18next' && d.getNamedImports().some(ni => ni.getName() === 'useTranslation'));

if (!hasUseTranslation) {
  sourceFile.addImportDeclaration({
    namedImports: ['useTranslation'],
    moduleSpecifier: 'react-i18next'
  });
}

// 2. Add const { t } = useTranslation(); in App component if missing
const appComponent = sourceFile.getFunction('App') || sourceFile.getVariableDeclaration('App')?.getInitializerIfKind(SyntaxKind.ArrowFunction);
if (appComponent) {
  const body = appComponent.getBody();
  if (body && body.getKind() === SyntaxKind.Block) {
    if (!body.getText().includes('useTranslation()')) {
      body.insertStatements(0, 'const { t } = useTranslation();');
    }
  }
}

sourceFile.saveSync();
console.log(`Replaced ${replacedCount} string occurrences in App.tsx.`);

// 4. Update JSON files
const langs = ['en', 'es', 'fr', 'zh-TW'];
for (const lang of langs) {
  const locPath = `./src/locales/${lang}.json`;
  let locData = {};
  if (fs.existsSync(locPath)) {
    locData = JSON.parse(fs.readFileSync(locPath, 'utf8'));
  }
  
  if (!locData.appHome) locData.appHome = {};
  
  for (const [key, tObj] of Object.entries(translations)) {
    const subKey = key.split('.')[1];
    locData.appHome[subKey] = tObj[lang];
  }
  
  fs.writeFileSync(locPath, JSON.stringify(locData, null, 2));
  console.log(`Updated ${lang}.json`);
}
