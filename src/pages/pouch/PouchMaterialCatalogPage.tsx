import { Leaf, Shield, Eye, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

// ============================================
// MATERIAL KEY MAPPINGS
// ============================================

const MATERIAL_KEYS = ['kraftTriplex', 'kraftDuplex', 'clearHigh', 'clearMedium', 'matteWhite', 'blackMatte'] as const

// ============================================
// MAIN PAGE
// ============================================

export default function PouchMaterialCatalogPage() {
  const { t } = useTranslation()

  const MATERIALS = [
    {
      id: 'kraft-triplex',
      key: 'kraftTriplex',
      price: '$$$',
      color: 'bg-amber-100',
      icon: Shield,
      link: '/materials/cello-kraft-triplex'
    },
    {
      id: 'kraft-duplex',
      key: 'kraftDuplex',
      price: '$$',
      color: 'bg-amber-50',
      icon: Leaf,
      link: '/materials/kraft-duplex'
    },
    {
      id: 'clear-high',
      key: 'clearHigh',
      price: '$$$',
      color: 'bg-blue-100',
      icon: Eye,
      link: '/materials'
    },
    {
      id: 'clear-medium',
      key: 'clearMedium',
      price: '$$',
      color: 'bg-blue-50',
      icon: Eye,
      link: '/materials'
    },
    {
      id: 'matte-white',
      key: 'matteWhite',
      price: '$$',
      color: 'bg-gray-100',
      icon: Sparkles,
      link: '/materials'
    },
    {
      id: 'black-matte',
      key: 'blackMatte',
      price: '$$',
      color: 'bg-gray-900',
      icon: Sparkles,
      link: '/materials',
      textColor: 'text-white'
    }
  ]

  const QUICK_GUIDE_COLORS = ['bg-amber-100', 'bg-blue-100', 'bg-gray-100', 'bg-purple-100']

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchMaterialCatalogPage.meta.title')}</title>
        <meta name="description" content={t('pouchMaterialCatalogPage.meta.description')} />
        <link rel="canonical" href="https://pouch.eco/materials/catalog" />
        <meta property="og:title" content={t('pouchMaterialCatalogPage.meta.ogTitle')} />
        <meta property="og:description" content={t('pouchMaterialCatalogPage.meta.ogDescription')} />
        <meta property="og:url" content="https://pouch.eco/materials/catalog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchMaterialCatalogPage.meta.twitterTitle')} />
        <meta name="twitter:description" content={t('pouchMaterialCatalogPage.meta.twitterDescription')} />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">{t('pouchMaterialCatalogPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchMaterialCatalogPage.hero.title')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">{t('pouchMaterialCatalogPage.hero.titleHighlight')}</span>
          </h1>

          <p className="text-2xl text-gray-700 mb-8 max-w-4xl">
            <strong>{t('pouchMaterialCatalogPage.hero.description')}</strong> {t('pouchMaterialCatalogPage.hero.descriptionSub')}
          </p>

          <div className="flex gap-4 flex-wrap">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchMaterialCatalogPage.hero.ctaExpert')}
            </NeoButton>
            <NeoButton variant="secondary">{t('pouchMaterialCatalogPage.hero.ctaSamples')}</NeoButton>
          </div>
        </div>
      </section>

      {/* Quick Decision Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchMaterialCatalogPage.quickGuide.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {QUICK_GUIDE_COLORS.map((color, idx) => (
              <NeoCard key={idx} color={color}>
                <h3 className="font-black text-xl mb-2">{t(`pouchMaterialCatalogPage.quickGuide.items.${idx}.question`)}</h3>
                <p className="text-gray-700 text-lg">→ <strong>{t(`pouchMaterialCatalogPage.quickGuide.items.${idx}.answer`)}</strong></p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Material Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchMaterialCatalogPage.materials.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATERIALS.map((material) => (
              <NeoCard key={material.id} color={material.color} className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <material.icon className={`w-10 h-10 ${material.textColor || 'text-gray-800'}`} />
                  <div className="flex flex-col items-end gap-2">
                    <NeoBadge color={
                      t(`pouchMaterialCatalogPage.materials.items.${material.key}.barrier`) === 'High' || t(`pouchMaterialCatalogPage.materials.items.${material.key}.barrier`) === 'Haute' || t(`pouchMaterialCatalogPage.materials.items.${material.key}.barrier`) === 'Alta' || t(`pouchMaterialCatalogPage.materials.items.${material.key}.barrier`) === '高' ? 'bg-purple-300' :
                      'bg-blue-300'
                    }>
                      {t(`pouchMaterialCatalogPage.materials.items.${material.key}.barrier`)} {t('pouchMaterialCatalogPage.materials.barrierLabel')}
                    </NeoBadge>
                    <span className="font-mono font-black text-lg">{material.price}</span>
                  </div>
                </div>

                <h3 className={`font-black text-2xl mb-2 ${material.textColor || 'text-gray-800'}`}>
                  {t(`pouchMaterialCatalogPage.materials.items.${material.key}.name`)}
                </h3>
                <p className={`text-sm mb-4 ${material.textColor || 'text-gray-600'}`}>
                  {t(`pouchMaterialCatalogPage.materials.items.${material.key}.tagline`)}
                </p>

                <div className={`bg-white border-2 border-black p-3 mb-4 ${material.textColor ? 'bg-opacity-90' : ''}`}>
                  <p className="font-bold text-sm">{t('pouchMaterialCatalogPage.materials.shelfLifeLabel')} {t(`pouchMaterialCatalogPage.materials.items.${material.key}.shelf`)}</p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className={`font-bold text-sm mb-2 ${material.textColor || 'text-gray-800'}`}>
                    {t('pouchMaterialCatalogPage.materials.featuresLabel')}
                  </p>
                  <ul className="space-y-1">
                    {[0, 1, 2, 3].map((idx) => (
                      <li key={idx} className={`text-sm flex items-start gap-1 ${material.textColor || 'text-gray-700'}`}>
                        <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                        <span>{t(`pouchMaterialCatalogPage.materials.items.${material.key}.features.${idx}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className={`font-bold text-sm mb-2 ${material.textColor || 'text-gray-800'}`}>
                    {t('pouchMaterialCatalogPage.materials.bestForLabel')}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {[0, 1, 2, 3].map((idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 border ${material.textColor ? 'border-white text-white' : 'border-black'}`}>
                        {t(`pouchMaterialCatalogPage.materials.items.${material.key}.bestFor.${idx}`)}
                      </span>
                    ))}
                  </div>
                </div>

                <NeoButton 
                  to={material.link} 
                  variant={material.textColor ? 'secondary' : 'primary'}
                  className="!w-full !justify-between !py-2 !text-sm"
                >
                  {t('pouchMaterialCatalogPage.materials.learnMore')}
                  <ArrowRight className="w-4 h-4" />
                </NeoButton>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchMaterialCatalogPage.comparison.title')}</h2>
          
          <NeoCard className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left p-3 font-black">{t('pouchMaterialCatalogPage.comparison.colMaterial')}</th>
                  <th className="text-center p-3 font-black">{t('pouchMaterialCatalogPage.comparison.colBarrier')}</th>
                  <th className="text-center p-3 font-black">{t('pouchMaterialCatalogPage.comparison.colShelfLife')}</th>
                  <th className="text-center p-3 font-black">{t('pouchMaterialCatalogPage.comparison.colLook')}</th>
                  <th className="text-center p-3 font-black">{t('pouchMaterialCatalogPage.comparison.colPrice')}</th>
                </tr>
              </thead>
              <tbody>
                {MATERIALS.map((material, idx) => (
                  <tr key={material.id} className={idx !== MATERIALS.length - 1 ? 'border-b border-black' : ''}>
                    <td className="p-3 font-bold">{t(`pouchMaterialCatalogPage.materials.items.${material.key}.name`)}</td>
                    <td className="p-3 text-center">{t(`pouchMaterialCatalogPage.materials.items.${material.key}.barrier`)}</td>
                    <td className="p-3 text-center">{t(`pouchMaterialCatalogPage.materials.items.${material.key}.shelf`)}</td>
                    <td className="p-3 text-center text-xs">{t(`pouchMaterialCatalogPage.materials.items.${material.key}.tagline`).split(',')[0]}</td>
                    <td className="p-3 text-center font-mono">{material.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </NeoCard>
        </div>
      </section>

      {/* Still Not Sure? */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <h2 className="font-black text-3xl mb-4">{t('pouchMaterialCatalogPage.stillNotSure.title')}</h2>
            <p className="text-xl text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: t('pouchMaterialCatalogPage.stillNotSure.description') }} />
            <div className="bg-gray-50 border-2 border-black p-4 mb-6 text-left max-w-md mx-auto">
              <h4 className="font-bold mb-2">{t('pouchMaterialCatalogPage.stillNotSure.sampleKitTitle')}</h4>
              <ul className="text-sm space-y-1">
                <li>✓ {t('pouchMaterialCatalogPage.stillNotSure.sampleItems.0')}</li>
                <li>✓ {t('pouchMaterialCatalogPage.stillNotSure.sampleItems.1')}</li>
                <li>✓ {t('pouchMaterialCatalogPage.stillNotSure.sampleItems.2')}</li>
                <li>✓ {t('pouchMaterialCatalogPage.stillNotSure.sampleItems.3')}</li>
              </ul>
            </div>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchMaterialCatalogPage.stillNotSure.ctaRequestSamples')}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl mb-6 uppercase">
            {t('pouchMaterialCatalogPage.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            {t('pouchMaterialCatalogPage.cta.description')}
          </p>
          <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
            {t('pouchMaterialCatalogPage.cta.button')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}
