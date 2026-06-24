import React from 'react'
import { useTranslation } from 'react-i18next'
import { Ruler, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'

export default function PouchSizeGuidePage() {
  const { t } = useTranslation()

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchKnowledgeSizeGuidePage.meta.title')}
        description={t('pouchKnowledgeSizeGuidePage.meta.description')}
        keywords={t('pouchKnowledgeSizeGuidePage.meta.keywords', '').split(',').map(k => k.trim()).filter(Boolean)}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-cyan-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t('pouchKnowledgeSizeGuidePage.hero.badge')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t('pouchKnowledgeSizeGuidePage.hero.heading1')} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchKnowledgeSizeGuidePage.hero.heading2')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t('pouchKnowledgeSizeGuidePage.hero.description')}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                  <div className="relative w-3/4 h-3/4 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] font-bold flex items-center gap-2">
                        <span className="text-xs">&larr;</span> Width (W) <span className="text-xs">&rarr;</span>
                     </div>
                     <div className="absolute top-1/2 -left-20 -translate-y-1/2 -rotate-90 font-['JetBrains_Mono'] font-bold flex items-center gap-2 whitespace-nowrap">
                        <span className="text-xs">&larr;</span> Height (H) <span className="text-xs">&rarr;</span>
                     </div>
                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] font-bold flex items-center gap-2">
                        <span className="text-xs">&larr;</span> Gusset (G) <span className="text-xs">&rarr;</span>
                     </div>
                     <Ruler className="w-16 h-16 opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    DIMENSIONS
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('pouchKnowledgeSizeGuidePage.content.heading')}
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.p1')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.formulaHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.formulaP')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>{t('pouchKnowledgeSizeGuidePage.content.widthDesc')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.heightDesc')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.gussetDesc')}</li>
            </ul>

            <div className="bg-gray-100 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8">
               <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2">
                 {t('pouchKnowledgeSizeGuidePage.content.exampleHeading')}
               </h4>
               <p className="text-sm m-0">
                 {t('pouchKnowledgeSizeGuidePage.content.exampleDesc')}
               </p>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.densityHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.densityP1')}
            </p>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.densityP2')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.dimensionsHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.dimensionsP')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.coffeeHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.coffeeP')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>{t('pouchKnowledgeSizeGuidePage.content.size8oz')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.size12oz')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.size16oz')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.size2lb')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchKnowledgeSizeGuidePage.faq.heading')}
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3, 4].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-cyan-500 flex-shrink-0">Q:</span>
                  {t(`pouchKnowledgeSizeGuidePage.faq.items.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-cyan-500">A:</span> {t(`pouchKnowledgeSizeGuidePage.faq.items.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            {t('pouchKnowledgeSizeGuidePage.cta.heading')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t('pouchKnowledgeSizeGuidePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t('pouchKnowledgeSizeGuidePage.cta.btn')} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

