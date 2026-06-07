const fs = require('fs');
const path = require('path');

const subagents = [
  { id: '102533e3-55c0-4b11-898f-b33a57c926f0', name: 'Subagent 1 (Solutions & Recyclable)' },
  { id: '346afec2-0098-415c-8cb7-76d525553205', name: 'Subagent 2 (B2B Industry)' },
  { id: 'd4953b7c-598b-40ef-950e-2719563fcac5', name: 'Subagent 3 (B2B Composting & Function)' },
  { id: '4fa50ae4-4f1b-4031-88a5-951f0e95e114', name: 'Subagent 4 (Pouch Eco)' },
  { id: '027c147d-89b0-462a-846b-1f9a6bc96843', name: 'Subagent 5 (Pouch Materials)' }
];

for (const sub of subagents) {
  const logPath = `/Users/ryanmacmini/.gemini/antigravity/brain/${sub.id}/.system_generated/logs/transcript.jsonl`;
  console.log(`\n==================================================`);
  console.log(`Subagent: ${sub.name} (${sub.id})`);
  if (!fs.existsSync(logPath)) {
    console.log('Log file does not exist.');
    continue;
  }
  
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim());
  
  // Let's print the last 3 planner responses
  let found = 0;
  for (let i = lines.length - 1; i >= 0; i--) {
    try {
      const step = JSON.parse(lines[i]);
      if (step.type === 'PLANNER_RESPONSE' && step.content) {
        console.log(`[Step ${step.step_index}] ${step.status === 'ERROR' ? '(ERROR) ' : ''}Response:`);
        console.log(step.content);
        console.log('--------------------------------------------------');
        found++;
        if (found >= 2) break;
      }
    } catch (e) {}
  }
}
