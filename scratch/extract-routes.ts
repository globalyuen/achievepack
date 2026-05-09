import fs from 'fs'
import path from 'path'

const mainTsxPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx'
const content = fs.readFileSync(mainTsxPath, 'utf8')

// Regex to find <Route path="..." ... />
const routeRegex = /<Route\s+path="([^"]+)"/g
let match
const routes = new Set<string>()

while ((match = routeRegex.exec(content)) !== null) {
  const route = match[1]
  if (!route.includes(':') && route !== '*') { // Exclude dynamic routes and catch-all for count
    routes.add(route)
  }
}

const allRoutes = Array.from(routes).sort()
console.log('Total unique static routes found:', allRoutes.length)
console.log(JSON.stringify(allRoutes, null, 2))

// Write to a temporary file for the dashboard to use
const outputPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/data/all-routes.json'
const dir = path.dirname(outputPath)
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(allRoutes, null, 2))
