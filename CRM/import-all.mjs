import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const supabaseUrl = 'https://dfjndutsvjtpmldoztxm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmam5kdXRzdmp0cG1sZG96dHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyNDU4MjcsImV4cCI6MjA0NzgyMTgyN30.v7TFShcASPLrnloLqqbVGJKnWMBiDXuSuFLASSpAkKs'
const supabase = createClient(supabaseUrl, supabaseKey)

// Parse PayPal date (DD/MM/YYYY format)
function parsePayPalDate(dateStr, timeStr) {
  if (!dateStr) return new Date().toISOString()
  const [day, month, year] = dateStr.split('/')
  const [hours, minutes, seconds] = (timeStr || '00:00:00').split(':')
  return new Date(year, month - 1, day, hours || 0, minutes || 0, seconds || 0).toISOString()
}

// Parse Stripe date (YYYY-MM-DD HH:MM format)
function parseStripeDate(dateStr) {
  if (!dateStr) return new Date().toISOString()
  return new Date(dateStr.replace(' ', 'T') + ':00Z').toISOString()
}

// Parse Calendly date (YYYY-MM-DD HH:MM am/pm format)
function parseCalendlyDate(dateStr) {
  if (!dateStr) return new Date().toISOString()
  try {
    const [datePart, timePart, ampm] = dateStr.split(' ')
    const [year, month, day] = datePart.split('-')
    let [hours, minutes] = timePart.split(':')
    hours = parseInt(hours)
    if (ampm?.toLowerCase() === 'pm' && hours !== 12) hours += 12
    if (ampm?.toLowerCase() === 'am' && hours === 12) hours = 0
    return new Date(year, month - 1, day, hours, minutes).toISOString()
  } catch {
    return new Date().toISOString()
  }
}

async function importPayPalCSV(csvPath, stats) {
  console.log(`\n📦 Processing PayPal: ${path.basename(csvPath)}`)
  let content = fs.readFileSync(csvPath, 'utf-8')
  // Remove UTF-8 BOM if present
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1)
  const records = parse(content, { columns: true, skip_empty_lines: true, relax_column_count: true, bom: true })
  
  for (const r of records) {
    const gross = parseFloat((r['Gross'] || '0').replace(/,/g, ''))
    if (gross <= 0) continue // Skip non-payments
    if (r['Status'] !== 'Completed') continue
    
    const email = (r['From Email Address'] || '').trim().toLowerCase()
    if (!email || email.includes('achievepack') || email.includes('paypal')) continue
    if (stats.emails.has(email)) { stats.skipped++; continue }
    
    const name = r['Name'] || 'Unknown'
    const createdAt = parsePayPalDate(r['Date'], r['Time'])
    const amount = Math.abs(gross)
    const currency = r['Currency'] || 'USD'
    
    const address = [r['Address Line 1'], r['Town/City'], r['County'], r['Postcode'], r['Country']].filter(Boolean).join(', ')
    const notes = [
      `💰 PayPal: $${amount.toFixed(2)} ${currency}`,
      r['Item Title'] ? `Item: ${r['Item Title']}` : '',
      address ? `Address: ${address}` : '',
      r['Transaction ID'] ? `TxID: ${r['Transaction ID']}` : ''
    ].filter(Boolean).join('\n')
    
    const inquiry = {
      name, email,
      phone: r['Contact Phone Number'] || null,
      source: 'paypal',
      status: 'won',
      priority: 'medium',
      customer_type: amount >= 100 ? 'customer' : 'sample',
      notes,
      created_at: createdAt,
      updated_at: new Date().toISOString()
    }
    
    const { error } = await supabase.from('crm_inquiries').insert(inquiry)
    if (error) { stats.errors++; console.log(`  ❌ ${email}: ${error.message}`) }
    else { stats.imported++; stats.emails.add(email); stats.revenue += amount }
  }
}

async function importStripeCSV(csvPath, stats) {
  console.log(`\n💳 Processing Stripe: ${path.basename(csvPath)}`)
  const content = fs.readFileSync(csvPath, 'utf-8')
  const records = parse(content, { columns: true, skip_empty_lines: true })
  
  for (const r of records) {
    if (r['Type'] !== 'charge' && r['Type'] !== 'payment') continue
    
    const amount = Math.abs(parseFloat(r['Amount'] || '0'))
    if (amount <= 0) continue
    
    const email = (r['email (metadata)'] || '').trim().toLowerCase()
    const name = r['Name (metadata)'] || 'Stripe Customer'
    if (!email || stats.emails.has(email)) { stats.skipped++; continue }
    
    const createdAt = parseStripeDate(r['Created (UTC)'])
    const currency = (r['Currency'] || 'USD').toUpperCase()
    
    const notes = [
      `💳 Stripe: $${amount.toFixed(2)} ${currency}`,
      r['Description'] ? `Desc: ${r['Description']}` : '',
      r['id'] ? `TxID: ${r['id']}` : ''
    ].filter(Boolean).join('\n')
    
    const inquiry = {
      name, email,
      source: 'stripe',
      status: 'won',
      priority: 'medium',
      customer_type: amount >= 100 ? 'customer' : 'sample',
      notes,
      created_at: createdAt,
      updated_at: new Date().toISOString()
    }
    
    const { error } = await supabase.from('crm_inquiries').insert(inquiry)
    if (error) { stats.errors++; console.log(`  ❌ ${email}: ${error.message}`) }
    else { stats.imported++; stats.emails.add(email); stats.revenue += amount }
  }
}

async function importCalendlyCSV(csvPath, stats) {
  console.log(`\n📅 Processing Calendly: ${path.basename(csvPath)}`)
  const content = fs.readFileSync(csvPath, 'utf-8')
  const records = parse(content, { columns: true, skip_empty_lines: true, relax_column_count: true, relax_quotes: true })
  
  for (const r of records) {
    if (r['Canceled']?.toLowerCase() === 'true') continue
    
    const email = (r['Invitee Email'] || '').trim().toLowerCase()
    if (!email || email.includes('test') || email.includes('@achievepack.com')) continue
    if (stats.emails.has(email)) { stats.skipped++; continue }
    
    const name = r['Invitee Name'] || `${r['Invitee First Name'] || ''} ${r['Invitee Last Name'] || ''}`.trim() || 'Unknown'
    const createdAt = parseCalendlyDate(r['Event Created Date & Time'])
    const eventType = r['Event Type Name'] || 'Meeting'
    const message = r['Response 1'] || r['Response 2'] || ''
    
    const notes = [
      `📅 Calendly: ${eventType}`,
      r['Start Date & Time'] ? `Meeting: ${r['Start Date & Time']}` : '',
      message ? `Notes: ${message.substring(0, 300)}` : ''
    ].filter(Boolean).join('\n')
    
    // Extract phone from response if it looks like a phone number
    let phone = null
    const response1 = r['Response 1'] || ''
    if (/^\+?[\d\s\-\(\)]{7,}$/.test(response1.trim())) {
      phone = response1.trim()
    }
    
    const inquiry = {
      name, email, phone,
      source: 'calendly',
      status: 'contacted',
      priority: 'medium',
      subject: `Calendly: ${eventType}`,
      message: message.substring(0, 1000) || 'Scheduled meeting',
      notes,
      created_at: createdAt,
      updated_at: new Date().toISOString()
    }
    
    const { error } = await supabase.from('crm_inquiries').insert(inquiry)
    if (error) { stats.errors++; console.log(`  ❌ ${email}: ${error.message}`) }
    else { stats.imported++; stats.emails.add(email) }
  }
}

async function main() {
  console.log('🚀 CRM Import - All Sources')
  console.log('=' .repeat(50))
  
  // Get existing emails
  const { data: existing } = await supabase.from('crm_inquiries').select('email')
  const stats = {
    emails: new Set(existing?.map(e => e.email.toLowerCase()) || []),
    imported: 0,
    skipped: 0,
    errors: 0,
    revenue: 0
  }
  console.log(`📊 Existing records: ${stats.emails.size}`)
  
  // Import PayPal files (oldest to newest)
  const paypalFiles = [
    'paypal/Download (3).CSV',  // 2022
    'paypal/Download (2).CSV',  // 2023
    'paypal/Download (1).CSV',  // 2024
    'paypal/Download.CSV'       // 2025
  ]
  for (const f of paypalFiles) {
    const filePath = path.join(__dirname, f)
    if (fs.existsSync(filePath)) await importPayPalCSV(filePath, stats)
  }
  
  // Import Stripe
  const stripePath = path.join(__dirname, 'stripe/balance_history.csv')
  if (fs.existsSync(stripePath)) await importStripeCSV(stripePath, stats)
  
  // Import Calendly
  const calendlyPath = path.join(__dirname, 'calendly/events-export 2.csv')
  if (fs.existsSync(calendlyPath)) await importCalendlyCSV(calendlyPath, stats)
  
  console.log('\n' + '='.repeat(50))
  console.log('✅ Import Complete!')
  console.log(`  📥 Imported: ${stats.imported}`)
  console.log(`  ⏭️  Skipped: ${stats.skipped}`)
  console.log(`  ❌ Errors: ${stats.errors}`)
  console.log(`  💰 Total Revenue: $${stats.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`)
  console.log('='.repeat(50))
}

main().catch(console.error)
