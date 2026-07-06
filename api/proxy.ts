import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const targetUrl = req.query.url as string;
  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing "url" query parameter' });
  }

  // Format url if starting with double slash
  let cleanUrl = targetUrl;
  if (cleanUrl.startsWith('//')) {
    cleanUrl = 'https:' + cleanUrl;
  }

  try {
    const fetchResponse = await fetch(cleanUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.baoxiaohe.com/'
      }
    });

    if (!fetchResponse.ok) {
      return res.status(fetchResponse.status).json({ error: `Failed to fetch target URL: ${fetchResponse.statusText}` });
    }

    const contentType = fetchResponse.headers.get('content-type') || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);

    // Cache responses at the edge for 7 days
    res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate=86400');

    const buffer = Buffer.from(await fetchResponse.arrayBuffer());
    return res.status(200).send(buffer);
  } catch (error: any) {
    console.error('Proxy error:', error);
    return res.status(502).json({ error: `Bad Gateway: ${error.message}` });
  }
}
