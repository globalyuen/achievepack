import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

export default function PouchFlatPouchesPage() {
  const { t } = useTranslation()
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t('pouchFlatPouchesPage.title')
  const description = t('pouchFlatPouchesPage.description')

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/packaging/flat-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t('pouchFlatPouchesPage.flatType')}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('pouchFlatPouchesPage.hero.part1')}<br/>
                {t('pouchFlatPouchesPage.hero.part2')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchFlatPouchesPage.hero.part3')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t('pouchFlatPouchesPage.hero.descLine1')}<br/>
                &gt; {t('pouchFlatPouchesPage.hero.descLine2')}<br/>
                &gt; {t('pouchFlatPouchesPage.hero.descLine3')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchFlatPouchesPage.hero.quoteSamples')}</NeoButton>
                <NeoButton variant="secondary">{t('pouchFlatPouchesPage.hero.materialGuide')}</NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]">
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/3-side-seal.glb"
                tilt={{x: 0, y: 0}}
                scrollPercent={0}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchFlatPouchesPage.benefits.sampleReady.title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchFlatPouchesPage.benefits.sampleReady.desc')}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t('pouchFlatPouchesPage.benefits.sampleReady.badge')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchFlatPouchesPage.benefits.barrierArmor.title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchFlatPouchesPage.benefits.barrierArmor.desc')}
            </p>
            <NeoBadge color="bg-[#FF00FF]">{t('pouchFlatPouchesPage.benefits.barrierArmor.badge')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Award className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchFlatPouchesPage.benefits.versatility.title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchFlatPouchesPage.benefits.versatility.desc')}
            </p>
            <NeoBadge color="bg-white">{t('pouchFlatPouchesPage.benefits.versatility.badge')}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t('pouchFlatPouchesPage.cta.heading')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            {t('pouchFlatPouchesPage.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchFlatPouchesPage.cta.startMySample')}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t('pouchFlatPouchesPage.cta.priceCalculator')}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
