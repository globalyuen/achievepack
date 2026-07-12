const fs = require('fs');
const path = require('path');
const { Document, NodeIO } = require('@gltf-transform/core');

async function checkAnimations(filePath) {
  const io = new NodeIO();
  try {
    const doc = await io.read(filePath);
    const root = doc.getRoot();
    const anims = root.listAnimations();
    return anims.length;
  } catch (e) {
    return -1;
  }
}

async function main() {
  const modelsDir = path.join(process.cwd(), 'public', 'models');
  const files = fs.readdirSync(modelsDir).filter(f => f.endsWith('.glb'));
  let animCount = 0;
  for (const f of files) {
    const count = await checkAnimations(path.join(modelsDir, f));
    if (count > 0) {
      console.log(`${f} has ${count} animations`);
      animCount++;
    }
  }
  console.log(`Total models with animations: ${animCount}`);
}
main();
