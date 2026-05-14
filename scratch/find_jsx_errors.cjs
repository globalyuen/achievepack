const fs = require('fs');
const content = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/topics/CompostableCertificationFAQPage.tsx', 'utf8');

const lines = content.split('\n');
lines.forEach((line, i) => {
    // Look for < or > not part of a tag
    // This is a naive check but might find something
    if (line.includes('<') && !line.includes('/>') && !line.match(/<[a-zA-Z]/) && !line.match(/<\/ [a-zA-Z]/)) {
        console.log(`Line ${i+1} has suspect <: ${line.trim()}`);
    }
    if (line.includes('>') && !line.includes('/>') && !line.match(/[a-zA-Z]> /) && !line.match(/" >/)) {
        // console.log(`Line ${i+1} has suspect >: ${line.trim()}`);
    }
});
