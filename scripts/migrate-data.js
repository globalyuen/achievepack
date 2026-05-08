import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_DIR = path.join(__dirname, '../src/pages/topics');
const OUTPUT_FILE = path.join(__dirname, '../src/data/pouch-migrations.json');

if (!fs.existsSync(TOPICS_DIR)) {
  console.error(`Directory not found: ${TOPICS_DIR}`);
  process.exit(1);
}

const files = fs.readdirSync(TOPICS_DIR).filter(f => f.endsWith('.tsx'));

const migrations = {};

files.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(TOPICS_DIR, file), 'utf8');
    const slug = file.replace('Page.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    
    // Basic extraction logic (Regex based)
    const titleMatch = content.match(/title="([^"]+)"/);
    const descMatch = content.match(/description="([^"]+)"/);
    const introMatch = content.match(/introSummary="([^"]+)"/);
    
    if (titleMatch && descMatch) {
      migrations[slug] = {
        title: titleMatch[1],
        heroTitle: titleMatch[1],
        subtitle: introMatch ? introMatch[1] : descMatch[1],
        description: descMatch[1],
        keywords: ["sustainable packaging", "pouch.eco", slug.replace(/-/g, ' ')],
        badge: "MIGRATED_2026",
        badgeColor: "lime",
        accentColor: "#00FFFF",
        heroBgColor: "white",
        sections: [
          {
            title: "Sustainable Solution",
            content: "Certified materials designed for longevity and environmental responsibility.",
            icon: "Zap",
            badge: "AUTO_MIGRATE",
            badgeColor: "cyan"
          }
        ],
        faqs: [
          { q: "Is this material food-safe?", a: "Yes, all materials in our catalog are FDA/EU compliant and food-safe certified." }
        ],
        ctaTitle: "Switch to Green.",
        ctaSubtitle: "Contact us today for a free consultation."
      };
    }
  } catch (err) {
    console.warn(`Skipping ${file}: ${err.message}`);
  }
});

const DATA_DIR = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(migrations, null, 2));
console.log(`Successfully mapped ${Object.keys(migrations).length} pages to ${OUTPUT_FILE}`);
