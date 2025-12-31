/**
 * Stripe Transaction Import Script
 * Imports Stripe CSV data into CRM with customer classification
 * 
 * Classification:
 * - Sample Customer: transaction < $100 USD
 * - Paying Customer: transaction >= $100 USD
 */

import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { createClient } from '@supabase/supabase-js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read env file
const envPath = path.join(__dirname, '..', '.env')
const envContent = fs.readFileSync(envPath, 'utf-8')
const envVars = {}
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/)
  if (match) {
    envVars[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '')
  }
})

const supabaseUrl = envVars.VITE_SUPABASE_URL
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Transaction types to import (customer payments)
const VALID_TYPES = [
  'charge',
  'payment'
]

// Currency to USD conversion rates (approximate)
const USD_RATES = {
  'usd': 1,
  'hkd': 0.128,
  'aud': 0.65,
  'gbp': 1.27,
  'eur': 1.08,
  'nzd': 0.61,
  'cad': 0.74
}

function convertToUSD(amount, currency) {
  const rate = USD_RATES[currency.toLowerCase()] || 1
  return parseFloat(String(amount).replace(/,/g, '')) * rate
}

function classifyCustomer(amountUSD) {
  if (amountUSD < 100) {
    return 'sample'
  }
  return 'customer'
}

function parseStripeDate(dateStr) {
  // Date format: YYYY-MM-DD HH:MM
  if (!dateStr) return new Date()
  return new Date(dateStr.replace(' ', 'T') + ':00Z')
}

function extractInvoiceNumber(description) {
  // Extract API number from description like "Achieve Pack - API1011"
  const match = description?.match(/API(\d+)/)
  return match ? `API${match[1]}` : ''
}

async function importStripeTransactions() {
  console.log('🔵 Starting Stripe transaction import...\n')
  
  // Find all CSV files in stripe folder
  const stripeDir = path.join(__dirname, 'stripe')
  
  if (!fs.existsSync(stripeDir)) {
    console.error('❌ Stripe folder not found:', stripeDir)
    process.exit(1)
  }
  
  const csvFiles = fs.readdirSync(stripeDir).filter(f => f.endsWith('.CSV') || f.endsWith('.csv'))
  
  console.log(`Found ${csvFiles.length} CSV files: ${csvFiles.join(', ')}\n`)
  
  const allTransactions = []
  const seenTransactionIds = new Set()
  
  for (const csvFile of csvFiles) {
    const filePath = path.join(stripeDir, csvFile)
    let content = fs.readFileSync(filePath, 'utf-8')
    
    // Remove BOM if present
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1)
    }
    content = content.replace(/^\uFEFF/, '')
    
    const records = parse(content, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      bom: true
    })
    
    console.log(`Processing ${csvFile}: ${records.length} records`)
    
    for (const record of records) {
      const transactionId = record['id']
      const type = record['Type']?.toLowerCase()
      const amount = record['Amount']
      const currency = record['Currency']
      const customerFacingAmount = record['Customer Facing Amount']
      const customerFacingCurrency = record['Customer Facing Currency']
      const name = record['Name (metadata)']
      const email = record['email (metadata)']
      const description = record['Description']
      const createdAt = record['Created (UTC)']
      
      // Skip if already processed
      if (seenTransactionIds.has(transactionId)) continue
      
      // Skip non-payment types (only charge/payment are incoming money)
      if (!VALID_TYPES.includes(type)) continue
      
      // Skip if no customer name (can't create a useful CRM record)
      if (!name || !name.trim()) continue
      
      // Skip negative amounts (refunds)
      const amountNum = parseFloat(String(amount).replace(/,/g, ''))
      if (amountNum <= 0) continue
      
      seenTransactionIds.add(transactionId)
      
      // Calculate USD amount - prefer customer facing currency if USD
      let amountUSD
      if (customerFacingCurrency?.toLowerCase() === 'usd' && customerFacingAmount) {
        amountUSD = parseFloat(String(customerFacingAmount).replace(/,/g, ''))
      } else {
        amountUSD = convertToUSD(amount, currency)
      }
      
      const customerType = classifyCustomer(amountUSD)
      const invoiceNumber = extractInvoiceNumber(description)
      
      // Build notes with all transaction details
      const notes = [
        `Customer Type: ${customerType}`,
        `Transaction: $${amountUSD.toFixed(2)} USD`,
        `Original: ${amount} ${currency.toUpperCase()}`,
        `Stripe Transaction ID: ${transactionId}`,
        invoiceNumber ? `Invoice: ${invoiceNumber}` : '',
        description ? `Description: ${description}` : ''
      ].filter(n => n).join('\n')
      
      allTransactions.push({
        stripe_transaction_id: transactionId,
        name: name.trim(),
        email: email?.toLowerCase() || '',
        phone: '',
        company: name.trim(), // Use name as company for Stripe transactions
        message: description || '',
        packaging_type: '',
        subject: `Stripe ${type}`,
        source: 'stripe',
        status: 'won', // They already paid
        priority: customerType === 'customer' ? 'high' : 'medium',
        customer_type: customerType,
        transaction_amount: amountNum,
        transaction_currency: currency.toUpperCase(),
        transaction_amount_usd: Math.round(amountUSD * 100) / 100,
        notes: notes,
        created_at: parseStripeDate(createdAt).toISOString(),
        updated_at: new Date().toISOString()
      })
    }
  }
  
  console.log(`\n📊 Total unique customer transactions: ${allTransactions.length}`)
  
  // Classify summary
  const samples = allTransactions.filter(t => t.customer_type === 'sample')
  const customers = allTransactions.filter(t => t.customer_type === 'customer')
  
  console.log(`\n📊 Classification Summary:`)
  console.log(`   Sample Orders (< $100): ${samples.length}`)
  console.log(`   Paying Customers (≥ $100): ${customers.length}`)
  
  // Calculate total revenue
  const totalRevenue = allTransactions.reduce((sum, t) => sum + t.transaction_amount_usd, 0)
  console.log(`   Total Revenue: $${totalRevenue.toFixed(2)} USD`)
  
  // By month breakdown
  const byMonth = {}
  allTransactions.forEach(t => {
    const date = new Date(t.created_at)
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    if (!byMonth[monthYear]) {
      byMonth[monthYear] = { count: 0, revenue: 0 }
    }
    byMonth[monthYear].count++
    byMonth[monthYear].revenue += t.transaction_amount_usd
  })
  
  console.log(`\n📅 By Month:`)
  Object.entries(byMonth)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, 12)
    .forEach(([month, data]) => {
      console.log(`   ${month}: ${data.count} transactions, $${data.revenue.toFixed(2)}`)
    })
  
  // Check for existing transactions
  const { data: existing } = await supabase
    .from('crm_inquiries')
    .select('email, name, source')
    .eq('source', 'stripe')
  
  // Create a set of existing entries (by name since some don't have email)
  const existingSet = new Set((existing || []).map(e => `${e.name?.toLowerCase()}-${e.email || ''}`))
  
  // Separate new vs existing
  const newTransactions = allTransactions.filter(t => 
    !existingSet.has(`${t.name.toLowerCase()}-${t.email}`)
  )
  const existingTransactions = allTransactions.filter(t => 
    existingSet.has(`${t.name.toLowerCase()}-${t.email}`)
  )
  
  console.log(`\n🔄 Import Status:`)
  console.log(`   Already in CRM: ${existingTransactions.length}`)
  console.log(`   New to import: ${newTransactions.length}`)
  
  if (newTransactions.length === 0) {
    console.log('\n✅ All transactions already in CRM!')
    return
  }
  
  // Insert new transactions
  console.log(`\n📥 Importing ${newTransactions.length} new transactions...`)
  
  const { error } = await supabase
    .from('crm_inquiries')
    .insert(newTransactions.map(t => ({
      name: t.name,
      email: t.email,
      phone: t.phone,
      company: t.company,
      message: t.message,
      packaging_type: t.packaging_type,
      subject: t.subject,
      source: t.source,
      status: t.status,
      priority: t.priority,
      notes: t.notes,
      created_at: t.created_at,
      updated_at: t.updated_at
    })))
  
  if (error) {
    console.error('❌ Import error:', error)
  } else {
    console.log(`\n✅ Successfully imported ${newTransactions.length} Stripe transactions!`)
  }
  
  // Print customer list
  console.log(`\n👥 Customers imported:`)
  newTransactions.forEach(t => {
    console.log(`   ${t.customer_type === 'customer' ? '⭐' : '📦'} ${t.name} - $${t.transaction_amount_usd.toFixed(2)}`)
  })
}

importStripeTransactions().catch(console.error)
