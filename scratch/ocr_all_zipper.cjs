const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const imgDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/taobao/clear-matte-zipper-stand-up-pouch';
const swiftOcr = '/Users/ryanmacmini/.gemini/antigravity/brain/7fad07bc-802f-49e4-8b19-86f73a99990c/scratch/ocr.swift';
const outputFilePath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/scratch/ocr-results-zipper.txt';

const files = fs.readdirSync(imgDir).filter(f => !f.startsWith('.') && (f.endsWith('.jpg') || f.endsWith('.webp') || f.endsWith('.png')));

console.log(`Running OCR on ${files.length} files...`);

let finalOutput = '';

files.forEach((file, index) => {
  const filePath = path.join(imgDir, file);
  console.log(`[${index + 1}/${files.length}] Processing ${file}...`);
  try {
    const stdout = execSync(`swift "${swiftOcr}" "${filePath}"`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    if (stdout.trim()) {
      finalOutput += `=== FILE: ${file} ===\n${stdout.trim()}\n\n`;
    }
  } catch (err) {
    console.log(`Error or no text on ${file}`);
  }
});

fs.writeFileSync(outputFilePath, finalOutput, 'utf8');
console.log(`OCR complete! Saved to ${outputFilePath}`);
