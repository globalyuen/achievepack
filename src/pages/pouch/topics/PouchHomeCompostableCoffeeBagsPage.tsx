import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Leaf, Coffee, CheckCircle, Award, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchHomeCompostableCoffeeBagsPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'pouchHomeCompostableCoffeeBagsPage'
  const baseUrl = getBaseUrl()
  
  const COFFEE_METRICS = [
    { label: t(`${p}.metrics.aroma.label`), value: t(`${p}.metrics.aroma.value`), unit: t(`${p}.metrics.aroma.unit`), desc: t(`${p}.metrics.aroma.desc`) },
    { label: t(`${p}.metrics.valve.label`), value: t(`${p}.metrics.valve.value`), unit: t(`${p}.metrics.valve.unit`), desc: t(`${p}.metrics.valve.desc`) },
    { label: t(`${p}.metrics.compost.label`), value: t(`${p}.metrics.compost.value`), unit: t(`${p}.metrics.compost.unit`), desc: t(`${p}.metrics.compost.desc`) },
    { label: t(`${p}.metrics.cert.label`), value: t(`${p}.metrics.cert.value`), unit: t(`${p}.metrics.cert.unit`), desc: t(`${p}.metrics.cert.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/home-compostable-coffee-bags`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:24px_24px] bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase italic">
            {t(`${p}.hero.titlePart1`)}<br/>
            {t(`${p}.hero.titlePart2`)}<br/>
            <span className="text-amber-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.subtitle`)}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
            <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Engineering: The Degassing Valve */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
                alt={t(`${p}.science.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.engineering.titlePart1`)}<br/>
                {t(`${p}.engineering.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.description`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {COFFEE_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-amber-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: High-Barrier Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.titlePart1`)}<br/>
            {t(`${p}.tech.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item1Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freshness & Logistics */}
      <section className="py-24 bg-amber-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">{t(`${p}.science.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.science.titlePart1`)}<br/>
            {t(`${p}.science.titlePart2`)}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <Wind className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.science.item1Title`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">{t(`${p}.science.item1Desc`)}</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
              <Coffee className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.science.item2Title`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">{t(`${p}.science.item2Desc`)}</p>
            </NeoCard>
            <NeoCard>
              <BarChart3 className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.science.item3Title`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">{t(`${p}.science.item3Desc`)}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* FAQ: Technical Roasting */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}<br/>
            {t(`${p}.faq.titlePart2`)}
          </h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.q1.q`), a: t(`${p}.faq.q1.a`) },
              { q: t(`${p}.faq.q2.q`), a: t(`${p}.faq.q2.a`) },
              { q: t(`${p}.faq.q3.q`), a: t(`${p}.faq.q3.a`) },
              { q: t(`${p}.faq.q4.q`), a: t(`${p}.faq.q4.a`) }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t(`${p}.cta.titlePart1`)}<br/>
            {t(`${p}.cta.titlePart2`)}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-amber-900">{t(`${p}.cta.btnReview`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostableCoffeeBagsPage
