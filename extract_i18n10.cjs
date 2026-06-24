const { Project, SyntaxKind } = require('ts-morph');
const fs = require('fs');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/pages/admin/DailyReportsPage.tsx');

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

const p = 'seoPages.pages.dailyReports';

function processNode(node) {
    if (node.getKind() === SyntaxKind.JsxText) {
        const text = node.getText();
        const trimmed = text.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
        if (trimmed && trimmed.length > 1 && /[a-zA-Z]/.test(trimmed)) {
            const key = toCamelCase(trimmed);
            dict[key] = trimmed;
            node.replaceWithText(`{t(\`${p}.${key}\`)}`);
        }
    } else if (node.getKind() === SyntaxKind.JsxAttribute) {
        const name = node.getName();
        if (name === 'placeholder') {
            const initializer = node.getInitializer();
            if (initializer) {
                if (initializer.getKind() === SyntaxKind.StringLiteral) {
                    const text = initializer.getLiteralText();
                    if (text && /[a-zA-Z]/.test(text)) {
                        const key = toCamelCase(text);
                        dict[key] = text;
                        node.setInitializer(`{t(\`${p}.${key}\`)}`);
                    }
                } else if (initializer.getKind() === SyntaxKind.JsxExpression) {
                    const exp = initializer.getExpression();
                    if (exp && exp.getKind() === SyntaxKind.StringLiteral) {
                        const text = exp.getLiteralText();
                        if (text && /[a-zA-Z]/.test(text)) {
                            const key = toCamelCase(text);
                            dict[key] = text;
                            node.setInitializer(`{t(\`${p}.${key}\`)}`);
                        }
                    }
                }
            }
        }
        node.forEachChild(processNode);
    } else {
        node.forEachChild(processNode);
    }
}

sourceFile.forEachDescendant(node => {
    if (node.getKind() === SyntaxKind.JsxElement || node.getKind() === SyntaxKind.JsxSelfClosingElement || node.getKind() === SyntaxKind.JsxFragment) {
        const parent = node.getParent();
        if (parent.getKind() === SyntaxKind.ReturnStatement || parent.getKind() === SyntaxKind.ParenthesizedExpression || parent.getKind() === SyntaxKind.JsxElement) {
             node.forEachChild(processNode);
        }
    }
});

sourceFile.saveSync();

fs.writeFileSync('extracted_daily_reports_placeholders.json', JSON.stringify(dict, null, 2));
console.log('Extraction complete, found ' + Object.keys(dict).length + ' strings.');
