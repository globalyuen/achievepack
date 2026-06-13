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

let replacedCount = 0;

function processNode(node) {
  // Try children first (bottom-up replacement)
  node.forEachChild(processNode);

  if (node.getKind() === SyntaxKind.JsxText) {
    const text = node.getText().trim();
    if (revMap.has(text)) {
      const key = revMap.get(text);
      // Replace JSX text with {t('key')}
      const newText = node.getText().replace(text, `{t('${key}')}`);
      node.replaceWithText(newText);
      replacedCount++;
    }
  }

  if (node.getKind() === SyntaxKind.StringLiteral && node.getParentIfKind(SyntaxKind.JsxAttribute)) {
    const text = node.getLiteralText().trim();
    if (revMap.has(text)) {
      const key = revMap.get(text);
      // Replace attribute="string" with attribute={t('key')}
      const attrNode = node.getParent();
      const attrName = attrNode.getNameNode().getText();
      attrNode.replaceWithText(`${attrName}={t('${key}')}`);
      replacedCount++;
    }
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

// 3. Process strings
processNode(sourceFile);

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

