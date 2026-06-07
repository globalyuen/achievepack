import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { Factory, Shield, Zap, CheckCircle, Award, BarChart3, Thermometer, Box, Truck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchIndustrialCompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchIndustrialCompostable'

  const baseUrl = getBaseUrl()
  
  const INDUSTRIAL_CAPABILITIES = [
    { label: t(`${p}.capabilities.shelfStability.label`), value: t(`${p}.capabilities.shelfStability.value`), desc: t(`${p}.capabilities.shelfStability.desc`) },
    { label: t(`${p}.capabilities.heatResistance.label`), value: t(`${p}.capabilities.heatResistance.value`), desc: t(`${p}.capabilities.heatResistance.desc`) },
    { label: t(`${p}.capabilities.printingClarity.label`), value: t(`${p}.capabilities.printingClarity.value`), desc: t(`${p}.capabilities.printingClarity.desc`) },
    { label: t(`${p}.capabilities.globalCompliance.label`), value: t(`${p}.capabilities.globalCompliance.value`), desc: t(`${p}.capabilities.globalCompliance.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/materials/industrial-compostable`} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">{t(`${p}.heroBadge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-9xl leading-none uppercase text-[#D4FF00]">{t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/>{t(`${p}.heroTitleHighlight`)}</h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-white max-w-3xl mx-auto border-4 border-[#D4FF00] p-6 shadow-[12px_12px_0px_0px_rgba(212,255,0,1)]">
            {t(`${p}.heroDescription`)}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary" to="/sample" className="!bg-[#D4FF00] !text-black">{t(`${p}.heroCta1`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-[#D4FF00] !text-[#D4FF00]" to="/products">{t(`${p}.heroCta2`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Grid of Industrial Stats */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INDUSTRIAL_CAPABILITIES.map((cap, i) => (
              <NeoCard key={i} className="hover:-translate-y-2 transition-transform">
                <h3 className="font-black text-xl uppercase mb-1">{cap.label}</h3>
                <div className="text-3xl font-black text-green-600 mb-4 italic">{cap.value}</div>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{cap.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Context */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/4-infograhic/compost.webp" 
                alt={t(`${p}.lifecycleImageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.lifecycleBadge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-6 leading-tight italic">{t(`${p}.lifecycleTitle1`)}<br/>{t(`${p}.lifecycleTitle2`)}<br/>{t(`${p}.lifecycleTitleHighlight`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.lifecycleDescription`)}
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border-4 border-black p-4">
                  <Factory className="text-green-600 w-6 h-6 mb-2" />
                  <h4 className="font-black uppercase text-xs">{t(`${p}.facilityTitle`)}</h4>
                  <p className="text-[10px] font-bold">{t(`${p}.facilityDesc`)}</p>
                </div>
                <div className="bg-white border-4 border-black p-4">
                  <Thermometer className="text-orange-500 w-6 h-6 mb-2" />
                  <h4 className="font-black uppercase text-xs">{t(`${p}.fillTitle`)}</h4>
                  <p className="text-[10px] font-bold">{t(`${p}.fillDesc`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Certifications */}
      <section className="py-24 bg-black text-white border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-black text-5xl md:text-7xl uppercase text-[#D4FF00]">{t(`${p}.certTitle`)}</h2>
            <p className="font-['JetBrains_Mono'] text-xl mt-4 opacity-70 italic text-white">{t(`${p}.certSubtitle`)}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">{t(`${p}.cert1Title`)}</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">{t(`${p}.cert1Desc`)}</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">{t(`${p}.cert2Title`)}</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">{t(`${p}.cert2Desc`)}</p>
            </div>
            <div className="border-4 border-white p-8 text-center hover:bg-[#D4FF00] hover:text-black transition-colors">
              <h4 className="font-black uppercase text-3xl">{t(`${p}.cert3Title`)}</h4>
              <p className="text-xs mt-4 font-bold uppercase italic">{t(`${p}.cert3Desc`)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] text-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <NeoBadge color="magenta">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none">{t(`${p}.ctaTitle1`)}<br/>{t(`${p}.ctaTitle2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.ctaDescription`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="dark" to="/sample">{t(`${p}.ctaButton1`)}</NeoButton>
            <NeoButton variant="secondary" className="!bg-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.ctaButton2`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchIndustrialCompostablePage
