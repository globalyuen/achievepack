import https from 'https';

const url = 'https://www.pouch.eco/assets/index-Fj1hG2ii.js';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Downloaded JS bundle length:', data.length);
    
    // Search for supabase URL
    const supabaseUrlIdx = data.indexOf('https://ofobzjpexljkrqsgdgua.supabase.co');
    if (supabaseUrlIdx !== -1) {
      console.log('Supabase URL found in bundle!');
      // print surrounding context
      console.log(data.substring(supabaseUrlIdx - 100, supabaseUrlIdx + 100));
    } else {
      console.log('Supabase URL NOT found in bundle!');
    }

    // Search for "VITE_SUPABASE_ANON_KEY"
    const anonKeyIdx = data.indexOf('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
    if (anonKeyIdx !== -1) {
      console.log('Supabase Anon Key found in bundle!');
    } else {
      console.log('Supabase Anon Key NOT found in bundle!');
    }
  });
}).on('error', (err) => {
  console.error('Error fetching JS bundle:', err);
});
