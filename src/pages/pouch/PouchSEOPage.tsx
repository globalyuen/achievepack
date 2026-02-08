import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, TrendingUp, Target, Award, BarChart3, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'

export default function PouchSEOPage() {
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
  const title = 'SEO Guide for Compostable Packaging Brands | POUCH.ECO'
  const description = 'Learn how to rank your compostable packaging brand on Google. Keyword research, content strategy, and technical SEO tips for eco-friendly pouch companies.'

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
    { term: 'compostable pouches', volume: '1.2K/mo', difficulty: 'Medium' },
    { term: 'eco friendly packaging', volume: '5.8K/mo', difficulty: 'High' },
    { term: 'biodegradable bags', volume: '3.4K/mo', difficulty: 'Medium' },
    { term: 'sustainable packaging', volume: '12K/mo', difficulty: 'High' },
    { term: 'plant based pouches', volume: '890/mo', difficulty: 'Low' },
    { term: 'home compostable bags', volume: '720/mo', difficulty: 'Low' }
  ]

  const contentStrategies = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Find what your customers are actually searching for',
      tips: [
        'Target long-tail keywords like "certified compostable coffee bags"',
        'Use Google Search Console to find ranking opportunities',
        'Focus on buyer-intent keywords (e.g., "buy compostable pouches")',
        'Track competitor keywords using SEMrush or Ahrefs'
      ]
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Create content that ranks AND converts',
      tips: [
        'Write comprehensive guides (1500+ words)',
        'Answer "what is," "how to," and "vs" questions',
        'Include product comparisons and use cases',
        'Add customer testimonials and case studies'
      ]
    },
    {
      icon: BarChart3,
      title: 'Technical SEO',
      description: 'Make your site fast, mobile-friendly, and crawlable',
      tips: [
        'Optimize page speed (under 3 seconds load time)',
        'Use responsive design for mobile users',
        'Create XML sitemap and robots.txt',
        'Implement schema markup for rich snippets'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How long does SEO take for packaging brands?',
      answer: 'Expect 3-6 months to see meaningful results. Compostable packaging is a growing niche, so ranking can happen faster than competitive industries. Focus on long-tail keywords first, then expand to broader terms as you gain authority.'
    },
    {
      question: 'What keywords should I target for compostable pouches?',
      answer: 'Start with product-specific terms like "certified compostable coffee bags" or "biodegradable stand-up pouches." Avoid generic terms like "packaging" initially. Use Google Keyword Planner to find search volume and competition levels.'
    },
    {
      question: 'Do I need a blog for SEO?',
      answer: 'Yes. A blog helps you target informational keywords (e.g., "how to choose compostable packaging") that attract buyers earlier in their research phase. Aim for 2-4 high-quality posts per month covering certification guides, material comparisons, and industry trends.'
    },
    {
      question: 'How important are backlinks for packaging SEO?',
      answer: 'Very important. Quality backlinks from sustainability blogs, industry publications, and eco-directories signal authority to Google. Focus on earning links through guest posts, partnerships, and creating shareable content like infographics or research reports.'
    },
    {
      question: 'Should I optimize for Google or Amazon?',
      answer: 'Both, but differently. Google SEO focuses on content and authority. Amazon SEO prioritizes product titles, bullet points, and reviews. If you sell on Amazon, optimize both channels—but Google captures buyers in research mode before they reach Amazon.'
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
          <video
            autoPlay
            loop
            muted
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
              SEO Strategy Guide
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Rank Your
              <span className="block text-[#10b981] -rotate-1 inline-block">Eco Brand</span>
              on Google
            </h1>

            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-8 leading-relaxed">
              SEO tactics that actually work for compostable packaging brands. No fluff. Just rankings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4FF00] text-black px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all font-['Space_Grotesk'] font-black uppercase text-lg"
              >
                <Calendar className="h-5 w-5" />
                Book SEO Consult
              </a>
              <a
                href="#keywords"
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all font-['Space_Grotesk'] font-black uppercase text-lg"
              >
                See Keywords
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#D4FF00] border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            <h2 className="text-sm font-['JetBrains_Mono'] font-bold uppercase tracking-wider mb-3 rotate-1">TL;DR</h2>
            <p className="text-lg md:text-xl font-['Space_Grotesk'] leading-relaxed rotate-1">
              SEO for eco packaging = keyword research + high-quality content + technical optimization. Target long-tail keywords, write comprehensive guides, and earn backlinks from sustainability sites. Expect 3-6 months for results.
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
              <span className="text-[#10b981]">Top Keywords</span> to Target
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-neutral-600 max-w-3xl mx-auto">
              These are the highest-converting search terms for compostable packaging brands. Start here.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <thead className="bg-[#D4FF00] border-b-4 border-black">
                <tr>
                  <th className="px-6 py-4 text-left font-['Space_Grotesk'] font-black uppercase border-r-4 border-black">Keyword</th>
                  <th className="px-6 py-4 text-left font-['Space_Grotesk'] font-black uppercase border-r-4 border-black">Search Volume</th>
                  <th className="px-6 py-4 text-left font-['Space_Grotesk'] font-black uppercase">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {seoKeywords.map((keyword, index) => (
                  <tr key={index} className="border-b-4 border-black last:border-b-0 hover:bg-[#D4FF00]/20 transition">
                    <td className="px-6 py-4 font-['JetBrains_Mono'] font-bold border-r-4 border-black">{keyword.term}</td>
                    <td className="px-6 py-4 font-['JetBrains_Mono'] border-r-4 border-black">{keyword.volume}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 border-2 border-black font-['JetBrains_Mono'] text-sm font-bold uppercase ${
                        keyword.difficulty === 'Low' ? 'bg-green-200' :
                        keyword.difficulty === 'Medium' ? 'bg-yellow-200' :
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
              <span className="text-[#10b981]">3-Step</span> SEO Strategy
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-neutral-600 max-w-3xl mx-auto">
              Follow this framework to rank faster and convert more eco-conscious buyers.
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
                Why SEO <span className="text-[#10b981]">Matters</span> for Eco Brands
              </h2>
              <p className="text-lg font-['JetBrains_Mono'] mb-6 leading-relaxed">
                Your customers are searching for sustainable packaging RIGHT NOW. If you're not ranking, they're finding your competitors instead.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <TrendingUp className="h-6 w-6 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black uppercase mb-1">Organic Traffic = Free Leads</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">Paid ads cost $3-8 per click. SEO brings qualified buyers for free, month after month.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Award className="h-6 w-6 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black uppercase mb-1">Authority = Trust</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">Ranking on page 1 signals credibility. Buyers trust brands that Google trusts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Target className="h-6 w-6 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black uppercase mb-1">Long-Tail = Higher Conversion</h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600">Target specific searches like "certified compostable coffee bags" to attract buyers ready to purchase.</p>
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
                SEO Stats That Matter
              </h3>
              <div className="space-y-6 rotate-1">
                <div className="bg-white border-4 border-black p-4">
                  <p className="text-5xl font-['Space_Grotesk'] font-black text-[#10b981] mb-2">75%</p>
                  <p className="font-['JetBrains_Mono'] text-sm">of users never scroll past page 1 of Google results</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <p className="text-5xl font-['Space_Grotesk'] font-black text-[#10b981] mb-2">53%</p>
                  <p className="font-['JetBrains_Mono'] text-sm">of all website traffic comes from organic search</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <p className="text-5xl font-['Space_Grotesk'] font-black text-[#10b981] mb-2">14.6%</p>
                  <p className="font-['JetBrains_Mono'] text-sm">average conversion rate for organic search (vs 1.7% for paid ads)</p>
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
              <span className="text-[#10b981]">Common</span> SEO Questions
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
              Ready to <span className="text-[#10b981]">Rank Higher?</span>
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8">
              Book a FREE 30-minute SEO consultation. We'll audit your site, identify quick wins, and build a custom keyword strategy.
            </p>
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-[#D4FF00] px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all font-['Space_Grotesk'] font-black uppercase text-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Your SEO Consult
            </a>
            <p className="text-sm font-['JetBrains_Mono'] mt-4">
              No pitch. No obligation. Just actionable SEO advice.
            </p>
          </motion.div>
        </div>
      </section>
    </PouchLayout>
  )
}
