import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, TrendingUp, Target, Award, BarChart3, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton } from '../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export default function PouchSEOPage() {
  const { t } = useTranslation()
  // Add scroll detection for enhanced animations
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  const canonicalUrl = 'https://pouch.eco/seo-guide'
  const title = t('pouchSEOPage.meta.title', 'SEO Guide for Compostable Packaging Brands | POUCH.ECO')
  const description = t('pouchSEOPage.meta.description', 'Learn how to rank your compostable packaging brand on Google. Keyword research, content strategy, and technical SEO tips for eco-friendly pouch companies.')

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": canonicalUrl,
    "datePublished": "2026-02-02",
    "dateModified": "2026-02-02",
    "author": {
      "@type": "Organization",
      "name": "POUCH.ECO"
    },
    "publisher": {
      "@type": "Organization",
      "name": "POUCH.ECO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pouch.eco/logo.png"
      }
    },
    "mainEntityOfPage": canonicalUrl
  }

  const seoKeywords = [
    { term: t('pouchSEOPage.keywords.k1.term', 'compostable pouches'), volume: '1.2K/mo', difficulty: t('pouchSEOPage.difficulty.medium', 'Medium') },
    { term: t('pouchSEOPage.keywords.k2.term', 'eco friendly packaging'), volume: '5.8K/mo', difficulty: t('pouchSEOPage.difficulty.high', 'High') },
    { term: t('pouchSEOPage.keywords.k3.term', 'biodegradable bags'), volume: '3.4K/mo', difficulty: t('pouchSEOPage.difficulty.medium', 'Medium') },
    { term: t('pouchSEOPage.keywords.k4.term', 'sustainable packaging'), volume: '12K/mo', difficulty: t('pouchSEOPage.difficulty.high', 'High') },
    { term: t('pouchSEOPage.keywords.k5.term', 'plant based pouches'), volume: '890/mo', difficulty: t('pouchSEOPage.difficulty.low', 'Low') },
    { term: t('pouchSEOPage.keywords.k6.term', 'home compostable bags'), volume: '720/mo', difficulty: t('pouchSEOPage.difficulty.low', 'Low') }
  ]

  const contentStrategies = [
    {
      icon: Search,
      title: t('pouchSEOPage.strategy.s1.title', 'Keyword Research'),
      description: t('pouchSEOPage.strategy.s1.description', 'Find what your customers are actually searching for'),
      tips: [
        t('pouchSEOPage.strategy.s1.tip1', 'Target long-tail keywords like "certified compostable coffee bags"'),
        t('pouchSEOPage.strategy.s1.tip2', 'Use Google Search Console to find ranking opportunities'),
        t('pouchSEOPage.strategy.s1.tip3', 'Focus on buyer-intent keywords (e.g., "buy compostable pouches")'),
        t('pouchSEOPage.strategy.s1.tip4', 'Track competitor keywords using SEMrush or Ahrefs')
      ]
    },
    {
      icon: Target,
      title: t('pouchSEOPage.strategy.s2.title', 'Content Strategy'),
      description: t('pouchSEOPage.strategy.s2.description', 'Create content that ranks AND converts'),
      tips: [
        t('pouchSEOPage.strategy.s2.tip1', 'Write comprehensive guides (1500+ words)'),
        t('pouchSEOPage.strategy.s2.tip2', 'Answer "what is," "how to," and "vs" questions'),
        t('pouchSEOPage.strategy.s2.tip3', 'Include product comparisons and use cases'),
        t('pouchSEOPage.strategy.s2.tip4', 'Add customer testimonials and case studies')
      ]
    },
    {
      icon: BarChart3,
      title: t('pouchSEOPage.strategy.s3.title', 'Technical SEO'),
      description: t('pouchSEOPage.strategy.s3.description', 'Make your site fast, mobile-friendly, and crawlable'),
      tips: [
        t('pouchSEOPage.strategy.s3.tip1', 'Optimize page speed (under 3 seconds load time)'),
        t('pouchSEOPage.strategy.s3.tip2', 'Use responsive design for mobile users'),
        t('pouchSEOPage.strategy.s3.tip3', 'Create XML sitemap and robots.txt'),
        t('pouchSEOPage.strategy.s3.tip4', 'Implement schema markup for rich snippets')
      ]
    }
  ]

  const faqs = [
    {
      question: t('pouchSEOPage.faq.q1.question', 'How long does SEO take for packaging brands?'),
      answer: t('pouchSEOPage.faq.q1.answer', 'Expect 3-6 months to see meaningful results. Compostable packaging is a growing niche, so ranking can happen faster than competitive industries. Focus on long-tail keywords first, then expand to broader terms as you gain authority.')
    },
    {
      question: t('pouchSEOPage.faq.q2.question', 'What keywords should I target for compostable pouches?'),
      answer: t('pouchSEOPage.faq.q2.answer', 'Start with product-specific terms like "certified compostable coffee bags" or "biodegradable stand-up pouches." Avoid generic terms like "packaging" initially. Use Google Keyword Planner to find search volume and competition levels.')
    },
    {
      question: t('pouchSEOPage.faq.q3.question', 'Do I need a blog for SEO?'),
      answer: t('pouchSEOPage.faq.q3.answer', 'Yes. A blog helps you target informational keywords (e.g., "how to choose compostable packaging") that attract buyers earlier in their research phase. Aim for 2-4 high-quality posts per month covering certification guides, material comparisons, and industry trends.')
    },
    {
      question: t('pouchSEOPage.faq.q4.question', 'How important are backlinks for packaging SEO?'),
      answer: t('pouchSEOPage.faq.q4.answer', 'Very important. Quality backlinks from sustainability blogs, industry publications, and eco-directories signal authority to Google. Focus on earning links through guest posts, partnerships, and creating shareable content like infographics or research reports.')
    },
    {
      question: t('pouchSEOPage.faq.q5.question', 'Should I optimize for Google or Amazon?'),
      answer: t('pouchSEOPage.faq.q5.answer', 'Both, but differently. Google SEO focuses on content and authority. Amazon SEO prioritizes product titles, bullet points, and reviews. If you sell on Amazon, optimize both channels—but Google captures buyers in research mode before they reach Amazon.')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="SEO for packaging brands, compostable pouch SEO, eco packaging marketing, sustainable packaging keywords, biodegradable bag SEO, green packaging search optimization" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-seo"
          >
            <source src="/video/pouch-eco-marketing-videos/Brand.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[#D4FF00] text-black px-6 py-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 font-['JetBrains_Mono'] uppercase text-sm font-bold rotate-1">
              <Search className="h-5 w-5" />
              {t('pouchSEOPage.hero.badge', 'SEO Strategy Guide')}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('pouchSEOPage.hero.title1', 'Rank Your')}
              <span className="block text-[#10b981] -rotate-1 inline-block">{t('pouchSEOPage.hero.titleHighlight', 'Eco Brand')}</span>
              {t('pouchSEOPage.hero.title2', 'on Google')}
            </h1>

            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-8 leading-relaxed">
              {t('pouchSEOPage.hero.subtitle', 'SEO tactics that actually work for compostable packaging brands. No fluff. Just rankings.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoButton
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="text-lg"
              >
                <Calendar className="h-5 w-5 mr-2 inline-block" />
                {t('pouchSEOPage.hero.btn1', 'Book SEO Consult')}
              </NeoButton>
              <NeoButton
                variant="secondary"
                href="#keywords"
                className="text-lg"
              >
                {t('pouchSEOPage.hero.btn2', 'See Keywords')}
                <ArrowRight className="h-5 w-5 ml-2 inline-block" />
              </NeoButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#D4FF00] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <h2 className="text-sm font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-3 rotate-1">{t('pouchSEOPage.tldr.title', 'TL;DR')}</h2>
            <p className="text-lg md:text-xl font-['Space_Grotesk'] leading-relaxed rotate-1">
              {t('pouchSEOPage.tldr.content', 'SEO for eco packaging = keyword research + high-quality content + technical optimization. Target long-tail keywords, write comprehensive guides, and earn backlinks from sustainability sites. Expect 3-6 months for results.')}
            </p>
          </div>
        </div>
      </section>

      {/* Keyword Research Table */}
      <section id="keywords" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              <span className="text-[#10b981]">{t('pouchSEOPage.keywords.titleHighlight', 'Top Keywords')}</span> {t('pouchSEOPage.keywords.title2', 'to Target')}
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-neutral-600 max-w-3xl mx-auto">
              {t('pouchSEOPage.keywords.subtitle', 'These are the highest-converting search terms for compostable packaging brands. Start here.')}
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <thead className="bg-[#D4FF00] border-b-4 border-black">
                <tr>
                  <th className="px-6 py-4 text-left font-['Space_Grotesk'] font-black uppercase border-r-4 border-black">{t('pouchSEOPage.table.th1', 'Keyword')}</th>
                  <th className="px-6 py-4 text-left font-['Space_Grotesk'] font-black uppercase border-r-4 border-black">{t('pouchSEOPage.table.th2', 'Search Volume')}</th>
                  <th className="px-6 py-4 text-left font-['Space_Grotesk'] font-black uppercase">{t('pouchSEOPage.table.th3', 'Difficulty')}</th>
                </tr>
              </thead>
              <tbody>
                {seoKeywords.map((keyword, index) => (
                  <tr key={index} className="border-b-4 border-black last:border-b-0 hover:bg-[#D4FF00]/20 transition">
                    <td className="px-6 py-4 font-['JetBrains_Mono'] font-bold border-r-4 border-black">{keyword.term}</td>
                    <td className="px-6 py-4 font-['JetBrains_Mono'] border-r-4 border-black">{keyword.volume}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 border-2 border-black font-['JetBrains_Mono'] text-sm font-bold uppercase ${
                        keyword.difficulty === t('pouchSEOPage.difficulty.low', 'Low') ? 'bg-green-200' :
                        keyword.difficulty === t('pouchSEOPage.difficulty.medium', 'Medium') ? 'bg-yellow-200' :
                        'bg-red-200'
                      }`}>
                        {keyword.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Content Strategies */}
      <section className="py-16 md:py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              <span className="text-[#10b981]">{t('pouchSEOPage.strategy.titleHighlight', '3-Step')}</span> {t('pouchSEOPage.strategy.title2', 'SEO Strategy')}
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-neutral-600 max-w-3xl mx-auto">
              {t('pouchSEOPage.strategy.subtitle', 'Follow this framework to rank faster and convert more eco-conscious buyers.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all p-6 rotate-1"
              >
                <div className="bg-[#D4FF00] border-4 border-black p-4 w-fit mb-6 -rotate-2">
                  <strategy.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase mb-3">{strategy.title}</h3>
                <p className="font-['JetBrains_Mono'] text-neutral-600 mb-6">{strategy.description}</p>
                <ul className="space-y-3">
                  {strategy.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="font-['JetBrains_Mono'] text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Matters for Eco Brands */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
                {t('pouchSEOPage.why.title1', 'Why SEO')} <span className="text-[#10b981]">{t('pouchSEOPage.why.titleHighlight', 'Matters')}</span> {t('pouchSEOPage.why.title2', 'for Eco Brands')}
              </h2>
              <p className="text-lg font-['JetBrains_Mono'] mb-6 leading-relaxed">
                {t('pouchSEOPage.why.desc', 'Your customers are searching for sustainable packaging RIGHT NOW. If you\'re not ranking, they\'re finding your competitors instead.')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <TrendingUp className="h-6 w-6 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black uppercase mb-1">{t('pouchSEOPage.why.point1.title', 'Organic Traffic = Free Leads')}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">{t('pouchSEOPage.why.point1.desc', 'Paid ads cost $3-8 per click. SEO brings qualified buyers for free, month after month.')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Award className="h-6 w-6 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black uppercase mb-1">{t('pouchSEOPage.why.point2.title', 'Authority = Trust')}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">{t('pouchSEOPage.why.point2.desc', 'Ranking on page 1 signals credibility. Buyers trust brands that Google trusts.')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Target className="h-6 w-6 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black uppercase mb-1">{t('pouchSEOPage.why.point3.title', 'Long-Tail = Higher Conversion')}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">{t('pouchSEOPage.why.point3.desc', 'Target specific searches like "certified compostable coffee bags" to attract buyers ready to purchase.')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#10b981] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 -rotate-1"
            >
              <h3 className="text-3xl font-['Space_Grotesk'] font-black uppercase text-white mb-6 rotate-1">
                {t('pouchSEOPage.stats.title', 'SEO Stats That Matter')}
              </h3>
              <div className="space-y-6 rotate-1">
                <div className="bg-white border-4 border-black p-4">
                  <p className="text-5xl font-['Space_Grotesk'] font-black text-[#10b981] mb-2">{t('pouchSEOPage.stats.s1.val', '75%')}</p>
                  <p className="font-['JetBrains_Mono'] text-sm">{t('pouchSEOPage.stats.s1.desc', 'of users never scroll past page 1 of Google results')}</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <p className="text-5xl font-['Space_Grotesk'] font-black text-[#10b981] mb-2">{t('pouchSEOPage.stats.s2.val', '53%')}</p>
                  <p className="font-['JetBrains_Mono'] text-sm">{t('pouchSEOPage.stats.s2.desc', 'of all website traffic comes from organic search')}</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <p className="text-5xl font-['Space_Grotesk'] font-black text-[#10b981] mb-2">{t('pouchSEOPage.stats.s3.val', '14.6%')}</p>
                  <p className="font-['JetBrains_Mono'] text-sm">{t('pouchSEOPage.stats.s3.desc', 'average conversion rate for organic search (vs 1.7% for paid ads)')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              <span className="text-[#10b981]">{t('pouchSEOPage.faq.titleHighlight', 'Common')}</span> {t('pouchSEOPage.faq.title2', 'SEO Questions')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
              >
                <h3 className="text-xl font-['Space_Grotesk'] font-black uppercase mb-3">{faq.question}</h3>
                <p className="font-['JetBrains_Mono'] text-neutral-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              {t('pouchSEOPage.cta.title1', 'Ready to')} <span className="text-[#10b981]">{t('pouchSEOPage.cta.titleHighlight', 'Rank Higher?')}</span>
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8">
              {t('pouchSEOPage.cta.desc', 'Book a FREE 30-minute SEO consultation. We\'ll audit your site, identify quick wins, and build a custom keyword strategy.')}
            </p>
            <NeoButton
              variant="dark"
              href="https://calendly.com/30-min-free-packaging-consultancy"
              className="!text-[#D4FF00] !border-[#D4FF00] text-lg"
            >
              <Calendar className="h-5 w-5 mr-2 inline-block" />
              {t('pouchSEOPage.cta.btn', 'Book Your SEO Consult')}
            </NeoButton>
            <p className="text-sm font-['JetBrains_Mono'] mt-4">
              {t('pouchSEOPage.cta.footer', 'No pitch. No obligation. Just actionable SEO advice.')}
            </p>
          </motion.div>
        </div>
      </section>
    </PouchLayout>
  )
}
