import type { VercelRequest, VercelResponse } from '@vercel/node'

// ============ PRODUCT CATALOG ============
// Synced with productData.ts - Use correct product IDs
const PRODUCT_CATALOG = [
  // Sample Products (from productData.ts)
  { id: 'sample-sizing-pack', name: 'Sizing Pack', category: 'sample', basePrice: 40, moq: 1, description: '7 different pouch sizes to test before ordering. Perfect for finding the right fit.', materials: ['Mono PE'], bestFor: ['testing', 'sizing'] },
  { id: 'sample-assorted-eco', name: 'Assorted Eco Pouches Sample', category: 'sample', basePrice: 40, moq: 1, description: 'Explore our eco-friendly materials: PCR, Bio-based, Recyclable, Compostable pouches.', materials: ['PCR', 'BioPE', 'Mono PE', 'Compostable'], bestFor: ['eco', 'sustainable'] },
  { id: 'sample-top-film', name: 'Custom Digital Printed Top Film', category: 'sample', basePrice: 60, moq: 1, description: 'Sample of custom printed top sealing film for trays.', materials: ['PET/PE'], bestFor: ['lidding', 'trays'] },
  { id: 'sample-hand-sealed', name: 'Custom Digital Printed Hand Sealed Pouches', category: 'sample', basePrice: 60, moq: 1, description: 'Sample of custom printed heat-sealed pouches.', materials: ['Various'], bestFor: ['sachets', 'samples'] },
  
  // Conventional Digital Products (correct IDs from productData.ts)
  { id: 'conven-3ss-clear-xzip', name: '3 Side Seal Pouch – Clear', category: 'conventional-digital', basePrice: 90, moq: 100, description: 'Clear flat pouch for samples and sachets. Low barrier.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['samples', 'sachets', 'dry goods'] },
  { id: 'conven-3ss-clear-zip', name: '3 Side Seal Pouch – Clear, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Clear flat resealable pouch. Low barrier.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['samples', 'sachets'] },
  { id: 'conven-3ss-met-xzip', name: '3 Side Seal Pouch – Metalised', category: 'conventional-digital', basePrice: 95, moq: 100, description: 'Metalised flat pouch with high barrier for moisture/oxygen sensitive products.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'snacks'] },
  { id: 'conven-3ss-met-zip', name: '3 Side Seal Pouch – Metalised, With Zipper', category: 'conventional-digital', basePrice: 105, moq: 100, description: 'Metalised resealable flat pouch with high barrier.', shape: '3-side-seal', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'snacks'] },
  { id: 'conven-sup-clear-xzip', name: 'Stand Up Pouch – Clear', category: 'conventional-digital', basePrice: 90, moq: 100, description: 'Clear stand-up pouch with excellent shelf presence.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['snacks', 'candy', 'dry goods'] },
  { id: 'conven-sup-clear-zip', name: 'Stand Up Pouch – Clear, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Resealable clear stand-up pouch. Best seller for snacks.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'low', bestFor: ['snacks', 'candy', 'granola'] },
  { id: 'conven-sup-met-xzip', name: 'Stand Up Pouch – Metalised', category: 'conventional-digital', basePrice: 95, moq: 100, description: 'Metalised stand-up pouch with high barrier protection.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'nuts'] },
  { id: 'conven-sup-met-zip', name: 'Stand Up Pouch – Metalised, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Premium metalised stand-up pouch with zipper. HIGH BARRIER - Best for coffee, tea, and moisture-sensitive products.', shape: 'stand-up', turnaround: '2-3 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'snacks', 'nuts', 'dried fruit'] },
  
  // Eco Digital Products (correct IDs from productData.ts)
  { id: 'eco-3side', name: 'Eco Digital – 3 Side Seal Pouch', category: 'eco-digital', basePrice: 100, moq: 1000, description: 'Eco-friendly 3-side seal flat pouch. Available in PCR, BioPE, Mono PE, Compostable.', materials: ['Mono PE', 'PCR', 'BioPE', 'Compostable'], turnaround: '3-4 weeks', bestFor: ['samples', 'sachets'] },
  { id: 'eco-centerseal', name: 'Eco Digital – Center Seal Pouch', category: 'eco-digital', basePrice: 110, moq: 1000, description: 'Traditional pillow-style eco pouch. Center seal design.', materials: ['Mono PE', 'PCR', 'BioPE'], turnaround: '3-4 weeks', bestFor: ['snacks', 'candy'] },
  { id: 'eco-standup', name: 'Eco Digital – Stand Up Pouch', category: 'eco-digital', basePrice: 120, moq: 1000, description: 'Premium eco stand-up pouch. Most popular eco option for retail.', materials: ['Mono PE', 'PCR', 'BioPE', 'Compostable'], turnaround: '3-4 weeks', bestFor: ['snacks', 'granola', 'pet treats'] },
  { id: 'eco-boxbottom', name: 'Eco Digital – Box Bottom Pouch', category: 'eco-digital', basePrice: 160, moq: 1000, description: 'Square bottom eco pouch with premium shelf presence. Great for coffee.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'premium products'] },
  { id: 'eco-flatbottom', name: 'Eco Digital – Flat Bottom Pouch', category: 'eco-digital', basePrice: 170, moq: 1000, description: 'Eco flat bottom bag with excellent shelf stability. Premium look for coffee and tea.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'granola', 'premium snacks'] },
  { id: 'eco-sidegusset', name: 'Eco Digital – Side Gusset Pouch', category: 'eco-digital', basePrice: 150, moq: 1000, description: 'Classic coffee bag style with eco materials. Traditional look.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks', barrier: 'high', bestFor: ['coffee', 'tea', 'beans', 'rice'] },
  { id: 'eco-quad', name: 'Eco Digital – Quad Seal Pouch', category: 'eco-digital', basePrice: 155, moq: 1000, description: 'Four-corner sealed eco pouch for maximum shelf impact.', materials: ['Kraft Paper', 'Mono PE'], turnaround: '3-4 weeks', bestFor: ['pet food', 'bulk products'] },
  
  // Eco Stock Products (correct IDs from productData.ts)
  { id: 'eco-stock-header', name: 'Stock Compostable Header Bag', category: 'eco-stock', basePrice: 42, moq: 100, description: 'Ready-made compostable bag with hang hole. Ships in 3-5 days. Perfect for retail display.', materials: ['Compostable'], inStock: true, turnaround: '3-5 days', bestFor: ['retail', 'display', 'quick ship'] },
  { id: 'eco-stock-mailer', name: 'Stock Compostable Mailer Bag', category: 'eco-stock', basePrice: 42, moq: 100, description: 'Compostable shipping mailer for eco-conscious e-commerce. Ships in 3-5 days.', materials: ['Compostable'], inStock: true, turnaround: '3-5 days', bestFor: ['shipping', 'e-commerce', 'mailers'] },
]

// FAQ Knowledge Base
const FAQ_KNOWLEDGE = [
  { keywords: ['moq', 'minimum', 'order', 'quantity'], answer: 'Minimum Order Quantity: Sample packs start from 1 unit ($15-25). Digital printed pouches from 100 pieces. Eco digital from 1,000 pieces. Volume discounts start at 5,000+ pieces.' },
  { keywords: ['turnaround', 'time', 'production', 'lead', 'how long'], answer: 'Production time: Sample packs ship in 3-5 days. Conventional digital print: 2-3 weeks. Eco digital print: 3-4 weeks. Large bulk orders: 6-8 weeks.' },
  { keywords: ['shipping', 'delivery', 'freight'], answer: 'We offer Air Freight (5-7 days), Sea Freight (25-35 days), and Dual Shipping options. Minimum shipping cost is $40. Free shipping on conventional digital orders.' },
  { keywords: ['compostable', 'biodegradable', 'home compost'], answer: 'Our compostable pouches are certified EN13432 and ASTM D6400 for industrial composting. Some products are also OK Compost Home certified for backyard composting.' },
  { keywords: ['recyclable', 'recycle', 'mono pe', 'pcr'], answer: 'Mono PE pouches are 100% recyclable in PE recycling streams. PCR (Post-Consumer Recycled) options contain 30% recycled content.' },
  { keywords: ['custom', 'print', 'design', 'artwork'], answer: 'All digital printed pouches support full-color CMYK printing with matte or glossy finish. We provide free artwork templates after order confirmation.' },
  { keywords: ['barrier', 'moisture', 'oxygen', 'protection'], answer: 'We offer Clear/Low barrier (glossy) for dry goods and Metalised/High barrier (matte) for products needing moisture/oxygen protection like coffee and snacks.' },
  { keywords: ['coffee', 'valve', 'degassing'], answer: 'For coffee packaging, we recommend metalised high-barrier pouches with optional one-way degassing valve. Flat bottom and side gusset styles are most popular.' },
  { keywords: ['certification', 'certified', 'en13432', 'astm', 'bpi'], answer: 'Available certifications: EN13432, ASTM D6400, OK Compost Home, OK Compost Industrial, GRS (recycled content), BPI certified, FSC (paper products).' },
  { keywords: ['size', 'dimension', 'capacity'], answer: 'We offer 14 standard sizes from 90x130mm to 260x350mm. Custom sizes available for orders of 5,000+ pieces. Contact us for specific capacity needs.' },
]

// ============ RETRIEVAL LAYER ============
function findRelevantProducts(question: string): typeof PRODUCT_CATALOG {
  const q = question.toLowerCase()
  
  // Special handling for coffee/high barrier queries - prioritize best matches
  if (q.includes('coffee') || q.includes('roast') || q.includes('bean') || 
      q.includes('high barrier') || q.includes('moisture') || q.includes('freshness')) {
    const coffeeProducts = PRODUCT_CATALOG.filter(p => 
      (p as any).bestFor?.some((b: string) => ['coffee', 'tea'].includes(b)) ||
      (p as any).barrier === 'high' ||
      p.description.toLowerCase().includes('coffee')
    )
    if (coffeeProducts.length > 0) return coffeeProducts.slice(0, 5)
  }
  
  // Special handling for eco/compostable queries
  if (q.includes('eco') || q.includes('sustainable') || q.includes('compostable') || 
      q.includes('recyclable') || q.includes('green') || q.includes('biodegradable')) {
    const ecoProducts = PRODUCT_CATALOG.filter(p => 
      p.category.includes('eco') ||
      (p as any).materials?.some((m: string) => 
        ['Compostable', 'BioPE', 'PCR', 'Mono PE'].includes(m)
      )
    )
    if (ecoProducts.length > 0) return ecoProducts.slice(0, 5)
  }
  
  // Special handling for sample queries
  if (q.includes('sample') || q.includes('test') || q.includes('try')) {
    return PRODUCT_CATALOG.filter(p => p.category === 'sample').slice(0, 4)
  }
  
  // General keyword matching with scoring
  const keywords = q.split(/\s+/).filter(w => w.length > 2)
  
  const scored = PRODUCT_CATALOG.map(product => {
    const searchText = `${product.name} ${product.description} ${product.category} ${(product as any).materials?.join(' ') || ''} ${(product as any).shape || ''} ${(product as any).bestFor?.join(' ') || ''}`.toLowerCase()
    let score = 0
    keywords.forEach(kw => {
      if (searchText.includes(kw)) score += 1
      if (product.name.toLowerCase().includes(kw)) score += 2
      if ((product as any).bestFor?.some((b: string) => b.includes(kw))) score += 3
    })
    return { product, score }
  })
  
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.product)
}

function findRelevantFAQs(question: string): string[] {
  const q = question.toLowerCase()
  return FAQ_KNOWLEDGE
    .filter(faq => faq.keywords.some(kw => q.includes(kw)))
    .map(faq => faq.answer)
}

// ============ xAI INTEGRATION ============
async function callXAI(userQuestion: string, context: string): Promise<string> {
  const XAI_API_KEY = process.env.XAI_API_KEY
  
  if (!XAI_API_KEY) {
    return "I'm currently unable to process your request. Please contact us directly at ryan@achievepack.com or WhatsApp +852 6970 4411."
  }

  const systemPrompt = `You are a helpful packaging assistant for AchievePack, specializing in eco-friendly flexible packaging solutions (pouches, bags, mailers).

IMPORTANT RULES:
1. Only use product and price information provided in the CONTEXT below.
2. NEVER invent or guess prices. If exact price is not in context, say "Please check our Store or contact us for the latest price."
3. Be friendly, professional, and concise. Keep responses under 150 words.
4. For complex quotes, encourage booking a free consultation via Calendly.
5. Always provide helpful next steps.
6. If asked about competitors, politely redirect to our offerings.

CONTEXT:
${context}

QUICK FACTS:
- Conventional digital MOQ: 100 pieces
- Eco digital MOQ: 1,000 pieces
- Sample packs: $15-25, ships in 3-5 days
- All prices include shipping ($40 minimum)
- Contact: ryan@achievepack.com, WhatsApp +852 6970 4411`

  try {
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'grok-3-mini-beta',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userQuestion },
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      console.error('xAI API error:', response.status, await response.text())
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices?.[0]?.message?.content || "I couldn't process your request. Please try again."
  } catch (error) {
    console.error('xAI Error:', error)
    return "I'm experiencing technical difficulties. Please contact us at ryan@achievepack.com or WhatsApp +852 6970 4411."
  }
}

// ============ API HANDLER ============
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { question, sessionId } = req.body

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' })
    }

    const relevantProducts = findRelevantProducts(question)
    const relevantFAQs = findRelevantFAQs(question)

    const productContext = relevantProducts.length > 0
      ? `RELEVANT PRODUCTS:\n${relevantProducts.map(p => 
          `- ${p.name}: ${p.description}. Starting from US$${p.basePrice}. MOQ: ${p.moq} pieces.${(p as any).materials ? ` Materials: ${(p as any).materials.join(', ')}` : ''}${(p as any).turnaround ? ` Turnaround: ${(p as any).turnaround}` : ''}`
        ).join('\n')}`
      : 'No specific products matched. Suggest browsing our Store at achievepack.com/store'

    const faqContext = relevantFAQs.length > 0
      ? `\nRELEVANT INFO:\n${relevantFAQs.join('\n')}`
      : ''

    const fullContext = `${productContext}${faqContext}`
    const answer = await callXAI(question, fullContext)

    return res.status(200).json({
      answer,
      sources: relevantProducts.map(p => ({ id: p.id, name: p.name, url: `/store/product/${p.id}` })),
      sessionId: sessionId || `session_${Date.now()}`,
    })

  } catch (error) {
    console.error('Assistant Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
