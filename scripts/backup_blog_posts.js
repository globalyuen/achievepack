import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../.env.local');
let envConfig = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/['"]/g, '');
      if (key === 'VITE_SUPABASE_URL') envConfig['URL'] = val;
      if (key === 'SUPABASE_SERVICE_KEY') envConfig['SERVICE_KEY'] = val;
    }
  });
}

const supabaseUrl = envConfig['URL'] || '';
const supabaseKey = envConfig['SERVICE_KEY'] || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log('Backing up blog posts from Supabase...');
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*');

  if (error) {
    console.error('Error fetching blogs:', error);
    process.exit(1);
  }

  const backupPath = path.resolve(__dirname, '../scripts/backup_pouch_seo_blog.json');
  fs.writeFileSync(backupPath, JSON.stringify(posts, null, 2));
  console.log(`✅ Successfully backed up ${posts.length} posts to ${backupPath}`);
  process.exit(0);
}

run();
