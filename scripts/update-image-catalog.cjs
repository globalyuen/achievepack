#!/usr/bin/env node
/**
 * 自动更新图片目录脚本
 * Auto-update Image Catalog Script
 * 
 * 扫描 public/imgs 目录下的所有图片，生成/更新 image-catalog.json
 * Scans public/imgs directory and generates/updates image-catalog.json
 * 
 * 使用方法 / Usage:
 *   node scripts/update-image-catalog.js
 * 
 * 或添加到 package.json:
 *   "scripts": {
 *     "update-catalog": "node scripts/update-image-catalog.js"
 *   }
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMGS_DIR = path.join(PUBLIC_DIR, 'imgs');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'image-catalog.json');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.webp', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.avif'];

/**
 * Recursively scan directory for images
 */
function scanDirectory(dir, basePath = '') {
  const categories = {};
  
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return categories;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    const relativePath = basePath ? `${basePath}/${item.name}` : item.name;
    
    if (item.isDirectory()) {
      // Skip hidden directories
      if (item.name.startsWith('.')) continue;
      
      // Recursively scan subdirectories
      const subCategories = scanDirectory(itemPath, relativePath);
      Object.assign(categories, subCategories);
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      
      // Only process image files
      if (!IMAGE_EXTENSIONS.includes(ext)) continue;
      
      // Get category (parent directory path)
      const category = basePath || 'root';
      
      if (!categories[category]) {
        categories[category] = {
          count: 0,
          images: []
        };
      }
      
      // Get file stats for modification time
      const stats = fs.statSync(itemPath);
      const mtime = stats.mtime.toISOString();
      
      categories[category].images.push({
        filename: item.name,
        path: `/${relativePath}`,
        extension: ext,
        modified: mtime
      });
      categories[category].count++;
    }
  }
  
  return categories;
}

/**
 * Sort categories and images by modification time (newest first)
 */
function sortCatalog(categories) {
  const sorted = {};
  const sortedKeys = Object.keys(categories).sort();
  
  for (const key of sortedKeys) {
    sorted[key] = {
      count: categories[key].count,
      images: categories[key].images.sort((a, b) => 
        new Date(b.modified) - new Date(a.modified) // Newest first
      )
    };
  }
  
  return sorted;
}

/**
 * Calculate statistics
 */
function calculateStats(categories) {
  let totalImages = 0;
  let totalCategories = Object.keys(categories).length;
  const extensionCounts = {};
  
  for (const cat of Object.values(categories)) {
    totalImages += cat.count;
    for (const img of cat.images) {
      extensionCounts[img.extension] = (extensionCounts[img.extension] || 0) + 1;
    }
  }
  
  return { totalImages, totalCategories, extensionCounts };
}

/**
 * Find new images compared to existing catalog
 */
function findNewImages(newCategories, existingCatalog) {
  const newImages = [];
  
  for (const [category, data] of Object.entries(newCategories)) {
    const existingCategory = existingCatalog?.categories?.[category];
    const existingPaths = new Set(
      existingCategory?.images?.map(img => img.path) || []
    );
    
    for (const img of data.images) {
      if (!existingPaths.has(img.path)) {
        newImages.push({
          category,
          ...img
        });
      }
    }
  }
  
  return newImages;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Scanning image directory...');
  console.log(`   Source: ${IMGS_DIR}`);
  
  // Load existing catalog if exists
  let existingCatalog = null;
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      existingCatalog = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      console.log(`   Existing catalog: ${existingCatalog.total_images} images`);
    } catch (e) {
      console.log('   No valid existing catalog found');
    }
  }
  
  // Scan directory
  const categories = scanDirectory(IMGS_DIR);
  const sortedCategories = sortCatalog(categories);
  const stats = calculateStats(sortedCategories);
  
  // Find new images
  const newImages = findNewImages(sortedCategories, existingCatalog);
  
  // Create catalog object
  const catalog = {
    generated: new Date().toISOString().split('T')[0],
    total_images: stats.totalImages,
    total_categories: stats.totalCategories,
    extensions: stats.extensionCounts,
    categories: sortedCategories
  };
  
  // Write to file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(catalog, null, 2));
  
  // Output results
  console.log('\n✅ Image catalog updated successfully!');
  console.log(`   Output: ${OUTPUT_FILE}`);
  console.log(`   Total images: ${stats.totalImages}`);
  console.log(`   Total categories: ${stats.totalCategories}`);
  console.log(`   Extensions: ${JSON.stringify(stats.extensionCounts)}`);
  
  if (newImages.length > 0) {
    console.log(`\n🆕 New images found (${newImages.length}):`);
    for (const img of newImages.slice(0, 20)) {
      console.log(`   - ${img.path}`);
    }
    if (newImages.length > 20) {
      console.log(`   ... and ${newImages.length - 20} more`);
    }
    
    // Output new images for easy JSON editing
    console.log('\n📝 New image paths for JSON metadata:');
    for (const img of newImages) {
      console.log(`   "/imgs${img.path}"`);
    }
  } else {
    console.log('\n✨ No new images found - catalog is up to date!');
  }
}

// Run
main();
