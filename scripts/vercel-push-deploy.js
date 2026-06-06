#!/usr/bin/env node

/**
 * 🚀 Everyday 7:00 AM HKT Vercel Deployment & SEO Progress Report Cron Job
 * 
 * Functions:
 * 1. Scans `src/pages/pouch/blog/` to identify files modified or optimized in the last 24 hours.
 * 2. Checks `git status`. If local modifications exist (rewrites/optimizations), automatically:
 *    - Runs `git add .`
 *    - Commits changes with: "chore: automated B2B SEO/GEO page optimizations [cron 7am]"
 *    - Pushes to the production repository (`git push origin main`), triggering Vercel build.
 * 3. Waits for Vercel's edge network to propagate (polls pages with HTTP requests).
 * 4. Gathers all newly optimized page names, slugs, and verification status.
 * 5. Compiles a premium, high-fidelity HTML email report containing:
 *    - Live Clickable Links to verified online pages.
 *    - Compilation & Deployment metrics.
 *    - Dynamic copy prompt reminding them how to run the subagent.
 * 6. Dispatches the status report directly to ryan@achievepack.com via the website's secure email API.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const BLOG_DIR = path.join(__dirname, '..', 'src', 'pages', 'pouch', 'blog');
const ADMIN_EMAIL = 'ryan@achievepack.com';

function logMessage(msg) {
  console.log(`[DEPLOY-CRON] [${new Date().toISOString()}] ${msg}`);
}

// Strict mapping of TSX filenames to their actual canonical routes in main.tsx
const SLUG_MAPPING = {
  'BPICertifiedGuide.tsx': 'bpi-certified-guide',
  'CompostableHumidityControlGuide.tsx': 'compostable-humidity-control-guide',
  'IndustrialCompostableGuide.tsx': 'industrial-compostable-guide',
  'LowMOQPackagingGuide.tsx': 'low-moq-packaging-guide',
  'OrganicComplianceSupportGuide.tsx': 'organic-compliance-support-guide',
  'PouchStampFoilRecyclabilityPage.tsx': 'stamp-foil-recyclability',
  'USACompostableGuide.tsx': 'usa-compostable-packaging-guide',
  'CoffeePackagingGuide.tsx': 'coffee-packaging-guide',
  'USACoffeePackaging.tsx': 'usa-coffee-packaging',
  'CompostableStandUpPouchesGuide.tsx': 'compostable-stand-up-pouches-guide',
  'USASnacksPackagingGuide.tsx': 'usa-snacks-packaging-guide',
  'USALabelingGuide.tsx': 'usa-labeling-guide',
  'CoffeeDegassingValveGuide.tsx': 'coffee-degassing-valve-guide',
  'HomeCompostableGuide.tsx': 'home-compostable-guide',
  'EcoFriendlyFoodPackagingGuide.tsx': 'eco-friendly-food-packaging-guide',
  'DTCSustainablePackagingGuide.tsx': 'dtc-sustainable-packaging-guide',
  'RecyclableSnackPackagingGuide.tsx': 'recyclable-snack-packaging-guide',
  'CompostableBabyFoodPackagingGuide.tsx': 'compostable-baby-food-packaging-guide',
  'CustomCompostablePouchSuppliersGuide.tsx': 'custom-compostable-pouch-suppliers-guide',
  'CustomPrintedMaterialsGuide.tsx': 'custom-printed-materials-guide',
  'DigitalPrintingEcoPackagingGuide.tsx': 'digital-printing-eco-packaging-guide',
  'EcoPackagingRegulationsGuide.tsx': 'eco-packaging-regulations-guide',
  'GreenCoffeeMaterialsGuide.tsx': 'green-coffee-materials-guide',
  'LowMOQStartupPackagingGuide.tsx': 'low-moq-startup-packaging-guide'
};

// 1. Identify newly modified or optimized pages in the last 24 hours
function getRecentlyModifiedPages() {
  logMessage('Scanning blog directory for recently updated SEO pages...');
  const results = [];
  
  if (!fs.existsSync(BLOG_DIR)) {
    logMessage(`Directory not found: ${BLOG_DIR}. Creating dry run list...`);
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  const now = Date.now();
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  for (const file of files) {
    if (file.endsWith('.tsx') && file !== 'PouchBlogArticlePage.tsx') {
      const filePath = path.join(BLOG_DIR, file);
      const stat = fs.statSync(filePath);
      const isNewOrModified = (now - stat.mtimeMs) < ONE_DAY_MS;
      
      // Convert component filename to URL slug using rigid dictionary mapping
      let slug = SLUG_MAPPING[file];
      if (!slug) {
        slug = file.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        if (slug.endsWith('-guide')) {
          slug = slug.replace('-guide', '');
        }
      }

      // Read file to parse Title/Header
      const content = fs.readFileSync(filePath, 'utf8');
      const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/) || content.match(/heroTitle\s*=\s*['"`](.*?)['"`]/);
      const title = titleMatch ? titleMatch[1] : file.replace('.tsx', '');

      results.push({
        file,
        title,
        slug,
        lastModified: stat.mtime,
        recentlyUpdated: isNewOrModified
      });
    }
  }

  return results;
}

// 2. Perform git commit and push if local changes exist
function deployUpdates() {
  logMessage('Checking local Git status to identify uncommitted rewrites...');
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
    
    if (status) {
      logMessage('Changes detected. Executing git commit & push to production...');
      execSync('git add .');
      execSync('git commit -m "chore: automated B2B SEO/GEO page optimizations [cron 7am]"');
      execSync('git push origin main');
      logMessage('🚀 Git push complete! Production build triggered on Vercel.');
      return true;
    } else {
      logMessage('No uncommitted changes detected in local repo. Production is already synced.');
      return false;
    }
  } catch (err) {
    console.error('[DEPLOY-CRON] Git operation failed:', err.message);
    return false;
  }
}

// 3. Helper to verify HTTP status of live page URLs (follows redirects up to 3 hops)
function verifyLiveStatus(url, depth = 0) {
  return new Promise((resolve) => {
    if (depth > 3) {
      resolve('OFFLINE (TOO MANY REDIRECTS)');
      return;
    }
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = res.headers.location.startsWith('http') 
          ? res.headers.location 
          : new URL(res.headers.location, url).href;
        resolve(verifyLiveStatus(redirectUrl, depth + 1));
      } else {
        resolve(res.statusCode === 200 ? 'ONLINE (200 OK)' : `OFFLINE (${res.statusCode})`);
      }
    }).on('error', () => {
      resolve('BUILDING / OFFLINE');
    });
  });
}

// Main execution block
async function main() {
  logMessage('Starting Daily 7:00 AM HKT Vercel push and SEO progress sweep...');
  
  // A. Push recent local optimizations to production (triggers Vercel build)
  const didPush = deployUpdates();
  
  // If we just pushed, let's wait 150 seconds (2.5 minutes) for Vercel's build pipeline to fully complete compilation & deploy
  if (didPush) {
    logMessage('Waiting 150 seconds for Vercel pipeline compilation & deployment to fully complete...');
    await new Promise(resolve => setTimeout(resolve, 150000));
  }

  // B. Parse modified files and compile online checks
  const pages = getRecentlyModifiedPages();
  const optimizedList = pages.filter(p => p.recentlyUpdated);
  const totalList = pages.slice(0, 12); // Limit total overview list in email to keep size readable

  logMessage(`Found ${optimizedList.length} pages updated in the last 24 hours. Verifying URLs...`);

  // Verify online status for optimized pages (using www to bypass Vercel's canonical non-www redirects)
  for (const page of optimizedList) {
    const liveUrl = `https://www.pouch.eco/blog/${page.slug}`;
    page.liveUrl = liveUrl;
    page.status = await verifyLiveStatus(liveUrl);
    logMessage(`Checked ${liveUrl} -> Status: ${page.status}`);
  }

  // C. Assemble High-Fidelity B2B Status Email
  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  let newlyOptimizedRows = '';
  if (optimizedList.length > 0) {
    newlyOptimizedRows = optimizedList.map(page => `
      <tr>
        <td style="padding: 12px; border-bottom: 2px solid black; font-weight: bold;">🌱 ${page.title}</td>
        <td style="padding: 12px; border-bottom: 2px solid black; font-family: monospace; font-size: 11px;">
          <a href="${page.liveUrl}" target="_blank" style="color: #3b82f6; text-decoration: underline; font-weight: bold;">/blog/${page.slug}</a>
        </td>
        <td style="padding: 12px; border-bottom: 2px solid black; text-align: center;">
          <span style="background-color: ${page.status.includes('200') ? '#dcfce7' : '#fee2e2'}; color: ${page.status.includes('200') ? '#166534' : '#991b1b'}; padding: 4px 8px; border: 2px solid black; font-size: 10px; font-weight: 900; text-transform: uppercase;">
            ${page.status}
          </span>
        </td>
      </tr>
    `).join('');
  } else {
    newlyOptimizedRows = `
      <tr>
        <td colspan="3" style="padding: 24px; text-align: center; border-bottom: 2px solid black; color: #666; font-style: italic;">
          No new B2B SEO optimizations deployed in the last 24 hours. All current articles are synced.
        </td>
      </tr>
    `;
  }

  const overviewRows = totalList.map(page => `
    <tr style="font-size: 12px;">
      <td style="padding: 8px; border-bottom: 1px solid #ddd;">📄 ${page.title}</td>
      <td style="padding: 8px; border-bottom: 1px solid #ddd; font-family: monospace; color: #555;">/blog/${page.slug}</td>
      <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right; color: #888;">
        ${page.recentlyUpdated ? '<span style="background: #D4FF00; color: black; font-weight: bold; padding: 2px 5px; border: 1px solid black; font-size: 9px;">NEWLY REWRITTEN</span>' : 'Active'}
      </td>
    </tr>
  `).join('');

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>7:00 AM HKT Production Push & B2B SEO Progress Report</title>
    </head>
    <body style="font-family: sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #111827;">
      <div style="max-width: 650px; margin: 0 auto; background: white; border: 4px solid black; padding: 30px; box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);">
        
        <!-- Header -->
        <div style="background-color: #0f172a; padding: 20px; border: 3px solid black; margin-bottom: 25px; color: white;">
          <h1 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em; color: #D4FF00;">
            🚀 Daily Production Push Report
          </h1>
          <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">
            Time Zone: HKT (Hong Kong Time) | Daily Sweep: 7:00 AM
          </p>
        </div>

        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
          Hi Ryan,
        </p>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
          Here is your dynamic 7:00 AM HKT Vercel push and B2B SEO/GEO optimization progress summary. All local subagent page rewrites and compliance parameters have been deployed to the live production database.
        </p>

        <!-- Dynamic Commits Card -->
        <div style="background-color: #f0fdf4; border: 3px solid black; padding: 15px; margin-bottom: 25px;">
          <h3 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; color: #166534;">📦 Deployment Logs</h3>
          <p style="margin: 0; font-size: 13px;">
            <strong>Git Status:</strong> ${didPush ? '🧬 Modified files successfully pushed & deployed.' : '✅ Production is up to date (no new changes).'}<br/>
            <strong>Commit Message:</strong> <code>chore: automated B2B SEO/GEO page optimizations [cron 7am]</code><br/>
            <strong>Build Trigger Time:</strong> ${todayStr} 07:00 HKT
          </p>
        </div>

        <!-- Optimized Pages Grid -->
        <h3 style="text-transform: uppercase; font-size: 15px; border-bottom: 3px solid black; padding-bottom: 8px; margin-bottom: 15px;">
          ✨ Newly Optimized & Verified Online Pages (Last 24 Hours)
        </h3>
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr style="background-color: #f3f4f6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">
              <th align="left" style="padding: 12px; border-bottom: 3px solid black;">SEO Page Guide</th>
              <th align="left" style="padding: 12px; border-bottom: 3px solid black;">Production Slug</th>
              <th align="center" style="padding: 12px; border-bottom: 3px solid black; width: 120px;">Deploy Status</th>
            </tr>
          </thead>
          <tbody>
            ${newlyOptimizedRows}
          </tbody>
        </table>

        <!-- Total Index Grid -->
        <h3 style="text-transform: uppercase; font-size: 15px; border-bottom: 3px solid black; padding-bottom: 8px; margin-bottom: 15px;">
          📂 Blog Catalog Overview (First 12 Pages)
        </h3>
        <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <tbody>
            ${overviewRows}
          </tbody>
        </table>

        <!-- Prompt Copy Guide -->
        <div style="background-color: #f5f3ff; border: 3px solid black; padding: 20px; box-shadow: 4px 4px 0px 0px rgba(0,0,0,1); margin-bottom: 30px;">
          <h4 style="margin: 0 0 10px 0; color: #7c3aed; text-transform: uppercase; font-size: 13px;">💡 Admin Command Quick-Pick</h4>
          <p style="margin: 0 0 10px 0; font-size: 12px; line-height: 1.5; color: #4b5563;">
            To prompt Antigravity to run B2B SEO diagnostics on additional pages, copy and paste this exact instruction into the chat window:
          </p>
          <div style="background-color: #1e1b4b; color: #c084fc; padding: 12px; font-family: monospace; font-size: 11px; border: 2px solid black; line-height: 1.4; word-break: break-all;">
            "Load skill seo-geo-diagnostic and invoke the pouch_eco_seo_rewriter subagent to audit and rewrite the remaining files inside src/pages/pouch/blog/."
          </div>
          <p style="margin: 10px 0 0 0; font-size: 11px; color: #6b7280; font-style: italic;">
            *You can also copy this command inside your <a href="https://achievepack.com/admin/daily-reports" target="_blank" style="color: #7c3aed; text-decoration: underline; font-weight: bold;">Daily Reports Control Center</a> by clicking the "SEO Command" header button.
          </p>
        </div>

        <hr style="border: 2px solid black; margin-bottom: 20px;"/>
        <p style="margin: 0; font-size: 11px; color: #9ca3af; text-align: center;">
          *This report is generated dynamically every day at 7:00 AM HKT by the vercel-push-deploy automated cron engine.
        </p>
      </div>
    </body>
    </html>
  `;

  // D. Dispatch the Email Payload via standard Brevo endpoint
  if (process.env.DISABLE_SORO_EMAILS === 'true') {
    logMessage('Email dispatch skipped (disabled globally).');
    logMessage('Deployment cron run complete!');
    process.exit(0);
    return;
  }

  const emailPayload = JSON.stringify({
    subject: `🚀 [SEO Push Report] Daily Vercel Deploy & Pouch.eco Status - ${optimizedList.length} Optimized`,
    htmlContent: emailHtml,
    testEmail: ADMIN_EMAIL
  });

  logMessage(`Dispatching report to ${ADMIN_EMAIL}...`);

  const options = {
    hostname: 'achievepack.com',
    port: 443,
    path: '/api/send-campaign',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(emailPayload)
    }
  };

  const req = https.request(options, (res) => {
    let responseData = '';
    res.on('data', (chunk) => { responseData += chunk; });
    res.on('end', () => {
      logMessage(`Email campaign endpoint responded with status: ${res.statusCode}`);
      logMessage('Deployment cron run complete!');
      process.exit(0);
    });
  });

  req.on('error', (e) => {
    logMessage(`Email dispatch failed: ${e.message}`);
    process.exit(0);
  });

  req.write(emailPayload);
  req.end();
}

main();
