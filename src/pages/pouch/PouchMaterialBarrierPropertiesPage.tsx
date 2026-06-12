import { Shield, Clock, Target, Zap, Package, Droplets, Wind, HelpCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const propertiesData1 = [
  { material: 'OPP 20', o2: '1900', wvtr: '6' },
  { material: 'OPP 30', o2: '1800', wvtr: '5.8' },
  { material: 'OPP 40', o2: '1700', wvtr: '5.5' },
  { material: 'PET 12', o2: '85', wvtr: '55' },
  { material: 'NY 15', o2: '45', wvtr: '260' },
  { material: 'CPP 20', o2: '2000', wvtr: '6' },
  { material: 'CPP 30', o2: '1800', wvtr: '5.5' },
  { material: 'CPP 40', o2: '1700', wvtr: '5' },
  { material: 'VMCPP 25', o2: '25', wvtr: '1' },
  { material: 'VMPET 12', o2: '2', wvtr: '2' },
  { material: 'AL 7', o2: '1', wvtr: '1.4' },
];

const propertiesData2 = [
  { material: 'AL 9', o2: '1', wvtr: '1.1' },
  { material: 'LLDPE 40', o2: '5000', wvtr: '18' },
  { material: 'KOP 21', o2: '10', wvtr: '4' },
  { material: 'KNY 17', o2: '8', wvtr: '12' },
  { material: 'KPET 12', o2: '8', wvtr: '12' },
  { material: 'PEARL 30', o2: '2200', wvtr: '9' },
  { material: 'MAT OPP 20', o2: '1900', wvtr: '6' },
];

// ============================================
// MAIN PAGE
// ============================================

export default function PouchMaterialBarrierPropertiesPage() {
  const { t } = useTranslation()

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchMaterialBarrierPropertiesPage.meta.title')}</title>
        <meta name="description" content={t('pouchMaterialBarrierPropertiesPage.meta.description')} />
        <link rel="canonical" href="https://pouch.eco/barriers/material-properties" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">{t('pouchMaterialBarrierPropertiesPage.hero.badge')}</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t('pouchMaterialBarrierPropertiesPage.hero.title1')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('pouchMaterialBarrierPropertiesPage.hero.title2')}</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl font-['Space_Grotesk']" dangerouslySetInnerHTML={{ __html: t('pouchMaterialBarrierPropertiesPage.hero.subtitle') }} />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-[#00FFFF]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white border-2 border-black w-14 h-14 flex items-center justify-center">
                  <Wind className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl uppercase m-0 leading-none">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.title')}</h3>
              </div>
              <p className="text-gray-900 mb-4 font-bold">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.description')}</p>
              <div className="bg-white border-2 border-black p-3 font-mono text-sm mb-2 font-bold shadow-[4px_4px_0px_0px_#000]">
                {t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.unit')}
              </div>
              <p className="text-xs text-gray-700 mt-4 uppercase font-black tracking-wider">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.o2.note')}</p>
            </NeoCard>

            <NeoCard color="bg-[#FF00FF]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white border-2 border-black w-14 h-14 flex items-center justify-center">
                  <Droplets className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl uppercase m-0 text-white leading-none">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.title')}</h3>
              </div>
              <p className="text-white mb-4 font-bold">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.description')}</p>
              <div className="bg-white border-2 border-black p-3 font-mono text-sm mb-2 font-bold shadow-[4px_4px_0px_0px_#000]">
                {t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.unit')}
              </div>
              <p className="text-xs text-white mt-4 uppercase font-black tracking-wider">{t('pouchMaterialBarrierPropertiesPage.keyMetrics.wvtr.note')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Main Tables */}
      <section className="py-16 px-4 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-4 uppercase text-center">{t('pouchMaterialBarrierPropertiesPage.dataSection.title')}</h2>
          <p className="text-center text-sm font-['Space_Grotesk'] mb-12 max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {t('pouchMaterialBarrierPropertiesPage.dataSection.disclaimer')}
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-[#D4FF00] font-['JetBrains_Mono']">
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm w-[40%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.materialHeader')}</th>
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Header')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Unit')}</span></th>
                    <th className="p-4 border-b-4 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrHeader')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrUnit')}</span></th>
                  </tr>
                </thead>
                <tbody className="font-['Space_Grotesk'] font-bold">
                  {propertiesData1.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="p-4 border-b-2 border-r-2 border-black">{row.material}</td>
                      <td className="p-4 border-b-2 border-r-2 border-black text-center font-['JetBrains_Mono']">{row.o2}</td>
                      <td className="p-4 border-b-2 border-black text-center font-['JetBrains_Mono']">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden self-start">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-[#FF00FF] font-['JetBrains_Mono']">
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm w-[40%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.materialHeader')}</th>
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Header')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.o2Unit')}</span></th>
                    <th className="p-4 border-b-4 border-black font-black uppercase text-sm text-center w-[30%]">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrHeader')}<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">{t('pouchMaterialBarrierPropertiesPage.dataSection.wvtrUnit')}</span></th>
                  </tr>
                </thead>
                <tbody className="font-['Space_Grotesk'] font-bold">
                  {propertiesData2.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="p-4 border-b-2 border-r-2 border-black">{row.material}</td>
                      <td className="p-4 border-b-2 border-r-2 border-black text-center font-['JetBrains_Mono']">{row.o2}</td>
                      <td className="p-4 border-b-2 border-black text-center font-['JetBrains_Mono']">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase text-center">{t('pouchMaterialBarrierPropertiesPage.takeaways.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <NeoCard color="bg-[#D4FF00]">
              <h3 className="font-black text-xl mb-4">{t('pouchMaterialBarrierPropertiesPage.takeaways.transparent.title')}</h3>
              <p className="text-gray-900 font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.transparent.subtitle')}</p>
              <p className="text-gray-800 text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.transparent.description')}
              </p>
            </NeoCard>

            <NeoCard color="bg-black text-white">
              <h3 className="font-black text-xl mb-4 text-[#D4FF00]">{t('pouchMaterialBarrierPropertiesPage.takeaways.metallized.title')}</h3>
              <p className="text-[#D4FF00] font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.metallized.subtitle')}</p>
              <p className="text-gray-300 text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.metallized.description')}
              </p>
            </NeoCard>

            <NeoCard color="bg-[#00FFFF]">
              <h3 className="font-black text-xl mb-4">{t('pouchMaterialBarrierPropertiesPage.takeaways.aluminum.title')}</h3>
              <p className="text-black font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.aluminum.subtitle')}</p>
              <p className="text-black text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.aluminum.description')}
              </p>
            </NeoCard>

            <NeoCard color="bg-[#FF00FF]">
              <h3 className="font-black text-xl mb-4 text-white">{t('pouchMaterialBarrierPropertiesPage.takeaways.pvdc.title')}</h3>
              <p className="text-white font-bold mb-2 text-sm uppercase">{t('pouchMaterialBarrierPropertiesPage.takeaways.pvdc.subtitle')}</p>
              <p className="text-white text-sm font-['Space_Grotesk']">
                {t('pouchMaterialBarrierPropertiesPage.takeaways.pvdc.description')}
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">{t('pouchMaterialBarrierPropertiesPage.cta.title')}</h2>
            <p className="text-xl text-gray-700 mb-6 font-['Space_Grotesk']" dangerouslySetInnerHTML={{ __html: t('pouchMaterialBarrierPropertiesPage.cta.description') }} />
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchMaterialBarrierPropertiesPage.cta.button')}
            </NeoButton>
          </NeoCard>
        </div>
      </section>

    </PouchLayout>
  )
}
