const fs = require('fs');
const path = require('path');

const subagents = [
  { id: '73e7e9e2-5088-42b6-b74b-121d23af6cd0', role: 'Imagen Batch 1 Generator' },
  { id: '85d55416-25cc-401c-8ceb-dd523c5a2163', role: 'Imagen Batch 2 Generator' },
  { id: '98ab2624-d498-4505-ae5a-7bf32bc67aec', role: 'Imagen Batch 3 Generator' },
  { id: '52a22cf3-7fc1-4b50-98c6-d3e0e9f45413', role: 'Imagen Batch 4 Generator' },
  { id: '4da6799b-3c8d-4cd4-b6be-08103113ad5e', role: 'Imagen Batch 5 Generator' }
];

for (const sub of subagents) {
  const logPath = `/Users/ryanmacmini/.gemini/antigravity/brain/${sub.id}/.system_generated/logs/transcript.jsonl`;
  console.log(`\n==================================================`);
  console.log(`Subagent: ${sub.role} (${sub.id})`);
  if (!fs.existsSync(logPath)) {
    console.log('Log file does not exist.');
    continue;
  }
  
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim());
  console.log(`Total steps logged: ${lines.length}`);
  
  // Find last few tool calls or planner responses
  let found = 0;
  for (let i = lines.length - 1; i >= 0; i--) {
    try {
      const step = JSON.parse(lines[i]);
      if (step.type === 'PLANNER_RESPONSE' && step.content) {
        console.log(`[Step ${step.step_index}] Response:`);
        console.log(step.content.slice(0, 500));
        if (step.content.length > 500) console.log('...');
        found++;
        if (found >= 2) break;
      }
    } catch (e) {}
  }
}
