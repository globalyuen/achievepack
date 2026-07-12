import fs from 'fs';
import path from 'path';
import { Document, NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune } from '@gltf-transform/functions';

async function processModel(io, filePath, logoBuffer) {
  const doc = await io.read(filePath);
  const root = doc.getRoot();
  
  // Create a new texture from the logo buffer
  const logoTexture = doc.createTexture('AP_Watermark')
    .setImage(logoBuffer)
    .setMimeType('image/png');

  // Go through all materials
  const materials = root.listMaterials();
  for (const material of materials) {
    // Make material white
    material.setBaseColorFactor([1, 1, 1, 1]);
    
    // Remove all old textures
    material.setBaseColorTexture(null);
    material.setMetallicRoughnessTexture(null);
    material.setNormalTexture(null);
    material.setOcclusionTexture(null);
    material.setEmissiveTexture(null);

    // Apply the AP watermark as base color texture
    material.setBaseColorTexture(logoTexture);
  }

  // Remove unreferenced textures (the old branding ones)
  await doc.transform(prune());
  
  // Save over the file
  await io.write(filePath, doc);
}

async function main() {
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
  
  const logoPath = path.resolve('./public/ap-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  
  const modelsDir = path.resolve('./public/models');
  const files = fs.readdirSync(modelsDir).filter(f => f.endsWith('.glb'));
  
  console.log(`Found ${files.length} .glb files. Processing...`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(modelsDir, file);
    try {
      await processModel(io, filePath, logoBuffer);
      successCount++;
    } catch(e) {
      failCount++;
    }
  }
  
  console.log(`Done! Successfully processed: ${successCount}. Failed: ${failCount}.`);
}

main();
