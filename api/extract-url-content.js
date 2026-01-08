export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    try {
        // Validate URL
        const urlObj = new URL(url);
        // Fetch the page content
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; AchievePackBot/1.0; +https://achievepack.com)',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            }
        });
        if (!response.ok) {
            return res.status(400).json({ error: `Failed to fetch URL: ${response.status}` });
        }
        const html = await response.text();
        // Extract title
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
        const title = ogTitleMatch?.[1] || titleMatch?.[1] || 'Untitled';
        // Extract description
        const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
        const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
        const description = ogDescMatch?.[1] || descMatch?.[1] || '';
        // Extract images
        const images = [];
        // OG Image
        const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
        if (ogImageMatch?.[1]) {
            const imgUrl = makeAbsoluteUrl(ogImageMatch[1], urlObj.origin);
            if (imgUrl)
                images.push(imgUrl);
        }
        // All images in the page
        const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        let imgMatch;
        while ((imgMatch = imgRegex.exec(html)) !== null) {
            const imgUrl = makeAbsoluteUrl(imgMatch[1], urlObj.origin);
            if (imgUrl && !images.includes(imgUrl) && isValidImageUrl(imgUrl)) {
                images.push(imgUrl);
            }
            if (images.length >= 10)
                break; // Limit to 10 images
        }
        // Extract main content
        let content = '';
        // Try to find article or main content
        const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
        const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
        const contentMatch = html.match(/<div[^>]*class=["'][^"']*content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
        let rawContent = articleMatch?.[1] || mainMatch?.[1] || contentMatch?.[1] || '';
        if (rawContent) {
            // Clean up HTML - remove scripts, styles, navigation
            rawContent = rawContent
                .replace(/<script[\s\S]*?<\/script>/gi, '')
                .replace(/<style[\s\S]*?<\/style>/gi, '')
                .replace(/<nav[\s\S]*?<\/nav>/gi, '')
                .replace(/<header[\s\S]*?<\/header>/gi, '')
                .replace(/<footer[\s\S]*?<\/footer>/gi, '')
                .replace(/<aside[\s\S]*?<\/aside>/gi, '')
                .replace(/<!--[\s\S]*?-->/g, '');
            // Extract text and keep basic formatting
            content = extractFormattedContent(rawContent);
        }
        // If no content found, use description
        if (!content && description) {
            content = `<p>${description}</p>`;
        }
        const result = {
            title: decodeHtmlEntities(title.trim()),
            description: decodeHtmlEntities(description.trim()),
            content: content,
            images: images,
            url: url
        };
        return res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        console.error('Extract URL error:', error);
        return res.status(500).json({
            error: error instanceof Error ? error.message : 'Failed to extract content'
        });
    }
}
function makeAbsoluteUrl(url, baseUrl) {
    try {
        if (url.startsWith('data:'))
            return null;
        if (url.startsWith('//'))
            return 'https:' + url;
        if (url.startsWith('/'))
            return baseUrl + url;
        if (url.startsWith('http'))
            return url;
        return baseUrl + '/' + url;
    }
    catch {
        return null;
    }
}
function isValidImageUrl(url) {
    const ext = url.toLowerCase().split('?')[0];
    return ext.endsWith('.jpg') ||
        ext.endsWith('.jpeg') ||
        ext.endsWith('.png') ||
        ext.endsWith('.webp') ||
        ext.endsWith('.gif') ||
        url.includes('/image') ||
        url.includes('/img');
}
function decodeHtmlEntities(text) {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, ' ');
}
function extractFormattedContent(html) {
    // Keep headings, paragraphs, lists, and links
    let content = html;
    // Convert headings
    content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '<h2>$1</h2>');
    content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '<h2>$1</h2>');
    content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '<h3>$1</h3>');
    content = content.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '<h3>$1</h3>');
    // Keep paragraphs
    content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '<p>$1</p>');
    // Keep lists
    content = content.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, '<ul>$1</ul>');
    content = content.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, '<ol>$1</ol>');
    content = content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '<li>$1</li>');
    // Keep links
    content = content.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, '<a href="$1">$2</a>');
    // Keep strong/bold and em/italic
    content = content.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '<strong>$1</strong>');
    content = content.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '<strong>$1</strong>');
    content = content.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '<em>$1</em>');
    content = content.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '<em>$1</em>');
    // Remove all other tags but keep content
    content = content.replace(/<(?!\/?(h2|h3|p|ul|ol|li|a|strong|em)\b)[^>]+>/gi, ' ');
    // Clean up whitespace
    content = content.replace(/\s+/g, ' ').trim();
    // Remove empty tags
    content = content.replace(/<(\w+)[^>]*>\s*<\/\1>/gi, '');
    return content;
}
