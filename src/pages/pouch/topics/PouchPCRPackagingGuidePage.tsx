import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'
import { useTranslation } from 'react-i18next'

const PouchPCRPackagingGuidePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchPCRPackagingGuide'
  const baseUrl = getBaseUrl()
  
  const PCR_METRICS = [
    { label: t(`${p}.metrics.0.label`), value: t(`${p}.metrics.0.value`), unit: t(`${p}.metrics.0.unit`), desc: t(`${p}.metrics.0.desc`) },
    { label: t(`${p}.metrics.1.label`), value: t(`${p}.metrics.1.value`), unit: t(`${p}.metrics.1.unit`), desc: t(`${p}.metrics.1.desc`) },
    { label: t(`${p}.metrics.2.label`), value: t(`${p}.metrics.2.value`), unit: t(`${p}.metrics.2.unit`), desc: t(`${p}.metrics.2.desc`) },
    { label: t(`${p}.metrics.3.label`), value: t(`${p}.metrics.3.value`), unit: t(`${p}.metrics.3.unit`), desc: t(`${p}.metrics.3.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/pcr-packaging`} />
        <meta name="keywords" content="PCR packaging, post-consumer recycled, GRS certified, recycled plastic, circular economy" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">{t(`${p}.hero.titleLine1`)}<br/>{t(`${p}.hero.titleLine2`)}<br/><span className="text-black drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titleLine3`)}</span></h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subtitle`)}<strong>{t(`${p}.hero.subtitleBold`)}</strong>{t(`${p}.hero.subtitleEnd`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/pcr-recycling-hero.png" 
                alt={t(`${p}.hero.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The PCR Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_pouch_sizing_guide_card_v3_5278730.webp" 
                alt={t(`${p}.engineering.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.engineering.titleLine1`)}<br/>{t(`${p}.engineering.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.desc1`)}<strong>{t(`${p}.engineering.bold1`)}</strong>{t(`${p}.engineering.desc2`)}<strong>{t(`${p}.engineering.bold2`)}</strong>{t(`${p}.engineering.desc3`)}<strong>{t(`${p}.engineering.bold3`)}</strong>{t(`${p}.engineering.desc4`)}<strong>{t(`${p}.engineering.bold4`)}</strong>{t(`${p}.engineering.desc5`)}<strong>{t(`${p}.engineering.bold5`)}</strong>{t(`${p}.engineering.desc6`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PCR_METRICS.map((pm, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{pm.label}</h4>
                    <p className="text-xl font-black">{pm.value} <span className="text-[10px] opacity-60 font-normal">{pm.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{pm.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The PCR Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.techStack.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">{t(`${p}.techStack.titleLine1`)}<br/>{t(`${p}.techStack.titleLine2`)}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="border-l-4 border-[#D4FF00] pl-8 py-4">
                <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.techStack.items.${idx}.title`)}</h3>
                <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                  {t(`${p}.techStack.items.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t(`${p}.lab.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">{t(`${p}.lab.titleLine1`)}<br/>{t(`${p}.lab.titleLine2`)}</h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.lab.desc1`)}<strong>{t(`${p}.lab.bold1`)}</strong>{t(`${p}.lab.desc2`)}<strong>{t(`${p}.lab.bold2`)}</strong>{t(`${p}.lab.desc3`)}<strong>{t(`${p}.lab.bold3`)}</strong>{t(`${p}.lab.desc4`)}<strong>{t(`${p}.lab.bold4`)}</strong>{t(`${p}.lab.desc5`)}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.lab.purity.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.lab.purity.desc`)}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t(`${p}.lab.carbon.title`)}</h4>
                    <p className="text-sm opacity-60">{t(`${p}.lab.carbon.desc`)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" 
                alt={t(`${p}.lab.imgAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: PCR Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t(`${p}.faq.titleLine1`)}<br/>{t(`${p}.faq.titleLine2`)}</h2>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((idx) => (
              <div key={idx} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {t(`${p}.faq.items.${idx}.q`)}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{t(`${p}.faq.items.${idx}.a`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">{t(`${p}.cta.titleLine1`)}<br/>{t(`${p}.cta.titleLine2`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.desc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t(`${p}.cta.btnOrder`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnSpeak`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPackagingGuidePage
