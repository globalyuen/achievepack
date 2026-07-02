import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Heart, Leaf, CheckCircle, Calendar, ArrowRight, Package, Shield, Clock, Sparkles, Star, PawPrint, AlertCircle, CheckCircle2 } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    title: "5 Common Pet Food Packaging Problems (And Solutions)",
    problems: [
      {
        title: "Oxygen & Moisture Spoilage",
        desc: "Kibble goes stale and raw food spoils quickly due to poor barrier layers.",
        solution: "High-barrier EVOH films block moisture and oxygen, extending shelf life."
      },
      {
        title: "Odor Leakage",
        desc: "Strong pet food smells escape the packaging, putting off customers.",
        solution: "Odor-proof laminated structures keep smells locked securely inside."
      },
      {
        title: "Heavy Weight Tears",
        desc: "Large bulk bags break or tear open under the weight of the food.",
        solution: "Reinforced side gussets and quad seals easily support 10kg+ capacities."
      },
      {
        title: "Re-sealing Failures",
        desc: "Cheap zippers break or fail to close, causing the food to go bad.",
        solution: "Heavy-duty PTC zippers or Velcro closures ensure repeated reliable sealing."
      },
      {
        title: "Sustainability Demands",
        desc: "Modern consumers demand eco-friendly options, rejecting single-use plastics.",
        solution: "Home compostable and recyclable mono-materials meet market demands perfectly."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Envasado de Alimentos para Mascotas (Y Soluciones)",
    problems: [
      {
        title: "Deterioro por Oxígeno y Humedad",
        desc: "Las croquetas se ponen rancias rápidamente debido a capas de barrera deficientes.",
        solution: "Las películas EVOH de alta barrera bloquean la humedad y el oxígeno."
      },
      {
        title: "Fugas de Olores",
        desc: "Los olores fuertes de la comida para mascotas escapan del envase.",
        solution: "Estructuras laminadas a prueba de olores mantienen los aromas sellados."
      },
      {
        title: "Desgarros por Peso Pesado",
        desc: "Las bolsas grandes se rompen o se abren bajo el peso de la comida.",
        solution: "Fuelles laterales reforzados y sellos cuádruples soportan capacidades de 10kg+."
      },
      {
        title: "Fallos de Resellado",
        desc: "Las cremalleras baratas se rompen o no cierran, estropeando la comida.",
        solution: "Cremalleras PTC resistentes o cierres de Velcro aseguran un sellado confiable."
      },
      {
        title: "Exigencias de Sostenibilidad",
        desc: "Los consumidores modernos exigen opciones ecológicas.",
        solution: "Los monomateriales compostables y reciclables satisfacen estas demandas."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage d'Aliments pour Animaux (Et Solutions)",
    problems: [
      {
        title: "Altération par l'Oxygène et l'Humidité",
        desc: "Les croquettes rassissent rapidement à cause de mauvaises couches barrières.",
        solution: "Les films EVOH haute barrière bloquent l'humidité et l'oxygène."
      },
      {
        title: "Fuite d'Odeurs",
        desc: "Les fortes odeurs de nourriture pour animaux s'échappent de l'emballage.",
        solution: "Des structures laminées anti-odeurs gardent les senteurs verrouillées à l'intérieur."
      },
      {
        title: "Déchirures dues au Poids",
        desc: "Les grands sacs se cassent ou se déchirent sous le poids de la nourriture.",
        solution: "Les soufflets latéraux renforcés et les quatre soudures supportent facilement 10kg+."
      },
      {
        title: "Échecs de Refermeture",
        desc: "Les fermetures éclair bon marché se cassent ou ne ferment plus.",
        solution: "Des fermetures éclair PTC robustes ou des fermetures Velcro assurent une étanchéité répétée."
      },
      {
        title: "Exigences de Durabilité",
        desc: "Les consommateurs modernes exigent des options écologiques.",
        solution: "Les mono-matériaux compostables et recyclables répondent parfaitement aux attentes."
      }
    ]
  },
  'zh-TW': {
    title: "5 個常見的寵物食品包裝問題 (及其解決方案)",
    problems: [
      {
        title: "氧氣與濕氣導致變質",
        desc: "由於阻隔層品質差，乾糧容易受潮，生食容易變質。",
        solution: "高阻隔 EVOH 薄膜能有效阻擋濕氣和氧氣，延長保質期。"
      },
      {
        title: "氣味外洩",
        desc: "濃烈的寵物食品氣味從包裝中漏出，影響消費者觀感。",
        solution: "防臭複合結構將氣味牢牢鎖在包裝內。"
      },
      {
        title: "過重導致破裂",
        desc: "大容量包裝袋容易因飼料重量而破裂。",
        solution: "加固的側邊折邊和四邊封口輕鬆支撐 10 公斤以上的重量。"
      },
      {
        title: "重新密封失效",
        desc: "廉價的拉鍊容易損壞或無法密合，導致食品變質。",
        solution: "重型 PTC 拉鍊或魔鬼氈封口確保反覆可靠密封。"
      },
      {
        title: "永續環保需求",
        desc: "現代消費者拒絕一次性塑膠，要求環保包裝選項。",
        solution: "家庭可堆肥和可回收的單一材質完美滿足市場需求。"
      }
    ]
  }
}

const sectionsForPouch = ["5 Common Pet Food Packaging Problems (And Solutions)"]
const sectionsForAchieve = ["5 Common Pet Food Packaging Problems (And Solutions)"]

export default function PouchPetFoodPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const currentTranslation = translations[lang] || translations.en

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

  const canonicalUrl = 'https://pouch.eco/industry/pet-food'
  const title = t('seoPages.pages.pouchPetFood.metaTitle')
  const metaDescription = t('seoPages.pages.pouchPetFood.metaDescription')

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t('seoPages.pages.pouchPetFood.compostablePetFoodPouches'),
    "description": metaDescription,
    "brand": {
      "@type": "Brand",
      "name": "POUCH.ECO"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.45",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "93"
    }
  }

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPetFood.areCompostablePetFood'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPetFood.yesOurPouchesUse')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPetFood.canCompostablePouchesHandle'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPetFood.absolutelyOurHeavydutyConstruction')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPetFood.whatsTheMinimumOrder'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPetFood.just500PiecesWith')
        }
      },
      {
        "@type": "Question",
        name: t('seoPages.pages.pouchPetFood.doYouOfferResealable'),
        "acceptedAnswer": {
          "@type": "Answer",
          text: t('seoPages.pages.pouchPetFood.yesChooseFromCompostable')
        }
      }
    ]
  }

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('seoPages.pages.pouchPetFood.metaTitle')}
        description={t('seoPages.pages.pouchPetFood.metaDescription')}
        keywords={['compostable pet food bag', 'sustainable dog food pouch', 'eco pet treat packaging', 'low MOQ pet packaging', 'biodegradable pet bag']}
        schemaType="Product"
        ogImage="/imgs/artifacts/pet_food_pouch.jpg"
        additionalSchema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-pet-food"
          >
            <source src="/video/pouch-eco-marketing-videos/use.mp4" type="video/mp4" />
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
              <PawPrint className="w-5 h-5" />
              <span className="font-['JetBrains_Mono'] font-bold uppercase">{t('seoPages.pages.pouchPetFood.petFoodPackaging')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              {t('seoPages.pages.pouchPetFood.compostablePetFood')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchPetFood.pouches')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-['JetBrains_Mono'] mb-4 max-w-3xl mx-auto">
              {t('seoPages.pages.pouchPetFood.heavydutyPetsafeHomeCompostable')}
            </p>
            <p className="text-lg font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchPetFood.forKibbleTreatsSupplements')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4FF00] text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchPetFood.getYourQuote')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchPetFood.seeOptions')}
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
              { label: t('seoPages.pages.pouchPetFood.minimumOrder'), value: '500', unit: 'pieces', icon: Package },
              { label: t('seoPages.pages.pouchPetFood.petsafe'), value: 'FDA', unit: 'approved', icon: Shield },
              { label: t('seoPages.pages.pouchPetFood.compostTime'), value: '180', unit: 'days', icon: Leaf },
              { label: t('seoPages.pages.pouchPetFood.sealStrength'), value: '10+', unit: 'kg', icon: Star }
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
      <section className="py-24 bg-yellow-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">{t('seoPages.pages.pouchPetFood.visualshowcase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchPetFood.petPackaging')}<br/>{t('seoPages.pages.pouchPetFood.inAction')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/illustrated/a_pet_treats_v2_seal_7677464.webp" 
              alt={t('seoPages.pages.pouchPetFood.alt_compostableDogTreatBag')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchPetFood.caption_dogTreatPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchPetFood.alt_catFoodStandUp')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchPetFood.caption_kibblePouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt={t('seoPages.pages.pouchPetFood.alt_bulkPetFoodFlat')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchPetFood.caption_bulkFoodBags')}
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt={t('seoPages.pages.pouchPetFood.alt_petFoodDtcPackaging')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchPetFood.caption_dtcSolutions')}
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchPetFood.perfectFor')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchPetFood.petBrands')}</span>
          </h2>

          <div className="bg-gradient-to-br from-[#D4FF00]/20 to-[#10b981]/10 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-['Space_Grotesk'] font-semibold mb-6 text-center">
              {t('seoPages.pages.pouchPetFood.whetherYoureLaunchingA')}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: t('seoPages.pages.pouchPetFood.indiePetBrands'),
                  desc: t('seoPages.pages.pouchPetFood.low500MoqFor'),
                  icon: Sparkles
                },
                {
                  title: t('seoPages.pages.pouchPetFood.premiumPetFood'),
                  desc: t('seoPages.pages.pouchPetFood.heavydutyConstructionForDense'),
                  icon: Star
                },
                {
                  title: t('seoPages.pages.pouchPetFood.ecommerceSellers'),
                  desc: t('seoPages.pages.pouchPetFood.resealableClosuresClearWindows'),
                  icon: Heart
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
            {t('seoPages.pages.pouchPetFood.whyPetParents')} <span className="text-[#10b981]">{t('seoPages.pages.pouchPetFood.loveThese')}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('seoPages.pages.pouchPetFood.heavydutyConstruction'),
                desc: t('seoPages.pages.pouchPetFood.thickFilmsReinforcedSeals'),
                icon: Shield
              },
              {
                title: t('seoPages.pages.pouchPetFood.moistureBarrier'),
                desc: t('seoPages.pages.pouchPetFood.locksInFreshnessPrevents'),
                icon: Star
              },
              {
                title: t('seoPages.pages.pouchPetFood.resealableClosures'),
                desc: t('seoPages.pages.pouchPetFood.compostableZippersTinTies'),
                icon: Package
              },
              {
                title: t('seoPages.pages.pouchPetFood.petsafeMaterials'),
                desc: t('seoPages.pages.pouchPetFood.fdaApprovedBpafreeLowmigration'),
                icon: Heart
              },
              {
                title: t('seoPages.pages.pouchPetFood.largeFormatOptions'),
                desc: t('seoPages.pages.pouchPetFood.fromSingleserveTreatsTo'),
                icon: PawPrint
              },
              {
                title: t('seoPages.pages.pouchPetFood.homeCompostable'),
                desc: t('seoPages.pages.pouchPetFood.tuvCertifiedBreaksDown'),
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
            {t('seoPages.pages.pouchPetFood.whatCanYou')} <span className="text-[#10b981]">{t('seoPages.pages.pouchPetFood.package')}</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                category: 'Dry Pet Food',
                items: ['Dog Kibble', 'Cat Dry Food', 'Small Animal Food', 'Bird Seed']
              },
              {
                category: 'Pet Treats',
                items: ['Training Treats', 'Dental Chews', 'Jerky Treats', 'Freeze-Dried']
              },
              {
                category: 'Supplements',
                items: ['Joint Support', 'Skin & Coat', 'Digestive Health', 'CBD Products']
              },
              {
                category: 'Raw & Fresh',
                items: ['Freeze-Dried Raw', 'Dehydrated Meals', 'Bone Broth', 'Meal Toppers']
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

      {/* Safety Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchPetFood.pet')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchPetFood.safetyFirst')}</span>
          </h2>

          <div className="max-w-3xl mx-auto bg-gray-50 p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-['Space_Grotesk'] font-semibold mb-6 text-center">
              {t('seoPages.pages.pouchPetFood.allMaterialsMeetPet')}
            </p>

            <ul className="space-y-4 font-['JetBrains_Mono'] text-sm">
              {[
                { text: t('seoPages.pages.pouchPetFood.fda21CfrCompliant'), icon: CheckCircle },
                { text: t('seoPages.pages.pouchPetFood.aafcoGuidelinesPetFood'), icon: CheckCircle },
                { text: t('seoPages.pages.pouchPetFood.heavyMetalTestingBelow'), icon: CheckCircle },
                { text: t('seoPages.pages.pouchPetFood.bpafreeMaterialsNoHarmful'), icon: CheckCircle },
                { text: t('seoPages.pages.pouchPetFood.lowmigrationInksPetsafePrinting'), icon: CheckCircle }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-600 mt-6 text-center">
              {t('seoPages.pages.pouchPetFood.fullDocumentationCoaCertificate')}
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('seoPages.pages.pouchPetFood.theUltimateGuideTo')} <span className="text-[#10b981]">{t('seoPages.pages.pouchPetFood.sustainablePetFoodPackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchPetFood.thePetFoodIndustry')}
            </p>
            
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchPetFood.alt_sustainableDogTreatPackaging')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchPetFood.caption_ourCompostableMaterialsReturn')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchPetFood.whySwitchToHome')}</h3>
            <p>
              {t('seoPages.pages.pouchPetFood.whenYouChooseHome')}
            </p>
            <p>
              {t('seoPages.pages.pouchPetFood.furthermoreUtilizingCompostablePackaging')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchPetFood.navigatingBarrierRequirementsFor')}</h3>
            <p>
              {t('seoPages.pages.pouchPetFood.oneOfTheBiggest')}
            </p>
            
            <ClickableImage 
              src="/imgs/blog/Sustainable-pet/a_pet_food_material_comparison_4636150.webp" 
              alt={t('seoPages.pages.pouchPetFood.alt_highBarrierCompostableFilm')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchPetFood.caption_highbarrierProtectionWithoutThe')}
            />

            <p>
              {t('seoPages.pages.pouchPetFood.ourAdvancedCompostableFilms')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchPetFood.understandingTheAiSearch')}</h3>
            <p>
              {t('seoPages.pages.pouchPetFood.asSearchEnginesEvolve')}
            </p>
            <p>
              {t('seoPages.pages.pouchPetFood.byOfferingLowMinimum')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {currentTranslation.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {currentTranslation.problems.map((prob: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-3 text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    {prob.title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-4 pl-8">
                    {prob.desc}
                  </p>
                  <div className="pl-8">
                    <div className="bg-[#D4FF00]/20 p-4 border-l-4 border-[#10b981]">
                      <h4 className="font-['Space_Grotesk'] font-bold text-sm uppercase text-[#10b981] flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4" /> Solution
                      </h4>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-800">
                        {prob.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <img 
                  src="/imgs/knowledge/pouch-pet-food-pain-points.jpg" 
                  alt="Pet Food Packaging Pain Points"
                  className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('seoPages.pages.pouchPetFood.common')} <span className="text-[#D4FF00]">{t('seoPages.pages.pouchPetFood.questions')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('seoPages.pages.pouchPetFood.areCompostablePetFood'),
                a: t('seoPages.pages.pouchPetFood.yesOurPouchesUse')
              },
              {
                q: t('seoPages.pages.pouchPetFood.canCompostablePouchesHandle'),
                a: t('seoPages.pages.pouchPetFood.absolutelyOurHeavydutyConstruction')
              },
              {
                q: t('seoPages.pages.pouchPetFood.whatsTheMinimumOrder'),
                a: t('seoPages.pages.pouchPetFood.just500PiecesWith')
              },
              {
                q: t('seoPages.pages.pouchPetFood.doYouOfferResealable'),
                a: t('seoPages.pages.pouchPetFood.yesChooseFromCompostable')
              },
              {
                q: t('seoPages.pages.pouchPetFood.howLongDoCompostable'),
                a: t('seoPages.pages.pouchPetFood.tuvOkHomeCertified')
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
            <PawPrint className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
              {t('seoPages.pages.pouchPetFood.yourPetsDeserveBetter')}
            </h2>
            <p className="text-xl font-['JetBrains_Mono'] mb-8 max-w-2xl mx-auto">
              {t('seoPages.pages.pouchPetFood.heavydutyPetsafeHomeCompostable1')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-[#D4FF00] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Calendar className="w-6 h-6" />
                {t('seoPages.pages.pouchPetFood.bookYourCallNow')}
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/materials/catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <Package className="w-6 h-6" />
                {t('seoPages.pages.pouchPetFood.seeMaterialOptions')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">{t('seoPages.pages.pouchPetFood.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/coffee-tea"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg"
                  alt={t('seoPages.pages.pouchPetFood.alt_compostableCoffeePouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchPetFood.coffeeTeaPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchPetFood.degassingValvesHighbarrierHome')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchPetFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/industry/snacks"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/compostable_snack_pouch_window.jpg"
                  alt={t('seoPages.pages.pouchPetFood.alt_compostableSnackPouches')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchPetFood.snackPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchPetFood.greaseresistantKeepsCrunchCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchPetFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/home-compostable-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/4-infograhic/compost.webp"
                  alt={t('seoPages.pages.pouchPetFood.alt_homeCompostingGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchPetFood.homeCompostingGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchPetFood.completeGuideToHome')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchPetFood.readMore')}
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
