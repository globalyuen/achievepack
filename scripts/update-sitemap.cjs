#!/usr/bin/env node

/**
 * Sitemap Auto-Updater
 * Automatically updates lastmod dates in sitemap.xml
 * Run this script periodically (monthly) or before deployment
 */

const fs = require('fs');
const path = require('path');

const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Pages that should have more frequent updates
const FREQUENT_UPDATE_PATTERNS = [
  '/blog',
  '/store',
  '/' // Homepage
];

// Pages that rarely change
const STATIC_PATTERNS = [
  '/terms',
  '/privacy',
  '/shipping'
];

function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

function updateSitemap() {
  console.log('🔄 Starting sitemap update...');
  
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap not found at:', SITEMAP_PATH);
    process.exit(1);
  }

  let content = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const today = getCurrentDate();
  let updateCount = 0;

  // Parse XML to find all URLs
  const urlMatches = content.match(/<url>[\s\S]*?<\/url>/g);
  
  if (!urlMatches) {
    console.error('❌ No URLs found in sitemap');
    process.exit(1);
  }

  console.log(`📊 Found ${urlMatches.length} URLs in sitemap`);

  urlMatches.forEach(urlBlock => {
    const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/);
    
    if (!locMatch || !lastmodMatch) return;

    const url = locMatch[1];
    const currentLastmod = lastmodMatch[1];
    const urlPath = url.replace('https://achievepack.com', '');

    // Determine if this URL should be updated
    let shouldUpdate = false;
    
    // Check if it's a frequently updated page
    const isFrequent = FREQUENT_UPDATE_PATTERNS.some(pattern => 
      urlPath === pattern || urlPath.startsWith(pattern)
    );
    
    // Check if it's a static page
    const isStatic = STATIC_PATTERNS.some(pattern => 
      urlPath === pattern || urlPath.startsWith(pattern)
    );

    // Update logic:
    // - Frequent pages: Always update
    // - Static pages: Only if more than 6 months old
    // - Other pages: Only if more than 1 month old
    if (isFrequent) {
      shouldUpdate = true;
    } else if (isStatic) {
      const lastmodDate = new Date(currentLastmod);
      const monthsSinceUpdate = (new Date() - lastmodDate) / (1000 * 60 * 60 * 24 * 30);
      shouldUpdate = monthsSinceUpdate > 6;
    } else {
      const lastmodDate = new Date(currentLastmod);
      const monthsSinceUpdate = (new Date() - lastmodDate) / (1000 * 60 * 60 * 24 * 30);
      shouldUpdate = monthsSinceUpdate > 1;
    }

    if (shouldUpdate && currentLastmod !== today) {
      const newUrlBlock = urlBlock.replace(
        `<lastmod>${currentLastmod}</lastmod>`,
        `<lastmod>${today}</lastmod>`
      );
      content = content.replace(urlBlock, newUrlBlock);
      updateCount++;
    }
  });

  // Write updated content
  fs.writeFileSync(SITEMAP_PATH, content, 'utf-8');

  console.log(`✅ Sitemap updated successfully!`);
  console.log(`📝 Updated ${updateCount} URLs with lastmod: ${today}`);
  console.log(`📍 Sitemap location: ${SITEMAP_PATH}`);
}

// Run the update
try {
  updateSitemap();
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
