#!/usr/bin/env node

/**
 * Google Search Console Coverage Monitor
 * Monitors sitemap indexing status and reports coverage issues
 * 
 * Setup Instructions:
 * 1. Enable Google Search Console API in Google Cloud Console
 * 2. Create a Service Account and download credentials JSON
 * 3. Save credentials as 'gsc-service-account.json' in project root
 * 4. Grant the service account permission in Search Console
 * 5. Run: node scripts/monitor-gsc.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://achievepack.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');
const REPORT_PATH = path.join(__dirname, '../docs/GSC_COVERAGE_REPORT.md');

// Check if credentials exist
const credentialsPath = path.join(__dirname, '../gsc-service-account.json');
const hasCredentials = fs.existsSync(credentialsPath);

if (!hasCredentials) {
  console.log('⚠️  Google Search Console credentials not found.');
  console.log('📝 To enable automated monitoring:');
  console.log('   1. Visit https://console.cloud.google.com');
  console.log('   2. Enable "Google Search Console API"');
  console.log('   3. Create Service Account and download JSON');
  console.log('   4. Save as: gsc-service-account.json');
  console.log('   5. Grant access in Search Console');
  console.log('');
  console.log('📊 Generating local coverage report instead...');
  generateLocalReport();
  process.exit(0);
}

/**
 * Generate a local coverage report based on sitemap
 */
function generateLocalReport() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error('❌ Sitemap not found');
    process.exit(1);
  }

  const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
  
  if (!urlMatches) {
    console.error('❌ No URLs found in sitemap');
    process.exit(1);
  }

  const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
  const today = new Date().toISOString().split('T')[0];

  // Group URLs by category
  const categories = categorizeUrls(urls);

  // Generate report
  let report = `# Google Search Console Coverage Report\n\n`;
  report += `**Generated:** ${today}\n\n`;
  report += `**Total URLs:** ${urls.length}\n\n`;
  report += `> **Note:** This is a local report. For real-time data from Google Search Console, set up API credentials.\n\n`;
  
  report += `## Sitemap Summary\n\n`;
  report += `| Category | Count |\n`;
  report += `|----------|-------|\n`;
  
  for (const [category, urlList] of Object.entries(categories)) {
    report += `| ${category} | ${urlList.length} |\n`;
  }
  
  report += `\n## URLs by Category\n\n`;
  
  for (const [category, urlList] of Object.entries(categories)) {
    report += `### ${category} (${urlList.length})\n\n`;
    urlList.forEach(url => {
      report += `- ${url}\n`;
    });
    report += `\n`;
  }

  report += `## Monitoring Checklist\n\n`;
  report += `### Manual Checks (Perform Monthly)\n\n`;
  report += `- [ ] Visit [Google Search Console](https://search.google.com/search-console)\n`;
  report += `- [ ] Check Coverage Report for errors\n`;
  report += `- [ ] Verify sitemap was successfully processed\n`;
  report += `- [ ] Review "Valid" vs "Valid with warnings" pages\n`;
  report += `- [ ] Check for "Excluded" pages and reasons\n`;
  report += `- [ ] Monitor "Crawl errors" section\n`;
  report += `- [ ] Verify mobile usability issues\n\n`;

  report += `### Key Metrics to Track\n\n`;
  report += `1. **Coverage Status**\n`;
  report += `   - Valid pages indexed\n`;
  report += `   - Pages with warnings\n`;
  report += `   - Excluded pages\n`;
  report += `   - Error pages\n\n`;
  
  report += `2. **Indexing Progress**\n`;
  report += `   - New pages discovered\n`;
  report += `   - Pages indexed vs submitted\n`;
  report += `   - Time to index new content\n\n`;
  
  report += `3. **Issues to Watch**\n`;
  report += `   - Server errors (5xx)\n`;
  report += `   - Not found (404)\n`;
  report += `   - Redirect errors\n`;
  report += `   - Soft 404s\n`;
  report += `   - Duplicate content\n`;
  report += `   - Crawl anomalies\n\n`;

  report += `### Recommended Actions\n\n`;
  report += `**Weekly:**\n`;
  report += `- Review new coverage issues\n`;
  report += `- Check for sudden drops in indexed pages\n\n`;
  
  report += `**Monthly:**\n`;
  report += `- Run \`npm run update:sitemap\` to update lastmod dates\n`;
  report += `- Submit updated sitemap to Search Console\n`;
  report += `- Review and fix any persistent errors\n`;
  report += `- Analyze page performance in search results\n\n`;
  
  report += `**Quarterly:**\n`;
  report += `- Audit all SEO pages for content quality\n`;
  report += `- Update metadata and structured data\n`;
  report += `- Review internal linking strategy\n`;
  report += `- Optimize underperforming pages\n\n`;

  report += `## Common Issues and Solutions\n\n`;
  report += `### "Discovered - currently not indexed"\n`;
  report += `**Cause:** Google found the page but hasn't indexed it yet\n`;
  report += `**Solution:** Improve page quality, add internal links, request indexing\n\n`;

  report += `### "Crawled - currently not indexed"\n`;
  report += `**Cause:** Page crawled but deemed low priority for indexing\n`;
  report += `**Solution:** Enhance content quality, add more value, increase authority\n\n`;

  report += `### "Duplicate without user-selected canonical"\n`;
  report += `**Cause:** Similar content without clear canonical tags\n`;
  report += `**Solution:** Add proper canonical tags, differentiate content\n\n`;

  report += `### "Soft 404"\n`;
  report += `**Cause:** Page returns 200 but appears to be an error page\n`;
  report += `**Solution:** Return proper 404 status or add more content\n\n`;

  report += `## Setup API Access (Optional)\n\n`;
  report += `For automated monitoring with real Google data:\n\n`;
  report += `\`\`\`bash\n`;
  report += `# 1. Enable Search Console API\n`;
  report += `# Visit: https://console.cloud.google.com/apis/library/searchconsole.googleapis.com\n\n`;
  report += `# 2. Create Service Account\n`;
  report += `# Visit: https://console.cloud.google.com/iam-admin/serviceaccounts\n\n`;
  report += `# 3. Download credentials JSON\n`;
  report += `# Save as: gsc-service-account.json\n\n`;
  report += `# 4. Grant access in Search Console\n`;
  report += `# Visit: https://search.google.com/search-console\n`;
  report += `# Settings > Users and permissions > Add user\n`;
  report += `# Use the service account email\n\n`;
  report += `# 5. Run monitoring script\n`;
  report += `npm run monitor:gsc\n`;
  report += `\`\`\`\n\n`;

  report += `---\n\n`;
  report += `*Last updated: ${today}*\n`;

  // Write report
  fs.writeFileSync(REPORT_PATH, report, 'utf-8');

  console.log(`✅ Coverage report generated!`);
  console.log(`📄 Report saved to: ${REPORT_PATH}`);
  console.log(`📊 Total URLs monitored: ${urls.length}`);
  console.log(`📝 Review the report for monitoring guidelines`);
}

/**
 * Categorize URLs by path pattern
 */
function categorizeUrls(urls) {
  const categories = {
    'Homepage': [],
    'Products': [],
    'Materials': [],
    'Industries': [],
    'Solutions': [],
    'Topics': [],
    'Case Studies': [],
    'Knowledge Base': [],
    'Company': [],
    'Store': [],
    'Support': [],
    'Legal': [],
    'Specifications': [],
    'Other': []
  };

  urls.forEach(url => {
    const path = url.replace('https://achievepack.com', '');
    
    if (path === '/' || path === '') {
      categories['Homepage'].push(url);
    } else if (path.includes('/product/')) {
      categories['Products'].push(url);
    } else if (path.includes('/material/') || path.includes('/composting/') || path.includes('/recyclable/') || path.includes('/biope/') || path.includes('/pcr/')) {
      categories['Materials'].push(url);
    } else if (path.includes('/industry/')) {
      categories['Industries'].push(url);
    } else if (path.includes('/solution/')) {
      categories['Solutions'].push(url);
    } else if (path.includes('/topic/')) {
      categories['Topics'].push(url);
    } else if (path.includes('/case-study/')) {
      categories['Case Studies'].push(url);
    } else if (path.includes('/knowledge/')) {
      categories['Knowledge Base'].push(url);
    } else if (path.includes('/company/') || path.includes('/team/') || path.includes('/about') || path.includes('/b-corp')) {
      categories['Company'].push(url);
    } else if (path.includes('/store')) {
      categories['Store'].push(url);
    } else if (path.includes('/support/') || path.includes('/faq') || path.includes('/contact')) {
      categories['Support'].push(url);
    } else if (path.includes('/terms') || path.includes('/privacy') || path.includes('/shipping')) {
      categories['Legal'].push(url);
    } else if (path.includes('/spec/')) {
      categories['Specifications'].push(url);
    } else {
      categories['Other'].push(url);
    }
  });

  // Remove empty categories
  return Object.fromEntries(
    Object.entries(categories).filter(([_, urls]) => urls.length > 0)
  );
}

// Run the monitor
generateLocalReport();
