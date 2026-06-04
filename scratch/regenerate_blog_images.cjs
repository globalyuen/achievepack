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

async function run() {
  console.log('Querying pouch_seo_blog to build image queue...')
  const { data: blogs, error } = await supabase
    .from('pouch_seo_blog')
    .select('slug, title, excerpt, category, content, image_url')
  
  if (error) {
    console.error('Error fetching blogs:', error)
    process.exit(1)
  }

  console.log(`Found ${blogs.length} total blog posts.`)
  
  // We want to regenerate images for Autopilot posts that have hero images in /imgs/blog/heros/.
  const queue = []
  
  blogs.forEach(b => {
    if (b.image_url && b.image_url.includes('/imgs/blog/heros/')) {
      const pType = getPackagingType(b.slug, b.title)
      const prompt = `A premium, professional, and visually stunning B2B product photography of a ${pType} for: "${b.title}". It should depict: ${b.excerpt || ''}. Studio product photography layout, clean and soft natural light, minimal and neutral background (soft off-white/light grey), achievepack.com brand color tones and aesthetic, realistic paper or plastic texture, photorealistic, 8k resolution. Avoid generic icons, avoid text, avoid human hands, make it look like a real physical product mockup.`
      
      queue.push({
        slug: b.slug,
        title: b.title,
        prompt: prompt,
        imageName: `${b.slug}-hero`
      })
    }
  })

  const queuePath = path.resolve(__dirname, 'image_regeneration_queue.json')
  fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2), 'utf8')
  console.log(`Successfully compiled image regeneration queue! Total items: ${queue.length}`)
  console.log(`Queue saved to: ${queuePath}`)
}

run()
