import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, CheckCircle, Calendar, ArrowRight, Shield, Droplets, Zap, Sparkles } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
// 5 Common Sauce Packaging Pain Points & Engineering Solutions
const translations = {
  en: {
    title: "5 Common Sauce Packaging Problems (And Solutions)",
    problems: [
      { q: "Spout base leakage during transport", a: "Solution: Reinforced ultrasonic welding and anti-leak flange design.", icon: "Droplets" },
      { q: "Pouch delamination from high-acid or oily sauces", a: "Solution: Multi-layer high-barrier films (e.g., PET/AL/PE) with specialized adhesive.", icon: "Shield" },
      { q: "Deformation during hot-fill pasteurization", a: "Solution: High-temperature resistant CPP inner layers supporting up to 95°C.", icon: "Zap" },
      { q: "Poor dispensing flow and product waste inside the pouch", a: "Solution: Ergonomic spout angles and flexible, easily squeezable materials.", icon: "CheckCircle" },
      { q: "Pouch bursting upon drop impact or heavy stacking", a: "Solution: Drop-test certified nylon (BOPA) integration for structural flexibility.", icon: "Package" }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Envasado de Salsas (Y Soluciones)",
    problems: [
      { q: "Fugas en la base de la boquilla durante el transporte", a: "Solución: Soldadura ultrasónica reforzada y diseño de brida antifugas.", icon: "Droplets" },
      { q: "Delaminación de la bolsa por salsas ácidas o aceitosas", a: "Solución: Películas multicapa de alta barrera con adhesivo especializado.", icon: "Shield" },
      { q: "Deformación durante la pasteurización de llenado en caliente", a: "Solución: Capas internas de CPP resistentes a altas temperaturas que soportan hasta 95°C.", icon: "Zap" },
      { q: "Flujo de dispensación deficiente y desperdicio de producto", a: "Solución: Ángulos de boquilla ergonómicos y materiales flexibles y fáciles de apretar.", icon: "CheckCircle" },
      { q: "Estallido de la bolsa por impacto de caída o apilamiento", a: "Solución: Integración de nylon (BOPA) certificado en pruebas de caída para mayor flexibilidad.", icon: "Package" }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage de Sauces (Et Solutions)",
    problems: [
      { q: "Fuite à la base du bec verseur pendant le transport", a: "Solution: Soudage par ultrasons renforcé et conception de bride anti-fuite.", icon: "Droplets" },
      { q: "Délamination du sachet due aux sauces acides ou huileuses", a: "Solution: Films multicouches à haute barrière avec adhésif spécialisé.", icon: "Shield" },
      { q: "Déformation lors de la pasteurisation à remplissage à chaud", a: "Solution: Couches internes en CPP résistant aux hautes températures jusqu'à 95°C.", icon: "Zap" },
      { q: "Mauvais écoulement et gaspillage de produit", a: "Solution: Angles de bec verseur ergonomiques et matériaux flexibles facilement compressibles.", icon: "CheckCircle" },
      { q: "Éclatement du sachet lors d'un impact de chute", a: "Solution: Intégration de nylon (BOPA) certifié contre les chutes pour une flexibilité structurelle.", icon: "Package" }
    ]
  },
  "zh-TW": {
    title: "5 個常見的醬料包裝問題（及解決方案）",
    problems: [
      { q: "運輸過程中吸嘴底部漏液", a: "解決方案：強化超音波焊接和防漏法蘭設計。", icon: "Droplets" },
      { q: "高酸或高油醬料導致包裝袋分層", a: "解決方案：採用專用黏合劑的多層高阻隔薄膜。", icon: "Shield" },
      { q: "熱灌裝巴氏殺菌過程中的變形", a: "解決方案：耐高溫 CPP 內層，最高可承受 95°C。", icon: "Zap" },
      { q: "擠出不順暢及袋內殘留浪費", a: "解決方案：符合人體工學的吸嘴角度和柔韌易擠壓的材質。", icon: "CheckCircle" },
      { q: "掉落衝擊或重壓堆疊時破袋", a: "解決方案：整合防摔認證尼龍 (BOPA) 以提供結構柔韌性。", icon: "Package" }
    ]
  }
}

const sectionsForPouch = translations
const sectionsForAchieve = translations

const iconMap = {
  Droplets, Shield, Zap, CheckCircle, Package
}

export default function PouchSaucesPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const pageT = sectionsForPouch[lang as keyof typeof sectionsForPouch] || sectionsForPouch.en

  // Scroll detection
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

  const canonicalUrl = 'https://pouch.eco/industry/sauces-condiments'
  const title = t('seoPages.pages.pouchSauces.metaTitle')
  const metaDescription = t('seoPages.pages.pouchSauces.metaDescription')

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t('seoPages.pages.pouchSauces.spoutedPouchesForSauces'),
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.60",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "64"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSauces.areYourSaucePouches'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSauces.yesOurSpoutedPouches')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSauces.canThesePouchesBe'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSauces.absolutelyWeOfferSpecialized')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSauces.whatSizesDoSpouted'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSauces.weOfferSizesRanging')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSauces.areCompostableSpoutedPouches'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSauces.weAreActivelyDeveloping')
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('seoPages.pages.pouchSauces.metaTitle')}
        description={t('seoPages.pages.pouchSauces.metaDescription')}
        keywords={['compostable sauce pouch', 'spout pouch condiments', 'sustainable sauce packaging', 'eco condiment pouch', 'low MOQ sauce bag']}
        schemaType="Product"
        ogImage="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp"
        additionalSchema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-red-50">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
            >
              <Droplets className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('seoPages.pages.pouchSauces.sauceCondimentPackaging')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('seoPages.pages.pouchSauces.spoutedPouchesFor')} <span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.liquidFoods')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto text-black bg-white inline-block px-4 py-2 border-2 border-black">
              {t('seoPages.pages.pouchSauces.leakproofHotfillReadySpacesaving')}
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchSauces.forSaucesMarinadesAnd')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF0000] text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchSauces.getYourQuote')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchSauces.seeOptions')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: t('seoPages.pages.pouchSauces.minimumOrder'), value: '500', unit: 'pieces', icon: Package },
              { label: t('seoPages.pages.pouchSauces.spoutSizes'), value: '8.5-33', unit: 'mm', icon: Droplets },
              { label: t('seoPages.pages.pouchSauces.hotFill'), value: '95', unit: '°C max', icon: Zap },
              { label: t('seoPages.pages.pouchSauces.leakRate'), value: '0.01', unit: '%', icon: Shield }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#FF0000]" />
                <div className="text-4xl font-['Space_Grotesk'] font-black text-[#FF0000] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-['JetBrains_Mono'] uppercase text-gray-600">
                  {stat.unit}
                </div>
                <div className="text-xs font-['JetBrains_Mono'] uppercase text-gray-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="red">{t('seoPages.pages.pouchSauces.industrydeepdive')}</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            {t('seoPages.pages.pouchSauces.theLiquidRevolutionIn')} <span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.saucePackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchSauces.forDecadesTheSauce')}
            </p>
            <p>
              {t('seoPages.pages.pouchSauces.atPouchecoWeEngineer')} 
            </p>
            
            <ClickableImage 
              src="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp" 
              alt={t('seoPages.pages.pouchSauces.alt_spoutedPouchForLiquid')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchSauces.caption_engineeredForLiquidsRobust')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSauces.theEngineeringOfA')}</h3>
            <p>
              {t('seoPages.pages.pouchSauces.packagingLiquidsIsFundamentally')} 
            </p>
            <p>
              {t('seoPages.pages.pouchSauces.ourSpoutedPouchesAre')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSauces.hotfillProcessingAndBarrier')}</h3>
            <p>
              {t('seoPages.pages.pouchSauces.manySaucesBrothsAnd')}
            </p>
            <p>
              {t('seoPages.pages.pouchSauces.weSolveThisBy')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSauces.unmatchedLogisticalEfficiency')}</h3>
            <p>
              {t('seoPages.pages.pouchSauces.theEnvironmentalAndEconomic')} 
            </p>
            <p>
              {t('seoPages.pages.pouchSauces.aSinglePalletOf')} 
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-orange-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="cyan">Troubleshooting</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-12 italic">
            {pageT.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {pageT.problems.map((prob, idx) => {
                const IconComp = iconMap[prob.icon as keyof typeof iconMap] || Package;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-start gap-4"
                  >
                    <IconComp className="w-8 h-8 text-[#FF0000] flex-shrink-0" />
                    <div>
                      <h4 className="font-black text-lg mb-2">{prob.q}</h4>
                      <p className="font-['JetBrains_Mono'] text-gray-600 font-bold">{prob.a}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <div>
              <ClickableImage 
                src="/imgs/knowledge/pouch-sauces-pain-points.jpg" 
                alt={pageT.title}
                className="w-full h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">{t('seoPages.pages.pouchSauces.knowledgebase')}</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-12 italic">
            {t('seoPages.pages.pouchSauces.common')} <span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.questions')}</span>
          </h2>
          <div className="space-y-6">
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.q')}</span> {t('seoPages.pages.pouchSauces.areYourSaucePouches')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">{t('seoPages.pages.pouchSauces.a')}</span> {t('seoPages.pages.pouchSauces.yesOurSpoutedPouches')}</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.q')}</span> {t('seoPages.pages.pouchSauces.canThesePouchesBe')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">{t('seoPages.pages.pouchSauces.a')}</span> {t('seoPages.pages.pouchSauces.absolutelyWeOfferSpecialized')}</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.q')}</span> {t('seoPages.pages.pouchSauces.whatSpoutSizesAre')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">{t('seoPages.pages.pouchSauces.a')}</span> {t('seoPages.pages.pouchSauces.weOfferVariousSpout')}</p>
            </NeoCard>
            <NeoCard color="bg-white">
              <h4 className="font-black text-xl mb-2 flex items-center gap-2"><span className="text-[#FF0000]">{t('seoPages.pages.pouchSauces.q')}</span> {t('seoPages.pages.pouchSauces.doYouOfferRecyclable')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600 pl-8"><span className="font-bold text-[#FF0000]">{t('seoPages.pages.pouchSauces.a')}</span> {t('seoPages.pages.pouchSauces.yesWeManufactureMonope')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF0000] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="white">{t('seoPages.pages.pouchSauces.pourwithprecision')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic">{t('seoPages.pages.pouchSauces.ditchTheGlass')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl max-w-2xl mx-auto">
            {t('seoPages.pages.pouchSauces.switchToLightweightShatterproof')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-[#FF0000]">{t('seoPages.pages.pouchSauces.getLiquidSamples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchSauces.consultation')}</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#FF0000] text-white px-2">{t('seoPages.pages.pouchSauces.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/packaging/spout-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
                  alt={t('seoPages.pages.pouchSauces.alt_spoutPouchesGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#FF0000] transition-colors">
                  {t('seoPages.pages.pouchSauces.spoutPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSauces.technicalSpecsForLiquid')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSauces.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/baby-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/baby_food_hero.jpg"
                  alt={t('seoPages.pages.pouchSauces.alt_safeBabyFoodPackaging')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#FF0000] transition-colors">
                  {t('seoPages.pages.pouchSauces.babyFoodPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSauces.safetyfirstPackagingForLiquid')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSauces.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/eco-packaging-regulations-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp"
                  alt={t('seoPages.pages.pouchSauces.alt_packagingRegulationsGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#FF0000] transition-colors">
                  {t('seoPages.pages.pouchSauces.complianceGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSauces.fdaInternationalLiquidFood')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSauces.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
