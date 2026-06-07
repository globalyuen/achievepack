import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets, Recycle, AlertTriangle, Sparkles, Globe, Target } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'

export default function PouchPlasticFreeKraftPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchPlasticFreeKraft'

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/materials/plastic-free-kraft" />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(212,255,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroBadge`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-black">
                {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroDescription`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroCta1`)}</NeoButton>
                <NeoButton variant="secondary">{t(`${p}.heroCta2`)}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-amber-100 relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" 
                    alt={t(`${p}.heroImageAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-red-600">
                    {t(`${p}.heroBadge2`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none text-black">{t(`${p}.realityTitle1`)}<br/>{t(`${p}.realityTitle2`)}</h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-['JetBrains_Mono'] text-lg leading-relaxed text-black">
                {t(`${p}.realityDesc`)}
              </p>
              <div className="mt-4 flex items-center gap-2 text-red-600 font-black uppercase">
                <AlertTriangle className="w-6 h-6" />
                <span>{t(`${p}.greenwashingBadge`)}</span>
              </div>
            </div>
          </div>
          
          <NeoCard color="bg-black" className="text-white">
            <h3 className="font-black text-3xl uppercase mb-8 text-[#D4FF00]">{t(`${p}.factsTitle`)}</h3>
            <div className="space-y-6">
              {[
                { title: t(`${p}.facts.fact1.title`), desc: t(`${p}.facts.fact1.desc`) },
                { title: t(`${p}.facts.fact2.title`), desc: t(`${p}.facts.fact2.desc`) },
                { title: t(`${p}.facts.fact3.title`), desc: t(`${p}.facts.fact3.desc`) },
                { title: t(`${p}.facts.fact4.title`), desc: t(`${p}.facts.fact4.desc`) },
                { title: t(`${p}.facts.fact5.title`), desc: t(`${p}.facts.fact5.desc`) }
              ].map((fact, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l-2 border-[#D4FF00] pl-4">
                  <div>
                    <h4 className="font-black uppercase text-lg text-[#D4FF00]">{fact.title}</h4>
                    <p className="text-sm opacity-80 font-['JetBrains_Mono']">{fact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </NeoCard>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#D4FF00] border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-black">
          <h2 className="font-black text-5xl md:text-6xl uppercase mb-12 text-center">{t(`${p}.tableTitle`)}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black font-['JetBrains_Mono'] font-bold">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left uppercase">{t(`${p}.thType`)}</th>
                  <th className="p-4 text-center uppercase">{t(`${p}.thLining`)}</th>
                  <th className="p-4 text-center uppercase">{t(`${p}.thPlasticFree`)}</th>
                  <th className="p-4 text-center uppercase">{t(`${p}.thCompostable`)}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b-2 border-black">
                  <td className="p-4 uppercase">{t(`${p}.row1.type`)}</td>
                  <td className="p-4 text-center uppercase">{t(`${p}.row1.lining`)}</td>
                  <td className="p-4 text-center text-red-600">{t(`${p}.row1.plasticFree`)}</td>
                  <td className="p-4 text-center">{t(`${p}.row1.compostable`)}</td>
                </tr>
                <tr className="border-b-2 border-black bg-neutral-100">
                  <td className="p-4 uppercase">{t(`${p}.row2.type`)}</td>
                  <td className="p-4 text-center uppercase">{t(`${p}.row2.lining`)}</td>
                  <td className="p-4 text-center text-amber-600">{t(`${p}.row2.plasticFree`)}</td>
                  <td className="p-4 text-center">{t(`${p}.row2.compostable`)}</td>
                </tr>
                <tr>
                  <td className="p-4 uppercase">{t(`${p}.row3.type`)}</td>
                  <td className="p-4 text-center uppercase">{t(`${p}.row3.lining`)}</td>
                  <td className="p-4 text-center text-green-600">{t(`${p}.row3.compostable`)}</td>
                  <td className="p-4 text-center text-green-600">{t(`${p}.row3.compostable`)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AIEO Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-black">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <NeoCard color="bg-white" className="border-dashed">
            <h3 className="font-black text-3xl uppercase mb-6 flex items-center gap-2">
              <Zap className="text-[#D4FF00] fill-black" />
              {t(`${p}.aiBadge`)}
            </h3>
            <p className="font-['JetBrains_Mono'] font-bold mb-4">{t(`${p}.aiIntro`)}</p>
            <div className="space-y-4">
              {(t(`${p}.aiQueries`, { returnObjects: true }) as string[]).map((query, idx) => (
                <div key={idx} className="bg-neutral-100 border-2 border-black p-3 text-sm italic font-['JetBrains_Mono']">
                   "{query}"
                </div>
              ))}
            </div>
          </NeoCard>
          <div className="space-y-6">
            <h2 className="font-black text-5xl md:text-6xl uppercase leading-none">{t(`${p}.futureTitle1`)}<br/>{t(`${p}.futureTitle2`)}</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-600">
              {t(`${p}.futureDesc`)}
            </p>
            <div className="flex gap-4">
               <NeoBadge color="bg-black text-white">{t(`${p}.futureBadge1`)}</NeoBadge>
               <NeoBadge color="bg-[#D4FF00] text-black">{t(`${p}.futureBadge2`)}</NeoBadge>
               <NeoBadge color="bg-[#10b981] text-white">{t(`${p}.futureBadge3`)}</NeoBadge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t-4 border-black text-[#D4FF00]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtn1`)}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t(`${p}.ctaBtn2`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
