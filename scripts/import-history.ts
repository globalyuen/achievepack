/**
 * Import email history from Replit Excel export to Supabase
 * Run: npx tsx import-history.ts
 */
import { createClient } from '@supabase/supabase-js'
import XLSX from 'xlsx'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SUPABASE_URL = 'https://vvxkwjkxlnegsxjexgrm.supabase.co'
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2eGt3amt4bG5lZ3N4amV4Z3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzUyMTQyMywiZXhwIjoyMDUzMDk3NDIzfQ.SaeCqk0AeFnIl5_lYPB-RmkQqbhdOd-2wX_G3aW3-eI'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

interface ExcelRow {
    'Date Sent': string
    'Business Name': string
    'Website': string
    'Email': string
    'Search Query': string
    'Sender': string
    'Industry': string
}

async function getExistingEmails(): Promise<Set<string>> {
    const emails = new Set<string>()
    let page = 0
    const pageSize = 1000
    
    console.log('Fetching existing emails...')
    
    while (true) {
        const { data, error } = await supabase
            .from('prospect')
            .select('email')
            .range(page * pageSize, (page + 1) * pageSize - 1)
        
        if (error) {
            console.error('Error fetching emails:', error.message)
            break
        }
        
        if (!data || data.length === 0) break
        
        for (const row of data) {
            if (row.email) {
                emails.add(row.email.toLowerCase())
            }
        }
        
        page++
        if (data.length < pageSize) break
    }
    
    return emails
}

async function importExcel(filePath: string) {
    console.log(`Reading Excel file: ${filePath}`)
    
    // Read Excel file
    const workbook = XLSX.readFile(filePath)
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const data: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet)
    
    console.log(`Found ${data.length} records`)
    
    // Get existing emails
    const existingEmails = await getExistingEmails()
    console.log(`Found ${existingEmails.size} existing emails in database`)
    
    // Filter and prepare records
    const newRecords = data.filter(row => {
        const email = row['Email']?.toString()?.toLowerCase()
        return email && email.includes('@') && !existingEmails.has(email)
    })
    
    console.log(`New records to import: ${newRecords.length}`)
    
    if (newRecords.length === 0) {
        console.log('All records already exist!')
        return
    }
    
    let imported = 0
    let errors = 0
    const batchSize = 50
    const totalBatches = Math.ceil(newRecords.length / batchSize)
    
    for (let i = 0; i < newRecords.length; i += batchSize) {
        const batch = newRecords.slice(i, i + batchSize)
        const batchNum = Math.floor(i / batchSize) + 1
        
        process.stdout.write(`Batch ${batchNum}/${totalBatches}... `)
        
        let batchImported = 0
        let batchErrors = 0
        
        for (const row of batch) {
            try {
                const sender = (row['Sender'] || 'ryan').toString().toLowerCase()
                const validSender = ['ryan', 'jericha', 'eric'].includes(sender) ? sender : 'ryan'
                
                // Create search query
                const { data: searchData, error: searchError } = await supabase
                    .from('prospect_search_query')
                    .insert({
                        query: `Imported: ${row['Industry'] || 'Unknown'}`,
                        sender: validSender,
                        status: 'imported',
                        created_at: row['Date Sent'] || new Date().toISOString()
                    })
                    .select()
                    .single()
                
                if (searchError || !searchData) {
                    batchErrors++
                    continue
                }
                
                // Create prospect
                const { error: prospectError } = await supabase
                    .from('prospect')
                    .insert({
                        search_query_id: searchData.id,
                        name: (row['Business Name'] || 'Unknown').toString().substring(0, 500),
                        email: row['Email'].toString(),
                        website: (row['Website'] || '').toString().substring(0, 500),
                        business_type: (row['Industry'] || 'Unknown').toString().substring(0, 100),
                        email_sent: true,
                        email_sent_at: row['Date Sent'] || new Date().toISOString(),
                        sales_pitch: row['Search Query'] || ''
                    })
                
                if (prospectError) {
                    batchErrors++
                } else {
                    batchImported++
                }
            } catch (e) {
                batchErrors++
            }
        }
        
        imported += batchImported
        errors += batchErrors
        
        console.log(`Done (+${batchImported}, err:${batchErrors}) | Total: ${imported}`)
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 200))
    }
    
    console.log('\n==================================================')
    console.log('IMPORT COMPLETE')
    console.log('==================================================')
    console.log(`Total Records: ${newRecords.length}`)
    console.log(`Imported: ${imported}`)
    console.log(`Errors: ${errors}`)
    console.log('==================================================')
}

// Get file path from command line or use default
const excelPath = process.argv[2] || '../../prospect/email_history_20260125_160114.xlsx'
const absolutePath = path.resolve(__dirname, excelPath)

if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`)
    process.exit(1)
}

importExcel(absolutePath)
