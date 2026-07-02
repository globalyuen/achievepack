import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, CheckCircle, Award, Calendar, Shield, Recycle, Factory, Package, X, ChevronRight, ChevronDown, Sprout, Globe, Target, HelpCircle, ArrowRight, TrendingDown, BarChart3, FileCheck, Zap, ClipboardCheck, Layers, Scale, Lightbulb, Building2, TreePine, Users } from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useTranslation } from 'react-i18next'

// Image paths - using imgs/biope/vs folder
const IMAGES = {
  hero: '/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp',
  decisionFramework: '/imgs/biope/vs/a_decision_framework_choose_path_8075169.webp',
  whenCompostable: '/imgs/biope/vs/a_when_choose_compostable_films_8027638.webp',
  whenBioPE: '/imgs/biope/vs/a_when_choose_bio_pe_1946260.webp',
  infrastructureFit: '/imgs/biope/vs/a_infrastructure_fit_comparison_9019274.webp',
  productResidue: '/imgs/biope/vs/a_product_residue_profile_analysis_2433405.webp',
  climateResource: '/imgs/biope/vs/a_climate_resource_impact_lifecycle_2440323.webp',
  portfolioStrategy: '/imgs/biope/vs/a_portfolio_strategy_market_matching_2355561.webp',
  achievePackSupport: '/imgs/biope/vs/a_achieve_pack_services_support_5094748.webp',
  nextSteps: '/imgs/biope/vs/a_next_steps_call_to_action_4319626.webp',
}

// Clickable Image Component with lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-transform group-hover:scale-[1.02]`}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-2 text-center">{caption}</figcaption>
        )}
        <div className="text-xs text-primary-600 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</div>
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 z-[10000] text-white hover:text-neutral-300 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 px-4 py-2 rounded-lg max-w-lg">
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  )
}

// Alternating Image-Text Row Component
const ImageTextRow: React.FC<{
  image: string
  imageAlt: string
  imageCaption?: string
  children: React.ReactNode
  imageLeft?: boolean
}> = ({ image, imageAlt, imageCaption, children, imageLeft = true }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center`}>
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
          <div className="order-1 md:order-2">{children}</div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-1">{children}</div>
          <div className="order-2 md:order-2">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
        </>
      )}
    </div>
  )
}

const translations = {
  en: {
    title: "5 Common Bio-PE vs Compostable Problems (And Solutions)",
    problems: [
      {
        problem: "Shelf Life and Degradation Risk",
        solution: "Bio-PE provides identical barrier properties to traditional PE, ensuring a long shelf life without premature breakdown, unlike some compostable films."
      },
      {
        problem: "Recycling Stream Confusion",
        solution: "Implement clear labeling and consumer education so Bio-PE enters the PE recycling stream (RIC 4), and compostable packaging goes to industrial composters."
      },
      {
        problem: "Barrier to Oxygen and Moisture",
        solution: "For sensitive products like food or pharmaceuticals, Bio-PE is engineered to maintain high barrier integrity, outperforming standard compostable alternatives."
      },
      {
        problem: "Cost and Scalability Challenges",
        solution: "Bio-PE drops perfectly into existing PE extrusion infrastructure, reducing manufacturing overhead and offering better cost scalability than novel compostable resins."
      },
      {
        problem: "End-of-Life Infrastructure Gaps",
        solution: "Align material choice with target market capabilities: use compostable where industrial facilities are prevalent, and Bio-PE where PE recycling is well-established."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes (Y Soluciones) en Bio-PE vs Compostable",
    problems: [
      {
        problem: "Riesgo de Vida Útil y Degradación",
        solution: "El Bio-PE proporciona propiedades de barrera idénticas al PE tradicional, garantizando una larga vida útil sin descomposición prematura, a diferencia de algunas películas compostables."
      },
      {
        problem: "Confusión en el Flujo de Reciclaje",
        solution: "Implementar un etiquetado claro y educación al consumidor para que el Bio-PE entre en el flujo de reciclaje de PE (RIC 4) y los envases compostables vayan a compostadores industriales."
      },
      {
        problem: "Barrera contra el Oxígeno y la Humedad",
        solution: "Para productos sensibles como alimentos o productos farmacéuticos, el Bio-PE está diseñado para mantener una alta integridad de barrera, superando a las alternativas compostables estándar."
      },
      {
        problem: "Desafíos de Costo y Escalabilidad",
        solution: "El Bio-PE se adapta perfectamente a la infraestructura de extrusión de PE existente, reduciendo los costos de fabricación y ofreciendo una mejor escalabilidad de costos que las resinas compostables novedosas."
      },
      {
        problem: "Brechas en la Infraestructura del Fin de Vida Útil",
        solution: "Alinear la elección de material con las capacidades del mercado objetivo: usar compostable donde prevalecen las instalaciones industriales, y Bio-PE donde el reciclaje de PE está bien establecido."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants (Et Solutions) : Bio-PE vs Compostable",
    problems: [
      {
        problem: "Risque sur la Durée de Conservation et la Dégradation",
        solution: "Le Bio-PE offre des propriétés barrières identiques à celles du PE traditionnel, assurant une longue durée de conservation sans décomposition prématurée, contrairement à certains films compostables."
      },
      {
        problem: "Confusion dans la Filière de Recyclage",
        solution: "Mettre en œuvre un étiquetage clair et éduquer les consommateurs pour que le Bio-PE intègre la filière de recyclage du PE (RIC 4), tandis que les emballages compostables vont vers le compostage industriel."
      },
      {
        problem: "Barrière à l'Oxygène et à l'Humidité",
        solution: "Pour les produits sensibles comme l'alimentation ou les produits pharmaceutiques, le Bio-PE maintient une haute intégrité de barrière, surpassant les alternatives compostables standards."
      },
      {
        problem: "Défis de Coût et d'Évolutivité",
        solution: "Le Bio-PE s'intègre parfaitement dans les infrastructures d'extrusion de PE existantes, réduisant les frais de fabrication et offrant une meilleure évolutivité des coûts que les nouvelles résines compostables."
      },
      {
        problem: "Lacunes des Infrastructures de Fin de Vie",
        solution: "Aligner le choix du matériau sur les capacités du marché cible : utiliser le compostable là où les installations industrielles sont répandues, et le Bio-PE là où le recyclage du PE est bien établi."
      }
    ]
  },
  'zh-TW': {
    title: "生物基PE與可堆肥包裝的5個常見問題（及解決方案）",
    problems: [
      {
        problem: "保質期與降解風險",
        solution: "Bio-PE（生物基聚乙烯）提供與傳統PE相同的阻隔性能，確保產品具有較長的保質期，不會像某些可堆肥薄膜那樣過早降解。"
      },
      {
        problem: "回收管道混淆",
        solution: "實施清晰的標籤與消費者教育，確保Bio-PE進入正確的PE回收系統（RIC 4），而可堆肥包裝則進入工業堆肥設施。"
      },
      {
        problem: "氧氣與濕氣阻隔",
        solution: "對於食品或藥品等敏感產品，Bio-PE的設計可保持高度的阻隔完整性，其表現優於標準的可堆肥替代品。"
      },
      {
        problem: "成本與可擴展性挑戰",
        solution: "Bio-PE可完美導入現有的PE押出設備，降低製造成本，並提供比新型可堆肥樹脂更好的成本擴展性。"
      },
      {
        problem: "產品壽命終止時的基礎設施差距",
        solution: "根據目標市場的基礎設施選擇材料：在工業堆肥設施普及的地區使用可堆肥材料，而在PE回收系統完善的地區使用Bio-PE。"
      }
    ]
  }
}

const BioPEVsCompostablePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const transContent = translations[i18n.language as keyof typeof translations] || translations.en
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.bioPEVsCompostable'

  // Helper to render bold prefixes (split by colon or Chinese full-width colon)
  const renderBullet = (text: string) => {
    const match = text.match(/^([^:：]+)[:：](.*)$/)
    if (match) {
      return (
        <span>
          <strong>{match[1]}:</strong>{match[2]}
        </span>
      )
    }
    return <span>{text}</span>
  }

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) },
    { question: t(`${p}.faq.q5`), answer: t(`${p}.faq.a5`) }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/biope/bio-pe-vs-compostable" />
        <meta name="keywords" content="bio-PE vs compostable, compostable packaging, bio-based polyethylene, recyclable packaging, composting infrastructure, sustainable packaging comparison, EPR regulations, carbon footprint" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t(`${p}.title`)} />
        <meta property="og:description" content={t(`${p}.description`)} />
        <meta property="og:image" content="https://achievepack.com/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/biope/bio-pe-vs-compostable" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`${p}.title`),
            "description": t(`${p}.description`),
            "image": "https://achievepack.com/imgs/biope/vs/a_biope_epr_hero_image_8632332.webp",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": { "@type": "ImageObject", "url": "https://achievepack.com/imgs/logo/achievepack-logo.png" }
            },
            "datePublished": "2026-01-03",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": "https://achievepack.com/biope/bio-pe-vs-compostable"
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    B2B Sustainability Guide
                  </span>
                  <span className="text-emerald-300 text-sm">12 min read</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {t(`${p}.heroTitle`)}
                </h1>
                <p className="text-lg md:text-xl text-emerald-100 mb-6">
                  {t(`${p}.heroSubtitle`)}
                </p>
                <p className="text-emerald-200 mb-8">
                  {t(`${p}.heroIntro`)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={openCalendly} className="flex items-center gap-2 bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg cursor-pointer">
                    <Calendar className="h-5 w-5" />
                    Book Free Consultation
                  </button>
                  <Link to="/store?category=sample" className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition">
                    <Package className="h-5 w-5" />
                    Order Sample Pack
                  </Link>
                  <Link to="/store" className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                    Browse Store
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt="Bio-PE vs Compostable Films comparison guide"
                  className="rounded-2xl shadow-2xl w-full"
                  caption="Bio-PE vs Compostable: Different routes to sustainability"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-white border-b" aria-label="Breadcrumb">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-neutral-600">
              <li><Link to="/" className="hover:text-primary-600">Home</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/learn" className="hover:text-primary-600">Learn</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-600">BioPE</Link></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-neutral-900 font-medium">Bio-PE vs Compostable</li>
            </ol>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Contents</h3>
                <nav className="space-y-1">
                  <a href="#key-takeaways" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Key Takeaways</a>
                  <a href="#introduction" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Introduction</a>
                  <a href="#problem-to-solve" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">What Problem?</a>
                  <a href="#compostable-films" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Compostable Films</a>
                  <a href="#bio-pe" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Bio-PE Focus</a>
                  <a href="#decision-factors" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Decision Factors</a>
                  <a href="#portfolio-strategy" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">Portfolio Strategy</a>
                  <a href="#achieve-pack-support" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">How We Help</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition">FAQ</a>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-3 space-y-8">
              
              {/* Key Takeaways */}
              <section id="key-takeaways" className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 md:p-8 border border-emerald-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                      <Target className="h-6 w-6" />
                      {t(`${p}.takeaways.title`)}
                    </h2>
                    <ul className="space-y-2 text-emerald-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{renderBullet(t(`${p}.takeaways.points.0`))}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{renderBullet(t(`${p}.takeaways.points.1`))}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{renderBullet(t(`${p}.takeaways.points.2`))}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{renderBullet(t(`${p}.takeaways.points.3`))}</span>
                      </li>
                    </ul>
                  </div>
                  <SocialShareButtons 
                    url="https://achievepack.com/biope/bio-pe-vs-compostable"
                    title="Bio-PE vs Compostable Films Guide"
                  />
                </div>
              </section>

              {/* Introduction */}
              <section id="introduction" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.decisionFramework}
                  imageAlt="Decision framework for choosing between bio-PE and compostable films"
                  imageCaption="Multiple credible levers for sustainable flexible packaging"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Lightbulb className="h-7 w-7 text-amber-600" />
                      {t(`${p}.intro.title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.intro.desc1`)}
                      </p>
                      <p>
                        {t(`${p}.intro.desc2`)}
                      </p>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="text-amber-800 font-medium">
                          {t(`${p}.intro.note`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* What Problem Are You Trying to Solve? */}
              <section id="problem-to-solve" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <Scale className="h-7 w-7 text-purple-600" />
                  {t(`${p}.problem.title`)}
                </h2>
                <div className="text-neutral-700 space-y-4">
                  <p>{t(`${p}.problem.desc`)}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl mb-2">🌱</div>
                      <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.problem.landfillTitle`)}</h4>
                      <p className="text-sm text-green-700">{t(`${p}.problem.landfillDesc`)}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl mb-2">🌍</div>
                      <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.problem.carbonTitle`)}</h4>
                      <p className="text-sm text-blue-700">{t(`${p}.problem.carbonDesc`)}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-2xl mb-2">📋</div>
                      <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.problem.eprTitle`)}</h4>
                      <p className="text-sm text-purple-700">{t(`${p}.problem.eprDesc`)}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Compostable Films Section */}
              <section id="compostable-films" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.whenCompostable}
                  imageAlt="When to choose compostable films for packaging"
                  imageCaption="Compostable films: when waste behaves like food"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Leaf className="h-7 w-7 text-green-600" />
                      {t(`${p}.compostable.title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.compostable.desc1`)}
                      </p>
                      <p>
                        {t(`${p}.compostable.desc2`)}
                      </p>
                      <h4 className="font-semibold text-green-800 mt-4">{t(`${p}.compostable.headline`)}</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.compostable.point1`)}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.compostable.point2`)}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.compostable.point3`)}</span>
                        </li>
                      </ul>
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
                        <p className="text-amber-800">
                          {t(`${p}.compostable.note`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Bio-PE Section */}
              <section id="bio-pe" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.whenBioPE}
                  imageAlt="When to choose bio-PE for packaging"
                  imageCaption="Bio-PE: when recycling and carbon are the focus"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Recycle className="h-7 w-7 text-blue-600" />
                      {t(`${p}.biope.title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.biope.desc`)}
                      </p>
                      <h4 className="font-semibold text-blue-800 mt-4">{t(`${p}.biope.headline`)}</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.biope.point1`)}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.biope.point2`)}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.biope.point3`)}</span>
                        </li>
                      </ul>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                        <p className="text-blue-800">
                          {t(`${p}.biope.note`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Key Decision Factors */}
              <section id="decision-factors" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                  <ClipboardCheck className="h-7 w-7 text-indigo-600" />
                  {t(`${p}.factors.title`)}
                </h2>

                {/* Factor 1: Infrastructure Fit */}
                <div className="mb-8">
                  <ImageTextRow
                    image={IMAGES.infrastructureFit}
                    imageAlt="Infrastructure fit comparison between bio-PE and compostable"
                    imageCaption="Infrastructure compatibility is crucial for material selection"
                    imageLeft={false}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-indigo-600" />
                        {t(`${p}.factors.infraTitle`)}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.factors.infraCompostTitle`)}</h4>
                          <p className="text-sm text-green-700">
                            {t(`${p}.factors.infraCompostDesc`)}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.factors.infraBioTitle`)}</h4>
                          <p className="text-sm text-blue-700">
                            {t(`${p}.factors.infraBioDesc`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ImageTextRow>
                </div>

                {/* Factor 2: Product and Residue Profile */}
                <div className="mb-8">
                  <ImageTextRow
                    image={IMAGES.productResidue}
                    imageAlt="Product residue profile analysis"
                    imageCaption="Product type influences optimal material choice"
                    imageLeft={true}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                        <Package className="h-6 w-6 text-amber-600" />
                        {t(`${p}.factors.residueTitle`)}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.factors.residueCompostTitle`)}</h4>
                          <p className="text-sm text-green-700">
                            {t(`${p}.factors.residueCompostDesc`)}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.factors.residueBioTitle`)}</h4>
                          <p className="text-sm text-blue-700">
                            {t(`${p}.factors.residueBioDesc`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ImageTextRow>
                </div>

                {/* Factor 3: Climate and Resource Use */}
                <div>
                  <ImageTextRow
                    image={IMAGES.climateResource}
                    imageAlt="Climate and resource impact lifecycle comparison"
                    imageCaption="Both materials offer distinct environmental benefits"
                    imageLeft={false}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
                        <TreePine className="h-6 w-6 text-green-600" />
                        {t(`${p}.factors.climateTitle`)}
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.factors.climateCompostTitle`)}</h4>
                          <p className="text-sm text-green-700">
                            {t(`${p}.factors.climateCompostDesc`)}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.factors.climateBioTitle`)}</h4>
                          <p className="text-sm text-blue-700">
                            {t(`${p}.factors.climateBioDesc`)}
                          </p>
                        </div>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                          <p className="text-amber-800">
                            {t(`${p}.factors.note`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ImageTextRow>
                </div>
              </section>

              {/* Portfolio Strategy */}
              <section id="portfolio-strategy" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.portfolioStrategy}
                  imageAlt="Portfolio strategy matching material to market"
                  imageCaption="Match material to market infrastructure"
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Layers className="h-7 w-7 text-purple-600" />
                      {t(`${p}.portfolio.title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>
                        {t(`${p}.portfolio.desc`)}
                      </p>
                      <h4 className="font-semibold text-neutral-800 mt-4">{t(`${p}.portfolio.headline`)}</h4>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-semibold text-green-800 mb-1">{t(`${p}.portfolio.compostMarketTitle`)}</h5>
                          <p className="text-sm text-green-700">
                            {t(`${p}.portfolio.compostMarketDesc`)}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-blue-800 mb-1">{t(`${p}.portfolio.recycMarketTitle`)}</h5>
                          <p className="text-sm text-blue-700">
                            {t(`${p}.portfolio.recycMarketDesc`)}
                          </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                          <h5 className="font-semibold text-amber-800 mb-1">{t(`${p}.portfolio.emergingMarketTitle`)}</h5>
                          <p className="text-sm text-amber-700">
                            {t(`${p}.portfolio.emergingMarketDesc`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* How Achieve Pack Supports */}
              <section id="achieve-pack-support" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <ImageTextRow
                  image={IMAGES.achievePackSupport}
                  imageAlt="Achieve Pack services and support"
                  imageCaption="Expert guidance for your sustainable packaging decisions"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <Users className="h-7 w-7 text-primary-600" />
                      {t(`${p}.support.title`)}
                    </h2>
                    <div className="text-neutral-700 space-y-4">
                      <p>{t(`${p}.support.desc`)}</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.support.point1`)}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.support.point2`)}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span>{t(`${p}.support.point3`)}</span>
                        </li>
                      </ul>
                      <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg mt-4">
                        <p className="text-primary-800">
                          {t(`${p}.support.note`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Call to Action */}
              <section id="cta" className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 md:p-8 text-white">
                <ImageTextRow
                  image={IMAGES.nextSteps}
                  imageAlt="Next steps to get started with sustainable packaging"
                  imageCaption=""
                  imageLeft={true}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                      <ArrowRight className="h-7 w-7" />
                      {t(`${p}.cta.title`)}
                    </h2>
                    <p className="text-emerald-100 mb-4">
                      {t(`${p}.cta.desc1`)}
                    </p>
                    <p className="text-emerald-100 mb-6">{t(`${p}.cta.desc2`)}</p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.cta.point1`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.cta.point2`)}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{t(`${p}.cta.point3`)}</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-4">
                      <button onClick={openCalendly} className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition shadow-lg cursor-pointer">
                        <Calendar className="h-5 w-5" />
                        Book Free Consultation
                      </button>
                      <Link to="/store?category=sample" className="flex items-center gap-2 bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-900 transition">
                        <Package className="h-5 w-5" />
                        Order Sample Pack
                      </Link>
                      <Link to="/store" className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                        Browse Store
                      </Link>
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* Pain Points Section */}
              <section id="pain-points" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100 mb-8">
                <ImageTextRow
                  image="/imgs/knowledge/biope-vs-compostable-pain-points.jpg"
                  imageAlt="Eco-friendly packaging pain points illustration"
                  imageCaption="5 Common Bio-PE vs Compostable Problems"
                  imageLeft={false}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                      <TrendingDown className="h-7 w-7 text-red-600" />
                      {transContent.title}
                    </h2>
                    <div className="space-y-6">
                      {transContent.problems.map((item, idx) => (
                        <div key={idx} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-amber-500" />
                            {item.problem}
                          </h4>
                          <p className="text-neutral-700">
                            <span className="font-medium text-green-700 mr-2">Solution:</span>
                            {item.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ImageTextRow>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-blue-600" />
                  {t(`${p}.faq.title`)}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-neutral-200 rounded-lg overflow-hidden">
                      <summary className="flex items-center justify-between p-4 cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition">
                        <span className="font-medium text-neutral-800 pr-4">{faq.question}</span>
                        <ChevronDown className="h-5 w-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="p-4 text-neutral-600 border-t border-neutral-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default BioPEVsCompostablePage
