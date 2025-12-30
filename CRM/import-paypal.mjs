/**
 * PayPal Transaction Import Script
 * Imports PayPal CSV data into CRM with customer classification
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
  'Express Checkout Payment',
  'General Payment',
  'Mobile Payment'
]

// Transactions to exclude (not customer payments)
const EXCLUDE_EMAILS = [
  'paypal-support@evernote.com',
  'paypal-ads-ireland1@fb.com'
]

// Currency to USD conversion rates (approximate)
const USD_RATES = {
  'USD': 1,
  'HKD': 0.128,
  'AUD': 0.65,
  'GBP': 1.27,
  'EUR': 1.08,
  'NZD': 0.61,
  'CAD': 0.74
}

function convertToUSD(amount, currency) {
  const rate = USD_RATES[currency] || 1
  return parseFloat(amount.replace(/,/g, '')) * rate
}

function classifyCustomer(amountUSD) {
  if (amountUSD < 100) {
    return 'sample'
  }
  return 'customer'
}

function parseDate(dateStr, timeStr) {
  // Date format: DD/MM/YYYY
  const [day, month, year] = dateStr.split('/')
  return new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${timeStr}`)
}

function extractCountry(record) {
  // Try to get country from record
  if (record['Country'] && record['Country'].trim()) {
    return record['Country'].trim()
  }
  // Try from shipping address
  const address = record['Shipping Address'] || ''
  const countryMatch = address.match(/, ([A-Za-z ]+)$/)
  if (countryMatch) {
    return countryMatch[1].trim()
  }
  // Try from Country Code
  const code = record['Country Code']
  const codeMap = {
    'US': 'United States',
    'AU': 'Australia',
    'NZ': 'New Zealand',
    'GB': 'United Kingdom',
    'DE': 'Germany',
    'IT': 'Italy',
    'JM': 'Jamaica'
  }
  return codeMap[code] || ''
}

async function importPayPalTransactions() {
  console.log('Starting PayPal transaction import...\n')
  
  // Find all CSV files in paypal folder
  const paypalDir = path.join(__dirname, 'paypal')
  const csvFiles = fs.readdirSync(paypalDir).filter(f => f.endsWith('.CSV') || f.endsWith('.csv'))
  
  console.log(`Found ${csvFiles.length} CSV files: ${csvFiles.join(', ')}\n`)
  
  const allTransactions = []
  const seenTransactionIds = new Set()
  
  for (const csvFile of csvFiles) {
    const filePath = path.join(paypalDir, csvFile)
    let content = fs.readFileSync(filePath, 'utf-8')
    
    // Remove BOM if present
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1)
    }
    // Also try removing common BOMs
    content = content.replace(/^\uFEFF/, '')
    
    const records = parse(content, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      bom: true  // Handle BOM automatically
    })
    
    console.log(`Processing ${csvFile}: ${records.length} records`)
    
    for (const record of records) {
      const transactionId = record['Transaction ID']
      const type = record['Type']
      const fromEmail = record['From Email Address']
      const gross = record['Gross']
      
      // Skip if already processed
      if (seenTransactionIds.has(transactionId)) continue
      
      // Skip non-payment types
      if (!VALID_TYPES.includes(type)) continue
      
      // Skip excluded emails (subscriptions, ads)
      if (EXCLUDE_EMAILS.includes(fromEmail)) continue
      
      // Skip if no customer name
      if (!record['Name'] || !record['Name'].trim()) continue
      
      // Skip negative amounts (refunds)
      if (gross.startsWith('-')) continue
      
      seenTransactionIds.add(transactionId)
      
      const currency = record['Currency']
      const amountUSD = convertToUSD(gross, currency)
      const customerType = classifyCustomer(amountUSD)
      
      allTransactions.push({
        paypal_transaction_id: transactionId,
        name: record['Name'].trim(),
        email: fromEmail.toLowerCase(),
        phone: record['Contact Phone Number'] || '',
        company: '', // Will try to detect from name
        message: record['Item Title'] || '',
        packaging_type: '',
        subject: `PayPal ${type}`,
        source: 'paypal',
        status: 'won', // They already paid
        priority: customerType === 'customer' ? 'high' : 'medium',
        customer_type: customerType,
        transaction_amount: parseFloat(gross.replace(/,/g, '')),
        transaction_currency: currency,
        transaction_amount_usd: Math.round(amountUSD * 100) / 100,
        country: extractCountry(record),
        address: record['Shipping Address'] || '',
        created_at: parseDate(record['Date'], record['Time']).toISOString(),
        updated_at: new Date().toISOString()
      })
    }
  }
  
  console.log(`\nTotal unique customer transactions: ${allTransactions.length}`)
  
  // Classify summary
  const samples = allTransactions.filter(t => t.customer_type === 'sample')
  const customers = allTransactions.filter(t => t.customer_type === 'customer')
  
  console.log(`\n📊 Classification Summary:`)
  console.log(`   Sample Orders (< $100): ${samples.length}`)
  console.log(`   Paying Customers (≥ $100): ${customers.length}`)
  
  // Calculate total revenue
  const totalRevenue = allTransactions.reduce((sum, t) => sum + t.transaction_amount_usd, 0)
  console.log(`   Total Revenue: $${totalRevenue.toFixed(2)} USD`)
  
  // Country breakdown
  const byCountry = {}
  allTransactions.forEach(t => {
    const country = t.country || 'Unknown'
    byCountry[country] = (byCountry[country] || 0) + 1
  })
  console.log(`\n🌍 By Country:`)
  Object.entries(byCountry).sort((a, b) => b[1] - a[1]).forEach(([country, count]) => {
    console.log(`   ${country}: ${count}`)
  })
  
  // Check for existing transactions
  const { data: existing } = await supabase
    .from('crm_inquiries')
    .select('email, source')
    .eq('source', 'paypal')
  
  const existingEmails = new Set((existing || []).map(e => e.email))
  
  // Filter out already imported
  const newTransactions = allTransactions.filter(t => !existingEmails.has(t.email))
  
  console.log(`\n🔄 Import Status:`)
  console.log(`   Already in CRM: ${allTransactions.length - newTransactions.length}`)
  console.log(`   New to import: ${newTransactions.length}`)
  
  if (newTransactions.length === 0) {
    console.log('\n✅ All transactions already imported!')
    return
  }
  
  // Insert new transactions
  console.log(`\n📥 Importing ${newTransactions.length} transactions...`)
  
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
      notes: `Customer Type: ${t.customer_type}\nTransaction: $${t.transaction_amount_usd} ${t.transaction_currency}\nCountry: ${t.country}\nAddress: ${t.address}`,
      created_at: t.created_at,
      updated_at: t.updated_at
    })))
  
  if (error) {
    console.error('Import error:', error)
  } else {
    console.log(`\n✅ Successfully imported ${newTransactions.length} PayPal transactions!`)
  }
}

importPayPalTransactions().catch(console.error)
