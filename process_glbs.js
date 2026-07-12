import fs from 'fs';
import path from 'path';
import { Document, NodeIO } from '@gltf-transform/core';
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions';
import { prune } from '@gltf-transform/functions';

async function processModel(filePath, logoBuffer) {
  const io = new NodeIO().registerExtensions(KHRONOS_EXTENSIONS);
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

    // If extensions are attached, clear their textures too (like clearcoat)
    const clearcoat = material.getExtension('KHR_materials_clearcoat');
    if (clearcoat) {
      clearcoat.setClearcoatTexture(null);
      clearcoat.setClearcoatRoughnessTexture(null);
      clearcoat.setClearcoatNormalTexture(null);
    }
    
    const transmission = material.getExtension('KHR_materials_transmission');
    if (transmission) {
      transmission.setTransmissionTexture(null);
    }

    // Apply the AP watermark as base color texture
    material.setBaseColorTexture(logoTexture);
  }

  // Remove unreferenced textures (the old branding ones)
  await doc.transform(prune());
  
  // Save over the file
  await io.write(filePath, doc);
  console.log(`Processed ${path.basename(filePath)}`);
}

async function main() {
  const logoPath = path.resolve('./public/ap-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  
  const testFile = path.resolve('./public/models/1065.glb');
  
  try {
    await processModel(testFile, logoBuffer);
    console.log("Test processing complete.");
  } catch(e) {
    console.error("Error processing:", e);
  }
}

main();
