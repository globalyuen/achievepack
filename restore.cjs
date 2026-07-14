const fs = require('fs');

const lines = fs.readFileSync('extract.jsonl', 'utf8').split('\n').filter(l => l.trim() !== '');
for (const line of lines) {
  try {
    const data = JSON.parse(line);
    fs.writeFileSync(data.file, data.content, 'utf8');
    console.log('Restored', data.file);
  } catch (e) {
    console.error('Error parsing line', e);
  }
}
