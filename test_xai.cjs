const fs = require('fs');
const dotenv = require('dotenv');
const env = dotenv.parse(fs.readFileSync('.env.local'));

async function test() {
  const start = Date.now();
  try {
    const res = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.XAI_API_KEY || env.VITE_XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3-beta',
        messages: [{ role: 'system', content: 'You are an expert. Respond with "Hello" in JSON format {"msg": "Hello"}.' }],
        max_tokens: 100,
        temperature: 0,
      })
    });
    const data = await res.json();
    console.log("Time:", Date.now() - start, "ms");
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
test();
