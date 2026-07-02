import { Helmet } from 'react-helmet-async'
import { Lock, RefreshCw, Package, CheckCircle, Heart, Sparkles, Star, Shield, AlertTriangle, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

// Neo-Brutalist Components
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const localTranslations = {
  en: {
    painPoints: {
      title: "5 Common Reclosure Problems (And Solutions)",
      subtitle: "Engineering solutions for flexible packaging failures",
      items: [
        {
          problem: "Zippers losing grip due to powder/crumbs",
          solution: "Powder-proof zippers with special track designs"
        },
        {
          problem: "Hard to open for elderly/disabled",
          solution: "Ergonomic, easy-grip slider zippers"
        },
        {
          problem: "Air leakage reducing shelf life",
          solution: "High-barrier press-to-close zippers for airtight seals"
        },
        {
          problem: "Tampering before purchase",
          solution: "Tamper-evident tear notches above the zipper"
        },
        {
          problem: "Liquid spillage in transit",
          solution: "Dual-track locking zippers for leak-proof security"
        }
      ]
    }
  },
  es: {
    painPoints: {
      title: "5 problemas comunes de recierre (y soluciones)",
      subtitle: "Soluciones de ingeniería para fallas en empaques flexibles",
      items: [
        {
          problem: "Las cremalleras pierden agarre debido al polvo/migajas",
          solution: "Cremalleras a prueba de polvo con diseños especiales de rieles"
        },
        {
          problem: "Difícil de abrir para ancianos/discapacitados",
          solution: "Cremalleras deslizantes ergonómicas y de fácil agarre"
        },
        {
          problem: "Fuga de aire que reduce la vida útil",
          solution: "Cremalleras de cierre a presión de alta barrera para un sellado hermético"
        },
        {
          problem: "Manipulación antes de la compra",
          solution: "Muescas de desgarre a prueba de manipulaciones sobre la cremallera"
        },
        {
          problem: "Derrame de líquidos en tránsito",
          solution: "Cremalleras de bloqueo de doble riel para una seguridad a prueba de fugas"
        }
      ]
    }
  },
  fr: {
    painPoints: {
      title: "5 problèmes courants de refermeture (et solutions)",
      subtitle: "Solutions d'ingénierie pour les défaillances des emballages flexibles",
      items: [
        {
          problem: "Les fermetures éclair perdent leur adhérence à cause de la poudre/miettes",
          solution: "Fermetures éclair anti-poudre avec conceptions de rails spéciales"
        },
        {
          problem: "Difficile à ouvrir pour les personnes âgées/handicapées",
          solution: "Fermetures à glissière ergonomiques à prise facile"
        },
        {
          problem: "Fuite d'air réduisant la durée de conservation",
          solution: "Fermetures à pression haute barrière pour des joints hermétiques"
        },
        {
          problem: "Altération avant l'achat",
          solution: "Encoches de déchirure inviolables au-dessus de la fermeture éclair"
        },
        {
          problem: "Déversement de liquide en transit",
          solution: "Fermetures à glissière à double rail pour une sécurité anti-fuite"
        }
      ]
    }
  },
  'zh-TW': {
    painPoints: {
      title: "5 個常見的重新密封問題 (及其解決方案)",
      subtitle: "針對軟包裝失效的工程解決方案",
      items: [
        {
          problem: "拉鍊因粉末/碎屑而失去抓地力",
          solution: "採用特殊軌道設計的防粉拉鍊"
        },
        {
          problem: "老年人/身障人士難以打開",
          solution: "符合人體工學、易於抓握的滑塊拉鍊"
        },
        {
          problem: "漏氣縮短保質期",
          solution: "高阻隔按壓拉鍊，實現氣密密封"
        },
        {
          problem: "購買前被篡改",
          solution: "拉鍊上方的防篡改撕口"
        },
        {
          problem: "運輸途中液體溢出",
          solution: "雙軌鎖定拉鍊，實現防漏安全"
        }
      ]
    }
  }
}

export default function PouchReclosureOptionsPage() {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language || 'en').split('-')[0] === 'zh' ? 'zh-TW' : (i18n.language || 'en').split('-')[0]
  const content = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en
  const baseUrl = getBaseUrl()

  const CLOSURE_TYPES = [
    {
      color: 'bg-[#D4FF00]',
      icon: RefreshCw,
      index: 0
    },
    {
      color: 'bg-[#00FFFF]',
      icon: Lock,
      index: 1
    },
    {
      color: 'bg-[#FF00FF]',
      icon: Shield,
      index: 2
    },
    {
      color: 'bg-purple-400',
      icon: Package,
      index: 3
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchReclosureOptionsPage.meta.title')}</title>
        <meta name="description" content={t('pouchReclosureOptionsPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/reclosure-options`} />
        
        <meta property="og:title" content={t('pouchReclosureOptionsPage.meta.ogTitle')} />
        <meta property="og:description" content={t('pouchReclosureOptionsPage.meta.ogDescription')} />
        <meta property="og:url" content={`${baseUrl}/reclosure-options`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/reclosure-options-og.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchReclosureOptionsPage.meta.twitterTitle')} />
        <meta name="twitter:description" content={t('pouchReclosureOptionsPage.meta.twitterDescription')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": t('pouchReclosureOptionsPage.meta.schemaName'),
            "description": t('pouchReclosureOptionsPage.meta.schemaDescription'),
            "url": `${baseUrl}/reclosure-options`
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <NeoBadge color="purple">{t('pouchReclosureOptionsPage.hero.badge')}</NeoBadge>
            <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none">
              {t('pouchReclosureOptionsPage.hero.titleLine1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{t('pouchReclosureOptionsPage.hero.titleLine2')}</span>
            </h1>
            <p className="mt-8 text-2xl text-gray-700 max-w-4xl mx-auto">
              {t('pouchReclosureOptionsPage.hero.subtitle')}
            </p>
          </div>

          {/* Quick Selector */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <NeoCard className="text-center bg-gradient-to-br from-white to-green-50">
              <Heart className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="font-black text-xl mb-2">{t('pouchReclosureOptionsPage.quickSelector.everyday.title')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('pouchReclosureOptionsPage.quickSelector.everyday.desc')}</p>
              <NeoBadge color="lime">{t('pouchReclosureOptionsPage.quickSelector.everyday.badge')}</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-gradient-to-br from-white to-blue-50">
              <Sparkles className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-black text-xl mb-2">{t('pouchReclosureOptionsPage.quickSelector.premium.title')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('pouchReclosureOptionsPage.quickSelector.premium.desc')}</p>
              <NeoBadge color="cyan">{t('pouchReclosureOptionsPage.quickSelector.premium.badge')}</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-gradient-to-br from-white to-purple-50">
              <Shield className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-black text-xl mb-2">{t('pouchReclosureOptionsPage.quickSelector.safety.title')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('pouchReclosureOptionsPage.quickSelector.safety.desc')}</p>
              <NeoBadge color="magenta">{t('pouchReclosureOptionsPage.quickSelector.safety.badge')}</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Closure Types Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              {t('pouchReclosureOptionsPage.closureTypes.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pouchReclosureOptionsPage.closureTypes.sectionSubtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {CLOSURE_TYPES.map((closure, index) => (
              <NeoCard key={index} className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 ${closure.color} border-4 border-black`}>
                        <closure.icon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h3 className="font-black text-3xl mb-2">{t(`pouchReclosureOptionsPage.closureTypes.items.${closure.index}.name`)}</h3>
                        <p className="text-gray-700 text-lg">{t(`pouchReclosureOptionsPage.closureTypes.items.${closure.index}.desc`)}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {[0, 1, 2, 3].map((featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{t(`pouchReclosureOptionsPage.closureTypes.items.${closure.index}.features.${featureIdx}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 border-2 border-black p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-black text-gray-500 mb-2">{t('pouchReclosureOptionsPage.closureTypes.bestForLabel')}</p>
                      <p className="font-bold text-lg mb-4">{t(`pouchReclosureOptionsPage.closureTypes.items.${closure.index}.bestFor`)}</p>
                    </div>
                    <NeoButton variant="secondary" className="w-full text-sm py-3">
                      {t('pouchReclosureOptionsPage.closureTypes.seeExamples')}
                    </NeoButton>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              {t('pouchReclosureOptionsPage.benefits.title')}<span className="text-green-600">{t('pouchReclosureOptionsPage.benefits.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, index: 0 },
              { icon: Star, index: 1 },
              { icon: CheckCircle, index: 2 },
              { icon: Sparkles, index: 3 }
            ].map((benefit) => (
              <NeoCard key={benefit.index} className="text-center">
                <benefit.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="font-black text-xl mb-2">{t(`pouchReclosureOptionsPage.benefits.items.${benefit.index}.title`)}</h3>
                <p className="text-gray-600">{t(`pouchReclosureOptionsPage.benefits.items.${benefit.index}.desc`)}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              {content.painPoints.title}
            </h2>
            <p className="text-xl text-gray-600">
              {content.painPoints.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="border-4 border-black p-2 bg-gray-50 transform -rotate-2">
              <img 
                src={`${baseUrl}/imgs/knowledge/pouch-reclosure-pain-points.jpg`} 
                alt="Reclosure pain points" 
                className="w-full h-auto border-2 border-black"
              />
            </div>
            
            <div className="space-y-6">
              {content.painPoints.items.map((item, idx) => (
                <NeoCard key={idx} className="!p-4">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="bg-red-100 p-3 border-2 border-black flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-red-900 line-through decoration-red-400">{item.problem}</p>
                    </div>
                    <div className="hidden sm:block">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="bg-green-100 p-3 border-2 border-black flex-shrink-0">
                      <Wrench className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-green-900">{item.solution}</p>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-8">
            {t('pouchReclosureOptionsPage.cta.titleLine1')}<br/>
            <span className="text-[#D4FF00]">{t('pouchReclosureOptionsPage.cta.titleLine2')}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            {t('pouchReclosureOptionsPage.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">{t('pouchReclosureOptionsPage.cta.orderSamplePack')}</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchReclosureOptionsPage.cta.chatWithExpert')}
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
