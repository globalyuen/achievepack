import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Leaf, ShieldCheck, Thermometer, Droplets, CheckCircle, HelpCircle, ArrowRight, Globe, BarChart3, FlaskConical, FileText, Zap } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostablePackagingBlogPage: React.FC = () => {
  const { t } = useTranslation()
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchCompostablePackagingBlogPage.meta.title')}</title>
        <meta name="description" content={t('pouchCompostablePackagingBlogPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-emerald-400 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">{t('pouchCompostablePackagingBlogPage.hero.badge')}</NeoBadge>
              <h1 
                className="mt-8 font-black text-6xl md:text-8xl leading-[0.8] uppercase tracking-tighter italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                dangerouslySetInnerHTML={{ __html: t('pouchCompostablePackagingBlogPage.hero.title') }}
              />
              <p className="mt-12 text-2xl font-black font-['JetBrains_Mono'] text-black bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchCompostablePackagingBlogPage.hero.subtitle')}
              </p>
              <div className="mt-16 flex flex-wrap gap-6">
                <NeoButton variant="dark" to="/quote">{t('pouchCompostablePackagingBlogPage.hero.start')}</NeoButton>
                <NeoButton variant="secondary" className="!text-white border-white" to="/materials">{t('pouchCompostablePackagingBlogPage.hero.lab')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600 translate-x-6 translate-y-6 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp" 
                alt="Compostable Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biodegradation Section */}
      <section className="py-24 bg-white border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">{t('pouchCompostablePackagingBlogPage.kinetics.badge')}</NeoBadge>
            <h2 
              className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic"
              dangerouslySetInnerHTML={{ __html: t('pouchCompostablePackagingBlogPage.kinetics.title') }}
            />
            <p className="mt-8 text-xl text-gray-800 leading-relaxed">
              {t('pouchCompostablePackagingBlogPage.kinetics.p1')}
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Thermometer className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t('pouchCompostablePackagingBlogPage.kinetics.t1_title')}</h4>
                    <p className="mt-2 text-sm text-gray-600">{t('pouchCompostablePackagingBlogPage.kinetics.t1_desc')}</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <FlaskConical className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t('pouchCompostablePackagingBlogPage.kinetics.t2_title')}</h4>
                    <p className="mt-2 text-sm text-gray-600">{t('pouchCompostablePackagingBlogPage.kinetics.t2_desc')}</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/illustrated/a_home_compostable_card_v1_2166648.webp" 
                alt="Compostable Material Science" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Research Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">{t('pouchCompostablePackagingBlogPage.deep.title')}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t('pouchCompostablePackagingBlogPage.deep.p1')}
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t('pouchCompostablePackagingBlogPage.deep.p2')}
              </p>
              
              <div className="my-12 p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(16,185,129,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" /> {t('pouchCompostablePackagingBlogPage.deep.specs.title')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span>{t('pouchCompostablePackagingBlogPage.deep.specs.l1')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span>{t('pouchCompostablePackagingBlogPage.deep.specs.l2')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span>{t('pouchCompostablePackagingBlogPage.deep.specs.l3')}</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-black text-4xl uppercase italic mb-8">{t('pouchCompostablePackagingBlogPage.deep.home_title')}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t('pouchCompostablePackagingBlogPage.deep.home_p')}
              </p>
            </div>
            
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(16,185,129,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Zap className="text-emerald-400" /> {t('pouchCompostablePackagingBlogPage.aside.title')}</h4>
                <div className="space-y-4 text-xs font-black">
                  <div>
                    <p className="mb-1 uppercase">{t('pouchCompostablePackagingBlogPage.aside.frag')}</p>
                    <div className="h-4 bg-gray-800 border border-white">
                      <div className="h-full bg-emerald-400" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 uppercase">{t('pouchCompostablePackagingBlogPage.aside.carbon')}</p>
                    <div className="h-4 bg-gray-800 border border-white">
                      <div className="h-full bg-emerald-400" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                <NeoButton variant="primary" className="mt-8 !bg-emerald-400 !text-white w-full border-2 border-white" to="/quote">{t('pouchCompostablePackagingBlogPage.aside.start')}</NeoButton>
              </NeoCard>
              
              <div className="bg-white p-8 border-4 border-black font-black uppercase text-xs">
                <h4 className="text-xl mb-4">{t('pouchCompostablePackagingBlogPage.aside.title2')}</h4>
                <div className="p-2 border-2 border-black mb-2">{t('pouchCompostablePackagingBlogPage.aside.non_gmo')}</div>
                <div className="p-2 border-2 border-black mb-2">{t('pouchCompostablePackagingBlogPage.aside.heavy_metal')}</div>
                <div className="p-2 border-2 border-black">{t('pouchCompostablePackagingBlogPage.aside.ecotox')}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-6xl md:text-9xl uppercase italic mb-16 text-center">{t('pouchCompostablePackagingBlogPage.faq.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q1_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q1_a')
              },
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q2_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q2_a')
              },
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q3_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q3_a')
              },
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q4_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q4_a')
              }
            ].map((faq, i) => (
              <NeoCard key={i} color="bg-[#F0F0F0]" className="border-4 border-black p-8 hover:bg-emerald-600 hover:text-white transition-all group">
                <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-emerald-600 group-hover:text-white" /> {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-gray-600 group-hover:text-white">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            {t('pouchCompostablePackagingBlogPage.cta.title').replace('<//br>', '<br/>').split('<br/>')[0]}<br/>
            <span className="text-emerald-400">{t('pouchCompostablePackagingBlogPage.cta.title').replace('<//br>', '<br/>').split('<br/>')[1]}</span>
          </h2>
          <NeoButton variant="primary" className="!bg-emerald-400 !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            {t('pouchCompostablePackagingBlogPage.cta.btn')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostablePackagingBlogPage
