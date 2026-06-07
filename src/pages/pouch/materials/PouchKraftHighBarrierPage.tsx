import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, Package, ArrowRight, CheckCircle, Award, BarChart3, Droplets, Sun, Wind } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchKraftHighBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchKraftHighBarrier'

  const baseUrl = getBaseUrl()
  
  const BARRIER_LEVELS = [
    { name: t(`${p}.levels.level1.name`), barrier: t(`${p}.levels.level1.barrier`), use: t(`${p}.levels.level1.use`), shelf: t(`${p}.levels.level1.shelf`) },
    { name: t(`${p}.levels.level2.name`), barrier: t(`${p}.levels.level2.barrier`), use: t(`${p}.levels.level2.use`), shelf: t(`${p}.levels.level2.shelf`) },
    { name: t(`${p}.levels.level3.name`), barrier: t(`${p}.levels.level3.barrier`), use: t(`${p}.levels.level3.use`), shelf: t(`${p}.levels.level3.shelf`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDescription`)} />
        <link rel="canonical" href={`${baseUrl}/materials/kraft-high-barrier`} />
        <meta name="keywords" content={t(`${p}.metaKeywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#451a03_1px,transparent_1px)] [background-size:24px_24px] bg-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="yellow">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-black">
            {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitle3`)}
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.heroSubtitle`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/quotes/flat-bottom">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Technical Breakdown Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#451a03] translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/barrier/ads/a_kraft_high_max_4456348.webp" 
                alt={t(`${p}.heroImageAlt`, { defaultValue: "Kraft High Barrier Structure" })} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.techBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight">
                {t(`${p}.techTitle1`)}<br/>{t(`${p}.techTitle2`)}<br/>{t(`${p}.techTitle3`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.techDescription`)}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-[#451a03] p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">1</div>
                  <span className="font-black uppercase text-sm">{t(`${p}.layer1`)}</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-blue-600 p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">2</div>
                  <span className="font-black uppercase text-sm">{t(`${p}.layer2`)}</span>
                </div>
                <div className="flex items-center gap-4 bg-[#FDE68A]/20 border-l-8 border-green-600 p-4">
                  <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-black">3</div>
                  <span className="font-black uppercase text-sm">{t(`${p}.layer3`)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barrier Level Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00] italic">{t(`${p}.matrixTitle`)}</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70">{t(`${p}.matrixSubtitle`)}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BARRIER_LEVELS.map((level, i) => (
              <div key={i} className="border-4 border-white p-8 hover:border-[#D4FF00] group transition-all">
                <h4 className="font-black text-2xl uppercase mb-2 group-hover:text-[#D4FF00]">{level.name}</h4>
                <div className="text-sm font-bold uppercase mb-6 opacity-60">{t(`${p}.matrixLabelBarrier`, { defaultValue: "Barrier" })}: {level.barrier}</div>
                <div className="space-y-4 font-['JetBrains_Mono'] text-sm">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>{t(`${p}.matrixLabelApplication`)}</span>
                    <span className="font-bold">{level.use}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>{t(`${p}.matrixLabelShelfLife`)}</span>
                    <span className="font-bold text-[#D4FF00]">{level.shelf}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Component Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <NeoCard>
            <Sun className="w-12 h-12 mb-6 text-orange-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.uvTitle`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.uvDesc`)}</p>
          </NeoCard>
          <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(69,26,3,1)]">
            <Droplets className="w-12 h-12 mb-6 text-blue-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.moistureTitle`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.moistureDesc`)}</p>
          </NeoCard>
          <NeoCard>
            <Wind className="w-12 h-12 mb-6 text-cyan-600" />
            <h4 className="font-black text-xl mb-4 uppercase">{t(`${p}.aromaTitle`)}</h4>
            <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t(`${p}.aromaDesc`)}</p>
          </NeoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#451a03] text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="yellow">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchKraftHighBarrierPage
