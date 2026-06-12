import { Cpu, Zap, Palette, CheckCircle, X, DollarSign, Clock, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

// ============================================
// MAIN PAGE
// ============================================

export default function PouchDigitalPrintingPage() {
  const { t } = useTranslation()

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
