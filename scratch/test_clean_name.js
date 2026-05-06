import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function cleanBusinessNameWithAI(rawName, domain) {
    const XAI_API_KEY = process.env.XAI_API_KEY;
    if (!XAI_API_KEY) return "fallback (no key)";
    
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'grok-3',
            messages: [{
                role: 'user',
                content: `Extract brand name from title: "${rawName}" for domain: "${domain}"`
            }],
            max_tokens: 20,
            temperature: 0
        })
    });
    
    const data = await response.json();
    return data;
}

async function run() {
    console.log('Testing XAI with grok-3...');
    const result = await cleanBusinessNameWithAI('Krave Beauty – Skincare for All', 'kravebeauty.com');
    console.log(JSON.stringify(result, null, 2));
}

run();
