import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, BookOpen, AlertCircle, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

export default function PouchUSALabelingGuidePage() {
  const { t } = useTranslation()
  const title = t('pouchUSALabelingGuidePage.title')
  const description = t('pouchUSALabelingGuidePage.description')

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/labeling-guide" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t('pouchUSALabelingGuidePage.marketHub')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {t('pouchUSALabelingGuidePage.heroTitleStart')}<br/>
                <span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchUSALabelingGuidePage.heroTitleSpan')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t('pouchUSALabelingGuidePage.heroDesc')}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                  <div className="border-4 border-black p-4 bg-white w-full h-full flex flex-col justify-between">
                     <div className="border-b-4 border-black pb-2 mb-2">
                        <h3 className="font-black text-3xl">{t('pouchUSALabelingGuidePage.cardTitle')}</h3>
                        <p className="font-['JetBrains_Mono'] text-sm">{t('pouchUSALabelingGuidePage.cardServings')}</p>
                     </div>
                     <div className="space-y-2 flex-grow">
                        <div className="flex justify-between border-b-2 border-gray-300 pb-1">
                           <span className="font-bold">{t('pouchUSALabelingGuidePage.cardCalories')}</span><span className="font-black text-xl">{t('pouchUSALabelingGuidePage.cardCaloriesVal')}</span>
                        </div>
                        <div className="w-full h-24 bg-gray-200 mt-4 flex items-center justify-center">
                           <span className="font-['JetBrains_Mono']">{t('pouchUSALabelingGuidePage.cardBarcodeArea')}</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {t('pouchUSALabelingGuidePage.cardBadge')}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('pouchUSALabelingGuidePage.sectionHeadingStart')}<span className="text-blue-500">{t('pouchUSALabelingGuidePage.sectionHeadingSpan')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchUSALabelingGuidePage.para1')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading1')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para2')}
            </p>
            <p>
              {t('pouchUSALabelingGuidePage.para3')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading2')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para4')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading3')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para5')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading4')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para6')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchUSALabelingGuidePage.faqHeadingStart')}<span className="text-blue-500">{t('pouchUSALabelingGuidePage.faqHeadingSpan')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('pouchUSALabelingGuidePage.faqQ1'),
                a: t('pouchUSALabelingGuidePage.faqA1')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ2'),
                a: t('pouchUSALabelingGuidePage.faqA2')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ3'),
                a: t('pouchUSALabelingGuidePage.faqA3')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ4'),
                a: t('pouchUSALabelingGuidePage.faqA4')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ5'),
                a: t('pouchUSALabelingGuidePage.faqA5')
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-blue-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-blue-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] text-black border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t('pouchUSALabelingGuidePage.ctaHeading')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('pouchUSALabelingGuidePage.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-black !text-white w-full sm:w-auto text-xl py-4">
              {t('pouchUSALabelingGuidePage.ctaBtn')} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
