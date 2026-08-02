const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const AP_ROOT = path.join(__dirname, '..');
const EP_ROOT = path.join(__dirname, '../../../pouch-eco-website');

console.log('===================================================');
console.log('💰 SMART VERCEL COST-SAVING DEPLOYMENT SYSTEM');
console.log('===================================================\n');

// Step 1: Local Pre-Build Gatekeeper (Guarantee Zero Vercel Failures)
console.log('🛡️ Step 1: Running Local Compilation Check (tsc)...');
try {
  execSync('npx tsc --noEmit', { cwd: AP_ROOT, stdio: 'inherit' });
  console.log('✅ Local TypeScript check passed with 0 errors.');
} catch (e) {
  console.error('\n❌ Local TypeScript compilation failed! Deployment ABORTED to save Vercel build credits.');
  process.exit(1);
}

console.log('\n🛡️ Step 2: Running Total SEO Audit & i18n Sync...');
try {
  execSync('node scripts/total-seo-solution.cjs --fix', { cwd: AP_ROOT, stdio: 'inherit' });
  console.log('✅ Total SEO audit & i18n synchronization passed.');
} catch (e) {
  console.error('\n❌ SEO audit failed! Deployment ABORTED to save Vercel build credits.');
  process.exit(1);
}

// Step 2: Git Diff Change Detection
console.log('\n🔍 Step 3: Checking Git Change Diff for AP and EP...');

let apHasChanges = false;
let epHasChanges = false;

try {
  const apStatus = execSync('git status --porcelain', { cwd: AP_ROOT, encoding: 'utf8' }).trim();
  apHasChanges = apStatus.length > 0;
} catch (e) {
  apHasChanges = true; // Fallback
}

if (fs.existsSync(EP_ROOT)) {
  try {
    const epStatus = execSync('git status --porcelain', { cwd: EP_ROOT, encoding: 'utf8' }).trim();
    epHasChanges = epStatus.length > 0;
  } catch (e) {
    epHasChanges = true; // Fallback
  }
}

console.log(`- AchievePack (AP) Status: ${apHasChanges ? '✏️  Modified' : '🔒 Unchanged'}`);
console.log(`- Pouch Eco (EP) Status: ${epHasChanges ? '✏️  Modified' : '🔒 Unchanged'}`);

// Step 3: Smart Selective Vercel Deployment
if (!apHasChanges && !epHasChanges) {
  console.log('\n🎉 No uncommitted code changes detected in either store. Deployment skipped to save Vercel build credits!');
  process.exit(0);
}

if (apHasChanges) {
  console.log('\n🚀 Deploying AchievePack (AP) to Vercel Production...');
  try {
    execSync('npx vercel --prod --yes', { cwd: AP_ROOT, stdio: 'inherit' });
    console.log('✅ AP Deployment Complete!');
  } catch (e) {
    console.error('❌ AP Deployment encountered an error.');
  }
}

if (epHasChanges && fs.existsSync(EP_ROOT)) {
  console.log('\n🚀 Deploying Pouch Eco (EP) to Vercel Production...');
  try {
    execSync('npx vercel --prod --yes', { cwd: EP_ROOT, stdio: 'inherit' });
    console.log('✅ EP Deployment Complete!');
  } catch (e) {
    console.error('❌ EP Deployment encountered an error.');
  }
}

console.log('\n===================================================');
console.log('🎉 SMART VERCEL DEPLOYMENT FINISHED');
console.log('===================================================\n');
