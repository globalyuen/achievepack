const fs = require('fs');
const file = 'src/pages/free-service/AchieveSuperfoodDemoPage.tsx';
let content = fs.readFileSync(file, 'utf-8');

// viewport={{ once: true, delay: X }} -> viewport={{ once: true }} transition={{ delay: X }}
// But only if there isn't already a transition prop.
// For safety, let's just do a simple string replace for the specific lines.
content = content.replace(/viewport={{ once: true, delay: 0\.2 }}/g, "viewport={{ once: true }} transition={{ delay: 0.2 }}");
content = content.replace(/viewport={{ once: true, delay: 0\.4 }}/g, "viewport={{ once: true }} transition={{ delay: 0.4 }}");
content = content.replace(/viewport={{ once: true, delay: 0\.6 }}/g, "viewport={{ once: true }} transition={{ delay: 0.6 }}");

fs.writeFileSync(file, content);
console.log('Fixed delay in', file);
