const fs = require('fs');
const filePath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/topics/CompostableCertificationFAQPage.tsx';
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
    const lineNum = i + 1;
    // Check for > not part of a tag
    // A > is part of a tag if it's immediately preceded by / or " or ' or a tag name
    // or if it's followed by < (e.g. </div>)
    
    // Simplest way: find all > and check context
    let pos = line.indexOf('>');
    while (pos !== -1) {
        const prevChar = pos > 0 ? line[pos - 1] : '';
        const nextChar = pos < line.length - 1 ? line[pos + 1] : '';
        
        // If it's not a closing tag >
        const isClosingTag = (prevChar === '/') || (line.substring(0, pos).lastIndexOf('<') > line.substring(0, pos).lastIndexOf('>'));
        
        if (!isClosingTag) {
            console.log(`Suspect > at Line ${lineNum}, Column ${pos + 1}: ${line.trim()}`);
        }
        
        pos = line.indexOf('>', pos + 1);
    }
});
