const translate = require('google-translate-api-x');

async function test() {
  try {
    const res = await translate(['Hello', 'World', 'Special packaging'], { to: 'fr' });
    console.log('Result:', res.map(r => r.text));
  } catch (e) {
    console.error('Error:', e);
  }
}
test();
