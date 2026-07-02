import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Coffee, ShoppingBag, CheckCircle, AlertCircle, Calendar, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../../components/pouch/PouchLayout'

import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

// ============================================
// MAIN PAGE
// ============================================

const localTranslations = {
  en: {
    problemsTitle: "5 Common Kraft Duplex Problems (And Solutions)",
    problems: [
      {
        problem: "Kraft paper absorbs moisture in humid environments.",
        solution: "Premium inner PE/CPP lamination acts as a moisture barrier."
      },
      {
        problem: "Difficulty in creating a hermetic heat seal on paper.",
        solution: "Co-extruded heat-sealable inner layer ensures tight closure."
      },
      {
        problem: "Shorter shelf life for oxygen-sensitive products.",
        solution: "Ideal for fast-moving goods or roasted coffee with degassing valves."
      },
      {
        problem: "Paper is prone to tearing or puncture during transit.",
        solution: "Thickened duplex lamination adds structural rigidity and tear resistance."
      },
      {
        problem: "Colors appear dull or bleed on natural kraft paper.",
        solution: "High-contrast flexographic printing tailored for porous surfaces."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes del Kraft Dúplex (Y Soluciones)",
    problems: [
      {
        problem: "El papel kraft absorbe humedad en ambientes húmedos.",
        solution: "La laminación interior de PE/CPP premium actúa como barrera contra la humedad."
      },
      {
        problem: "Dificultad para crear un sello térmico hermético en papel.",
        solution: "La capa interior termosellable coextruida asegura un cierre hermético."
      },
      {
        problem: "Vida útil más corta para productos sensibles al oxígeno.",
        solution: "Ideal para productos de alta rotación o café tostado con válvulas desgasificadoras."
      },
      {
        problem: "El papel es propenso a rasgarse o pincharse durante el tránsito.",
        solution: "La laminación dúplex engrosada añade rigidez estructural y resistencia al desgarro."
      },
      {
        problem: "Los colores se ven apagados o se corren en papel kraft natural.",
        solution: "Impresión flexográfica de alto contraste adaptada para superficies porosas."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants du Kraft Duplex (Et Solutions)",
    problems: [
      {
        problem: "Le papier kraft absorbe l'humidité dans les environnements humides.",
        solution: "Le laminage interne PE/CPP premium agit comme une barrière contre l'humidité."
      },
      {
        problem: "Difficulté à créer un scellage thermique hermétique sur du papier.",
        solution: "La couche interne thermoscellable coextrudée assure une fermeture étanche."
      },
      {
        problem: "Durée de conservation plus courte pour les produits sensibles à l'oxygène.",
        solution: "Idéal pour les produits à rotation rapide ou le café torréfié avec valves de dégazage."
      },
      {
        problem: "Le papier est sujet aux déchirures ou aux perforations pendant le transport.",
        solution: "Le laminage duplex épaissi ajoute de la rigidité structurelle et une résistance aux déchirures."
      },
      {
        problem: "Les couleurs paraissent ternes ou bavent sur le papier kraft naturel.",
        solution: "Impression flexographique à contraste élevé adaptée aux surfaces poreuses."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "5 個常見的牛皮紙雙層問題 (及其解決方案)",
    problems: [
      {
        problem: "牛皮紙在潮濕環境中容易吸收水分。",
        solution: "優質的內部 PE/CPP 複合層可作為防潮屏障。"
      },
      {
        problem: "難以在紙張上建立氣密熱封。",
        solution: "共擠熱封內層確保緊密閉合。"
      },
      {
        problem: "對氧氣敏感的產品保質期較短。",
        solution: "非常適合快速流轉的商品或帶有排氣閥的烘焙咖啡。"
      },
      {
        problem: "紙張在運輸過程中容易撕裂或刺穿。",
        solution: "加厚的雙層複合增加了結構剛性和抗撕裂性。"
      },
      {
        problem: "在天然牛皮紙上顏色顯得暗淡或暈染。",
        solution: "專為多孔表面量身定制的高對比度柔版印刷。"
      }
    ]
  }
};

export default function PouchKraftDuplexPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchKraftDuplex'

  const FEATURES = [
    {
      icon: Leaf,
      title: t(`${p}.features.naturalLook.title`),
      desc: t(`${p}.features.naturalLook.desc`),
      color: "text-amber-600"
    },
    {
      icon: Shield,
      title: t(`${p}.features.freshness.title`),
      desc: t(`${p}.features.freshness.desc`),
      color: "text-blue-600"
    },
    {
      icon: DollarSign,
      title: t(`${p}.features.value.title`),
      desc: t(`${p}.features.value.desc`),
      color: "text-green-600"
    },
    {
      icon: Coffee,
      title: t(`${p}.features.coffee.title`),
      desc: t(`${p}.features.coffee.desc`),
      color: "text-purple-600"
    }
  ]

  const APPLICATIONS = [
    t(`${p}.applications.app1`),
    t(`${p}.applications.app2`),
    t(`${p}.applications.app3`),
    t(`${p}.applications.app4`),
    t(`${p}.applications.app5`),
    t(`${p}.applications.app6`),
    t(`${p}.applications.app7`),
    t(`${p}.applications.app8`),
    t(`${p}.applications.app9`),
    t(`${p}.applications.app10`),
    t(`${p}.applications.app11`),
    t(`${p}.applications.app12`)
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href="https://pouch.eco/materials/kraft-duplex" />
        <meta property="og:title" content={t(`${p}.ogTitle`)} />
        <meta property="og:description" content={t(`${p}.ogDescription`)} />
        <meta property="og:url" content="https://pouch.eco/materials/kraft-duplex" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t(`${p}.twitterTitle`)} />
        <meta name="twitter:description" content={t(`${p}.twitterDescription`)} />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-amber-200">{t(`${p}.heroBadge`)}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t(`${p}.heroTitle1`)}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">{t(`${p}.heroTitle2`)}</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            {t(`${p}.heroSubtitle`)}
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              {t(`${p}.heroCta1`)}
            </NeoButton>
            <NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t(`${p}.featuresTitle`)}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <NeoCard key={idx} className="flex gap-4">
                <feature.icon className={`w-12 h-12 flex-shrink-0 ${feature.color}`} />
                <div>
                  <h3 className="font-black text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t(`${p}.whatsInsideTitle`)}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-amber-100">
              <div className="text-center">
                <h3 className="font-black text-lg mb-2">{t(`${p}.outerLayerTitle`)}</h3>
                <p className="font-bold mb-1">{t(`${p}.outerLayerSub`)}</p>
                <p className="text-sm text-gray-600">{t(`${p}.outerLayerDesc`)}</p>
                <p className="text-xs text-gray-500 mt-2">{t(`${p}.outerLayerDetail`)}</p>
              </div>
            </NeoCard>

            <NeoCard color="bg-blue-100">
              <div className="text-center">
                <h3 className="font-black text-lg mb-2">{t(`${p}.barrierLayerTitle`)}</h3>
                <p className="font-bold mb-1">{t(`${p}.barrierLayerSub`)}</p>
                <p className="text-sm text-gray-600">{t(`${p}.barrierLayerDesc`)}</p>
                <p className="text-xs text-gray-500 mt-2">{t(`${p}.barrierLayerDetail`)}</p>
              </div>
            </NeoCard>

            <NeoCard color="bg-green-100">
              <div className="text-center">
                <h3 className="font-black text-lg mb-2">{t(`${p}.innerLayerTitle`)}</h3>
                <p className="font-bold mb-1">{t(`${p}.innerLayerSub`)}</p>
                <p className="text-sm text-gray-600">{t(`${p}.innerLayerDesc`)}</p>
                <p className="text-xs text-gray-500 mt-2">{t(`${p}.innerLayerDetail`)}</p>
              </div>
            </NeoCard>
          </div>

          <NeoCard className="mt-8 bg-white">
            <h3 className="font-black text-xl mb-4">{t(`${p}.performanceTitle`)}</h3>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
              <div>
                <p className="font-bold">{t(`${p}.otrTitle`)}</p>
                <p className="text-2xl font-black text-blue-600">{t(`${p}.otrValue`)}</p>
                <p className="text-gray-600">{t(`${p}.otrUnit`)}</p>
              </div>
              <div>
                <p className="font-bold">{t(`${p}.mvtrTitle`)}</p>
                <p className="text-2xl font-black text-blue-600">{t(`${p}.mvtrValue`)}</p>
                <p className="text-gray-600">{t(`${p}.mvtrUnit`)}</p>
              </div>
              <div>
                <p className="font-bold">{t(`${p}.shelfLifeTitle`)}</p>
                <p className="text-2xl font-black text-green-600">{t(`${p}.shelfLifeValue`)}</p>
                <p className="text-gray-600">{t(`${p}.shelfLifeUnit`)}</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t(`${p}.perfectForTitle`)}</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {APPLICATIONS.map((app, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#D4FF00] border-2 border-black px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-bold">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section className="py-16 px-4 bg-gray-50 border-t-2 border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">
            {localTranslations[i18n.language as keyof typeof localTranslations]?.problemsTitle || localTranslations.en.problemsTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {(localTranslations[i18n.language as keyof typeof localTranslations]?.problems || localTranslations.en.problems).map((item, idx) => (
                <NeoCard key={idx} className="bg-white hover:-translate-y-1 transition-transform">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                      <div className="w-1 h-full bg-gray-200 rounded"></div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-2 text-gray-900">{item.problem}</p>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-2 border-black"></div>
              <img 
                src="/imgs/knowledge/kraft-duplex-pain-points.jpg" 
                alt="Kraft Duplex Pain Points and Solutions" 
                className="relative z-10 w-full h-auto object-cover border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best For vs Not For */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t(`${p}.rightForYouTitle`)}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-green-100">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <h3 className="font-black text-2xl">{t(`${p}.bestForTitle`)}</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>{t(`${p}.bestForList.item1`)}</li>
                <li>{t(`${p}.bestForList.item2`)}</li>
                <li>{t(`${p}.bestForList.item3`)}</li>
                <li>{t(`${p}.bestForList.item4`)}</li>
                <li>{t(`${p}.bestForList.item5`)}</li>
                <li>{t(`${p}.bestForList.item6`)}</li>
              </ul>
            </NeoCard>

            <NeoCard color="bg-amber-100">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <h3 className="font-black text-2xl">{t(`${p}.notIdealTitle`)}</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>{t(`${p}.notIdealList.item1`)}</li>
                <li>{t(`${p}.notIdealList.item2`)}</li>
                <li>{t(`${p}.notIdealList.item3`)}</li>
                <li>{t(`${p}.notIdealList.item4`)}</li>
                <li>{t(`${p}.notIdealList.item5`)}</li>
              </ul>
              <p className="text-sm text-amber-700 mt-4">
                {t(`${p}.needLongerShelfLife`)}<a href="/materials/cello-kraft-triplex" className="underline font-bold">{t(`${p}.highBarrierKraftLinkText`)}</a>
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">{t(`${p}.pricingTitle`)}</h2>
            <p className="text-xl text-gray-700 mb-6">
              <strong>{t(`${p}.pricingPrice`)}</strong> {t(`${p}.pricingPriceDetail`)}
            </p>
            <p className="text-gray-600 mb-6">
              {t(`${p}.pricingMoq`)}
            </p>
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              {t(`${p}.pricingCta`)}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            {t(`${p}.ctaTitle`)}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t(`${p}.ctaSubtitle`)}
          </p>
          <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
            {t(`${p}.ctaButton`)}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
