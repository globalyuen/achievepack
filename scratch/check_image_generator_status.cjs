const fs = require('fs');

const logPath = '/Users/ryanmacmini/.gemini/antigravity/brain/3a2565c1-a20e-422e-bf92-3d3937abefe4/.system_generated/logs/transcript.jsonl';

if (!fs.existsSync(logPath)) {
  console.log('Log file does not exist.');
  process.exit(1);
}

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n').filter(l => l.trim());
console.log(`Total steps logged: ${lines.length}`);

for (let i = Math.max(0, lines.length - 20); i < lines.length; i++) {
  try {
    const step = JSON.parse(lines[i]);
    console.log(`[Step ${step.step_index}] Source: ${step.source}, Type: ${step.type}`);
    if (step.tool_calls) {
      console.log(`  Tool Calls: ${step.tool_calls.map(tc => tc.name || tc.Method).join(', ')}`);
    }
    if (step.content && step.content.length > 0) {
      console.log(`  Content: ${step.content.slice(0, 300)}...`);
    }
  } catch (e) {}
}

const taskLogPath = '/Users/ryanmacmini/.gemini/antigravity/brain/3a2565c1-a20e-422e-bf92-3d3937abefe4/.system_generated/tasks/task-29.log';
if (fs.existsSync(taskLogPath)) {
  console.log('\n=================== Task 29 Log ===================');
  console.log(fs.readFileSync(taskLogPath, 'utf8'));
} else {
  console.log('\nTask 29 log file not found at:', taskLogPath);
}
