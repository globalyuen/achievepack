import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, XCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation, Trans } from 'react-i18next'

export default function PouchKSealStandUpPouchesPage() {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchKSealStandUpPouches';

  const title = t(`${p}.title`);
  const description = t(`${p}.description`);

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/k-seal-stand-up-pouches" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#10b981]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.badge`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.headlinePrefix`)} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.headlineSuffix`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t(`${p}.hero.subheading`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                   <img 
                    src="/imgs/pouch-shape/k-seal/a_achievepack_detail_08_flat_lay_seal_2058466.webp" 
                    alt={t(`${p}.hero.imgAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    {t(`${p}.hero.imgBadge`)}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.engineering.titlePrefix`)} <span className="text-[#10b981]">{t(`${p}.engineering.titleSuffix`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              <Trans i18nKey={`${p}.engineering.intro`} components={[<strong key="0" />]} />
            </p>

            <img 
              src="/imgs/pouch-shape/k-seal/a_kseal_gusset_grain_cereal_4708928.webp" 
              alt={t(`${p}.engineering.imgAlt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.engineering.sections.0.title`)}</h3>
            <p>
              {t(`${p}.engineering.sections.0.paragraphs.0`)}
            </p>
            <p>
              {t(`${p}.engineering.sections.0.paragraphs.1`)}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-emerald-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">{t(`${p}.engineering.prosCons.whenToUse.title`)}</h4>
                  <ul className="text-sm space-y-2">
                    {[0, 1, 2, 3].map((idx) => (
                      <li key={idx}>{t(`${p}.engineering.prosCons.whenToUse.list.${idx}`)}</li>
                    ))}
                  </ul>
               </div>
               <div className="bg-red-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">{t(`${p}.engineering.prosCons.whenNotToUse.title`)}</h4>
                  <ul className="text-sm space-y-2">
                    {[0, 1, 2].map((idx) => (
                      <li key={idx}>{t(`${p}.engineering.prosCons.whenNotToUse.list.${idx}`)}</li>
                    ))}
                  </ul>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.engineering.sections.1.title`)}</h3>
            <p>
              <Trans i18nKey={`${p}.engineering.sections.1.paragraphs.0`} components={[<strong key="0" />]} />
            </p>
            <p>
              {t(`${p}.engineering.sections.1.paragraphs.1`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.engineering.sections.2.title`)}</h3>
            <p>
              <Trans i18nKey={`${p}.engineering.sections.2.paragraphs.0`} components={[<strong key="0" />]} />
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titlePrefix`)} <span className="text-[#10b981]">{t(`${p}.faq.titleSuffix`)}</span>
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">{t(`${p}.faq.qPrefix`)}</span>
                  {t(`${p}.faq.questions.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">{t(`${p}.faq.aPrefix`)}</span> {t(`${p}.faq.questions.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t(`${p}.cta.button`)} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
