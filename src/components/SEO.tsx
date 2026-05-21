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
}) => (
  <Helmet>
    <title>{title}</title>
    {noindex && <meta name="robots" content="noindex, nofollow" />}
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
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

export default SEO;
