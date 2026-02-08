# Deployment Monitoring & Daily Reporting

This document describes the deployment verification and daily reporting system for AchievePack.com and Pouch.eco.

---

## 📊 Daily Email Reports

### Overview
Automated daily email reports are sent to `ryan@achievepack.com` every day at 9:00 AM UTC with traffic and SEO performance data for both domains.

### What's Included
- **Website Traffic Statistics**
  - Pageviews
  - Unique visitors
  - Average session duration
  - Bounce rate
  - Top 5 pages by traffic
  
- **SEO Ranking Data**
  - Top 5 keyword rankings
  - Position changes (day over day)
  - Average position across all keywords
  - Total tracked keywords
  - Landing pages for each keyword

### Configuration

#### Environment Variables Required
```bash
# Add these to Vercel Environment Variables
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CRON_SECRET=achievepack-daily-report-2025
```

#### Cron Schedule
The report runs automatically via Vercel Cron:
```json
{
  "path": "/api/daily-report",
  "schedule": "0 9 * * *"
}
```
**Schedule:** Daily at 9:00 AM UTC (1:00 AM PST / 4:00 AM EST)

#### Manual Trigger
You can manually trigger a report via:
```bash
curl -X GET https://achievepack.com/api/daily-report \
  -H "Authorization: Bearer achievepack-daily-report-2025"
```

### Analytics Integration (TODO)

The current implementation uses mock data. To get real analytics, integrate with:

1. **Google Analytics 4 (GA4) API**
   ```bash
   npm install @google-analytics/data
   ```
   - Setup: https://developers.google.com/analytics/devguides/reporting/data/v1
   - Add credentials to Vercel environment variables

2. **Google Search Console API**
   ```bash
   npm install googleapis
   ```
   - Setup: https://developers.google.com/webmaster-tools/search-console-api-original/v3
   - Add credentials to Vercel environment variables

3. **Alternative: Plausible Analytics**
   ```bash
   # Simpler, privacy-focused alternative
   # API: https://plausible.io/docs/stats-api
   ```

### Email Service: Resend

We use [Resend](https://resend.com) for email delivery because:
- ✅ Simple API
- ✅ High deliverability
- ✅ Free tier: 3,000 emails/month
- ✅ Built-in templates
- ✅ Detailed analytics

**Setup:**
1. Sign up at https://resend.com
2. Get your API key
3. Add to Vercel: `RESEND_API_KEY`
4. Verify sending domain: `achievepack.com`

---

## 🔍 Deployment Verification

### Overview
Two-stage verification system to ensure deployments are successful and stable:
1. **Immediate verification** - Runs right after deployment
2. **Follow-up check** - Runs 10 minutes after deployment

### Verification Checks

#### HTTP Status Checks
- ✅ Homepage (achievepack.com & pouch.eco)
- ✅ Sitemap.xml for both domains
- ✅ robots.txt for both domains
- ✅ All pouch.eco pages (10 pages)

#### SEO Verification
- ✅ Canonical URL points to correct domain
- ✅ Meta description present
- ✅ Title tag present
- ✅ Mobile viewport meta tag

#### Content Verification
- ✅ Domain-specific branding visible
- ✅ Navigation menu working
- ✅ Page loads within 10 seconds

### Usage

#### 1. Immediate Verification (After Deployment)
```bash
cd /path/to/achieve-pack
chmod +x scripts/verify-deployment.sh
./scripts/verify-deployment.sh
```

**Expected Output:**
```
==================================
Deployment Verification Script
Mon Jan 30 14:30:00 UTC 2025
==================================

================================
Verifying: https://achievepack.com
================================

Checking https://achievepack.com... ✓ OK (Status: 200)
Checking https://achievepack.com/sitemap.xml... ✓ OK (Status: 200)
...

==================================
Verification Summary
==================================
Total Checks: 25
Passed: 25
Failed: 0
✓ All checks passed!
```

#### 2. Follow-up Check (10 Minutes After Deployment)
```bash
cd /path/to/achieve-pack
chmod +x scripts/post-deployment-check.sh
./scripts/post-deployment-check.sh
```

This script:
1. Waits 10 minutes (allows CDN propagation)
2. Runs full verification suite
3. Reports success/failure

**Run in background:**
```bash
nohup ./scripts/post-deployment-check.sh > post-deployment.log 2>&1 &
```

#### 3. GitHub Actions Integration (Recommended)

Add to `.github/workflows/deploy.yml`:
```yaml
name: Deploy and Verify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        run: vercel deploy --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Immediate Verification
        run: |
          chmod +x scripts/verify-deployment.sh
          ./scripts/verify-deployment.sh
      
      - name: Wait and Follow-up Check
        run: |
          chmod +x scripts/post-deployment-check.sh
          WAIT_DURATION=600 ./scripts/post-deployment-check.sh
```

---

## 🚨 Monitoring Alerts

### Current Status
- ✅ Daily email reports enabled
- ✅ Deployment verification scripts available
- ⏳ Real-time analytics integration (TODO)
- ⏳ Uptime monitoring (TODO)

### Recommended Additional Monitoring

1. **Vercel Analytics** (Built-in)
   - Already included in Vercel Pro plan
   - Real user monitoring (RUM)
   - Web vitals tracking
   - No setup required

2. **Sentry Error Tracking**
   ```bash
   npm install @sentry/react @sentry/vite-plugin
   ```
   - Catches runtime errors
   - Performance monitoring
   - Free tier: 5k errors/month

3. **Uptime Monitoring**
   - Use: UptimeRobot (free) or Better Uptime (paid)
   - Check both domains every 5 minutes
   - Alert via email/SMS on downtime

---

## 📱 Mobile Responsiveness

### Implementation Status
✅ **Pouch.eco mobile menu implemented**
- Hamburger menu for mobile devices
- Slide-in navigation panel
- Touch-friendly buttons (44x44px minimum)
- Neo-brutalist design aesthetic
- Smooth animations using framer-motion

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 767px) {
  - Hamburger menu visible
  - Single column layout
  - Larger touch targets
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  - Desktop menu visible
  - 2-column grids
}

/* Desktop */
@media (min-width: 1024px) {
  - Full navigation visible
  - Multi-column layouts
}
```

### Testing Mobile Responsiveness
1. **Browser DevTools**
   ```
   Chrome DevTools → Toggle Device Toolbar (Cmd+Shift+M)
   Test viewports: iPhone 12 Pro, iPad, Desktop
   ```

2. **Lighthouse Audit**
   ```bash
   npm install -g @lhci/cli
   lhci autorun --url=https://pouch.eco
   ```

3. **Real Device Testing**
   - Test on actual iOS/Android devices
   - Use BrowserStack or Sauce Labs for cross-browser testing

---

## 🔐 SEO Implementation Status

### ✅ Implemented Features

#### 1. Independent Canonical URLs
```tsx
// Each domain points to itself
<link rel="canonical" href="https://pouch.eco/page" />
<link rel="canonical" href="https://achievepack.com/page" />
```

#### 2. Separate Sitemaps
- `https://achievepack.com/sitemap.xml` → sitemap-achievepack.xml
- `https://pouch.eco/sitemap.xml` → sitemap-pouch.xml

#### 3. Dynamic robots.txt
```
User-agent: *
Allow: /

Sitemap: https://[domain]/sitemap.xml
Host: [domain]
```

#### 4. Domain-Specific Meta Tags
- Title tags differentiated by 30%+
- Meta descriptions unique per domain
- Open Graph tags separated
- Twitter cards independent

#### 5. 301 Redirects (WordPress → React)
All old pouch.eco WordPress URLs redirect to new React routes:
- `/gptk` → `/materials/cello-kraft-triplex`
- `/ptn` → `/materials/kraft-duplex`
- `/testimonial` → `/testimonials`
- (See vercel.json for complete list)

### 📊 SEO Monitoring Checklist

**Weekly:**
- [ ] Check Google Search Console for both domains
- [ ] Verify no duplicate content warnings
- [ ] Monitor keyword rankings
- [ ] Check indexing status

**Monthly:**
- [ ] Review traffic trends
- [ ] Analyze conversion rates by domain
- [ ] Update content differentiation if needed
- [ ] Check Core Web Vitals scores

---

## 🎯 Success Metrics

### Deployment Verification
- **Target:** 100% checks passed
- **Action if failed:** Rollback deployment
- **Current:** Manual verification only

### Daily Reports
- **Delivery rate:** Should be 100%
- **Email open rate:** Track in Resend dashboard
- **Data accuracy:** Verify against GA4 monthly

### Mobile Experience
- **Target Lighthouse Score:** 90+
- **Mobile traffic %:** Track in analytics
- **Bounce rate (mobile):** Should be < 50%

### SEO Health
- **Duplicate content warnings:** 0
- **Canonical tag errors:** 0
- **Indexed pages:** Gradually increasing
- **Average position:** Trending upward

---

## 🛠️ Troubleshooting

### Daily Report Not Received

1. **Check Vercel Logs**
   ```bash
   vercel logs achievepack-com --follow
   ```

2. **Verify Cron is Running**
   - Go to Vercel Dashboard → Project → Cron Jobs
   - Check last execution time and status

3. **Test Email Manually**
   ```bash
   curl -X GET https://achievepack.com/api/daily-report \
     -H "Authorization: Bearer achievepack-daily-report-2025"
   ```

4. **Check Resend Dashboard**
   - Log in to resend.com
   - Check email delivery status
   - Look for bounces or spam reports

### Deployment Verification Failed

1. **Check specific error in logs**
2. **Verify DNS is correctly configured**
3. **Check Vercel deployment status**
4. **Test individual URLs manually**
5. **Review recent code changes**

### Mobile Menu Not Working

1. **Clear browser cache**
2. **Check JavaScript console for errors**
3. **Verify framer-motion is installed**
4. **Test on different devices/browsers**

---

## 📞 Support

For issues or questions:
- **Email:** ryan@achievepack.com
- **Documentation:** See `DUAL_DOMAIN_SEO_STRATEGY.md`
- **Deployment Logs:** Vercel Dashboard
- **Analytics:** Google Search Console + GA4

---

Last Updated: 2025-01-30
