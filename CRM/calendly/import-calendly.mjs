import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Supabase config - use your production credentials
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://dfjndutsvjtpmldoztxm.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmam5kdXRzdmp0cG1sZG96dHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNDU4MjcsImV4cCI6MjA0NzgyMTgyN30.v7TFShcASPLrnloLqqbVGJKnWMBiDXuSuFLASSpAkKs'

const supabase = createClient(supabaseUrl, supabaseKey)

async function importCalendlyCSV(csvPath) {
  console.log('📅 Starting Calendly CSV import...')
  console.log(`📂 Reading file: ${csvPath}`)
  
  // Read CSV file
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  
  // Parse CSV
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
    relax_quotes: true
  })
  
  console.log(`📊 Found ${records.length} Calendly events`)
  
  // Get existing emails to avoid duplicates
  const { data: existingInquiries } = await supabase
    .from('crm_inquiries')
    .select('email, source')
  
  const existingEmails = new Set(existingInquiries?.map(i => i.email.toLowerCase()) || [])
  const calendlyEmails = new Set(
    existingInquiries?.filter(i => i.source === 'calendly').map(i => i.email.toLowerCase()) || []
  )
  
  let imported = 0
  let skipped = 0
  let canceled = 0
  
  for (const record of records) {
    // Skip canceled meetings
    if (record['Canceled']?.toLowerCase() === 'true') {
      canceled++
      continue
    }
    
    const email = (record['Invitee Email'] || '').trim().toLowerCase()
    
    // Skip if no email or test emails
    if (!email || email.includes('test') || email.includes('@achievepack.com')) {
      skipped++
      continue
    }
    
    // Skip if already imported from Calendly
    if (calendlyEmails.has(email)) {
      skipped++
      continue
    }
    
    // Extract name
    const inviteeName = record['Invitee Name'] || ''
    const firstName = record['Invitee First Name'] || ''
    const lastName = record['Invitee Last Name'] || ''
    const name = inviteeName || `${firstName} ${lastName}`.trim() || 'Unknown'
    
    // Extract phone from Response 1 (often contains phone number)
    let phone = ''
    const response1 = record['Response 1'] || ''
    const phoneMatch = response1.match(/^\+?[\d\s\-\(\)]+$/)
    if (phoneMatch) {
      phone = response1.trim()
    } else if (record['Text Reminder Number']) {
      phone = record['Text Reminder Number']
    }
    
    // Extract meeting details
    const eventType = record['Event Type Name'] || '15 Minute Meeting'
    const startDate = record['Start Date & Time'] || ''
    const question1 = record['Question 1'] || ''
    const message = record['Response 1'] || record['Response 2'] || ''
    const timezone = record['Invitee Time Zone'] || ''
    
    // Build notes with context
    const notes = [
      `📅 Calendly: ${eventType}`,
      startDate ? `Date: ${startDate}` : '',
      timezone ? `Timezone: ${timezone}` : '',
      question1 && message ? `${question1}: ${message.substring(0, 500)}` : '',
      record['Response 2'] ? `Additional: ${record['Response 2'].substring(0, 300)}` : ''
    ].filter(Boolean).join('\n')
    
    // Detect packaging type from message
    let packagingType = 'General Inquiry'
    const msgLower = (message + ' ' + (record['Response 2'] || '')).toLowerCase()
    if (msgLower.includes('coffee')) packagingType = 'Coffee Pouch'
    else if (msgLower.includes('tea')) packagingType = 'Tea Packaging'
    else if (msgLower.includes('pet') || msgLower.includes('dog') || msgLower.includes('cat')) packagingType = 'Pet Treats'
    else if (msgLower.includes('pouch')) packagingType = 'Stand Up Pouch'
    else if (msgLower.includes('sachet')) packagingType = 'Sachet'
    else if (msgLower.includes('protein') || msgLower.includes('supplement')) packagingType = 'Supplements'
    else if (msgLower.includes('food') || msgLower.includes('snack')) packagingType = 'Food Packaging'
    else if (msgLower.includes('cosmetic') || msgLower.includes('beauty') || msgLower.includes('skincare')) packagingType = 'Cosmetics'
    else if (msgLower.includes('sauce') || msgLower.includes('liquid')) packagingType = 'Sauce/Liquid'
    else if (msgLower.includes('frozen')) packagingType = 'Frozen Food'
    else if (msgLower.includes('cannabis') || msgLower.includes('cbd')) packagingType = 'Cannabis/CBD'
    
    // Parse date for created_at
    let createdAt = new Date().toISOString()
    if (record['Event Created Date & Time']) {
      try {
        const dateStr = record['Event Created Date & Time']
        // Format: 2021-02-23 05:47 pm
        const [datePart, timePart, ampm] = dateStr.split(' ')
        const [year, month, day] = datePart.split('-')
        let [hours, minutes] = timePart.split(':')
        hours = parseInt(hours)
        if (ampm?.toLowerCase() === 'pm' && hours !== 12) hours += 12
        if (ampm?.toLowerCase() === 'am' && hours === 12) hours = 0
        createdAt = new Date(year, month - 1, day, hours, minutes).toISOString()
      } catch (e) {
        // Use current date if parsing fails
      }
    }
    
    // Determine status - older meetings are likely already contacted
    const meetingDate = new Date(createdAt)
    const now = new Date()
    const monthsOld = (now - meetingDate) / (1000 * 60 * 60 * 24 * 30)
    const status = monthsOld > 3 ? 'contacted' : 'new'
    
    const inquiry = {
      name,
      email,
      phone: phone || null,
      company: null,
      packaging_type: packagingType,
      subject: `Calendly: ${eventType}`,
      message: message.substring(0, 1000) || 'Scheduled a Calendly meeting',
      source: 'calendly',
      status,
      priority: 'medium',
      notes,
      created_at: createdAt,
      updated_at: new Date().toISOString()
    }
    
    try {
      // Check if already exists (from any source)
      if (existingEmails.has(email)) {
        // Update existing record with calendly notes if empty
        const { data: existing } = await supabase
          .from('crm_inquiries')
          .select('id, notes, source')
          .eq('email', email)
          .single()
        
        if (existing && !existing.notes?.includes('Calendly')) {
          await supabase
            .from('crm_inquiries')
            .update({ 
              notes: (existing.notes || '') + '\n\n---\n' + notes,
              updated_at: new Date().toISOString()
            })
            .eq('id', existing.id)
          console.log(`  📝 Updated existing: ${email}`)
        }
        skipped++
        continue
      }
      
      const { error } = await supabase
        .from('crm_inquiries')
        .insert(inquiry)
      
      if (error) {
        console.error(`  ❌ Error importing ${email}:`, error.message)
        skipped++
      } else {
        console.log(`  ✅ Imported: ${name} (${email})`)
        imported++
        existingEmails.add(email)
      }
    } catch (err) {
      console.error(`  ❌ Error: ${err.message}`)
      skipped++
    }
  }
  
  console.log('\n' + '='.repeat(50))
  console.log('📅 Calendly Import Complete!')
  console.log(`  ✅ Imported: ${imported}`)
  console.log(`  ⏭️  Skipped: ${skipped}`)
  console.log(`  ❌ Canceled: ${canceled}`)
  console.log('='.repeat(50))
}

// Run import
const csvFile = process.argv[2] || path.join(__dirname, 'events-export 2.csv')
importCalendlyCSV(csvFile)
