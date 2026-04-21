/**
 * XAI-powered quotation analysis and generation
 */

export interface QuotationAIAnalysis {
  title?: string
  description?: string
  features?: string[]
  recommendations?: string[]
  generated_at?: string
}

export interface QuotationSummary {
  summary: string
  recommendations: string[]
  key_benefits: string[]
}

const XAI_API_KEY = import.meta.env.VITE_XAI_API_KEY

export async function generateQuotationItemAnalysis(
  itemSpecs: {
    shape?: string
    size?: string
    material?: string
    closure?: string
    barrier?: string
    surface?: string
    structure_spec?: string
    quantity?: number
    unit_price?: number
  }
): Promise<QuotationAIAnalysis> {
  if (!XAI_API_KEY) {
    return {
      title: itemSpecs.shape || 'Custom Pouch',
      description: `${itemSpecs.material || 'Eco-friendly'} ${itemSpecs.shape || 'pouch'} with ${itemSpecs.closure || 'standard closure'}`,
      features: [
        itemSpecs.material && `Material: ${itemSpecs.material}`,
        itemSpecs.size && `Size: ${itemSpecs.size}`,
        itemSpecs.barrier && `Barrier: ${itemSpecs.barrier}`,
        itemSpecs.surface && `Surface: ${itemSpecs.surface}`,
      ].filter(Boolean) as string[],
      recommendations: [],
      generated_at: new Date().toISOString()
    }
  }

  try {
    const prompt = `You are a packaging expert. Generate a professional quotation description for this flexible packaging product:

Product Specifications:
- Shape: ${itemSpecs.shape || 'Not specified'}
- Size: ${itemSpecs.size || 'Not specified'}
- Material: ${itemSpecs.material || 'Not specified'}
- Closure: ${itemSpecs.closure || 'Not specified'}
- Barrier: ${itemSpecs.barrier || 'Not specified'}
- Surface Finish: ${itemSpecs.surface || 'Not specified'}
- Structure: ${itemSpecs.structure_spec || 'Not specified'}
- Quantity: ${itemSpecs.quantity || 'Not specified'}
- Unit Price: $${itemSpecs.unit_price || 'TBD'}

Please provide a JSON response with:
1. title: A professional product title (max 50 chars)
2. description: A compelling 2-3 sentence product description
3. features: Array of 4-6 key features/benefits
4. recommendations: Array of 1-2 suggestions

Response format (JSON only):
{"title": "...", "description": "...", "features": ["..."], "recommendations": ["..."]}`

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-2-1212',
        messages: [
          { role: 'system', content: 'You are a packaging industry expert. Always respond with valid JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    })

    if (!response.ok) throw new Error(`XAI API error: ${response.status}`)

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (content) {
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        return { ...JSON.parse(jsonMatch[0]), generated_at: new Date().toISOString() }
      }
    }
    throw new Error('Failed to parse XAI response')
  } catch (error) {
    console.error('XAI analysis error:', error)
    return {
      title: itemSpecs.shape || 'Custom Pouch',
      description: `Professional ${itemSpecs.material || 'eco-friendly'} packaging solution`,
      features: [],
      recommendations: [],
      generated_at: new Date().toISOString()
    }
  }
}

export async function generateQuotationSummary(
  items: Array<{ item_name?: string; shape?: string; material?: string; quantity?: number; line_total?: number }>,
  customerName?: string,
  total?: number
): Promise<QuotationSummary> {
  if (!XAI_API_KEY) {
    return {
      summary: `Thank you for your interest in our eco-friendly packaging solutions. This quotation includes ${items.length} item(s).`,
      recommendations: ['Consider bulk ordering for discounts', 'Ask about our sample program'],
      key_benefits: ['Eco-friendly materials', 'Custom printing', 'Fast turnaround']
    }
  }

  try {
    const itemsSummary = items.map(item => 
      `- ${item.item_name || item.shape}: Qty ${item.quantity}, $${item.line_total?.toFixed(2) || 'TBD'}`
    ).join('\n')

    const prompt = `Generate a professional quotation summary for ${customerName || 'valued customer'}:

Items:
${itemsSummary}

Total: $${total?.toFixed(2) || 'TBD'}

Provide JSON with: summary, recommendations (2-3), key_benefits (3-4). JSON only:`

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-2-1212',
        messages: [
          { role: 'system', content: 'Professional sales copywriter. Respond JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 400
      })
    })

    if (!response.ok) throw new Error(`XAI API error: ${response.status}`)

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (content) {
      const jsonMatch = content.match(/\{[\s\S]*\}/)
      if (jsonMatch) return JSON.parse(jsonMatch[0])
    }
    throw new Error('Failed to parse response')
  } catch (error) {
    console.error('XAI summary error:', error)
    return {
      summary: 'Thank you for considering Achieve Pack for your packaging needs.',
      recommendations: [],
      key_benefits: ['Eco-friendly', 'High quality', 'Competitive pricing']
    }
  }
}

export function parsePriceTable(rawText: string): {
  quantities: number[]
  prices: number[]
  moq?: number
} {
  const lines = rawText.trim().split('\n')
  const quantities: number[] = []
  const prices: number[] = []
  
  for (const line of lines) {
    const match = line.match(/(\d[\d,]*)\s*(?:units?|pcs?|pieces?)?\s*[-|:=]?\s*\$?([\d.]+)/i)
    if (match) {
      const qty = parseInt(match[1].replace(/,/g, ''))
      const price = parseFloat(match[2])
      if (!isNaN(qty) && !isNaN(price)) {
        quantities.push(qty)
        prices.push(price)
      }
    }
  }
  
  return {
    quantities,
    prices,
    moq: quantities.length > 0 ? Math.min(...quantities) : undefined
  }
}

// AI智能输入解析结果接口
export interface ParsedQuotationInput {
  item_name?: string
  shape?: string
  size?: string
  material?: string
  closure?: string
  barrier?: string
  surface?: string
  structure_spec?: string
  quantity?: number
  unit_price?: number
  setup_cost?: number
  shipping_cost?: number
  notes?: string
  price_table?: {
    quantities: number[]
    prices: number[]
  }
  confidence: number
  suggestions?: string[]
  warnings?: string[]
}

// 产品规格选项常量 - 用于AI匹配
const SHAPE_OPTIONS = ['Stand Up Pouch', '3-Side Seal', 'Flat Bottom', 'Side Gusset', 'Spout Pouch', 'Retort Pouch', 'Vacuum Pouch', 'Rollstock']
const MATERIAL_OPTIONS = ['Kraft Paper / PLA', 'MDOPE / PLA', 'PET / PE', 'BOPP / CPP', 'Nylon / PE', 'Aluminum Foil', 'Metalized PET', 'PCR PE']
const CLOSURE_OPTIONS = ['Press-to-Close Zipper', 'Child Resistant', 'Slider Zipper', 'Tin Tie', 'Spout Cap', 'Heat Seal Only', 'Velcro']
const BARRIER_OPTIONS = ['High Barrier (Aluminum)', 'Medium Barrier (Metalized)', 'Standard Barrier', 'Ultra-High Barrier (EVOH)']
const SURFACE_OPTIONS = ['Matte', 'Gloss', 'Soft Touch', 'Spot UV', 'Embossed', 'Metallic']

/**
 * 使用 XAI 智能解析用户输入的产品规格信息
 * 支持自然语言描述、粘贴的报价信息、客户邮件内容等
 */
export async function parseQuotationInput(userInput: string): Promise<ParsedQuotationInput> {
  if (!userInput.trim()) {
    return { confidence: 0, warnings: ['Please enter product specifications'] }
  }

  // 先尝试本地解析提取一些基本信息
  const localParsed = localParseInput(userInput)

  if (!XAI_API_KEY) {
    return {
      ...localParsed,
      confidence: 0.3,
      warnings: ['AI analysis unavailable. Please review and complete manually.']
    }
  }

  try {
    const prompt = `You are an expert in flexible packaging products. Analyze this customer input and extract product specifications.

Customer Input:
"""
${userInput}
"""

Available Options:
- Shapes: ${SHAPE_OPTIONS.join(', ')}
- Materials: ${MATERIAL_OPTIONS.join(', ')}
- Closures: ${CLOSURE_OPTIONS.join(', ')}
- Barriers: ${BARRIER_OPTIONS.join(', ')}
- Surfaces: ${SURFACE_OPTIONS.join(', ')}

Extract and return a JSON object with these fields (use null for unclear/missing values):
{
  "item_name": "string - a concise product name based on specs",
  "shape": "string - match to closest available option or null",
  "size": "string - dimensions in format like '150mm x 250mm + 100mm' or null",
  "material": "string - match to closest available option or null",
  "closure": "string - match to closest available option or null",
  "barrier": "string - match to closest available option or null",
  "surface": "string - match to closest available option or null",
  "structure_spec": "string - layer structure like 'PET12/AL7/PE80' or null",
  "quantity": number or null,
  "unit_price": number (per unit price) or null,
  "setup_cost": number or null,
  "shipping_cost": number or null,
  "notes": "string - any additional relevant info",
  "price_table": { "quantities": [numbers], "prices": [numbers] } or null,
  "confidence": number 0-1 how confident in the extraction,
  "suggestions": ["array of helpful suggestions based on the specs"],
  "warnings": ["array of any issues or missing critical info"]
}

IMPORTANT:
- Match shapes/materials/closures to the EXACT options provided when possible
- For size, extract all dimensions including gusset/bottom
- Extract price tables if multiple qty/price pairs are mentioned
- Be conservative with confidence - lower if info is ambiguous
- Add warnings for missing critical specs (shape, material, size)

JSON response only:`

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-2-1212',
        messages: [
          { role: 'system', content: 'You are a packaging industry expert assistant. Always respond with valid JSON only, no markdown formatting.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 1000
      })
    })

    if (!response.ok) {
      throw new Error(`XAI API error: ${response.status}`)
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (content) {
      // 提取JSON（处理可能的markdown代码块）
      let jsonStr = content
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/)
      if (jsonMatch) {
        jsonStr = jsonMatch[1]
      } else {
        const braceMatch = content.match(/\{[\s\S]*\}/)
        if (braceMatch) jsonStr = braceMatch[0]
      }

      const parsed = JSON.parse(jsonStr)
      
      // 确保返回正确的类型
      return {
        item_name: parsed.item_name || localParsed.item_name,
        shape: parsed.shape,
        size: parsed.size,
        material: parsed.material,
        closure: parsed.closure,
        barrier: parsed.barrier,
        surface: parsed.surface,
        structure_spec: parsed.structure_spec,
        quantity: typeof parsed.quantity === 'number' ? parsed.quantity : localParsed.quantity,
        unit_price: typeof parsed.unit_price === 'number' ? parsed.unit_price : localParsed.unit_price,
        setup_cost: typeof parsed.setup_cost === 'number' ? parsed.setup_cost : undefined,
        shipping_cost: typeof parsed.shipping_cost === 'number' ? parsed.shipping_cost : undefined,
        notes: parsed.notes,
        price_table: parsed.price_table,
        confidence: typeof parsed.confidence === 'number' ? parsed.confidence : 0.5,
        suggestions: Array.isArray(parsed.suggestions) ? parsed.suggestions : [],
        warnings: Array.isArray(parsed.warnings) ? parsed.warnings : []
      }
    }
    throw new Error('Failed to parse XAI response')
  } catch (error) {
    console.error('XAI parsing error:', error)
    return {
      ...localParsed,
      confidence: 0.3,
      warnings: ['AI analysis failed. Results are from basic pattern matching.', String(error)]
    }
  }
}

/**
 * 本地正则解析 - 作为AI解析的后备方案
 */
function localParseInput(input: string): Partial<ParsedQuotationInput> {
  const result: Partial<ParsedQuotationInput> = {}
  const lower = input.toLowerCase()

  // 解析尺寸 - 匹配各种格式
  const sizePatterns = [
    /(\d+)\s*(?:mm|cm)?\s*[x×*]\s*(\d+)\s*(?:mm|cm)?(?:\s*[x×*+]\s*(\d+)\s*(?:mm|cm)?)?/i,
    /([\d.]+)"?\s*[x×]\s*([\d.]+)"?(?:\s*[x×+]\s*([\d.]+)"?)?/i,
    /width[:\s]*(\d+).*height[:\s]*(\d+)/i
  ]
  for (const pattern of sizePatterns) {
    const match = input.match(pattern)
    if (match) {
      result.size = match[3] 
        ? `${match[1]}mm x ${match[2]}mm + ${match[3]}mm`
        : `${match[1]}mm x ${match[2]}mm`
      break
    }
  }

  // 解析数量
  const qtyMatch = input.match(/(\d{1,3}(?:,\d{3})*|\d+)\s*(?:pcs?|pieces?|units?|bags?|pouches?)/i)
  if (qtyMatch) {
    result.quantity = parseInt(qtyMatch[1].replace(/,/g, ''))
  }

  // 解析单价
  const priceMatch = input.match(/\$\s*([\d.]+)\s*(?:\/|per|each|unit)/i)
  if (priceMatch) {
    result.unit_price = parseFloat(priceMatch[1])
  }

  // 匹配形状
  for (const shape of SHAPE_OPTIONS) {
    if (lower.includes(shape.toLowerCase())) {
      result.shape = shape
      break
    }
  }
  // 通用形状关键词匹配
  if (!result.shape) {
    if (lower.includes('stand up') || lower.includes('standup') || lower.includes('doypack')) result.shape = 'Stand Up Pouch'
    else if (lower.includes('flat bottom') || lower.includes('box pouch') || lower.includes('block bottom')) result.shape = 'Flat Bottom'
    else if (lower.includes('side gusset')) result.shape = 'Side Gusset'
    else if (lower.includes('3 side') || lower.includes('three side') || lower.includes('3-side')) result.shape = '3-Side Seal'
    else if (lower.includes('spout')) result.shape = 'Spout Pouch'
    else if (lower.includes('retort')) result.shape = 'Retort Pouch'
    else if (lower.includes('vacuum')) result.shape = 'Vacuum Pouch'
  }

  // 匹配材料
  for (const material of MATERIAL_OPTIONS) {
    if (lower.includes(material.toLowerCase())) {
      result.material = material
      break
    }
  }
  // 通用材料关键词
  if (!result.material) {
    if (lower.includes('kraft') || lower.includes('paper')) result.material = 'Kraft Paper / PLA'
    else if (lower.includes('pet') && lower.includes('pe')) result.material = 'PET / PE'
    else if (lower.includes('nylon') || lower.includes('ny')) result.material = 'Nylon / PE'
    else if (lower.includes('aluminum') || lower.includes('foil') || lower.includes('al')) result.material = 'Aluminum Foil'
    else if (lower.includes('metalized') || lower.includes('metallized')) result.material = 'Metalized PET'
    else if (lower.includes('mdope') || lower.includes('mono')) result.material = 'MDOPE / PLA'
    else if (lower.includes('pcr') || lower.includes('recycled')) result.material = 'PCR PE'
  }

  // 匹配封口方式
  for (const closure of CLOSURE_OPTIONS) {
    if (lower.includes(closure.toLowerCase())) {
      result.closure = closure
      break
    }
  }
  if (!result.closure) {
    if (lower.includes('zipper') || lower.includes('zip') || lower.includes('reseal')) result.closure = 'Press-to-Close Zipper'
    else if (lower.includes('child resistant') || lower.includes('child proof') || lower.includes('cr ')) result.closure = 'Child Resistant'
    else if (lower.includes('slider')) result.closure = 'Slider Zipper'
    else if (lower.includes('tin tie')) result.closure = 'Tin Tie'
    else if (lower.includes('spout') && lower.includes('cap')) result.closure = 'Spout Cap'
    else if (lower.includes('heat seal')) result.closure = 'Heat Seal Only'
  }

  // 匹配表面处理
  for (const surface of SURFACE_OPTIONS) {
    if (lower.includes(surface.toLowerCase())) {
      result.surface = surface
      break
    }
  }
  if (!result.surface) {
    if (lower.includes('matt') || lower.includes('satin')) result.surface = 'Matte'
    else if (lower.includes('gloss') || lower.includes('shiny')) result.surface = 'Gloss'
    else if (lower.includes('soft touch') || lower.includes('velvet')) result.surface = 'Soft Touch'
  }

  // 匹配阻隔层
  for (const barrier of BARRIER_OPTIONS) {
    if (lower.includes(barrier.toLowerCase())) {
      result.barrier = barrier
      break
    }
  }
  if (!result.barrier) {
    if (lower.includes('high barrier')) result.barrier = 'High Barrier (Aluminum)'
    else if (lower.includes('evoh')) result.barrier = 'Ultra-High Barrier (EVOH)'
    else if (lower.includes('medium barrier')) result.barrier = 'Medium Barrier (Metalized)'
  }

  // 解析结构规格 - 如 PET12/AL7/PE80
  const structureMatch = input.match(/([A-Z]{2,5}\d+\/[A-Z]{2,5}\d+(?:\/[A-Z]{2,5}\d+)*)/i)
  if (structureMatch) {
    result.structure_spec = structureMatch[1].toUpperCase()
  }

  // 解析价格表
  const priceTableResult = parsePriceTable(input)
  if (priceTableResult.quantities.length > 0) {
    result.price_table = {
      quantities: priceTableResult.quantities,
      prices: priceTableResult.prices
    }
  }

  // 生成产品名称
  if (result.shape || result.material) {
    result.item_name = [
      result.material?.split('/')[0].trim(),
      result.shape,
      result.size
    ].filter(Boolean).join(' ')
  }

  return result
}
