const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/pages/topics/RecyclablePackagingGuidePage.tsx');

let dict = {};
let counter = 1;

function toCamelCase(str) {
    let s = str.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(' ');
    if (s.length === 0 || s[0] === '') return `text${counter++}`;
    let res = s[0].toLowerCase() + s.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    res = res.substring(0, 30);
    if (!res) res = `text${counter++}`;
    if (dict[res] && dict[res] !== str) {
        res = res + counter++;
    }
    return res;
}

const importDec = sourceFile.getImportDeclaration(dec => dec.getModuleSpecifierValue() === 'react-i18next');
if (!importDec) {
    sourceFile.addImportDeclaration({
        namedImports: ['useTranslation', 'Trans'],
        moduleSpecifier: 'react-i18next'
    });
}

const component = sourceFile.getVariableDeclaration('RecyclablePackagingGuidePage') || sourceFile.getFunction('RecyclablePackagingGuidePage');
if (component) {
    const body = component.getKind() === SyntaxKind.FunctionDeclaration ? component.getBody() : component.getInitializerIfKind(SyntaxKind.ArrowFunction)?.getBody();
    if (body && body.getKind() === SyntaxKind.Block) {
        let hasUseTrans = false;
        body.getStatements().forEach(stmt => {
            if (stmt.getText().includes('useTranslation')) hasUseTrans = true;
        });
        if (!hasUseTrans) {
            body.insertStatements(0, `const { t } = useTranslation();\nconst p = 'seoPages.pages.recyclablePackagingGuide';`);
        }
    }
}

function processJsxElement(node) {
    if (node.getKind() === SyntaxKind.JsxText) {
        const text = node.getText();
        const trimmed = text.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
        if (trimmed && trimmed.length > 1 && /[a-zA-Z]/.test(trimmed)) {
            const key = toCamelCase(trimmed);
            dict[key] = trimmed;
            node.replaceWithText(`{t(\`\${p}.${key}\`)}`);
        }
    } else {
        node.forEachChild(processJsxElement);
    }
}

sourceFile.forEachDescendant(node => {
    if (node.getKind() === SyntaxKind.JsxElement || node.getKind() === SyntaxKind.JsxFragment) {
        const parent = node.getParent();
        if (parent.getKind() === SyntaxKind.ReturnStatement || parent.getKind() === SyntaxKind.ParenthesizedExpression) {
             node.forEachChild(processJsxElement);
        }
    }
});

sourceFile.saveSync();

fs.writeFileSync('extracted_recyclable_guide.json', JSON.stringify(dict, null, 2));
console.log('Extraction complete, found ' + Object.keys(dict).length + ' strings.');
