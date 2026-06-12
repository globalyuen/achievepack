import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Palette, Zap, CheckCircle, Info, Settings, Layout, MousePointer2, FlaskConical, BarChart, Binary } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomBrandPackagingServicePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'pouchCustomBrandPackagingServicePage'
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/custom-brand-solutions`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-magenta-400 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">{t(`${p}.hero.badge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[8rem] leading-[0.8] uppercase tracking-tighter italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-12 text-2xl md:text-3xl font-black font-['JetBrains_Mono'] text-black max-w-4xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.desc`)}
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">{t(`${p}.hero.btnStart`)}</NeoButton>
            <NeoButton variant="secondary" className="!text-white border-white" to="/materials">{t(`${p}.hero.btnColor`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Structural Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">{t(`${p}.structural.badge`)}</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
              {t(`${p}.structural.title`).split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed">
              {t(`${p}.structural.desc`)}
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Binary className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t(`${p}.structural.item1Title`)}</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">{t(`${p}.structural.item1Desc`)}</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Layout className="w-8 h-8 text-magenta-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t(`${p}.structural.item2Title`)}</h4>
                    <p className="mt-2 text-sm text-gray-600 font-['JetBrains_Mono']">{t(`${p}.structural.item2Desc`)}</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-magenta-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                alt={t(`${p}.structural.imgAlt`)} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">{t(`${p}.deep.title1`)}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t(`${p}.deep.p1`)}
              </p>
              <div className="p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <Palette className="text-magenta-500" /> {t(`${p}.deep.title2`)}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm font-black uppercase">
                    <thead className="bg-black text-white">
                      <tr>
                        <th className="p-4 border-r border-white/20">{t(`${p}.deep.th1`)}</th>
                        <th className="p-4 border-r border-white/20">{t(`${p}.deep.th2`)}</th>
                        <th className="p-4">{t(`${p}.deep.th3`)}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black">
                      <tr className="bg-[#F0F0F0]">
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td1`)}</td>
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td2`)}</td>
                        <td className="p-4">{t(`${p}.deep.td3`)}</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td4`)}</td>
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td5`)}</td>
                        <td className="p-4">{t(`${p}.deep.td6`)}</td>
                      </tr>
                      <tr className="bg-[#F0F0F0]">
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td7`)}</td>
                        <td className="p-4 border-r border-black">{t(`${p}.deep.td8`)}</td>
                        <td className="p-4">{t(`${p}.deep.td9`)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3 className="font-black text-4xl uppercase italic mb-8">{t(`${p}.deep.title3`)}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t(`${p}.deep.p2`)}
              </p>
            </div>
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,255,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Zap className="text-magenta-400" /> {t(`${p}.aside.badge1`)}</h4>
                <p className="text-sm">{t(`${p}.aside.desc1`)}</p>
                <NeoButton variant="primary" className="mt-8 !bg-magenta-400 !text-white w-full border-2 border-white" to="/quote">{t(`${p}.aside.btnArtwork`)}</NeoButton>
              </NeoCard>
              <div className="bg-[#F0F0F0] p-8 border-4 border-black">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-2"><MousePointer2 /> {t(`${p}.aside.badge2`)}</h4>
                <div className="space-y-3 text-xs uppercase font-black">
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish1`)}</div>
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish2`)}</div>
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish3`)}</div>
                  <div className="p-2 bg-white border-2 border-black">{t(`${p}.aside.finish4`)}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            {t(`${p}.cta.title`).split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <NeoButton variant="primary" className="!bg-magenta-400 !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            {t(`${p}.cta.btn`)}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomBrandPackagingServicePage
