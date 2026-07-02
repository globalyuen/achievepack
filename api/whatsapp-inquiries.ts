import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl || '', supabaseKey || '', {
  auth: { persistSession: false }
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

  const VAULT_ROOT = path.join(
    '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack',
    'ob vault - ap ctr follow up'
  )

  try {
    // 1. Sync from local Obsidian WhatsApp folder
    const whatsappDir = path.join(VAULT_ROOT, '02-WhatsApp')
    if (fs.existsSync(whatsappDir)) {
      const files = getAllMarkdownFiles(whatsappDir)
      const conversations = new Map()

      for (const file of files) {
        const fileName = path.basename(file)
        const content = fs.readFileSync(file, 'utf-8')
        
        // Skip empty files
        if (!content || content.trim().length === 0) continue;

        const parsed = parseWhatsAppContent(content, fileName)
        if (parsed && parsed.name) {
          const key = `${parsed.phone || parsed.name}`
          if (!conversations.has(key)) {
            conversations.set(key, parsed)
          } else {
            // Keep the one with longer history if duplicate
            const existing = conversations.get(key)
            if (parsed.chat_history.length > existing.chat_history.length) {
              conversations.set(key, parsed)
            }
          }
        }
      }

      const uniqueInquiries = Array.from(conversations.values())
      console.log(`Parsed ${uniqueInquiries.length} local WhatsApp inquiries. Syncing to Supabase...`)

      const batchSize = 50
      for (let i = 0; i < uniqueInquiries.length; i += batchSize) {
        const batch = uniqueInquiries.slice(i, i + batchSize).map(item => ({
          id: item.id,
          name: item.name,
          phone: item.phone || null,
          chat_history: item.chat_history || null,
          raw_date: item.raw_date || null,
          source_file: item.source_file || null,
          status: '未跟進',
          notes: ''
        }))

        // Upsert batch
        const { error } = await supabase
          .from('whatsapp_inquiries')
          .upsert(batch, { onConflict: 'id', ignoreDuplicates: true })

        if (error) {
          console.error('Error syncing WhatsApp batch to Supabase:', error.message)
        }
      }
    }

    // 2. Fetch all from Supabase
    const { data: dbData, error: dbError } = await supabase
      .from('whatsapp_inquiries')
      .select('*')
      .order('raw_date', { ascending: false })

    if (dbError) throw dbError

    return res.status(200).json(dbData || [])

  } catch (error: any) {
    console.error('Error in WhatsApp inquiries handler:', error)
    return res.status(500).json({ error: error.message })
  }
}

// Helper to recursively find all markdown files
function getAllMarkdownFiles(dirPath: string): string[] {
  let results: string[] = []
  if (!fs.existsSync(dirPath)) return results
  const list = fs.readdirSync(dirPath)
  list.forEach(file => {
    const fullPath = path.join(dirPath, file)
    const stat = fs.statSync(fullPath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath))
    } else if (file.endsWith('.md')) {
      results.push(fullPath)
    }
  })
  return results
}

// Very permissive parser for WhatsApp Markdown
function parseWhatsAppContent(text: string, filename: string) {
  // Extract frontmatter (e.g., Name: XXX, Phone: YYY, Date: ZZZ)
  const nameMatch = text.match(/Name:\s*(.+)/i)
  const phoneMatch = text.match(/Phone:\s*(.+)/i)
  const dateMatch = text.match(/Date:\s*(.+)/i)

  // Try to find Name or use Filename
  let name = nameMatch ? nameMatch[1].trim() : filename.replace('.md', '').replace(/-/g, ' ')
  let phone = phoneMatch ? phoneMatch[1].trim() : ''
  let raw_date = dateMatch ? dateMatch[1].trim() : new Date().toISOString().split('T')[0]

  // If there's no frontmatter, try to find a phone number in the text anywhere
  if (!phone) {
    const fallbackPhoneMatch = text.match(/\+?\d[\d\s-]{7,14}\d/);
    if (fallbackPhoneMatch) {
      phone = fallbackPhoneMatch[0].trim();
    }
  }

  // The chat history is basically the entire text minus the frontmatter block
  // If there's a YAML frontmatter block (--- ... ---), remove it.
  let chat_history = text.replace(/^---\s*[\s\S]*?---\s*/, '').trim()
  
  if (!chat_history) {
    chat_history = text; // fallback to full text
  }

  // Ensure ID is safe
  const safeId = filename.replace('.md', '').replace(/[^a-zA-Z0-9_-]/g, '_')

  return {
    id: safeId,
    name: name,
    phone: phone,
    chat_history: chat_history.substring(0, 5000), // Cap length
    raw_date: raw_date,
    source_file: filename
  }
}
