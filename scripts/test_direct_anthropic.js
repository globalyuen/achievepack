async function test() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('No ANTHROPIC_API_KEY found in process.env');
    process.exit(1);
  }

  console.log('Sending test request to api.anthropic.com...');
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 10,
        messages: [{ role: 'user', content: 'Hello, respond with exactly "OK"' }]
      })
    });

    const status = res.status;
    const json = await res.json();
    console.log('Response Status:', status);
    console.log('Response JSON:', json);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

test();
