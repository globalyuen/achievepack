const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/pages/quotes/StandUpPouchQuotePage.tsx');

let dict = {};
let counter = 1;

function toCamelCase(str) {
    let s = str.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(' ');
    if (s.length === 0 || s[0] === '') return `text${counter++}`;
    let res = s[0].toLowerCase() + s.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    // shorten to max 30 chars
    res = res.substring(0, 30);
    if (!res) res = `text${counter++}`;
    if (dict[res] && dict[res] !== str) {
        res = res + counter++;
    }
    return res;
}

// Add import
const importDec = sourceFile.getImportDeclaration(dec => dec.getModuleSpecifierValue() === 'react-i18next');
if (!importDec) {
    sourceFile.addImportDeclaration({
        namedImports: ['useTranslation', 'Trans'],
        moduleSpecifier: 'react-i18next'
    });
}

// Add hooks
const component = sourceFile.getVariableDeclaration('StandUpPouchQuotePage');
if (component) {
    const init = component.getInitializerIfKind(SyntaxKind.ArrowFunction);
    if (init) {
        const body = init.getBody();
        if (body.getKind() === SyntaxKind.Block) {
            let hasUseTrans = false;
            body.getStatements().forEach(stmt => {
                if (stmt.getText().includes('useTranslation')) hasUseTrans = true;
            });
            if (!hasUseTrans) {
                body.insertStatements(0, `const { t } = useTranslation();\nconst p = 'seoPages.pages.standUpPouchQuote';`);
            }
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
            
            // replace node
            // Since replacing JSX text directly is tricky, we replace it with a JsxExpression
            node.replaceWithText(`{t(\`\${p}.${key}\`)}`);
        }
    } else {
        node.forEachChild(processJsxElement);
    }
}

// We only process the return statement of the component
sourceFile.forEachDescendant(node => {
    if (node.getKind() === SyntaxKind.JsxElement || node.getKind() === SyntaxKind.JsxFragment) {
        // Only run for top level JsxElements inside return
        const parent = node.getParent();
        if (parent.getKind() === SyntaxKind.ReturnStatement || parent.getKind() === SyntaxKind.ParenthesizedExpression) {
             node.forEachChild(processJsxElement);
        }
    }
});

sourceFile.saveSync();

fs.writeFileSync('extracted_stand_up.json', JSON.stringify(dict, null, 2));
console.log('Extraction complete, found ' + Object.keys(dict).length + ' strings.');
