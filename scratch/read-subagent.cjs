const fs = require('fs');
const path = require('path');

const logPath = '/Users/ryanmacmini/.gemini/antigravity/brain/8cd76c48-d262-4032-a405-d8c6e80ad5f9/.system_generated/logs/transcript.jsonl';

if (!fs.existsSync(logPath)) {
  console.log('Log file does not exist at:', logPath);
  process.exit(1);
}

const lines = fs.readFileSync(logPath, 'utf8').split('\n');
console.log(`Total lines in log: ${lines.length}`);

// Let's find any step containing the final result, or print the last few steps.
for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i].trim();
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'PLANNER_RESPONSE' || obj.type === 'USER_INPUT' || obj.content) {
      console.log(`--- Step ${obj.step_index} (${obj.type}) ---`);
      const preview = obj.content ? obj.content.substring(0, 1500) : '';
      console.log(preview);
      if (obj.content && obj.content.length > 1500) {
        console.log('... TRUNCATED ...');
      }
      if (obj.type === 'PLANNER_RESPONSE') {
        // Find if this is the final response
        break;
      }
    }
  } catch (err) {
    // Ignore invalid JSON lines
  }
}
