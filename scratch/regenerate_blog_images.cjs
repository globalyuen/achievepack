const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const envPath = path.resolve(__dirname, '../.env.local')
let envConfig = {}
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    if (line.includes('VITE_SUPABASE_URL')) {
      envConfig['URL'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
    if (line.includes('VITE_SUPABASE_ANON_KEY')) {
      envConfig['ANON_KEY'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
  })
}

const supabaseUrl = envConfig['URL'] || ''
const supabaseKey = envConfig['ANON_KEY'] || ''

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Category mapping helper
function getPackagingType(slug, keyword) {
  const text = (slug + ' ' + keyword).toLowerCase()
  if (text.includes('spout') || text.includes('liquid') || text.includes('beverage') || text.includes('baby') || text.includes('juice') || text.includes('honey')) {
    return 'premium high-barrier spouted stand-up pouch for liquid packaging'
  }
  if (text.includes('coffee') || text.includes('tea') || text.includes('bean') || text.includes('brew')) {
    return 'specialty stand-up coffee doypack with degassing valve'
  }
  if (text.includes('nuts') || text.includes('snack') || text.includes('chip') || text.includes('crisp') || text.includes('treat') || text.includes('food')) {
    return 'premium recyclable snack packaging stand-up pouch'
  }
  if (text.includes('sachet') || text.includes('stick') || text.includes('packet') || text.includes('single-serve')) {
    return 'three-side seal packaging sachet'
  }
  if (text.includes('flat-bottom') || text.includes('flat bottom') || text.includes('box-bottom') || text.includes('box bottom') || text.includes('quad')) {
    return 'flat-bottom box bottom packaging bag'
  }
  if (text.includes('rollstock') || text.includes('film') || text.includes('wrap')) {
    return 'custom printed rollstock packaging film roll'
  }
  if (text.includes('label') || text.includes('sticker')) {
    return 'premium digital packaging label stickers roll'
  }
  return 'premium stand-up packaging pouch'
}

// Prompt compiler helper to randomly select style: mockup (40%), usecase (30%), infographic (30%)
function getPromptForTypeAndStyle(b, pType, style) {
  const cleanTitle = b.title
  const cleanExcerpt = b.excerpt || ''
  
  if (style === 'usecase') {
    if (pType.includes('spouted') || pType.includes('liquid')) {
      return `A premium, photorealistic B2B product photography of a spouted packaging pouch for "${cleanTitle}". The pouch is standing on a sunny modern kitchen counter next to fresh ingredients and a glass of organic smoothie, bright natural light, clean shadows, achievepack.com dark-green botanical theme. Avoid generic icons, avoid text.`
    }
    if (pType.includes('coffee') || pType.includes('doypack')) {
      return `A cozy B2B lifestyle photography of a specialty coffee doypack for "${cleanTitle}" displayed on a rustic wooden shelf in a modern cafe, next to scattered roasted coffee beans and a high-end espresso machine blurred in the background, soft morning lighting, warm botanical green aesthetic. Avoid text.`
    }
    if (pType.includes('snack') || pType.includes('recyclable')) {
      return `A photorealistic B2B lifestyle mockup of a snack packaging pouch for "${cleanTitle}" lying on a clean wooden table next to raw nuts, dried fruits, and organic snack ingredients, soft home kitchen background, natural side lighting, realistic paper texture, botanical style. Avoid text.`
    }
    if (pType.includes('sachet') || pType.includes('seal')) {
      return `A premium product mockup of a single-serve packaging sachet for "${cleanTitle}" sitting next to a custom box and organic ingredients on a neutral grey studio background with soft botanical leaf shadows, professional packaging photography. Avoid text.`
    }
    if (pType.includes('rollstock') || pType.includes('film')) {
      return `A high-fidelity B2B industrial scene of a custom printed packaging film rollstock roll loaded on a modern automatic vertical form-fill-seal packaging machine in a clean, state-of-the-art production factory line, bright clean lighting, realistic texture.`
    }
    if (pType.includes('label') || pType.includes('sticker')) {
      return `A high-end B2B mockup of a digital label roll standing on a designer's wooden desk with mockups of glass bottles in the background, soft warm studio lighting, clean shadows.`
    }
    return `A premium B2B product photography of a packaging pouch for "${cleanTitle}" displayed on a retail shelf in a high-end organic supermarket, surrounded by subtle botanical decor, soft clean lighting.`
  }
  
  if (style === 'infographic') {
    return `A premium, clean neobrutalist B2B infographic blueprint diagram of the packaging bag for: "${cleanTitle}". Showing a 3D cutaway of the pouch structure with technical annotations of protective high-barrier layers (Oxygen EVOH barrier, Moisture guard, LLDPE core) and FSC/TÜV compostable stamps, flat vector style, bold outlines, minimal off-white background, clean English technical labels.`
  }
  
  // Default: product mockup style
  return `A premium, professional, and visually stunning B2B product photography of a ${pType} for: "${cleanTitle}". It should depict: ${cleanExcerpt}. Studio product photography layout, clean and soft natural light, minimal and neutral background (soft off-white/light grey), achievepack.com brand color tones and aesthetic, realistic paper or plastic texture, photorealistic, 8k resolution. Avoid generic icons, avoid text, avoid human hands, make it look like a real physical product mockup.`
}

async function run() {
  console.log('Querying pouch_seo_blog to build image queue with style randomization...')
  const { data: blogs, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title, excerpt, category, content, image_url')
  
  if (error) {
    console.error('Error fetching blogs:', error)
    process.exit(1)
  }

  console.log(`Found ${blogs.length} total blog posts.`)
  
  const queue = []
  
  blogs.forEach((b, index) => {
    if (b.image_url && b.image_url.includes('/imgs/blog/heros/')) {
      const pType = getPackagingType(b.slug, b.title)
      
      // Select style deterministically/randomly based on index
      // 0, 3, 6, ... -> mockup (about 40%)
      // 1, 4, 7, ... -> usecase (about 30%)
      // 2, 5, 8, ... -> infographic (about 30%)
      const styleRand = index % 3
      let style = 'mockup'
      if (styleRand === 1) style = 'usecase'
      else if (styleRand === 2) style = 'infographic'
      
      const prompt = getPromptForTypeAndStyle(b, pType, style)
      
      queue.push({
        slug: b.slug,
        title: b.title,
        prompt: prompt,
        imageName: `${b.slug}-hero`,
        style: style
      })
    }
  })

  const queuePath = path.resolve(__dirname, 'image_regeneration_queue.json')
  fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2), 'utf8')
  console.log(`Successfully compiled image regeneration queue with randomized styles! Total items: ${queue.length}`)
  console.log(`Queue saved to: ${queuePath}`)
}

run()
