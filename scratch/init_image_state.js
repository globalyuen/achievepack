const fs = require('fs')
const path = require('path')

const queuePath = path.resolve(__dirname, 'image_regeneration_queue.json')
const statePath = path.resolve(__dirname, 'image_generation_state.json')

if (!fs.existsSync(queuePath)) {
  console.error('Queue file not found!')
  process.exit(1)
}

const queue = JSON.parse(fs.readFileSync(queuePath, 'utf8'))
const state = queue.map(item => ({
  slug: item.slug,
  title: item.title,
  prompt: item.prompt,
  imageName: item.imageName,
  status: 'pending',
  processedAt: null
}))

fs.writeFileSync(statePath, JSON.stringify(state, null, 2), 'utf8')
console.log(`Initialized state file with ${state.length} pending items at: ${statePath}`)
