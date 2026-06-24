import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  schema?: Record<string, any>;
  faq?: Array<{ question: string; answer: string }>;
  noindex?: boolean;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
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

  return (
  <Helmet htmlAttributes={{ lang: lang }}>
    <title>{title}</title>
    {noindex && <meta name="robots" content="noindex, nofollow" />}
    <meta name="description" content={description} />
    <link rel="canonical" href={localizedCanonical} />
    
    {/* Hreflang Tags for International SEO */}
    <link rel="alternate" hrefLang="x-default" href={hrEn} />
    <link rel="alternate" hrefLang="en" href={hrEn} />
    <link rel="alternate" hrefLang="es" href={hrEs} />
    <link rel="alternate" hrefLang="fr" href={hrFr} />
    <link rel="alternate" hrefLang="zh-TW" href={hrZh} />
    {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
    
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
    
    {/* Structured Data */}
    {schema && (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    )}
    {/* FAQ Structured Data */}
    {faq && (
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faq.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": { "@type": "Answer", "text": q.answer }
          }))
        })}
      </script>
    )}
  </Helmet>
);
};

export default SEO;
