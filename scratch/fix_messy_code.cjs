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

async function run() {
  const slug = 'recyclable-high-barrier-nuts-pouch'
  const { data: post, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    process.exit(1)
  }

  if (!post) {
    console.error('Post not found in database')
    process.exit(1)
  }

  console.log('Post found:', post.title)

  // Convert post structure to string to inspect the issue
  const postStr = JSON.stringify(post.content || {})
  const pattern = /ass="text-\[#10b981\]/g
  if (pattern.test(postStr)) {
    console.log('Found matches of messy class name in content!')
    
    // Replace in content (it might be ass="text-[#10b981] font-bold hover:underline" or just ass="text-[#10b981] ...)
    let contentStr = JSON.stringify(post.content)
    // Replace any occurrence of ass="text-[#10b981] to class="text-[#10b981]
    contentStr = contentStr.replace(/ass="text-\[#10b981\]/g, 'class="text-[#10b981]')
    
    const updatedContent = JSON.parse(contentStr)
    
    const { data, error: updateError } = await supabase
      .from('pouch_seo_blog')
      .update({ content: updatedContent })
      .eq('id', post.id)
      .select()

    if (updateError) {
      console.error('Error updating post content:', updateError)
    } else {
      console.log('Post content updated successfully!')
    }
  } else {
    console.log('No matches of "ass="text-[#10b981]" found in post.content.')
    
    // Check if it is in other fields
    console.log('Checking all post fields...')
    let updatedFields = {}
    let found = false
    for (const [key, val] of Object.entries(post)) {
      if (typeof val === 'string' && val.includes('ass="text-[#10b981]')) {
        console.log(`Found match in field ${key}`)
        updatedFields[key] = val.replace(/ass="text-\[#10b981\]/g, 'class="text-[#10b981]')
        found = true
      }
    }
    
    if (found) {
      const { data, error: updateError } = await supabase
        .from('pouch_seo_blog')
        .update(updatedFields)
        .eq('id', post.id)
        .select()
      if (updateError) {
        console.error('Error updating other fields:', updateError)
      } else {
        console.log('Fields updated successfully!')
      }
    } else {
      console.log('No matches found in any post fields.')
    }
  }
}

run()
