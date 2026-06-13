import { Project, SyntaxKind } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths("src/components/KnowHowCarousel.tsx");
project.addSourceFilesAtPaths("src/components/WorkCarousel.tsx");

function injectTranslation(filePath) {
  const file = project.getSourceFileOrThrow(filePath);
  
  // Add import { useTranslation } from 'react-i18next';
  const imports = file.getImportDeclarations();
  const hasI18n = imports.some(i => i.getModuleSpecifierValue() === 'react-i18next');
  if (!hasI18n) {
    file.addImportDeclaration({
      namedImports: ['useTranslation'],
      moduleSpecifier: 'react-i18next'
    });
  }

  // Find component function
  const func = file.getFunction(filePath.includes('KnowHow') ? 'KnowHowCarousel' : 'WorkCarousel');
  
  // Add hook inside function
  if (!func.getText().includes('useTranslation')) {
    func.insertStatements(0, "const { t } = useTranslation();");
  }

  // Replace item.title, item.desc, item.tag
  const jsxExpressions = file.getDescendantsOfKind(SyntaxKind.JsxExpression);
  jsxExpressions.forEach(expr => {
    const text = expr.getText();
    if (text === '{item.title}') {
      expr.replaceWithText(`{t(\`carouselData.\${item.keyPrefix}.title\`, item.title)}`);
    } else if (text === '{item.desc}') {
      expr.replaceWithText(`{t(\`carouselData.\${item.keyPrefix}.desc\`, item.desc)}`);
    } else if (text === '{item.tag}') {
      expr.replaceWithText(`{t(\`carouselData.\${item.keyPrefix}.tag\`, item.tag)}`);
    }
  });

  file.saveSync();
  console.log(`Updated ${filePath}`);
}

injectTranslation("src/components/KnowHowCarousel.tsx");
injectTranslation("src/components/WorkCarousel.tsx");

