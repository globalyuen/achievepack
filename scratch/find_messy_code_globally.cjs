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
  const { data: posts, error } = await supabase
    .from('pouch_seo_blog')
    .select('*')

  if (error) {
    console.error('Error fetching posts:', error)
    process.exit(1)
  }

  console.log(`Scanning ${posts.length} posts...`)

  for (const post of posts) {
    const postStr = JSON.stringify(post)
    if (postStr.includes('ass=')) {
      console.log(`Found "ass=" in post: ID=${post.id}, Title="${post.title}", Slug="${post.slug}"`)
      
      // Let's find exactly where it is in post.content
      let contentStr = JSON.stringify(post.content)
      // Check for occurrences of ass= in the JSON string
      const matches = contentStr.match(/[^a-zA-Z]ass=/g)
      console.log(`Occurrences in content:`, matches)

      // Let's replace 'ass=' with 'class=' if it is not part of a word
      // e.g. ass=" or \nass=
      contentStr = contentStr.replace(/([^a-zA-Z])ass=/g, '$1class=')
      const updatedContent = JSON.parse(contentStr)

      // Also check other fields
      let updatedFields = { content: updatedContent }
      for (const [key, val] of Object.entries(post)) {
        if (key !== 'content' && typeof val === 'string' && val.includes('ass=')) {
          updatedFields[key] = val.replace(/([^a-zA-Z])ass=/g, '$1class=')
        }
      }

      const { data, error: updateError } = await supabase
        .from('pouch_seo_blog')
        .update(updatedFields)
        .eq('id', post.id)
        .select()

      if (updateError) {
        console.error(`Error updating post ${post.id}:`, updateError)
      } else {
        console.log(`Updated post ${post.id} successfully!`)
      }
    }
  }
}

run()
