import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Droplet, Sun, Contrast } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export default function PouchWhiteInkUnderprintPage() {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchWhiteInkUnderprint';

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/white-ink-underprint" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.tag`)}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.title`)} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.subtitle`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                   <div className="w-full h-full border-4 border-black relative bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
                      {/* Simulated metallic bag */}
                      <div className="absolute top-1/4 left-1/4 right-1/4 text-center">
                         <h3 className="font-black text-4xl text-red-500 mix-blend-multiply opacity-80">{t(`${p}.hero.card.noWhiteInk`)}</h3>
                      </div>
                      <div className="absolute bottom-1/4 left-1/4 right-1/4 text-center bg-white border-2 border-black p-2">
                         <h3 className="font-black text-4xl text-red-500">{t(`${p}.hero.card.withWhiteInk`)}</h3>
                      </div>
                   </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                    {t(`${p}.hero.card.opacityControl`)}
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
            {t(`${p}.content.title`)} <span className="text-blue-500">{t(`${p}.content.titleHighlight`)}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.content.intro1`)}<strong>{t(`${p}.content.intro2`)}</strong>{t(`${p}.content.intro3`)}
            </p>

            <img 
              src="/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp" 
              alt={t(`${p}.content.imageAlt`)} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.ruleOfTransparency.title`)}</h3>
            <p>
              {t(`${p}.content.ruleOfTransparency.p1`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.howWhiteInkFixesThis.title`)}</h3>
            <p>
              {t(`${p}.content.howWhiteInkFixesThis.p1`)}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">{t(`${p}.content.howWhiteInkFixesThis.withWhiteTitle`)}</h4>
                  <p className="text-sm">{t(`${p}.content.howWhiteInkFixesThis.withWhiteDesc`)}</p>
               </div>
               <div className="bg-gray-200 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2 text-black">{t(`${p}.content.howWhiteInkFixesThis.withoutWhiteTitle`)}</h4>
                  <p className="text-sm">{t(`${p}.content.howWhiteInkFixesThis.withoutWhiteDesc`)}</p>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.usingWhiteInkCreatively.title`)}</h3>
            <p>
              {t(`${p}.content.usingWhiteInkCreatively.p1`)}
            </p>
            <p>
              {t(`${p}.content.usingWhiteInkCreatively.p2`)}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.content.howToSetUp.title`)}</h3>
            <p>
              {t(`${p}.content.howToSetUp.p1`)}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.title`)} <span className="text-blue-500">{t(`${p}.faq.titleHighlight`)}</span>
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
                  <span className="text-blue-500 flex-shrink-0">Q:</span>
                  {t(`${p}.faq.items.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-blue-500">A:</span> {t(`${p}.faq.items.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
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
