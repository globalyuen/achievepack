import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, CheckCircle, Calendar, ArrowRight, Shield, Zap, Sparkles, Star, Cookie } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchSnacksPage() {
  const { t } = useTranslation()

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

  const canonicalUrl = 'https://pouch.eco/industry/snacks'
  const title = t('seoPages.pages.pouchSnacks.metaTitle')
  const metaDescription = t('seoPages.pages.pouchSnacks.metaDescription')

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t('seoPages.pages.pouchSnacks.compostableSnackPouches'),
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.40",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSnacks.canCompostablePouchesHandle'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSnacks.yesOurPouchesHave')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSnacks.doCompostableSnackBags'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSnacks.absolutelyChooseFromCompostable')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSnacks.whatsTheMinimumOrder'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSnacks.just500PiecesWith')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchSnacks.howLongDoSnacks'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchSnacks.ourHighbarrierCompostablePouches')
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="https://pouch.eco/imgs/artifacts/compostable_snack_pouch_window.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-snacks"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4FF00] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
            >
              <Cookie className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('seoPages.pages.pouchSnacks.snackPackaging')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('seoPages.pages.pouchSnacks.compostableSnack')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSnacks.pouches')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              {t('seoPages.pages.pouchSnacks.greaseresistantKeepsCrunchHome')}
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchSnacks.forChipsNutsGranola')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4FF00] text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchSnacks.getYourQuote')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchSnacks.seeOptions')}
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
              { label: t('seoPages.pages.pouchSnacks.minimumOrder'), value: '500', unit: 'pieces', icon: Package },
              { label: t('seoPages.pages.pouchSnacks.shelfLife'), value: '6-12', unit: 'months', icon: Shield },
              { label: t('seoPages.pages.pouchSnacks.compostTime'), value: '180', unit: 'days', icon: Leaf },
              { label: t('seoPages.pages.pouchSnacks.customColors'), value: '10', unit: 'colors', icon: Sparkles }
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
      <section className="py-24 bg-lime-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchSnacks.snackBrand')}<br/>{t('seoPages.pages.pouchSnacks.gallery')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/artifacts/compostable_snack_pouch_window.jpg" 
              alt={t('seoPages.pages.pouchSnacks.alt_compostableSnackPouchWith')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSnacks.caption_windowPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchSnacks.alt_granolaStandUpPouch')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSnacks.caption_standUpPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/3-side.webp" 
              alt={t('seoPages.pages.pouchSnacks.alt_smallSnackFlatPouch')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSnacks.caption_singleServePacks')}
            />
            <ClickableImage 
              src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp" 
              alt={t('seoPages.pages.pouchSnacks.alt_sustainableSnackPackagingRange')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchSnacks.caption_fullRange')}
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSnacks.perfectFor')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSnacks.snackBrands')}</span>
          </h2>

          <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
              {t('seoPages.pages.pouchSnacks.whetherYoureLaunchingOrganic')}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: t('seoPages.pages.pouchSnacks.chipsSnacks'),
                  desc: t('seoPages.pages.pouchSnacks.greaseresistantBarrierForCrunchy'),
                  icon: Cookie
                },
                {
                  title: t('seoPages.pages.pouchSnacks.granolaCereal'),
                  desc: t('seoPages.pages.pouchSnacks.clearWindowsShowPremium'),
                  icon: Sparkles
                },
                {
                  title: t('seoPages.pages.pouchSnacks.driedFruitsNuts'),
                  desc: t('seoPages.pages.pouchSnacks.highbarrierProtectionAgainstMoisture'),
                  icon: Star
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
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSnacks.whySnackBrands')} <span className="text-[#10b981]">{t('seoPages.pages.pouchSnacks.chooseThese')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('seoPages.pages.pouchSnacks.greaseresistantBarrier'),
                desc: t('seoPages.pages.pouchSnacks.innerLayersStopOil'),
                icon: Shield
              },
              {
                title: t('seoPages.pages.pouchSnacks.keepsCrunchFresh'),
                desc: t('seoPages.pages.pouchSnacks.moistureAndOxygenBarrier'),
                icon: Star
              },
              {
                title: t('seoPages.pages.pouchSnacks.resealableClosures'),
                desc: t('seoPages.pages.pouchSnacks.compostableZippersOrPresstoclose'),
                icon: Zap
              },
              {
                title: t('seoPages.pages.pouchSnacks.vibrantPrinting'),
                desc: t('seoPages.pages.pouchSnacks.upTo10colorDigital'),
                icon: Sparkles
              },
              {
                title: t('seoPages.pages.pouchSnacks.clearWindowsAvailable'),
                desc: t('seoPages.pages.pouchSnacks.showProductInsidePerfect'),
                icon: Package
              },
              {
                title: t('seoPages.pages.pouchSnacks.homeCompostable'),
                desc: t('seoPages.pages.pouchSnacks.tuvCertifiedBreaksDown'),
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

      {/* Products You Can Package */}
      <section className="py-24 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSnacks.whatCanYou')} <span className="text-[#10b981]">{t('seoPages.pages.pouchSnacks.package')}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Chips & Crisps',
                items: ['Potato Chips', 'Corn Chips', 'Veggie Chips', 'Puffs & Extruded']
              },
              {
                category: 'Nuts & Seeds',
                items: ['Mixed Nuts', 'Trail Mix', 'Roasted Seeds', 'Nut Butters']
              },
              {
                category: 'Dried Fruits',
                items: ['Dried Mango', 'Banana Chips', 'Freeze-Dried', 'Fruit Leather']
              },
              {
                category: 'Meat Snacks',
                items: ['Beef Jerky', 'Meat Sticks', 'Dried Meat', 'Biltong']
              },
              {
                category: 'Confectionery',
                items: ['Chocolates', 'Gummies', 'Cookies', 'Energy Bars']
              },
              {
                category: 'Breakfast',
                items: ['Granola', 'Muesli', 'Oatmeal', 'Protein Oats']
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-4 text-[#10b981]">
                  {cat.category}
                </h3>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSnacks.customization')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSnacks.options')}</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: t('seoPages.pages.pouchSnacks.resealableZipper'), desc: t('seoPages.pages.pouchSnacks.keepSnacksFresh') },
              { name: t('seoPages.pages.pouchSnacks.tearNotch'), desc: t('seoPages.pages.pouchSnacks.easyOpening') },
              { name: t('seoPages.pages.pouchSnacks.hangHole'), desc: t('seoPages.pages.pouchSnacks.retailDisplay') },
              { name: t('seoPages.pages.pouchSnacks.clearWindow'), desc: t('seoPages.pages.pouchSnacks.showProduct') },
              { name: t('seoPages.pages.pouchSnacks.matteFinish'), desc: t('seoPages.pages.pouchSnacks.premiumFeel') },
              { name: t('seoPages.pages.pouchSnacks.spotUv'), desc: t('seoPages.pages.pouchSnacks.highlightLogo') },
              { name: t('seoPages.pages.pouchSnacks.embossing'), desc: t('seoPages.pages.pouchSnacks.tactileBrand') },
              { name: t('seoPages.pages.pouchSnacks.qrCode'), desc: t('seoPages.pages.pouchSnacks.digitalLink') }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
              >
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-[#10b981]" />
                <h3 className="font-['Space_Grotesk'] font-bold uppercase text-sm mb-1">
                  {feature.name}
                </h3>
                <p className="text-xs font-['JetBrains_Mono'] text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('seoPages.pages.pouchSnacks.theUltimateGuideTo')} <span className="text-[#10b981]">{t('seoPages.pages.pouchSnacks.sustainableSnackPackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchSnacks.theGlobalSnackFood')}
            </p>
            
            <ClickableImage 
              src="/imgs/artifacts/compostable_snack_pouch_window.jpg" 
              alt={t('seoPages.pages.pouchSnacks.alt_sustainableSnackPackagingWith')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchSnacks.caption_showcaseYourProductsFreshness')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSnacks.theChallengeOfGrease')}</h3>
            <p>
              {t('seoPages.pages.pouchSnacks.snacksByTheirNature')}
            </p>
            <p>
              {t('seoPages.pages.pouchSnacks.ourCompostableSnackPouches')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSnacks.maintainingTheCrunchMoisture')}</h3>
            <p>
              {t('seoPages.pages.pouchSnacks.nothingRuinsASnacking')}
            </p>
            <p>
              {t('seoPages.pages.pouchSnacks.weAchieveTheSame')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchSnacks.designingForTheModern')}</h3>
            <p>
              {t('seoPages.pages.pouchSnacks.todaysConsumersWantTransparencyliterally')} 
            </p>
            <p>
              {t('seoPages.pages.pouchSnacks.coupledWithOurHighdefinition')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchSnacks.common')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchSnacks.questions')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('seoPages.pages.pouchSnacks.canCompostablePouchesHandle'),
                a: t('seoPages.pages.pouchSnacks.yesOurPouchesHave1')
              },
              {
                q: t('seoPages.pages.pouchSnacks.doCompostableSnackBags'),
                a: t('seoPages.pages.pouchSnacks.absolutelyChooseFromCompostable')
              },
              {
                q: t('seoPages.pages.pouchSnacks.whatsTheMinimumOrder'),
                a: t('seoPages.pages.pouchSnacks.just500PiecesWith1')
              },
              {
                q: t('seoPages.pages.pouchSnacks.howLongDoSnacks'),
                a: t('seoPages.pages.pouchSnacks.ourHighbarrierCompostablePouches1')
              },
              {
                q: t('seoPages.pages.pouchSnacks.canIGetClear'),
                a: t('seoPages.pages.pouchSnacks.yesClearPlaPlantbased')
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              {t('seoPages.pages.pouchSnacks.yourSnacksDeserveBetter')}
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchSnacks.greaseresistantKeepsCrunchHome1')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-[#D4FF00] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchSnacks.bookYourCallNow')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/materials/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchSnacks.seeMaterialOptions')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">{t('seoPages.pages.pouchSnacks.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/coffee-tea"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg"
                  alt={t('seoPages.pages.pouchSnacks.alt_compostableCoffeePouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchSnacks.coffeeTeaPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSnacks.degassingValvesHighbarrierHome')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSnacks.readMore')}
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
                  alt={t('seoPages.pages.pouchSnacks.alt_compostablePetFoodPouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchSnacks.petFoodPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSnacks.heavydutyPetsafeHomeCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSnacks.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/usa-snacks-packaging-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/usa/snack/a_sustainable_snacks_packaging_hero_7099678.webp"
                  alt={t('seoPages.pages.pouchSnacks.alt_usaSnacksPackagingGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchSnacks.usaSnacksGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchSnacks.completeGuideForUs')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchSnacks.readMore')}
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
