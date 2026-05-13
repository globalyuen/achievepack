const fs = require('fs');
const dotenv = require('dotenv');
const env = dotenv.parse(fs.readFileSync('.env.local'));

const systemPrompt = `You are an expert logistics extractor for Achieve Pack.
Analyze the factory quote and return ONLY a raw JSON array. SPEED IS CRITICAL.
Target < 8s response. Extract all SKU/product pricing.
IMPORTANT: Translate ALL Chinese text into professional English (including product_name, material, thickness, features, notes, size, and plate_details). Do not include ANY Chinese characters in the output.
[
  {
    "product_name": "Product category (in English)",
    "print_type": "Digital Print or Cylinder Print",
    "plate_details": "If cylinder, detail limit per size/color/design and if flat bottom gusset has separate plate (in English)",
    "material": "Material spec and thickness (in English)",
    "size": "mm dims",
    "features": "Concise key info (in English)",
    "notes": "Short warning (in English)",
    "plate_fee_rmb": <number>,
    "designs_count": <number | null>,
    "pricing": [{ "qty": <number>, "unit_rmb": <number>, "weight_kg": <number> }]
  }
]
Exhaustive items, but MINIMAL text tokens. No markdown. If multiple designs (款數) are mentioned (e.g. 款數4), capture it in designs_count. Total qty should still be in pricing.qty. Identify if it's Digital (數碼) or Cylinder Print (凹版/制版). If cylinder, capture plate cost details per color/design and note if flat bottom gusset requires separate plates. The output must be completely translated to professional English.`;

const testText = `
商品名称: 环保咖啡豆包装袋
材质: 牛皮纸/VMPET/PE
厚度: 150mic
尺寸: 200x300+40mm
印刷: 凹版印刷 (8色)
版费: 400元/色
数量/价格:
10000个 - 1.2元/个 - 150kg
20000个 - 1.0元/个 - 300kg
备注: 包含排气阀，可自然降解。
`;

async function test() {
  const start = Date.now();
  try {
    const res = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${env.XAI_API_KEY || env.VITE_XAI_API_KEY}` },
      body: JSON.stringify({
        model: 'grok-3',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: testText }],
        max_tokens: 1500,
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
