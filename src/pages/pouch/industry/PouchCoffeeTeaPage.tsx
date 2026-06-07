import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Coffee, Leaf, CheckCircle, Calendar, ArrowRight, Package, Shield, Clock, Sparkles, TrendingUp, Heart } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchCoffeeTeaPage() {
  const { t } = useTranslation()

  // Scroll detection for animations
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

  const canonicalUrl = 'https://pouch.eco/industry/coffee-tea'
  const title = t('seoPages.pages.pouchCoffeeTea.metaTitle')
  const metaDescription = t('seoPages.pages.pouchCoffeeTea.metaDescription')

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t('seoPages.pages.pouchCoffeeTea.compostableCoffeeTeaPouches'),
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.50",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCoffeeTea.areCompostableCoffeePouches'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCoffeeTea.yesOurCompostableCoffee')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCoffeeTea.whatsTheMinimumOrder'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCoffeeTea.just500PiecesWith')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCoffeeTea.howLongDoCompostable'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCoffeeTea.ourTuvOkHome')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchCoffeeTea.canIAddA'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchCoffeeTea.yesWeOfferCompostable')
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('seoPages.pages.pouchCoffeeTea.metaTitle')}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://pouch.eco/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
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
            key="hero-video-coffee-tea"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4FF00] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
            >
              <Coffee className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('seoPages.pages.pouchCoffeeTea.coffeeTeaPackaging')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('seoPages.pages.pouchCoffeeTea.compostablePouchesFor')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchCoffeeTea.coffeeTea')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              {t('seoPages.pages.pouchCoffeeTea.degassingValvesHighbarrierProtection')} 
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchCoffeeTea.perfectForSpecialtyRoasters')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4FF00] text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchCoffeeTea.getYourQuote')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/materials/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchCoffeeTea.viewMaterials')}
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
              { label: t('seoPages.pages.pouchCoffeeTea.minimumOrder'), value: '500', unit: 'pieces', icon: Package },
              { label: t('seoPages.pages.pouchCoffeeTea.breakdownTime'), value: '180', unit: 'days', icon: Leaf },
              { label: t('seoPages.pages.pouchCoffeeTea.shelfLife'), value: '18', unit: 'months', icon: Shield },
              { label: t('seoPages.pages.pouchCoffeeTea.turnaround'), value: '2-3', unit: 'weeks', icon: Clock }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border-4 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#10b981]" />
                <div className="text-4xl font-['Space_Grotesk'] font-black text-[#10b981] mb-1">
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

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-orange-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="cyan">{t('seoPages.pages.pouchCoffeeTea.visualshowcase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchCoffeeTea.specialtyCoffee')}<br/>{t('seoPages.pages.pouchCoffeeTea.showcase')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg" 
              alt={t('seoPages.pages.pouchCoffeeTea.alt_compostableCoffeeStandUp')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchCoffeeTea.caption_compostableStandUp')}
            />
            <ClickableImage 
              src="/imgs/artifacts/flat_bottom_coffee_bags.jpg" 
              alt={t('seoPages.pages.pouchCoffeeTea.alt_compostableFlatBottomCoffee')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchCoffeeTea.caption_flatBottomBags')}
            />
            <ClickableImage 
              src="/imgs/artifacts/side_gusset_coffee_bag.jpg" 
              alt={t('seoPages.pages.pouchCoffeeTea.alt_traditionalSideGussetCoffee')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchCoffeeTea.caption_sideGussetBags')}
            />
            <ClickableImage 
              src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp" 
              alt={t('seoPages.pages.pouchCoffeeTea.alt_coffeeBeansInCompostable')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchCoffeeTea.caption_beanProtection')}
            />
          </div>
        </div>
      </section>

      {/* Is This For You? */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
              {t('seoPages.pages.pouchCoffeeTea.isThis')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchCoffeeTea.forYou')}</span>
            </h2>

            <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
                {t('seoPages.pages.pouchCoffeeTea.perfectForSpecialtyCoffee')}
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: t('seoPages.pages.pouchCoffeeTea.specialtyRoasters'),
                    desc: t('seoPages.pages.pouchCoffeeTea.degassingValvesPremiumBranding'),
                    icon: Coffee
                  },
                  {
                    title: t('seoPages.pages.pouchCoffeeTea.teaBrands'),
                    desc: t('seoPages.pages.pouchCoffeeTea.resealablePouchesForLooseleaf'),
                    icon: Leaf
                  },
                  {
                    title: t('seoPages.pages.pouchCoffeeTea.cafesStartups'),
                    desc: t('seoPages.pages.pouchCoffeeTea.lowMoqLetsYou'),
                    icon: Sparkles
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <item.icon className="w-12 h-12 text-[#10b981] mb-4" />
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchCoffeeTea.whatMakesOurCoffee')} <span className="text-[#10b981]">{t('seoPages.pages.pouchCoffeeTea.different')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('seoPages.pages.pouchCoffeeTea.onewayDegassingValves'),
                desc: t('seoPages.pages.pouchCoffeeTea.releaseCo2FromFreshly'),
                icon: Coffee
              },
              {
                title: t('seoPages.pages.pouchCoffeeTea.highbarrierProtection'),
                desc: t('seoPages.pages.pouchCoffeeTea.plantbasedMaterialsBlockOxygen'),
                icon: Shield
              },
              {
                title: t('seoPages.pages.pouchCoffeeTea.resealableClosures'),
                desc: t('seoPages.pages.pouchCoffeeTea.compostableZippersTinTies'),
                icon: Package
              },
              {
                title: t('seoPages.pages.pouchCoffeeTea.customDigitalPrinting'),
                desc: t('seoPages.pages.pouchCoffeeTea.fullcolorPrintingFrom500'),
                icon: Sparkles
              },
              {
                title: t('seoPages.pages.pouchCoffeeTea.multipleFormats'),
                desc: t('seoPages.pages.pouchCoffeeTea.standupPouchesFlatBottom'),
                icon: TrendingUp
              },
              {
                title: t('seoPages.pages.pouchCoffeeTea.tuvCertifiedCompostable'),
                desc: t('seoPages.pages.pouchCoffeeTea.breaksDownIn180'),
                icon: Leaf
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-10 h-10 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-24 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchCoffeeTea.chooseYour')} <span className="text-[#10b981]">{t('seoPages.pages.pouchCoffeeTea.material')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#D4FF00] p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">
                {t('seoPages.pages.pouchCoffeeTea.homeCompostable')}
              </h3>
              <ul className="space-y-3 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.kraftPaperPlaFilm')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.tuvOkHomeCertified')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.perfectForPremiumSpecialty')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.naturalKraftLookOr')}</span>
                </li>
              </ul>
              <a 
                href="/materials/cello-kraft-triplex"
                className="inline-block mt-6 px-6 py-3 bg-black text-[#D4FF00] font-black uppercase border-4 border-black hover:translate-x-1 transition-all"
              >
                {t('seoPages.pages.pouchCoffeeTea.learnMore')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
            >
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-4">
                {t('seoPages.pages.pouchCoffeeTea.industrialCompostable')}
              </h3>
              <ul className="space-y-3 font-['JetBrains_Mono'] text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.pbatPlaMultilayerStructure')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.astmD6400En13432')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.higherBarrierForExtended')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span>{t('seoPages.pages.pouchCoffeeTea.premiumWhiteOrTransparent')}</span>
                </li>
              </ul>
              <a 
                href="/materials/catalog"
                className="inline-block mt-6 px-6 py-3 bg-[#10b981] text-white font-black uppercase border-4 border-black hover:translate-x-1 transition-all"
              >
                {t('seoPages.pages.pouchCoffeeTea.viewCatalog')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products You Can Package */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchCoffeeTea.whatCanYou')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchCoffeeTea.package')}</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'Whole Coffee Beans',
              'Ground Coffee',
              'Coffee Capsule Refills',
              'Drip Coffee Bags',
              'Cold Brew Packs',
              'Loose-Leaf Tea',
              'Tea Sachets',
              'Matcha Powder',
              'Herbal Infusions',
              'Chai Blends',
              'Instant Coffee',
              'Coffee Alternatives'
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 bg-gray-50 px-4 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                <span className="font-['JetBrains_Mono'] text-sm font-semibold">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchCoffeeTea.technical')} <span className="text-[#10b981]">{t('seoPages.pages.pouchCoffeeTea.specs')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#10b981]" />
                {t('seoPages.pages.pouchCoffeeTea.barrierPerformance')}
              </h3>
              <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                <div>
                  <div className="font-bold text-[#10b981] mb-1">{t('seoPages.pages.pouchCoffeeTea.oxygenTransmissionRateOtr')}</div>
                  <div className="text-gray-700">{'<'} {t('seoPages.pages.pouchCoffeeTea.10Ccm24hr')}</div>
                </div>
                <div>
                  <div className="font-bold text-[#10b981] mb-1">{t('seoPages.pages.pouchCoffeeTea.moistureVaporTransmissionMvtr')}</div>
                  <div className="text-gray-700">{'<'} {t('seoPages.pages.pouchCoffeeTea.20Gm24hr')}</div>
                </div>
                <div>
                  <div className="font-bold text-[#10b981] mb-1">{t('seoPages.pages.pouchCoffeeTea.shelfLifeExtension')}</div>
                  <div className="text-gray-700">{t('seoPages.pages.pouchCoffeeTea.1218MonthsForSealed')}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-[#10b981]" />
                {t('seoPages.pages.pouchCoffeeTea.certifications')}
              </h3>
              <ul className="space-y-3 font-['JetBrains_Mono'] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">{t('seoPages.pages.pouchCoffeeTea.tuvOkHomeHome')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">{t('seoPages.pages.pouchCoffeeTea.astmD6400UsStandard')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">{t('seoPages.pages.pouchCoffeeTea.en13432EuropeanStandard')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">{t('seoPages.pages.pouchCoffeeTea.fdaFoodContactApproved')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span className="text-gray-700">{t('seoPages.pages.pouchCoffeeTea.brcCertifiedFactory')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('seoPages.pages.pouchCoffeeTea.theUltimateGuideTo')} <span className="text-[#FF00FF]">{t('seoPages.pages.pouchCoffeeTea.sustainableCoffeePackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchCoffeeTea.theSpecialtyCoffeeIndustry')}
            </p>
            
            <img 
              src="/imgs/artifacts/flat_bottom_coffee_bags.jpg" 
              alt={t('seoPages.pages.pouchCoffeeTea.alt_freshlyRoastedCoffeeBeans')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchCoffeeTea.theImportanceOfThe')}</h3>
            <p>
              {t('seoPages.pages.pouchCoffeeTea.freshlyRoastedCoffeeBeans')}
            </p>
            <p>
              {t('seoPages.pages.pouchCoffeeTea.theSolutionIsThe')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchCoffeeTea.highbarrierMaterialsForSpecialty')}</h3>
            <p>
              {t('seoPages.pages.pouchCoffeeTea.coffeesThreeGreatestEnemies')} 
            </p>
            
            <img 
              src="/imgs/artifacts/stacked_coffee_bags.jpg" 
              alt={t('seoPages.pages.pouchCoffeeTea.alt_highBarrierCompostableCoffee')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <p>
              {t('seoPages.pages.pouchCoffeeTea.ourSustainableCoffeeBags')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchCoffeeTea.packagingFormatsForCoffee')}</h3>
            <p>
              {t('seoPages.pages.pouchCoffeeTea.differentRoastersHaveDifferent')} <strong>{t('seoPages.pages.pouchCoffeeTea.flatBottomBagBox')}</strong>{t('seoPages.pages.pouchCoffeeTea.itsBoxlikeStructureOffers')} 
            </p>
            <p>
              {t('seoPages.pages.pouchCoffeeTea.forSmallerSizesSample')} <strong>{t('seoPages.pages.pouchCoffeeTea.standupPouch')}</strong> {t('seoPages.pages.pouchCoffeeTea.isAnExcellentCosteffective')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchCoffeeTea.common')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchCoffeeTea.questions')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('seoPages.pages.pouchCoffeeTea.areCompostableCoffeePouches'),
                a: t('seoPages.pages.pouchCoffeeTea.yesOurCompostableCoffee')
              },
              {
                q: t('seoPages.pages.pouchCoffeeTea.whatsTheMinimumOrder'),
                a: t('seoPages.pages.pouchCoffeeTea.just500PiecesWith')
              },
              {
                q: t('seoPages.pages.pouchCoffeeTea.howLongDoCompostable'),
                a: t('seoPages.pages.pouchCoffeeTea.ourTuvOkHome')
              },
              {
                q: t('seoPages.pages.pouchCoffeeTea.canIAddA'),
                a: t('seoPages.pages.pouchCoffeeTea.yesWeOfferCompostable')
              },
              {
                q: t('seoPages.pages.pouchCoffeeTea.whatSizesAreAvailable'),
                a: t('seoPages.pages.pouchCoffeeTea.commonSizes100g250g')
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              {t('seoPages.pages.pouchCoffeeTea.readyToGoCompostable')}
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchCoffeeTea.startWith500Pieces')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-[#D4FF00] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchCoffeeTea.bookYourCallNow')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/size-guide"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchCoffeeTea.calculateYourSize')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">{t('seoPages.pages.pouchCoffeeTea.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/snacks"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_snack_pouch_window.jpg"
                  alt={t('seoPages.pages.pouchCoffeeTea.alt_compostableSnackPouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchCoffeeTea.snackPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchCoffeeTea.greaseresistantKeepsCrunchCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchCoffeeTea.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/pet-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/pet_food_pouch.jpg"
                  alt={t('seoPages.pages.pouchCoffeeTea.alt_compostablePetFoodPouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchCoffeeTea.petFoodPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchCoffeeTea.heavydutyPetsafeHomeCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchCoffeeTea.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/coffee-packaging-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
                  alt={t('seoPages.pages.pouchCoffeeTea.alt_coffeePackagingGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchCoffeeTea.coffeePackagingGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchCoffeeTea.completeGuideForSpecialty')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchCoffeeTea.readMore')}
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
