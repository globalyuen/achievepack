import re

filepath = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/components/SEO.tsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add useTranslation and useLocation imports if they don't exist
if "useTranslation" not in content:
    content = "import { useTranslation } from 'react-i18next';\n" + content
if "useLocation" not in content:
    content = "import { useLocation } from 'react-router-dom';\n" + content

# Replace the component signature to include the hooks
old_signature = """export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  keywords = [],
  schema,
  faq,
  noindex,
  image,
  type = 'website'
}) => ("""

new_signature = """export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  keywords = [],
  schema,
  faq,
  noindex,
  image,
  type = 'website'
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const location = useLocation();
  
  // Extract domain and clean path for canonical and hreflang generation
  const domainMatch = url.match(/^(https?:\/\/[^\/]+)/);
  const domain = domainMatch ? domainMatch[1] : 'https://achievepack.com';
  
  // Clean up location.pathname by removing the language prefix if it exists
  let cleanPath = location.pathname;
  if (cleanPath.startsWith('/es/') || cleanPath === '/es') cleanPath = cleanPath.replace(/^\/es\/?/, '/');
  else if (cleanPath.startsWith('/fr/') || cleanPath === '/fr') cleanPath = cleanPath.replace(/^\/fr\/?/, '/');
  else if (cleanPath.startsWith('/zh-TW/') || cleanPath === '/zh-TW') cleanPath = cleanPath.replace(/^\/zh-TW\/?/, '/');
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  
  // Generate the actual localized canonical URL
  const localizedCanonical = lang === 'en' ? `${domain}${cleanPath}` : `${domain}/${lang}${cleanPath}`;
  
  // Generate hreflang URLs
  const hrEn = `${domain}${cleanPath}`;
  const hrEs = `${domain}/es${cleanPath}`;
  const hrFr = `${domain}/fr${cleanPath}`;
  const hrZh = `${domain}/zh-TW${cleanPath}`;

  return ("""

content = content.replace(old_signature, new_signature)

# Replace the Helmet section
old_helmet = """  <Helmet>
    <title>{title}</title>
    {noindex && <meta name="robots" content="noindex, nofollow" />}
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />"""

new_helmet = """  <Helmet htmlAttributes={{ lang: lang }}>
    <title>{title}</title>
    {noindex && <meta name="robots" content="noindex, nofollow" />}
    <meta name="description" content={description} />
    <link rel="canonical" href={localizedCanonical} />
    
    {/* Hreflang Tags for International SEO */}
    <link rel="alternate" hrefLang="x-default" href={hrEn} />
    <link rel="alternate" hrefLang="en" href={hrEn} />
    <link rel="alternate" hrefLang="es" href={hrEs} />
    <link rel="alternate" hrefLang="fr" href={hrFr} />
    <link rel="alternate" hrefLang="zh-TW" href={hrZh} />"""

content = content.replace(old_helmet, new_helmet)

# Replace the closing parenthesis at the end
content = re.sub(r'\);\s*\n\s*export default SEO;', ');\n};\n\nexport default SEO;', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated SEO.tsx with hreflang tags and localized canonical URLs.")
