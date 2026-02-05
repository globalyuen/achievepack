/**
 * Performance Monitoring and Web Vitals Tracking
 * Tracks Core Web Vitals and sends to Google Analytics
 */

import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

// Send metrics to Google Analytics
function sendToAnalytics(metric: Metric) {
  // Use Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }
}

// Send metrics to custom endpoint (optional)
function sendToCustomEndpoint(metric: Metric) {
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    url: window.location.href,
    timestamp: Date.now(),
  });

  // Use sendBeacon if available (doesn't block page unload)
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/vitals', body);
  } else {
    // Fallback to fetch
    fetch('/api/vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to send vitals:', error);
      }
    });
  }
}

/**
 * Initialize Web Vitals tracking
 */
export function initWebVitals() {
  // Cumulative Layout Shift (CLS) - Should be < 0.1
  getCLS(sendToAnalytics);

  // First Input Delay (FID) - Should be < 100ms
  getFID(sendToAnalytics);

  // First Contentful Paint (FCP) - Should be < 1.8s
  getFCP(sendToAnalytics);

  // Largest Contentful Paint (LCP) - Should be < 2.5s
  getLCP(sendToAnalytics);

  // Time to First Byte (TTFB) - Should be < 600ms
  getTTFB(sendToAnalytics);

  // Also send to custom endpoint if needed
  // getCLS(sendToCustomEndpoint);
  // getFID(sendToCustomEndpoint);
  // getFCP(sendToCustomEndpoint);
  // getLCP(sendToCustomEndpoint);
  // getTTFB(sendToCustomEndpoint);
}

/**
 * Performance optimization tips
 */
export const PERFORMANCE_TIPS = {
  LCP: {
    good: '< 2.5s',
    needsImprovement: '2.5s - 4s',
    poor: '> 4s',
    tips: [
      'Optimize images (use WebP, proper sizing)',
      'Remove render-blocking JavaScript',
      'Improve server response times',
      'Use CDN for static assets',
      'Implement lazy loading for images',
    ],
  },
  FID: {
    good: '< 100ms',
    needsImprovement: '100ms - 300ms',
    poor: '> 300ms',
    tips: [
      'Break up long JavaScript tasks',
      'Optimize JavaScript execution',
      'Use web workers for heavy computations',
      'Minimize main thread work',
      'Reduce JavaScript payload',
    ],
  },
  CLS: {
    good: '< 0.1',
    needsImprovement: '0.1 - 0.25',
    poor: '> 0.25',
    tips: [
      'Set dimensions for images and embeds',
      'Never insert content above existing content',
      'Use CSS transforms instead of properties that trigger layout',
      'Preload web fonts',
      'Reserve space for dynamic content',
    ],
  },
  FCP: {
    good: '< 1.8s',
    needsImprovement: '1.8s - 3s',
    poor: '> 3s',
    tips: [
      'Eliminate render-blocking resources',
      'Minify CSS',
      'Remove unused CSS',
      'Preconnect to required origins',
      'Reduce server response times',
    ],
  },
  TTFB: {
    good: '< 600ms',
    needsImprovement: '600ms - 1s',
    poor: '> 1s',
    tips: [
      'Use edge CDN for faster delivery',
      'Optimize database queries',
      'Implement server-side caching',
      'Use HTTP/2 or HTTP/3',
      'Optimize server configuration',
    ],
  },
};

/**
 * Get performance score
 */
export function getPerformanceScore(metrics: { [key: string]: number }) {
  let score = 100;

  // LCP scoring
  if (metrics.LCP) {
    if (metrics.LCP > 4000) score -= 30;
    else if (metrics.LCP > 2500) score -= 15;
  }

  // FID scoring
  if (metrics.FID) {
    if (metrics.FID > 300) score -= 20;
    else if (metrics.FID > 100) score -= 10;
  }

  // CLS scoring
  if (metrics.CLS) {
    if (metrics.CLS > 0.25) score -= 25;
    else if (metrics.CLS > 0.1) score -= 12;
  }

  // FCP scoring
  if (metrics.FCP) {
    if (metrics.FCP > 3000) score -= 15;
    else if (metrics.FCP > 1800) score -= 8;
  }

  // TTFB scoring
  if (metrics.TTFB) {
    if (metrics.TTFB > 1000) score -= 10;
    else if (metrics.TTFB > 600) score -= 5;
  }

  return Math.max(0, score);
}
