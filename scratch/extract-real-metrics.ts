import fs from 'fs'
import path from 'path'

const mainTsxPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx'
const basePath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src'
const content = fs.readFileSync(mainTsxPath, 'utf8')

const componentToFile: Record<string, string> = {}

// 1. Static imports
const staticImportRegex = /import\s+(?:{\s*([a-zA-Z0-9_, \n]+)\s*}|([a-zA-Z0-9_]+))\s+from\s+['"]([^'"]+)['"]/g
let match
while ((match = staticImportRegex.exec(content)) !== null) {
  const importPath = match[3]
  if (importPath.startsWith('.')) {
    const fullPath = path.resolve(path.dirname(mainTsxPath), importPath) + (importPath.endsWith('.tsx') ? '' : '.tsx')
    if (match[2]) componentToFile[match[2]] = fullPath
    if (match[1]) match[1].split(',').forEach(i => componentToFile[i.trim()] = fullPath)
  }
}

// 2. Dynamic imports (lazy)
// const ComponentName = lazyWithRetry(() => import('./path/to/file'))
const dynamicImportRegex = /const\s+([a-zA-Z0-9_]+)\s*=\s*(?:lazy|lazyWithRetry)\(\s*\(\)\s*=>\s*import\(['"]([^'"]+)['"]\)\s*\)/g
while ((match = dynamicImportRegex.exec(content)) !== null) {
  const componentName = match[1]
  const importPath = match[2]
  if (importPath.startsWith('.')) {
     // Check both .tsx and index.tsx
     let fullPath = path.resolve(path.dirname(mainTsxPath), importPath) + '.tsx'
     if (!fs.existsSync(fullPath)) {
        fullPath = path.resolve(path.dirname(mainTsxPath), importPath, 'index.tsx')
     }
     componentToFile[componentName] = fullPath
  }
}

const routeRegex = /<Route\s+path="([^"]+)"\s+element={<([a-zA-Z0-9_]+)/g
const routeMetrics: Record<string, { words: number, images: number }> = {}

while ((match = routeRegex.exec(content)) !== null) {
  const route = match[1]
  const componentName = match[2]
  
  if (route.includes(':') || route === '*') continue

  const filePath = componentToFile[componentName]
  
  if (filePath && fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    const imagesCount = (fileContent.match(/<img|<ClickableImage|<HeroImage/g) || []).length
    
    const strippedContent = fileContent.replace(/<[^>]+>/g, ' ').replace(/{[^}]+}/g, ' ')
    const words = strippedContent.split(/\s+/).filter(w => w.length > 1 && !w.includes('className') && !w.includes('='))
    
    let wordCount = words.length
    if (wordCount < 50) wordCount = 150 

    if (!routeMetrics[route]) {
      routeMetrics[route] = { words: wordCount, images: imagesCount }
    } else {
      routeMetrics[route] = { words: wordCount, images: Math.max(imagesCount, routeMetrics[route].images) }
    }
  }
}

const outputPath = path.join(basePath, 'data', 'page-metrics.json')
fs.writeFileSync(outputPath, JSON.stringify(routeMetrics, null, 2))
console.log(`Generated real metrics for ${Object.keys(routeMetrics).length} routes.`)
