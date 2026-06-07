import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Coffee, ShoppingBag, CheckCircle, AlertCircle, Calendar, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../../components/pouch/PouchLayout'

import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

// ============================================
// MAIN PAGE
// ============================================

export default function PouchKraftDuplexPage() {
  const { t } = useTranslation()
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
