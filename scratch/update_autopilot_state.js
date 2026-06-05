import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const statePath = path.join(__dirname, '../src/data/autopilot_state.json');

if (!fs.existsSync(statePath)) {
  console.error("State file not found.");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(statePath, 'utf8'));

const slug = "sourcing-compostable-coffee-bags";
const newKeyword = {
  slug,
  status: "Pending Approval",
  volume: 2200,
  keyword: "sourcing compostable coffee bags",
  difficulty: "Medium"
};

// Update or push to keywordBank
const index = data.keywordBank.findIndex(item => item.slug === slug);
if (index !== -1) {
  data.keywordBank[index] = newKeyword;
  console.log(`Updated existing keyword entry in keywordBank for: ${slug}`);
} else {
  data.keywordBank.push(newKeyword);
  console.log(`Pushed new keyword entry in keywordBank for: ${slug}`);
}

// Push to logs
const newLog = {
  action: "Autopilot Generation Draft",
  message: `Soro Pipeline generated draft article for keyword "sourcing compostable coffee bags" to /blog/${slug} (Pending Approval)`,
  timestamp: new Date().toISOString()
};
data.logs.unshift(newLog); // Prepend to show at the top/beginning or check ordering
console.log(`Pushed log entry: ${newLog.message}`);

// Save back
fs.writeFileSync(statePath, JSON.stringify(data, null, 2), 'utf8');
console.log("Successfully updated autopilot_state.json");
