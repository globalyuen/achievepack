const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const envPathLocal = path.resolve(__dirname, '../.env.local')
if (fs.existsSync(envPathLocal)) {
  const envContent = fs.readFileSync(envPathLocal, 'utf8')
  const parsed = dotenv.parse(envContent)
  console.log('Keys in .env.local:', Object.keys(parsed))
}

const envPathProdLocal = path.resolve(__dirname, '../.env.production.local')
if (fs.existsSync(envPathProdLocal)) {
  const envContent = fs.readFileSync(envPathProdLocal, 'utf8')
  const parsed = dotenv.parse(envContent)
  console.log('Keys in .env.production.local:', Object.keys(parsed))
}

const envPath = path.resolve(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  const parsed = dotenv.parse(envContent)
  console.log('Keys in .env:', Object.keys(parsed))
}
