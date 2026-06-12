import { Shield, Clock, Target, Zap, Package, TrendingUp, HelpCircle, CheckCircle, X } from 'lucide-react'
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

export default function PouchBarrierOverviewPage() {
  const { t } = useTranslation()

  const BARRIER_LEVELS = [
    {
      id: 'low',
      name: t('pouchBarrierOverviewPage.compare.levels.low.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.low.shelf'),
      otr: '50-100 cc/m²/day',
      mvtr: '10-20 g/m²/day',
      cost: '$',
      color: 'bg-green-100',
      borderColor: 'border-green-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.low.examples', { returnObjects: true }) as string[] || [],
      icon: Zap,
      tagline: t('pouchBarrierOverviewPage.compare.levels.low.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.low.desc')
    },
    {
      id: 'medium',
      name: t('pouchBarrierOverviewPage.compare.levels.medium.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.medium.shelf'),
      otr: '5-20 cc/m²/day',
      mvtr: '2-5 g/m²/day',
      cost: '$$',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.medium.examples', { returnObjects: true }) as string[] || [],
      icon: Package,
      tagline: t('pouchBarrierOverviewPage.compare.levels.medium.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.medium.desc')
    },
    {
      id: 'high',
      name: t('pouchBarrierOverviewPage.compare.levels.high.name'),
      shelf: t('pouchBarrierOverviewPage.compare.levels.high.shelf'),
      otr: '<1 cc/m²/day',
      mvtr: '<1 g/m²/day',
      cost: '$$$',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400',
      examples: t('pouchBarrierOverviewPage.compare.levels.high.examples', { returnObjects: true }) as string[] || [],
      icon: Shield,
      tagline: t('pouchBarrierOverviewPage.compare.levels.high.tagline'),
      desc: t('pouchBarrierOverviewPage.compare.levels.high.desc')
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchBarrierOverviewPage.title')}</title>
        <meta name="description" content={t('pouchBarrierOverviewPage.metaDesc')} />
        <link rel="canonical" href="https://pouch.eco/barriers/overview" />
        <meta property="og:title" content={t('pouchBarrierOverviewPage.title')} />
        <meta property="og:description" content={t('pouchBarrierOverviewPage.metaDesc')} />
        <meta property="og:url" content="https://pouch.eco/barriers/overview" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchBarrierOverviewPage.title')} />
        <meta name="twitter:description" content={t('pouchBarrierOverviewPage.metaDesc')} />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">{t('pouchBarrierOverviewPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchBarrierOverviewPage.hero.title')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('pouchBarrierOverviewPage.hero.titleColored')}</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-3xl">
            {t('pouchBarrierOverviewPage.hero.desc')}
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchBarrierOverviewPage.hero.btnHelp')}
            </NeoButton>
            <NeoButton variant="secondary">{t('pouchBarrierOverviewPage.hero.btnQuiz')}</NeoButton>
          </div>
        </div>
      </section>

      {/* What is Barrier? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchBarrierOverviewPage.whatIs.title')}</h2>
          
          <NeoCard color="bg-[#00FFFF]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-black text-2xl mb-4">{t('pouchBarrierOverviewPage.whatIs.sunscreenTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('pouchBarrierOverviewPage.whatIs.sunscreenDesc')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>🌬️ {t('pouchBarrierOverviewPage.whatIs.oxygen')}</li>
                  <li>💧 {t('pouchBarrierOverviewPage.whatIs.moisture')}</li>
                  <li>☀️ {t('pouchBarrierOverviewPage.whatIs.light')}</li>
                  <li>👃 {t('pouchBarrierOverviewPage.whatIs.odors')}</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-6">
                <h4 className="font-black text-lg mb-4">{t('pouchBarrierOverviewPage.whatIs.ruleTitle')}</h4>
                <p className="text-gray-700 mb-4">
                  <strong>{t('pouchBarrierOverviewPage.whatIs.ruleText')}</strong>
                </p>
                <p className="text-sm text-gray-600">
                  {t('pouchBarrierOverviewPage.whatIs.ruleSub')}
                </p>
              </div>
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase text-center">{t('pouchBarrierOverviewPage.compare.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {BARRIER_LEVELS.map((level) => (
              <NeoCard key={level.id} color={level.color} className={`${level.borderColor}`}>
                <div className="flex items-start justify-between mb-4">
                  <level.icon className="w-10 h-10" />
                  <div className="font-mono font-black text-lg">{level.cost}</div>
                </div>

                <h3 className="font-black text-2xl mb-2">{level.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{level.tagline}</p>
                
                <div className="bg-white border-2 border-black p-3 mb-4">
                  <p className="font-black text-3xl text-center">{level.shelf}</p>
                  <p className="text-xs text-center text-gray-600">{t('pouchBarrierOverviewPage.compare.typicalShelfLife')}</p>
                </div>

                <p className="text-sm text-gray-700 mb-4">{level.desc}</p>

                <div className="space-y-2 mb-4 font-mono text-xs">
                  <div>
                    <span className="font-bold">OTR:</span> {level.otr}
                  </div>
                  <div>
                    <span className="font-bold">MVTR:</span> {level.mvtr}
                  </div>
                </div>

                <div>
                  <p className="font-bold text-sm mb-2">{t('pouchBarrierOverviewPage.compare.bestFor')}</p>
                  <div className="space-y-1">
                    {level.examples.map((ex, idx) => (
                      <div key={idx} className="text-xs bg-white border border-black px-2 py-1">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Decision Tool */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchBarrierOverviewPage.whichOne.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <NeoCard color="bg-green-100" className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c1.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c1.desc')}</p>
              <NeoBadge color="bg-green-300">{t('pouchBarrierOverviewPage.whichOne.c1.badge')}</NeoBadge>
              <p className="text-xs text-gray-606 mt-3">{t('pouchBarrierOverviewPage.whichOne.c1.sub')}</p>
            </NeoCard>

            <NeoCard color="bg-blue-100" className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c2.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c2.desc')}</p>
              <NeoBadge color="bg-blue-300">{t('pouchBarrierOverviewPage.whichOne.c2.badge')}</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">{t('pouchBarrierOverviewPage.whichOne.c2.sub')}</p>
            </NeoCard>

            <NeoCard color="bg-purple-100" className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.whichOne.c3.title')}</h3>
              <p className="text-sm text-gray-700 mb-4">{t('pouchBarrierOverviewPage.whichOne.c3.desc')}</p>
              <NeoBadge color="bg-purple-300">{t('pouchBarrierOverviewPage.whichOne.c3.badge')}</NeoBadge>
              <p className="text-xs text-gray-600 mt-3">{t('pouchBarrierOverviewPage.whichOne.c3.sub')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchBarrierOverviewPage.examples.title')}</h2>
          
          <div className="space-y-6">
            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">LOW</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l1.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l1.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l1.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l1.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">MED</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l2.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l2.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l2.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l2.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="bg-white">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 border-2 border-black p-3 flex-shrink-0">
                  <span className="font-black text-xl">HIGH</span>
                </div>
                <div>
                  <h3 className="font-black text-xl mb-2">{t('pouchBarrierOverviewPage.examples.l3.title')}</h3>
                  <p className="text-gray-700 mb-2">
                    {t('pouchBarrierOverviewPage.examples.l3.desc')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>{t('pouchBarrierOverviewPage.examples.l3.resTitle')}</strong> {t('pouchBarrierOverviewPage.examples.l3.resVal')}
                  </p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">{t('pouchBarrierOverviewPage.unsure.title')}</h2>
            <p className="text-xl text-gray-700 mb-6">
              {t('pouchBarrierOverviewPage.unsure.desc')}
            </p>
            <div className="bg-gray-50 border-2 border-black p-4 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-bold mb-2">{t('pouchBarrierOverviewPage.unsure.testHeading')}</h4>
              <ul className="text-sm space-y-1">
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t1')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t2')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t3')}</li>
                <li>✓ {t('pouchBarrierOverviewPage.unsure.t4')}</li>
              </ul>
            </div>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchBarrierOverviewPage.unsure.btn')}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            {t('pouchBarrierOverviewPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('pouchBarrierOverviewPage.cta.desc')}
          </p>
          <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
            {t('pouchBarrierOverviewPage.cta.btn')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
