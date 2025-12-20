import type { VercelRequest, VercelResponse } from '@vercel/node'

// ============ PRODUCT CATALOG ============
const PRODUCT_CATALOG = [
  // Sample Products
  { id: 'sample-eco-mixed', name: 'Eco Material Sample Pack', category: 'sample', basePrice: 25, moq: 1, description: 'Mixed eco-friendly materials: Kraft, Mono PE, BioPE, Compostable', materials: ['Kraft', 'Mono PE', 'BioPE', 'Compostable'] },
  { id: 'sample-compostable', name: 'Compostable Sample Pack', category: 'sample', basePrice: 25, moq: 1, description: 'Home and industrial compostable options' },
  { id: 'sample-conventional', name: 'Conventional Sample Pack', category: 'sample', basePrice: 15, moq: 1, description: 'Standard pouch samples with different finishes' },
  
  // Conventional Digital Products
  { id: 'conven-3ss-clear-xzip', name: '3 Side Seal Pouch – Clear', category: 'conventional-digital', basePrice: 90, moq: 100, description: 'Flat pouch ideal for samples and sachets', shape: '3-side-seal', turnaround: '2-3 weeks' },
  { id: 'conven-3ss-clear-zip', name: 'Zipper 3 Side Seal Pouch – Clear', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Flat resealable pouch', shape: 'zipper-3-side-seal', turnaround: '2-3 weeks' },
  { id: 'conven-sup-clear-xzip', name: 'Stand Up Pouch – Clear', category: 'conventional-digital', basePrice: 90, moq: 100, description: 'Clear stand-up pouch with shelf presence', shape: 'stand-up', turnaround: '2-3 weeks' },
  { id: 'conven-sup-clear-zip', name: 'Stand Up Pouch – Clear, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Resealable clear stand-up pouch. Best seller.', shape: 'zipper-stand-up', turnaround: '2-3 weeks' },
  { id: 'conven-sup-met-zip', name: 'Stand Up Pouch – Metalised, With Zipper', category: 'conventional-digital', basePrice: 100, moq: 100, description: 'Premium metalised stand-up pouch with high barrier. Best for coffee.', shape: 'zipper-stand-up', turnaround: '2-3 weeks' },
  
  // Eco Digital Products
  { id: 'eco-3side', name: 'Eco Digital – 3 Side Seal Pouch', category: 'eco-digital', basePrice: 100, moq: 1000, description: 'Eco-friendly 3-side seal. PCR/Bio Plastic, Mono Recyclable, or Compostable materials.', materials: ['Mono PE', 'PCR', 'BioPE', 'Compostable'], turnaround: '3-4 weeks' },
  { id: 'eco-standup', name: 'Eco Digital – Stand Up Pouch', category: 'eco-digital', basePrice: 120, moq: 1000, description: 'Premium eco stand-up pouch. Most popular eco option.', materials: ['Mono PE', 'PCR', 'BioPE', 'Compostable'], turnaround: '3-4 weeks' },
  { id: 'eco-flatbottom', name: 'Eco Digital – Flat Bottom Pouch', category: 'eco-digital', basePrice: 170, moq: 1000, description: 'Eco flat bottom with excellent shelf stability. Great for coffee.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks' },
  { id: 'eco-sidegusset', name: 'Eco Digital – Side Gusset Pouch', category: 'eco-digital', basePrice: 150, moq: 1000, description: 'Traditional coffee bag style with eco materials.', materials: ['Kraft Paper', 'Mono PE', 'Compostable'], turnaround: '3-4 weeks' },
  
  // Eco Stock Products
  { id: 'eco-stock-header', name: 'Stock Compostable Header Bag', category: 'eco-stock', basePrice: 42, moq: 400, description: 'Ready-made compostable with hang hole. Ships in 3-5 days.', materials: ['Compostable'], inStock: true },
  { id: 'eco-stock-mailer', name: 'Stock Compostable Mailer Bag', category: 'eco-stock', basePrice: 42, moq: 400, description: 'Compostable shipping mailer. Ships in 3-5 days.', materials: ['Compostable'], inStock: true },
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
  const keywords = q.split(/\s+/).filter(w => w.length > 2)
  
  return PRODUCT_CATALOG.filter(product => {
    const searchText = `${product.name} ${product.description} ${product.category} ${(product as any).materials?.join(' ') || ''} ${(product as any).shape || ''}`.toLowerCase()
    return keywords.some(kw => searchText.includes(kw))
  }).slice(0, 5)
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
