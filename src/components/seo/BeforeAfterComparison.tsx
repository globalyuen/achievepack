import React, { useState } from 'react'
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, ShieldAlert, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react'
import { getDomain } from '../../utils/domain'

export interface BeforeAfterComparisonProps {
  pageTitle?: string
  beforeTitle?: string
  afterTitle?: string
  beforeImage?: string
  afterImage?: string
  className?: string
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({
  pageTitle,
  beforeTitle = "Standard / Generic Packaging (Before)",
  afterTitle = "Achieve Pack / Pouch Eco Solution (After)",
  beforeImage,
  afterImage,
  className = ''
}) => {
  const isPouch = getDomain() === 'pouch'
  const [sliderPos, setSliderPos] = useState(50)
  const [activeTab, setActiveTab] = useState<'split' | 'before' | 'after'>('split')

  const defaultBeforeImg = beforeImage || '/imgs/comparison-flexible-vs-rigid.webp'
  const defaultAfterImg = afterImage || '/imgs/feature-barrier-options.webp'

  const beforePoints = [
    { title: 'Rapid Oxidation & Flavor Degradation', desc: 'Cheap films allow O2 & moisture ingress, spoiling contents in < 30 days.' },
    { title: 'High Seal Breakage in Transit', desc: 'Thin seams fail under drop tests, leading to customer refunds & lost trust.' },
    { title: 'Heavy Plastic Tax Penalties', desc: 'Multi-layer unrecyclable packaging incurs up to €800/ton in EU PPWR fines.' },
    { title: 'High MOQs & Plate Cost Friction', desc: 'Traditional printers force 10,000+ unit minimums and $1,500 cylinder fees.' }
  ]

  const afterPoints = [
    { title: 'Ultra High-Barrier Foil/EVOH Core', desc: 'Guaranteed OTR < 0.1 cc/m²/day, keeping contents fresh for 18–24 months.' },
    { title: 'Reinforced 45N/15mm Localized Heat Seal', desc: '180°C precision seam dwell time prevents bursting even under 2-meter drops.' },
    { title: '100% Certified Eco Compliance', desc: 'TÜV OK Compost HOME (EN13432) & Mono-PE Recyclable structures (0% Tax).' },
    { title: 'HD Digital Printing with 500-Unit Low MOQs', desc: 'Print multi-SKU runs in 7 business days with zero setup plate charges.' }
  ]

  return (
    <section className={`my-12 ${className}`}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 ${
          isPouch 
            ? 'bg-[#D4FF00] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000]' 
            : 'bg-emerald-100 text-emerald-800 rounded-full font-bold'
        }`}>
          Packaging Performance Case Study
        </span>
        <h2 className={`text-2xl md:text-3xl font-black mt-3 ${isPouch ? 'text-neutral-900 uppercase' : 'text-neutral-900'}`}>
          {pageTitle ? `Packaging Transformation for ${pageTitle}` : 'Before & After Engineering Upgrade'}
        </h2>
        <p className="text-neutral-600 text-sm mt-2 max-w-xl mx-auto">
          See how upgrading from generic commoditized bags to precision-engineered flexible barrier packaging eliminates transport failures and boosts shelf authority.
        </p>

        {/* Mobile View Selector */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <button 
            onClick={() => setActiveTab('split')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
              activeTab === 'split' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600'
            }`}
          >
            Compare Both
          </button>
          <button 
            onClick={() => setActiveTab('before')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
              activeTab === 'before' ? 'bg-red-600 text-white' : 'bg-neutral-100 text-neutral-600'
            }`}
          >
            Before
          </button>
          <button 
            onClick={() => setActiveTab('after')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg border ${
              activeTab === 'after' ? 'bg-emerald-600 text-white' : 'bg-neutral-100 text-neutral-600'
            }`}
          >
            After
          </button>
        </div>
      </div>

      {/* Side by Side Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* BEFORE CARD */}
        <div className={`flex flex-col justify-between p-6 ${
          activeTab === 'after' ? 'hidden md:flex' : 'flex'
        } ${
          isPouch 
            ? 'bg-neutral-900 border-4 border-red-500 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] text-white' 
            : 'bg-white border-2 border-red-200 rounded-2xl shadow-sm text-neutral-900'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-red-500/20 pb-3">
              <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-500 border border-red-500/30 text-xs font-black uppercase px-3 py-1 rounded-full">
                <XCircle className="w-4 h-4" /> BEFORE
              </span>
              <span className="text-xs font-bold text-red-500/80 uppercase tracking-wide">Generic Packaging</span>
            </div>

            <h3 className="text-xl font-bold text-red-500 mb-2">
              {beforeTitle}
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Standard stock bags fail under transit stress and expose sensitive goods to moisture, UV light, and oxygen.
            </p>

            {/* Visual Graphic or Photo */}
            <div className="relative mb-6 rounded-xl overflow-hidden border border-red-500/20 bg-neutral-950 aspect-video flex items-center justify-center">
              <img 
                src={defaultBeforeImg} 
                alt="Before packaging failure" 
                className="w-full h-full object-cover opacity-75 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-3 left-3 bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                High Risk / Compromised
              </div>
            </div>

            {/* Pain Points */}
            <ul className="space-y-3">
              {beforePoints.map((item, idx) => (
                <li key={idx} className={`p-3 rounded-lg flex items-start gap-3 text-xs ${
                  isPouch ? 'bg-neutral-800/80 border border-neutral-700' : 'bg-red-50/50 border border-red-100'
                }`}>
                  <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-red-400 font-bold mb-0.5">{item.title}</strong>
                    <span className={isPouch ? 'text-neutral-400' : 'text-neutral-600'}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-red-500/20 text-center">
            <span className="text-xs font-bold text-red-500">Result: Customer Churn & High Damage Rates</span>
          </div>
        </div>

        {/* AFTER CARD */}
        <div className={`flex flex-col justify-between p-6 ${
          activeTab === 'before' ? 'hidden md:flex' : 'flex'
        } ${
          isPouch 
            ? 'bg-black border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] text-white' 
            : 'bg-emerald-950 text-white border-2 border-emerald-500/30 rounded-2xl shadow-xl'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-emerald-500/30 pb-3">
              <span className={`inline-flex items-center gap-1.5 text-xs font-black uppercase px-3 py-1 rounded-full ${
                isPouch ? 'bg-[#D4FF00] text-black border-2 border-black font-extrabold' : 'bg-emerald-500 text-white'
              }`}>
                <CheckCircle2 className="w-4 h-4" /> AFTER
              </span>
              <span className={`text-xs font-bold uppercase tracking-wide ${isPouch ? 'text-[#00FFFF]' : 'text-emerald-400'}`}>
                Engineered Barrier Solution
              </span>
            </div>

            <h3 className={`text-xl font-bold mb-2 ${isPouch ? 'text-[#D4FF00]' : 'text-white'}`}>
              {afterTitle}
            </h3>
            <p className="text-xs text-emerald-100/70 mb-6 leading-relaxed">
              Custom engineered multi-layer pouch structure tailored to your exact moisture barrier, seal strength, and aesthetic requirements.
            </p>

            {/* Visual Graphic or Photo */}
            <div className="relative mb-6 rounded-xl overflow-hidden border border-emerald-500/40 bg-neutral-900 aspect-video flex items-center justify-center">
              <img 
                src={defaultAfterImg} 
                alt="After precision packaging solution" 
                className="w-full h-full object-cover"
              />
              <div className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-0.5 rounded uppercase ${
                isPouch ? 'bg-[#D4FF00] text-black font-black' : 'bg-emerald-500 text-white'
              }`}>
                100% Quality Guaranteed
              </div>
            </div>

            {/* Solution Points */}
            <ul className="space-y-3">
              {afterPoints.map((item, idx) => (
                <li key={idx} className={`p-3 rounded-lg flex items-start gap-3 text-xs ${
                  isPouch ? 'bg-neutral-900 border border-neutral-700' : 'bg-emerald-900/50 border border-emerald-700/50'
                }`}>
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isPouch ? 'text-[#D4FF00]' : 'text-emerald-400'}`} />
                  <div>
                    <strong className={`block font-bold mb-0.5 ${isPouch ? 'text-[#00FFFF]' : 'text-emerald-300'}`}>{item.title}</strong>
                    <span className="text-gray-300">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-500/30 flex items-center justify-between">
            <span className={`text-xs font-bold ${isPouch ? 'text-[#D4FF00]' : 'text-emerald-300'}`}>
              Result: Zero transit leaks & premium brand retention
            </span>
            <a 
              href="https://calendly.com/30-min-free-packaging-consultancy" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded transition ${
                isPouch ? 'bg-[#D4FF00] text-black hover:bg-white' : 'bg-emerald-500 text-white hover:bg-emerald-400'
              }`}
            >
              Upgrade Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BeforeAfterComparison
