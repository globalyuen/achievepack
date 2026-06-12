import puppeteer from 'puppeteer';

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  try {
    console.log('Navigating to https://www.pouch.eco/blog ...');
    await page.goto('https://www.pouch.eco/blog', { waitUntil: 'networkidle2', timeout: 30000 });

    console.log('Evaluating fetch query in page context...');
    const result = await page.evaluate(async () => {
      try {
        const url = 'https://ofobzjpexljkrqsgdgua.supabase.co/rest/v1/pouch_seo_blog?select=id,title,slug,content&limit=5';
        const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mb2J6anBleGxqa3Jxc2dkZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxODAwODcsImV4cCI6MjA4MDc1NjA4N30.n6RbN_1139TDXBoXQTvCRvucFgB1XNvKCkmKMedpKWs';
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'apikey': key,
            'Authorization': `Bearer ${key}`
          }
        });
        
        if (!response.ok) {
          return { error: `HTTP error! status: ${response.status} ${response.statusText}` };
        }
        
        const json = await response.json();
        return { success: true, count: json.length, sample: json.map(p => ({ title: p.title, slug: p.slug })) };
      } catch (err) {
        return { error: err.message };
      }
    });

    console.log('Result from page context:', result);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await browser.close();
  }
}

run();
