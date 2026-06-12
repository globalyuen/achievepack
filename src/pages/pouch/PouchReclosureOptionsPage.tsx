import { Helmet } from 'react-helmet-async'
import { Lock, RefreshCw, Package, CheckCircle, Heart, Sparkles, Star, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

// Neo-Brutalist Components
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchReclosureOptionsPage() {
  const { t } = useTranslation()
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
