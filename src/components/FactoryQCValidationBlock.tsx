import React from 'react'
import { useTranslation } from 'react-i18next'
import { Shield, Award, Flame, Layers, Beaker, Scale, ShieldAlert } from 'lucide-react'
import { getDomain } from '../utils/domain'
import { NeoCard, NeoBadge } from './pouch/PouchUI'

const SPEC_ICONS: Record<string, React.ReactNode> = {
  otr: <Layers className="w-6 h-6" />,
  solvent: <Beaker className="w-6 h-6" />,
  seal: <Flame className="w-6 h-6" />,
  cleanroom: <Shield className="w-6 h-6" />,
  puncture: <ShieldAlert className="w-6 h-6" />,
  tensile: <Scale className="w-6 h-6" />,
}

export default function FactoryQCValidationBlock() {
  const { t } = useTranslation()
  const isPouch = getDomain() === 'pouch'

  const specKeys = ['otr', 'solvent', 'seal', 'cleanroom', 'puncture', 'tensile']

  // Brutalist Design for Pouch.eco
  if (isPouch) {
    return (
      <section className="my-12">
        <NeoCard color="bg-white" className="border-4 border-black p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b-4 border-black pb-6 mb-8 gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#00FFFF] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <div className="text-left">
                <NeoBadge color="lime" className="mb-2">
                  {t('seoPageLayout.factoryProof.badge')}
                </NeoBadge>
                <h2 className="font-black text-2xl md:text-4xl uppercase tracking-tighter text-black leading-none mt-1">
                  {t('seoPageLayout.factoryProof.heading')}
                </h2>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-['Space_Grotesk'] text-base font-bold text-neutral-800 leading-relaxed text-left mb-8 max-w-4xl">
            {t('seoPageLayout.factoryProof.description')}
          </p>

          {/* 6-Grid Technical Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {specKeys.map((key) => {
              const name = t(`seoPageLayout.factoryProof.specs.${key}.name`)
              const value = t(`seoPageLayout.factoryProof.specs.${key}.value`)
              const desc = t(`seoPageLayout.factoryProof.specs.${key}.desc`)
              
              return (
                <div 
                  key={key} 
                  className="bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 border-2 border-black bg-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                        {SPEC_ICONS[key]}
                      </div>
                      <span className="font-mono text-[10px] font-black uppercase bg-black text-[#00FFFF] px-2 py-0.5 border border-black">
                        {key === 'cleanroom' ? 'ISO / BRCGS' : 'ASTM TESTED'}
                      </span>
                    </div>
                    <h3 className="font-black text-lg uppercase text-black mb-1">{name}</h3>
                    <div className="font-mono text-xl font-black text-emerald-600 mb-2">{value}</div>
                    <p className="font-['Space_Grotesk'] text-xs font-semibold text-neutral-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Action Links */}
          <div className="border-t-4 border-black pt-6 flex flex-wrap gap-4 justify-start">
            <a 
              href="/unprinted-samples" 
              className="px-6 py-3 font-mono text-xs font-black uppercase bg-[#D4FF00] text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0.5"
            >
              {t('seoPageLayout.factoryProof.requestSample')} →
            </a>
            <a 
              href="https://calendly.com/30-min-free-packaging-consultancy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 font-mono text-xs font-black uppercase bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-0.5"
            >
              {t('seoPageLayout.factoryProof.requestMeeting')}
            </a>
          </div>
        </NeoCard>
      </section>
    )
  }

  // Corporate Design for AchievePack.com
  return (
    <section className="my-12 bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-100 pb-6 mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-50 text-green-700 rounded-xl border border-green-100">
            <Shield className="w-8 h-8" />
          </div>
          <div className="text-left">
            <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {t('seoPageLayout.factoryProof.badge')}
            </span>
            <h2 className="font-bold text-2xl md:text-3xl text-neutral-900 leading-snug mt-2">
              {t('seoPageLayout.factoryProof.heading')}
            </h2>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-600 text-base leading-relaxed text-left mb-8 max-w-4xl">
        {t('seoPageLayout.factoryProof.description')}
      </p>

      {/* 6-Grid Technical Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {specKeys.map((key) => {
          const name = t(`seoPageLayout.factoryProof.specs.${key}.name`)
          const value = t(`seoPageLayout.factoryProof.specs.${key}.value`)
          const desc = t(`seoPageLayout.factoryProof.specs.${key}.desc`)
          
          return (
            <div 
              key={key} 
              className="bg-neutral-50/50 border border-neutral-200 hover:border-neutral-300 rounded-xl p-5 hover:bg-neutral-50 transition flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-green-50 text-green-700 rounded-lg">
                    {SPEC_ICONS[key]}
                  </div>
                  <span className="text-[9px] font-bold tracking-wider uppercase text-neutral-500 bg-white border border-neutral-200 px-2 py-0.5 rounded">
                    {key === 'cleanroom' ? 'ISO / BRCGS' : 'ASTM TESTED'}
                  </span>
                </div>
                <h3 className="font-bold text-base text-neutral-950 mb-1">{name}</h3>
                <div className="text-lg font-bold text-green-700 font-mono mb-2">{value}</div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Action Links */}
      <div className="border-t border-neutral-100 pt-6 flex flex-wrap gap-4 justify-start">
        <a 
          href="/support/unprinted-samples" 
          className="inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition shadow-sm"
        >
          {t('seoPageLayout.factoryProof.requestSample')}
        </a>
        <a 
          href="https://calendly.com/30-min-free-packaging-consultancy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center border border-neutral-300 text-neutral-700 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition"
        >
          {t('seoPageLayout.factoryProof.requestMeeting')}
        </a>
        <a 
          href="/support/unprinted-samples" 
          className="inline-flex items-center justify-center border border-neutral-300 text-neutral-700 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition"
        >
          {t('seoPageLayout.factoryProof.downloadCert')}
        </a>
      </div>
    </section>
  )
}
