import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Leaf, Shield, Zap, CheckCircle, Award, BarChart3, Thermometer, Clock, MessageCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchHomeCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchHomeCompostable'

  const baseUrl = getBaseUrl()
  
  const DECOMPOSITION_STAGES = [
    { day: t(`${p}.timelineStages.stage0.day`), status: t(`${p}.timelineStages.stage0.status`), desc: t(`${p}.timelineStages.stage0.desc`) },
    { day: t(`${p}.timelineStages.stage1.day`), status: t(`${p}.timelineStages.stage1.status`), desc: t(`${p}.timelineStages.stage1.desc`) },
    { day: t(`${p}.timelineStages.stage2.day`), status: t(`${p}.timelineStages.stage2.status`), desc: t(`${p}.timelineStages.stage2.desc`) },
    { day: t(`${p}.timelineStages.stage3.day`), status: t(`${p}.timelineStages.stage3.status`), desc: t(`${p}.timelineStages.stage3.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/home-compostable`} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#ff0080_1px,transparent_1px)] [background-size:24px_24px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="magenta">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.heroDescription`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/home-compost.webp" 
                alt={t(`${p}.comparisonImageAlt`)} 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.comparisonBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.comparisonTitle`)}<br/>{t(`${p}.comparisonTitleHighlight`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.comparisonDescription`)}
              </p>
              <div className="mt-8 bg-pink-100 border-4 border-black p-6">
                <h4 className="font-black uppercase mb-4 text-pink-600 italic">{t(`${p}.comparisonBoxTitle`)}</h4>
                <p className="text-sm font-bold text-gray-800 leading-relaxed">
                  {t(`${p}.comparisonBoxDesc`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown Timeline */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-16 text-pink-400">{t(`${p}.timelineTitle`)}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {DECOMPOSITION_STAGES.map((stage, i) => (
              <div key={i} className="border-4 border-white p-8 hover:bg-pink-600 transition-colors group">
                <div className="text-4xl font-black mb-2 font-['JetBrains_Mono']">{stage.day}</div>
                <h4 className="font-black uppercase text-xl mb-4 group-hover:text-black">{stage.status}</h4>
                <p className="text-xs font-['JetBrains_Mono'] opacity-70 group-hover:opacity-100 group-hover:text-black font-bold">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Trust */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <div className="text-4xl mb-6">🇦🇹</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card1Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card1Description`)}</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
            <div className="text-4xl mb-6">🇦🇺</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card2Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card2Description`)}</p>
          </NeoCard>
          <NeoCard>
            <div className="text-4xl mb-6">🇪🇺</div>
            <h4 className="font-black text-xl mb-4 uppercase text-pink-600">{t(`${p}.card3Title`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.card3Description`)}</p>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="lime">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchHomeCompostablePage
