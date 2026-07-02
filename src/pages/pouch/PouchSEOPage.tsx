import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, TrendingUp, Target, Award, BarChart3, CheckCircle, ArrowRight, Calendar, AlertTriangle, Globe, Zap, Layers, Crosshair } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton } from '../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export const sectionsForPouch = ["5 Common Pouch SEO Problems (And Solutions)"]
export const sectionsForAchieve = ["5 Common Pouch SEO Problems (And Solutions)"]

const translations = {
  en: {
    sectionTitle: "5 Common Pouch SEO Problems (And Solutions)",
    desc: "Struggling to rank your sustainable packaging brand? Here are the top 5 technical SEO and search visibility pain points, solved with modern web engineering.",
    points: [
      {
        title: "1. Low Search Visibility for Eco Keywords",
        problem: "Search engines fail to index specific compostable material certifications.",
        solution: "Implement structured Schema.org markup with certification details."
      },
      {
        title: "2. High Bounce Rate on Technical Pages",
        problem: "Heavy content and unoptimized spec sheets slow down mobile page load speeds.",
        solution: "Replace PDFs with interactive web tables, lazy-load images, and use high-performance CDNs."
      },
      {
        title: "3. Keyword Cannibalization",
        problem: "Overlapping product pages for 'compostable' and 'biodegradable' compete against each other.",
        solution: "Establish a clear URL taxonomy and map explicit canonical links."
      },
      {
        title: "4. Regional Search Auditing",
        problem: "B2B buyers in target geographical markets fail to find relevant product pages.",
        solution: "Engineer geo-targeted landing pages with localized H1s and metadata."
      },
      {
        title: "5. Incomplete RFQ/Lead Attribution",
        problem: "Inability to track which search queries lead to high-value sample and quote requests.",
        solution: "Integrate custom server-side event tracking for RFQ forms."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes de SEO en Bolsas (y Soluciones)",
    desc: "¿Tiene dificultades para posicionar su marca de empaques sostenibles? Aquí están los 5 principales puntos críticos de SEO técnico y visibilidad de búsqueda, resueltos con ingeniería web moderna.",
    points: [
      {
        title: "1. Baja visibilidad de búsqueda para palabras clave ecológicas",
        problem: "Los motores de búsqueda no logran indexar certificaciones específicas de materiales compostables.",
        solution: "Implementar marcado estructurado de Schema.org con detalles de certificación."
      },
      {
        title: "2. Alta tasa de rebote en páginas de productos técnicos",
        problem: "El contenido pesado y las hojas de especificaciones ralentizan la velocidad de carga en dispositivos móviles.",
        solution: "Reemplazar archivos PDF con tablas web interactivas, retrasar la carga de imágenes y usar CDN de alto rendimiento."
      },
      {
        title: "3. Canibalización de palabras clave",
        problem: "Las páginas de productos superpuestas para 'compostable' y 'biodegradable' compiten entre sí.",
        solution: "Establecer una taxonomía de URL clara y asignar enlaces canónicos explícitos."
      },
      {
        title: "4. Auditoría de búsqueda regional",
        problem: "Los compradores B2B en los mercados geográficos objetivos no encuentran las páginas de productos relevantes.",
        solution: "Desarrollar páginas de destino con orientación geográfica, H1 y metadatos localizados."
      },
      {
        title: "5. Atribución incompleta de solicitudes de cotización/leads",
        problem: "Incapacidad para rastrear qué consultas de búsqueda conducen a solicitudes de muestras y cotizaciones de alto valor.",
        solution: "Integrar el seguimiento de eventos en el servidor para formularios de solicitud de cotización."
      }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants de SEO pour Sachets (et Solutions)",
    desc: "Vous avez du mal à classer votre marque d'emballages durables ? Voici les 5 principaux points douloureux du SEO technique et de la visibilité de recherche, résolus grâce à l'ingénierie web moderne.",
    points: [
      {
        title: "1. Faible visibilité de recherche pour les mots-clés écologiques",
        problem: "Les moteurs de recherche ne parviennent pas à indexer les certifications de matériaux compostables spécifiques.",
        solution: "Implémenter le balisage structuré Schema.org avec les détails de certification."
      },
      {
        title: "2. Taux de rebond élevé sur les pages techniques de produits",
        problem: "Les contenus lourds et les fiches techniques ralentissent la vitesse de chargement sur mobile.",
        solution: "Remplacer les PDF par des tableaux web interactifs, charger les images en différé et utiliser des CDN performants."
      },
      {
        title: "3. Cannibalisation des mots-clés",
        problem: "Les pages de produits en double pour 'compostable' et 'biodégradable' se font concurrence.",
        solution: "Établir une taxonomie d'URL claire et mapper des liens canoniques explicites."
      },
      {
        title: "4. Audit de recherche régionale",
        problem: "Les acheteurs B2B sur les marchés géographiques ciblés ne trouvent pas les pages de produits pertinentes.",
        solution: "Concevoir des pages de destination géo-ciblées avec des H1 et des métadonnées localisés."
      },
      {
        title: "5. Attribution incomplète des RFQ/leads",
        problem: "Impossible de savoir quelles requêtes de recherche mènent aux demandes de devis et d'échantillons de grande valeur.",
        solution: "Intégrer un suivi personnalisé des événements côté serveur pour les formulaires de demande de devis."
      }
    ]
  },
  'zh-TW': {
    sectionTitle: "5個常見軟包裝SEO問題（及解決方案）",
    desc: "難以提升您環保包裝品牌的搜尋排名？以下是 5 大技術性 SEO 與搜尋能見度痛點，透過現代網頁工程技術完美解決。",
    points: [
      {
        title: "1. 環保關鍵字搜尋能見度低",
        problem: "搜尋引擎未能有效索引特定可堆肥材料的認證資訊。",
        solution: "導入包含認證細節的結構化資料標記 (Schema.org)。"
      },
      {
        title: "2. 技術產品頁面跳出率高",
        problem: "龐大的規格檔案拖慢了行動裝置網頁的載入速度。",
        solution: "用互動式網頁表格取代 PDF 下載，實施圖片懶加載並搭配高效能 CDN。"
      },
      {
        title: "3. 關鍵字自我蠶食",
        problem: "針對「可堆肥」與「可生物降解」的產品頁面相互競爭相同流量。",
        solution: "建立清晰的網頁網址階層架構並對應明確的標準連結 (Canonical)。"
      },
      {
        title: "4. 區域搜尋定位不精確",
        problem: "目標地理市場的 B2B 買家無法尋得相應的在地化產品頁面。",
        solution: "開發具備在地化 H1 標題與元數據 (Metadata) 的地理定位登陸頁面。"
      },
      {
        title: "5. 詢價單與線索歸因不完整",
        problem: "無法追蹤是哪些搜尋字詞帶來了高價值的樣品及報價請求。",
        solution: "針對詢價表單整合客製化伺服器端事件追蹤機制。"
      }
    ]
  }
}


export default function PouchSEOPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en') as keyof typeof translations;
  const currentLang = translations[lang] || translations.en;

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

      {/* 5 Common SEO Problems */}
      <section className="py-16 md:py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4 flex items-center justify-center gap-4">
              <AlertTriangle className="h-10 w-10 text-[#10b981]" />
              {currentLang.sectionTitle}
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-neutral-600 max-w-3xl mx-auto mt-4">
              {currentLang.desc}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {currentLang.points.map((pt, idx) => {
                const icons = [Globe, Zap, Layers, Crosshair, BarChart3]
                const IconComponent = icons[idx] || AlertTriangle
                return (
                  <div key={idx} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-start gap-4">
                    <div className="bg-[#D4FF00] border-2 border-black p-2 flex items-center justify-center font-bold flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-black uppercase text-lg mb-1">
                        {pt.title}
                      </h3>
                      <p className="font-['JetBrains_Mono'] text-sm text-red-600 font-semibold mb-1">
                        <strong>Problem:</strong> {pt.problem}
                      </p>
                      <p className="font-['JetBrains_Mono'] text-sm text-emerald-600 font-semibold">
                        <strong>Solution:</strong> {pt.solution}
                      </p>
                    </div>
                  </div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img 
                  src="/imgs/knowledge/pouch-seo-pain-points.jpg" 
                  alt="5 Common Pouch SEO Problems and Solutions" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
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
