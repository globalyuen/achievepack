import { Cpu, Zap, Palette, CheckCircle, X, DollarSign, Clock, Sparkles, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const translations = {
  en: [
    { title: "Color Inconsistency Across Batches", desc: "Digital printing uses precise color management profiles (ICC) and requires no plate setup, ensuring exact color matching across every run." },
    { title: "High Minimum Order Quantities (MOQ)", desc: "Digital printing eliminates plates, making short runs and multiple SKUs cost-effective." },
    { title: "Long Lead Times for New Designs", desc: "Direct-to-file printing skips plate-making, reducing setup time from weeks to just days." },
    { title: "Registration Errors in Complex Designs", desc: "Digital presses use advanced sensors and direct continuous printing, eliminating plate misalignment issues." },
    { title: "Difficulty in Variable Data Printing (VDP)", desc: "Digital technology allows every single pouch to have unique codes, numbers, or graphics without slowing down the process." }
  ],
  es: [
    { title: "Inconsistencia de Color Entre Lotes", desc: "La impresión digital utiliza perfiles precisos de gestión de color (ICC) y no requiere configuración de planchas, asegurando una coincidencia de color exacta en cada tirada." },
    { title: "Altas Cantidades Mínimas de Pedido (MOQ)", desc: "La impresión digital elimina las planchas, lo que hace que las tiradas cortas y múltiples SKU sean rentables." },
    { title: "Largos Tiempos de Entrega para Nuevos Diseños", desc: "La impresión directa desde el archivo omite la creación de planchas, reduciendo el tiempo de configuración de semanas a solo días." },
    { title: "Errores de Registro en Diseños Complejos", desc: "Las prensas digitales utilizan sensores avanzados e impresión continua directa, eliminando los problemas de desalineación de planchas." },
    { title: "Dificultad en la Impresión de Datos Variables (VDP)", desc: "La tecnología digital permite que cada bolsa tenga códigos, números o gráficos únicos sin ralentizar el proceso." }
  ],
  fr: [
    { title: "Incohérence des Couleurs Entre les Lots", desc: "L'impression numérique utilise des profils de gestion des couleurs précis (ICC) et ne nécessite aucune configuration de plaque, garantissant une correspondance exacte des couleurs à chaque tirage." },
    { title: "Quantités Minimales de Commande Élevées (MOQ)", desc: "L'impression numérique élimine les plaques, rendant les courts tirages et les multiples SKU rentables." },
    { title: "Longs Délais de Réalisation pour les Nouveaux Designs", desc: "L'impression directe à partir du fichier saute l'étape de création de plaques, réduisant le temps de configuration de quelques semaines à quelques jours." },
    { title: "Erreurs de Repérage dans les Designs Complexes", desc: "Les presses numériques utilisent des capteurs avancés et une impression continue directe, éliminant les problèmes de désalignement des plaques." },
    { title: "Difficulté de l'Impression de Données Variables (VDP)", desc: "La technologie numérique permet à chaque sachet d'avoir des codes, des numéros ou des graphiques uniques sans ralentir le processus." }
  ],
  "zh-TW": [
    { title: "批次間顏色不一致", desc: "數位印刷採用精確的色彩管理設定檔 (ICC) 且無需製版，確保每次印刷的顏色完全一致。" },
    { title: "最低訂購量 (MOQ) 過高", desc: "數位印刷免去了製版費用，使得短版印刷和多款 SKU 變得具有成本效益。" },
    { title: "新設計交期過長", desc: "直接從檔案印刷省去了製版步驟，將準備時間從數週縮短至僅需幾天。" },
    { title: "複雜設計中的套印誤差", desc: "數位印刷機使用先進的感測器和直接連續印刷技術，消除了版位不準的問題。" },
    { title: "變動資料印刷 (VDP) 困難", desc: "數位技術允許每個包裝袋擁有獨特的代碼、編號或圖形，而不會降低生產速度。" }
  ]
};

const sectionsForPouch = translations;
const sectionsForAchieve = translations;

// ============================================
// MAIN PAGE
// ============================================

export default function PouchDigitalPrintingPage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const problems = sectionsForPouch[lang as keyof typeof sectionsForPouch] || sectionsForPouch.en

  const ADVANTAGES = [
    {
      icon: Zap,
      title: t('pouchDigitalPrintingPage.advantages.items.0.title'),
      desc: t('pouchDigitalPrintingPage.advantages.items.0.desc'),
      color: "text-yellow-600"
    },
    {
      icon: Palette,
      title: t('pouchDigitalPrintingPage.advantages.items.1.title'),
      desc: t('pouchDigitalPrintingPage.advantages.items.1.desc'),
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: t('pouchDigitalPrintingPage.advantages.items.2.title'),
      desc: t('pouchDigitalPrintingPage.advantages.items.2.desc'),
      color: "text-green-600"
    },
    {
      icon: Sparkles,
      title: t('pouchDigitalPrintingPage.advantages.items.3.title'),
      desc: t('pouchDigitalPrintingPage.advantages.items.3.desc'),
      color: "text-purple-600"
    }
  ]

  const PERFECT_FOR = [
    t('pouchDigitalPrintingPage.perfectFor.items.0'),
    t('pouchDigitalPrintingPage.perfectFor.items.1'),
    t('pouchDigitalPrintingPage.perfectFor.items.2'),
    t('pouchDigitalPrintingPage.perfectFor.items.3'),
    t('pouchDigitalPrintingPage.perfectFor.items.4'),
    t('pouchDigitalPrintingPage.perfectFor.items.5'),
    t('pouchDigitalPrintingPage.perfectFor.items.6'),
    t('pouchDigitalPrintingPage.perfectFor.items.7'),
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchDigitalPrintingPage.meta.title')}</title>
        <meta name="description" content={t('pouchDigitalPrintingPage.meta.description')} />
        <link rel="canonical" href="https://pouch.eco/printing/digital" />
        <meta property="og:title" content={t('pouchDigitalPrintingPage.meta.ogTitle')} />
        <meta property="og:description" content={t('pouchDigitalPrintingPage.meta.ogDescription')} />
        <meta property="og:url" content="https://pouch.eco/printing/digital" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchDigitalPrintingPage.meta.twitterTitle')} />
        <meta name="twitter:description" content={t('pouchDigitalPrintingPage.meta.twitterDescription')} />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#00FFFF]">{t('pouchDigitalPrintingPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchDigitalPrintingPage.hero.titleLine1')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('pouchDigitalPrintingPage.hero.titleLine2')}</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            <strong>{t('pouchDigitalPrintingPage.hero.descriptionBold')}</strong> {t('pouchDigitalPrintingPage.hero.descriptionRest')}
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchDigitalPrintingPage.hero.ctaQuote')}
            </NeoButton>
            <NeoButton variant="secondary">{t('pouchDigitalPrintingPage.hero.ctaExamples')}</NeoButton>
          </div>
        </div>
      </section>

      {/* Why Digital? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchDigitalPrintingPage.advantages.heading')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ADVANTAGES.map((adv, idx) => (
              <NeoCard key={idx} className="flex gap-4">
                <adv.icon className={`w-12 h-12 flex-shrink-0 ${adv.color}`} />
                <div>
                  <h3 className="font-black text-xl mb-2">{adv.title}</h3>
                  <p className="text-gray-700">{adv.desc}</p>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Digital vs Traditional */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">{t('pouchDigitalPrintingPage.comparison.heading')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital */}
            <NeoCard color="bg-green-100" className="border-green-400">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-10 h-10 text-green-600" />
                <h3 className="font-black text-2xl">{t('pouchDigitalPrintingPage.comparison.digital.title')}</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.digital.moqLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.digital.moqDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.digital.noPlateLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.digital.noPlateDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.digital.colorsLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.digital.colorsDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.digital.leadTimeLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.digital.leadTimeDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.digital.designLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.digital.designDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-black text-lg mb-1">{t('pouchDigitalPrintingPage.comparison.digital.bestFor')}</p>
                <p className="text-sm">{t('pouchDigitalPrintingPage.comparison.digital.bestForDesc')}</p>
              </div>
            </NeoCard>

            {/* Traditional */}
            <NeoCard color="bg-blue-100" className="border-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-10 h-10 text-blue-600" />
                <h3 className="font-black text-2xl">{t('pouchDigitalPrintingPage.comparison.traditional.title')}</h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.traditional.moqLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.traditional.moqDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.traditional.plateLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.traditional.plateDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.traditional.colorsLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.traditional.colorsDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.traditional.leadTimeLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.traditional.leadTimeDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{t('pouchDigitalPrintingPage.comparison.traditional.designLabel')}</p>
                    <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.comparison.traditional.designDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black p-4">
                <p className="font-black text-lg mb-1">{t('pouchDigitalPrintingPage.comparison.traditional.bestFor')}</p>
                <p className="text-sm">{t('pouchDigitalPrintingPage.comparison.traditional.bestForDesc')}</p>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchDigitalPrintingPage.perfectFor.heading')}</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PERFECT_FOR.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#D4FF00] border-2 border-black px-3 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Example */}
      <section className="py-16 px-4 bg-[#00FFFF]">
        <div className="max-w-4xl mx-auto">
          <NeoCard className="bg-white">
            <h2 className="font-black text-3xl mb-8 text-center">{t('pouchDigitalPrintingPage.pricing.heading')}</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-green-100 border-2 border-black p-4 mb-2">
                  <p className="font-black text-4xl text-green-600">500</p>
                  <p className="text-sm">{t('pouchDigitalPrintingPage.pricing.units')}</p>
                </div>
                <p className="font-bold">{t('pouchDigitalPrintingPage.pricing.price500')}</p>
                <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.pricing.total500')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-black p-4 mb-2">
                  <p className="font-black text-4xl text-blue-600">1,000</p>
                  <p className="text-sm">{t('pouchDigitalPrintingPage.pricing.units')}</p>
                </div>
                <p className="font-bold">{t('pouchDigitalPrintingPage.pricing.price1000')}</p>
                <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.pricing.total1000')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 border-2 border-black p-4 mb-2">
                  <p className="font-black text-4xl text-purple-600">2,000</p>
                  <p className="text-sm">{t('pouchDigitalPrintingPage.pricing.units')}</p>
                </div>
                <p className="font-bold">{t('pouchDigitalPrintingPage.pricing.price2000')}</p>
                <p className="text-sm text-gray-600">{t('pouchDigitalPrintingPage.pricing.total2000')}</p>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-black p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">{t('pouchDigitalPrintingPage.pricing.includesNote')}</p>
              <p className="text-xs text-gray-500">{t('pouchDigitalPrintingPage.pricing.disclaimer')}</p>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchDigitalPrintingPage.included.heading')}</h2>
          
          <NeoCard className="bg-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-black text-xl mb-4">{t('pouchDigitalPrintingPage.included.includedTitle')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.0')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.1')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.2')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.3')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.4')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.5')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.includedItems.6')}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-black text-xl mb-4">{t('pouchDigitalPrintingPage.included.addOnsTitle')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t('pouchDigitalPrintingPage.included.addOnItems.0')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.addOnItems.1')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.addOnItems.2')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.addOnItems.3')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.addOnItems.4')}</li>
                  <li>• {t('pouchDigitalPrintingPage.included.addOnItems.5')}</li>
                </ul>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-black text-4xl mb-8 uppercase">5 Common Digital Printing Problems (And Solutions)</h2>
              <div className="space-y-6">
                {problems.map((prob, idx) => (
                  <NeoCard key={idx} className="bg-white">
                    <div className="flex gap-4">
                      <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-black text-xl mb-2">{prob.title}</h3>
                        <p className="text-gray-700">{prob.desc}</p>
                      </div>
                    </div>
                  </NeoCard>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-2xl">
                <img 
                  src="/imgs/knowledge/digital-printing-pain-points.jpg" 
                  alt="Digital Printing Pain Points" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            {t('pouchDigitalPrintingPage.cta.heading')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('pouchDigitalPrintingPage.cta.description')}
          </p>
          <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
            {t('pouchDigitalPrintingPage.cta.button')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
