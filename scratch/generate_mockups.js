import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDT-UPqJroRFexHQoOWLtHih3DRm8j1sME';

// Prompts for our 3 unique products:
// 1. Rice Paper Zipper Bags
// 2. Flat Bottom Pouches
// 3. Compostable Stand Up Pouches
const productsToGenerate = [
  {
    filename: 'rice-paper-zipper-bags.webp',
    prompt: 'A professional e-commerce product photo of premium B2B compostable stand-up zipper bags with elegant white rice paper texture, standing upright. Dark green themed backdrop, nature design elements, premium e-shop showcase, achievepack.com branding, studio lighting, highly detailed'
  },
  {
    filename: 'flat-bottom-pouches.webp',
    prompt: 'A professional e-commerce product photo of premium B2B eight-side seal flat bottom pouches standing upright, modern matte finish. Nature design theme with dark green tones, luxury e-shop showcase, achievepack.com branding, studio lighting, clean minimal background'
  },
  {
    filename: 'compostable-stand-up-pouches.webp',
    prompt: 'A professional e-commerce product photo of premium B2B compostable stand-up zipper pouches made of white kraft paper, standing upright in a sleek e-shop mockup. Organic elements, dark green themed backdrop, premium e-commerce presentation, achievepack.com branding'
  }
];

const outputDir = '/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/imgs/store/products';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateImage(prompt, filename) {
  const outputPath = path.join(outputDir, filename);
  console.log(`Generating image for ${filename}...`);
  
  // Try Imagen 3.0 first
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${GEMINI_API_KEY}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: '1:1',
          negativePrompt: 'blurry, low quality, distorted, ugly, bad anatomy, watermark, text'
        }
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.predictions && data.predictions.length > 0) {
        const base64Bytes = data.predictions[0].bytesBase64Encoded;
        const buffer = Buffer.from(base64Bytes, 'base64');
        fs.writeFileSync(outputPath, buffer);
        console.log(`Successfully saved ${filename} using Imagen 3.0`);
        return true;
      }
    }
    
    // If Imagen fails, try Flash model
    console.log(`Imagen failed for ${filename}, trying Gemini 2.0 Flash Image Generation...`);
    const flashUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}`;
    
    const flashResponse = await fetch(flashUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Generate an image: ${prompt}` }]
        }],
        generationConfig: {
          temperature: 1.0,
          maxOutputTokens: 8192
        }
      })
    });
    
    if (flashResponse.ok) {
      const flashData = await flashResponse.json();
      if (flashData.candidates?.[0]?.content?.parts) {
        for (const part of flashData.candidates[0].content.parts) {
          if (part.inlineData) {
            const buffer = Buffer.from(part.inlineData.data, 'base64');
            fs.writeFileSync(outputPath, buffer);
            console.log(`Successfully saved ${filename} using Gemini 2.0 Flash`);
            return true;
          }
        }
      }
    }
    
    console.error(`Failed to generate image for ${filename}. Status: ${response.status}`);
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
  return false;
}

async function run() {
  for (const item of productsToGenerate) {
    let success = false;
    let retries = 0;
    while (!success && retries < 2) {
      success = await generateImage(item.prompt, item.filename);
      if (!success) {
        retries++;
        console.log(`Retrying generation for ${item.filename} (Attempt ${retries+1})...`);
      }
    }
  }
}

run();
