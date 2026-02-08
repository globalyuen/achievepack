import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock, ArrowRight, Building2 } from 'lucide-react'
import PouchLayout from './PouchLayout'

interface BlogArticleSection {
  id: string
  title: string
  icon: ReactNode
  content: ReactNode
}

interface BlogArticleProps {
  // SEO Meta
  title: string
  metaDescription: string
  canonicalUrl: string
  keywords?: string[]
  publishedDate?: string
  modifiedDate?: string
  author?: string
  
  // Hero Section
  heroTitle: string | ReactNode
  heroSubtitle: string
  heroImage?: string
  heroImageAlt?: string
  categoryTag?: string
  categoryColor?: string
  readTime?: string
  
  // Content Sections
  sections: BlogArticleSection[]
  
  // CTA Configuration
  ctaTitle?: string
  ctaDescription?: string
  calendlyUrl?: string
  achievePackLink?: string
  achievePackText?: string
  
  // Additional Options
  showTableOfContents?: boolean
  relatedArticles?: Array<{
    title: string
    url: string
    image?: string
  }>
}

export default function BlogArticleTemplate({
  title,
  metaDescription,
  canonicalUrl,
  keywords = [],
  publishedDate,
  modifiedDate,
  author = 'POUCH.ECO Editorial Team',
  
  heroTitle,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  categoryTag,
  categoryColor = '#D4FF00',
  readTime = '5 min read',
  
  sections,
  
  ctaTitle = 'Ready to Make the Switch?',
  ctaDescription = 'Book a free 30-minute consultation to discuss your sustainable packaging needs.',
  calendlyUrl = 'https://calendly.com/30-min-free-packaging-consultancy',
  achievePackLink,
  achievePackText = 'Need enterprise solutions? Visit achievepack.com',
  
  showTableOfContents = true,
  relatedArticles = []
}: BlogArticleProps) {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        {heroImage && <meta property="og:image" content={heroImage} />}
        {publishedDate && <meta property="article:published_time" content={publishedDate} />}
        {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
        <meta property="article:author" content={author} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {heroImage && <meta name="twitter:image" content={heroImage} />}
        
        {/* Schema.org Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": metaDescription,
            "url": canonicalUrl,
            "datePublished": publishedDate,
            "dateModified": modifiedDate || publishedDate,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "POUCH.ECO",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pouch.eco/logo.png"
              }
            },
            "image": heroImage,
            "keywords": keywords.join(', ')
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-8 md:pt-16 pb-12 md:pb-20 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Category Tag */}
          {categoryTag && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <div 
                className="border-4 border-black px-4 py-2 font-['JetBrains_Mono'] font-bold text-sm uppercase transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: categoryColor }}
              >
                {categoryTag}
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mb-6"
          >
            {heroTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-700 mb-8 max-w-3xl"
          >
            {heroSubtitle}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 md:gap-6 font-['JetBrains_Mono'] text-sm mb-8"
          >
            {publishedDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
            <div className="px-3 py-1 bg-[#00FFFF] border-2 border-black text-xs font-bold">
              {author}
            </div>
          </motion.div>

          {/* Hero Image */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              <img 
                src={heroImage} 
                alt={heroImageAlt || heroSubtitle}
                className="w-full h-auto"
                loading="eager"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Table of Contents */}
      {showTableOfContents && sections.length > 3 && (
        <section className="py-12 px-4 bg-white border-t-4 border-b-4 border-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-black text-2xl md:text-3xl uppercase mb-6">
              <span className="bg-[#D4FF00] px-2">Table of Contents</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-3 p-4 bg-[#F0F0F0] border-2 border-black hover:bg-[#D4FF00] transition-colors text-left group"
                >
                  <span className="font-['JetBrains_Mono'] font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm uppercase">{section.title}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <article className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, idx) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#D4FF00] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-black text-2xl md:text-4xl uppercase leading-tight">
                    {section.title}
                  </h2>
                </div>
              </div>
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-a:text-[#10b981] prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-img:border-4 prose-img:border-black">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </article>

      {/* Calendly CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-black text-4xl md:text-6xl uppercase mb-6">
              {ctaTitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-neutral-300 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D4FF00] text-black px-8 py-4 border-4 border-[#D4FF00] font-['JetBrains_Mono'] font-bold uppercase hover:bg-transparent hover:text-[#D4FF00] transition-colors shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(212,255,0,1)]"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 border-4 border-white font-['JetBrains_Mono'] font-bold uppercase hover:bg-white hover:text-black transition-colors"
              >
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achieve Pack Enterprise Link */}
      {achievePackLink && (
        <section className="py-12 px-4 bg-[#F0F0F0] border-t-4 border-black">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4">
                <div className="bg-[#00FFFF] border-2 border-black p-3">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-xl md:text-2xl uppercase mb-2">
                    {achievePackText}
                  </h3>
                  <p className="text-neutral-700 mb-4">
                    For enterprise-level orders, custom material development, and comprehensive packaging solutions, visit our B2B platform.
                  </p>
                  <a
                    href={achievePackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-[#00FFFF] px-6 py-3 border-4 border-black font-['JetBrains_Mono'] font-bold hover:bg-[#00FFFF] hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Visit AchievePack.com
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-black text-3xl md:text-4xl uppercase mb-8">
              <span className="bg-[#D4FF00] px-2">Keep Reading</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((article, idx) => (
                <a
                  key={idx}
                  href={article.url}
                  className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  {article.image && (
                    <div className="border-b-4 border-black overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-sm font-['JetBrains_Mono'] font-bold">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </PouchLayout>
  )
}
