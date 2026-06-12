const fs = require('fs');

const fileContent = fs.readFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/PouchDielineCreatorPage.tsx', 'utf8');

const stack = [];
let inString = null; // can be ", ', or `
let isComment = false;
let isMultilineComment = false;
let isJsxComment = false;

for (let i = 0; i < fileContent.length; i++) {
  const char = fileContent[i];
  const nextChar = fileContent[i + 1];
  const prevChar = fileContent[i - 1];

  // Handle comments
  if (isComment) {
    if (char === '\n') {
      isComment = false;
    }
    continue;
  }
  if (isMultilineComment) {
    if (char === '*' && nextChar === '/') {
      isMultilineComment = false;
      i++;
    }
    continue;
  }
  if (isJsxComment) {
    if (char === '*' && nextChar === '/' && fileContent[i + 2] === '}') {
      isJsxComment = false;
      i += 2;
    }
    continue;
  }

  // Detect comments
  if (char === '/' && nextChar === '/') {
    isComment = true;
    i++;
    continue;
  }
  if (char === '/' && nextChar === '*') {
    isMultilineComment = true;
    i++;
    continue;
  }
  if (char === '{' && nextChar === '/' && fileContent[i + 2] === '}') {
    // Empty comment or similar
    continue;
  }
  if (char === '{' && nextChar === '/' && fileContent[i + 2] === '*') {
    isJsxComment = true;
    i += 2;
    continue;
  }

  // Handle strings (rough approach)
  if (inString) {
    if (char === inString && prevChar !== '\\') {
      inString = null;
    }
    continue;
  }

  if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
    inString = char;
    continue;
  }

  // Check brackets
  if (char === '{' || char === '(' || char === '[') {
    stack.push({ char, index: i, line: getLineNumber(fileContent, i) });
  } else if (char === '}' || char === ')' || char === ']') {
    const last = stack.pop();
    if (!last) {
      console.log(`Extra closing char '${char}' at line ${getLineNumber(fileContent, i)}, index ${i}`);
      continue;
    }
    const match = (last.char === '{' && char === '}') ||
                  (last.char === '(' && char === ')') ||
                  (last.char === '[' && char === ']');
    if (!match) {
      console.log(`Mismatched char '${char}' at line ${getLineNumber(fileContent, i)}: expected matching for '${last.char}' from line ${last.line}`);
      stack.push(last); // restore
    }
  }
}

console.log(`Remaining unclosed items in stack: ${stack.length}`);
console.log(`Final states - inString: ${inString}, isComment: ${isComment}, isMultilineComment: ${isMultilineComment}, isJsxComment: ${isJsxComment}`);
stack.forEach(item => {
  console.log(`Unclosed '${item.char}' from line ${item.line}`);
});

function getLineNumber(text, index) {
  return text.substring(0, index).split('\n').length;
}
