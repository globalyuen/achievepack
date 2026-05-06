import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testSerp() {
    const key = process.env.SERPAPI_KEY;
    if (!key) {
        console.log('No SERPAPI_KEY found');
        return;
    }
    const url = `https://serpapi.com/search.json?engine=google&q=coffee&api_key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
}

testSerp();
