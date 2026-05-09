import fs from 'fs'

const mainTsxPath = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/main.tsx'
const content = fs.readFileSync(mainTsxPath, 'utf8')

// Split by the domain check
const parts = content.split('if (getDomain() === \'pouch\') {')
const pouchBlock = parts[1].split('} else {')[0]
const achieveBlock = parts[1].split('} else {')[1]

function getRoutes(block: string) {
  const routeRegex = /<Route\s+path="([^"]+)"/g
  let match
  const routes = new Set<string>()
  while ((match = routeRegex.exec(block)) !== null) {
    const route = match[1]
    if (!route.includes(':') && route !== '*') {
      routes.add(route)
    }
  }
  return Array.from(routes)
}

const pouchRoutes = getRoutes(pouchBlock)
const achieveRoutes = getRoutes(achieveBlock)

console.log('Pouch routes:', pouchRoutes.length)
console.log('Achieve routes:', achieveRoutes.length)

// Find intersection
const synced = achieveRoutes.filter(r => pouchRoutes.includes(r))
console.log('Synced routes (exist in both):', synced.length)
console.log(synced)

// Find pending
const pending = achieveRoutes.filter(r => !pouchRoutes.includes(r))

fs.writeFileSync('/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/data/route-mapping.json', JSON.stringify({
  pouch: pouchRoutes,
  achieve: achieveRoutes,
  synced,
  pending
}, null, 2))
