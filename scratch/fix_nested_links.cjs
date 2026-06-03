const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load env variables from .env.local
const envPath = path.resolve(__dirname, '../.env.local')
let envConfig = {}
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    if (line.includes('VITE_SUPABASE_URL')) {
      envConfig['URL'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
    if (line.includes('SUPABASE_SERVICE_KEY')) {
      envConfig['SERVICE_KEY'] = line.split('=')[1].trim().replace(/['"]/g, '')
    }
  })
}

const supabaseUrl = envConfig['URL'] || ''
const supabaseKey = envConfig['SERVICE_KEY'] || ''

console.log('Supabase URL:', supabaseUrl)
console.log('Using Service Role Key:', !!supabaseKey)

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase Service Key in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function run() {
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')

  if (error) {
    console.error('Error fetching posts:', error)
    process.exit(1)
  }

  for (const post of posts) {
    if (!post.content) continue
    
    let contentChanged = false
    const contentObj = JSON.parse(JSON.stringify(post.content)) // deep copy
    
    // 1. Check sections
    if (contentObj.sections && Array.isArray(contentObj.sections)) {
      contentObj.sections.forEach(sec => {
        if (sec.content && typeof sec.content === 'string') {
          const nestedRegex = /<a href="[^"]*<a href="([^"]*)"[^>]*>[^<]*<\/a>"[^>]*>([^<]*)<\/a>/g
          const original = sec.content
          sec.content = sec.content.replace(nestedRegex, '<a href="$1" class="text-[#10b981] font-bold hover:underline">$2</a>')
          
          if (sec.content !== original) {
            console.log(`Matched and cleaned nested anchor in section of post "${post.slug}"`)
            console.log('Original content segment:', original.slice(original.indexOf('curbside-recyclable'), original.indexOf('curbside-recyclable') + 200))
            console.log('Replaced content segment:', sec.content.slice(sec.content.indexOf('curbside-recyclable'), sec.content.indexOf('curbside-recyclable') + 200))
            contentChanged = true
          }
        }
      })
    }
    
    if (contentChanged) {
      const { data, error: updateError } = await supabase
        .from('pouch_seo_blog')
        .update({ content: contentObj })
        .eq('id', post.id)
        .select()
        
      if (updateError) {
        console.error(`Error updating post ${post.slug}:`, updateError)
      } else {
        console.log(`Updated post ${post.slug} successfully in DB!`)
        if (data && data[0]) {
          const checkContent = data[0].content.sections[0].content
          console.log('Check DB content after update:')
          console.log(checkContent.slice(checkContent.indexOf('curbside-recyclable'), checkContent.indexOf('curbside-recyclable') + 200))
        }
      }
    }
  }
}

run()
