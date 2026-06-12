import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { BarChart3, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Utensils } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchEcoFriendlyFoodPackagingPage: React.FC = () => {
  const { t } = useTranslation()
  const baseUrl = getBaseUrl()
  
  const FOOD_METRICS = [
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.o2_label'), value: '< 1.0', unit: 'cc/m²', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.o2_desc') },
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.moist_label'), value: '< 1.0', unit: 'g/m²', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.moist_desc') },
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.compliance_label'), value: 'FDA', unit: 'EFSA', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.compliance_desc') },
    { label: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.seal_label'), value: '±10°C', unit: 'Wide', desc: t('pouchEcoFriendlyFoodPackagingPage.engineering.metrics.seal_desc') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchEcoFriendlyFoodPackagingPage.meta.title')}</title>
        <meta name="description" content={t('pouchEcoFriendlyFoodPackagingPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-food-packaging`} />
        <meta name="keywords" content={t('pouchEcoFriendlyFoodPackagingPage.meta.keywords')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t('pouchEcoFriendlyFoodPackagingPage.hero.badge')}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t('pouchEcoFriendlyFoodPackagingPage.hero.title').split('<br/>')[0]}<br/>
                {t('pouchEcoFriendlyFoodPackagingPage.hero.title').split('<br/>')[1]}<br/>
                <span className="text-emerald-900 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t('pouchEcoFriendlyFoodPackagingPage.hero.title').split('<br/>')[2]}</span>
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchEcoFriendlyFoodPackagingPage.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t('pouchEcoFriendlyFoodPackagingPage.hero.btn_browse')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('pouchEcoFriendlyFoodPackagingPage.hero.btn_request')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_a_0799522.webp" 
                alt="Eco-Friendly Food Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Barrier Framework */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt="High Barrier Food Packaging Engineering" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t('pouchEcoFriendlyFoodPackagingPage.engineering.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t('pouchEcoFriendlyFoodPackagingPage.engineering.title').split('<br/>')[0]}<br/>
                {t('pouchEcoFriendlyFoodPackagingPage.engineering.title').split('<br/>')[1]}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.engineering.p1')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FOOD_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Food Safety Protocols */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t('pouchEcoFriendlyFoodPackagingPage.technical.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t('pouchEcoFriendlyFoodPackagingPage.technical.title').split('<br/>')[0]}<br/>
            {t('pouchEcoFriendlyFoodPackagingPage.technical.title').split('<br/>')[1]}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t1_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t1_desc')}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t2_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t2_desc')}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t3_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t3_desc')}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t('pouchEcoFriendlyFoodPackagingPage.technical.t4_title')}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.technical.t4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Verification Section */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <NeoBadge color="blue">{t('pouchEcoFriendlyFoodPackagingPage.lab.badge')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t('pouchEcoFriendlyFoodPackagingPage.lab.title').split('<br/>')[0]}<br/>
                {t('pouchEcoFriendlyFoodPackagingPage.lab.title').split('<br/>')[1]}
              </h2>
              <p className="mt-8 text-xl text-gray-700 font-['JetBrains_Mono'] leading-relaxed">
                {t('pouchEcoFriendlyFoodPackagingPage.lab.p1')}
              </p>
              <div className="mt-12 space-y-4">
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Microscope className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchEcoFriendlyFoodPackagingPage.lab.t1_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchEcoFriendlyFoodPackagingPage.lab.t1_desc')}</p>
                  </div>
                </div>
                <div className="bg-white p-6 border-4 border-black flex gap-6 items-center">
                  <Beaker className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="font-black uppercase">{t('pouchEcoFriendlyFoodPackagingPage.lab.t2_title')}</h4>
                    <p className="text-sm opacity-60">{t('pouchEcoFriendlyFoodPackagingPage.lab.t2_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_c_4560298.webp" 
                alt="Technical Food Pouch Manufacturing" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Food Safety Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t('pouchEcoFriendlyFoodPackagingPage.faq.badge')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t('pouchEcoFriendlyFoodPackagingPage.faq.title').split('<br/>')[0]}<br/>
            {t('pouchEcoFriendlyFoodPackagingPage.faq.title').split('<br/>')[1]}
          </h2>
          <div className="space-y-4">
            {[
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q1_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q1_a') },
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q2_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q2_a') },
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q3_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q3_a') },
              { q: t('pouchEcoFriendlyFoodPackagingPage.faq.q4_q'), a: t('pouchEcoFriendlyFoodPackagingPage.faq.q4_a') }
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
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t('pouchEcoFriendlyFoodPackagingPage.cta.badge')}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t('pouchEcoFriendlyFoodPackagingPage.cta.title').split('<br/>')[0]}<br/>
            {t('pouchEcoFriendlyFoodPackagingPage.cta.title').split('<br/>')[1]}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('pouchEcoFriendlyFoodPackagingPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-950">{t('pouchEcoFriendlyFoodPackagingPage.cta.btn_samples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchEcoFriendlyFoodPackagingPage.cta.btn_consultation')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlyFoodPackagingPage
