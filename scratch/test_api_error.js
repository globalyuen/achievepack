import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDT-UPqJroRFexHQoOWLtHih3DRm8j1sME';

async function testApi() {
  const prompt = 'Green stand up pouch';
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
        }
      })
    });
    
    console.log("Imagen 3.0 response status:", response.status);
    const text = await response.text();
    console.log("Imagen 3.0 response body:", text);
    
    // Test Flash Image Gen
    const flashUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${GEMINI_API_KEY}`;
    const flashResponse = await fetch(flashUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Generate an image: ${prompt}` }]
        }]
      })
    });
    console.log("Flash response status:", flashResponse.status);
    const flashText = await flashResponse.text();
    console.log("Flash response body:", flashText);
    
  } catch (error) {
    console.error("Error in testApi:", error);
  }
}

testApi();
