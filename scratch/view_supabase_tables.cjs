const fs = require('fs');

const path = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/supabase_create_tables.sql';

if (fs.existsSync(path)) {
  const content = fs.readFileSync(path, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('source') || line.includes('url') || line.includes('link') || line.includes('taobao')) {
      console.log(`L${index + 1}: ${line.trim()}`);
    }
  });
} else {
  console.log('File not found');
}
