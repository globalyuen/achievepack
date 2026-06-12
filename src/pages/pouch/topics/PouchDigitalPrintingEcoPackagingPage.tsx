import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Palette, TrendingUp } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchDigitalPrintingEcoPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()
  const { t } = useTranslation()
  
  const PRINT_METRICS = [
    { label: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m1.label'), value: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m1.value'), unit: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m1.unit'), desc: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m1.desc') },
    { label: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m2.label'), value: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m2.value'), unit: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m2.unit'), desc: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m2.desc') },
    { label: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m3.label'), value: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m3.value'), unit: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m3.unit'), desc: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m3.desc') },
    { label: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m4.label'), value: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m4.value'), unit: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m4.unit'), desc: t('pouchDigitalPrintingEcoPackagingPage.engineering.metrics.m4.desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchDigitalPrintingEcoPackagingPage.meta.title')}</title>
        <meta name="description" content={t('pouchDigitalPrintingEcoPackagingPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/digital-printing`} />
        <meta name="keywords" content={t('pouchDigitalPrintingEcoPackagingPage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#083344_1px,transparent_1px)] [background-size:24px_24px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t('pouchDigitalPrintingEcoPackagingPage.hero.badge')}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic" dangerouslySetInnerHTML={{ __html: t('pouchDigitalPrintingEcoPackagingPage.hero.title') }} />
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchDigitalPrintingEcoPackagingPage.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t('pouchDigitalPrintingEcoPackagingPage.hero.browse')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('pouchDigitalPrintingEcoPackagingPage.hero.order')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_printing_types_card_v2_6243973.webp" 
                alt={t('pouchDigitalPrintingEcoPackagingPage.hero.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Digital Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/digital-printing-press-hero.png" 
                alt={t('pouchDigitalPrintingEcoPackagingPage.engineering.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchDigitalPrintingEcoPackagingPage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchDigitalPrintingEcoPackagingPage.engineering.title') }} />
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchDigitalPrintingEcoPackagingPage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {PRINT_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-black">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: The Digital Tech Stack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchDigitalPrintingEcoPackagingPage.tech.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16" dangerouslySetInnerHTML={{ __html: t('pouchDigitalPrintingEcoPackagingPage.tech.title') }} />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchDigitalPrintingEcoPackagingPage.tech.t1.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchDigitalPrintingEcoPackagingPage.tech.t1.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchDigitalPrintingEcoPackagingPage.tech.t2.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchDigitalPrintingEcoPackagingPage.tech.t2.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchDigitalPrintingEcoPackagingPage.tech.t3.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchDigitalPrintingEcoPackagingPage.tech.t3.desc')}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchDigitalPrintingEcoPackagingPage.tech.t4.title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchDigitalPrintingEcoPackagingPage.tech.t4.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Verification Section */}
      <section className="py-24 bg-neutral-100 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchDigitalPrintingEcoPackagingPage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic" dangerouslySetInnerHTML={{ __html: t('pouchDigitalPrintingEcoPackagingPage.lab.title') }} />
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchDigitalPrintingEcoPackagingPage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Palette className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchDigitalPrintingEcoPackagingPage.lab.f1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchDigitalPrintingEcoPackagingPage.lab.f1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <TrendingUp className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchDigitalPrintingEcoPackagingPage.lab.f2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchDigitalPrintingEcoPackagingPage.lab.f2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/topics/digital-printing-press-hero.png" 
                alt={t('pouchDigitalPrintingEcoPackagingPage.lab.title').replace(/<br\s*\/?>/gi, ' ')} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Digital Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchDigitalPrintingEcoPackagingPage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12" dangerouslySetInnerHTML={{ __html: t('pouchDigitalPrintingEcoPackagingPage.faq.title') }} />
          <div className="space-y-4">
            {[
              { q: t('pouchDigitalPrintingEcoPackagingPage.faq.q1_q'), a: t('pouchDigitalPrintingEcoPackagingPage.faq.q1_a') },
              { q: t('pouchDigitalPrintingEcoPackagingPage.faq.q2_q'), a: t('pouchDigitalPrintingEcoPackagingPage.faq.q2_a') },
              { q: t('pouchDigitalPrintingEcoPackagingPage.faq.q3_q'), a: t('pouchDigitalPrintingEcoPackagingPage.faq.q3_a') },
              { q: t('pouchDigitalPrintingEcoPackagingPage.faq.q4_q'), a: t('pouchDigitalPrintingEcoPackagingPage.faq.q4_a') }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-700 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchDigitalPrintingEcoPackagingPage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic" dangerouslySetInnerHTML={{ __html: t('pouchDigitalPrintingEcoPackagingPage.cta.title') }} />
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchDigitalPrintingEcoPackagingPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-black">{t('pouchDigitalPrintingEcoPackagingPage.cta.samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchDigitalPrintingEcoPackagingPage.cta.engineer')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchDigitalPrintingEcoPackagingPage
