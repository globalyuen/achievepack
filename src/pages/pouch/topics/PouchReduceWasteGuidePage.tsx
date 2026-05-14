import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Zap, ShieldAlert, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchReduceWasteGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>點樣減少包裝浪費而唔影響產品保護？ | Pouch.eco</title>
        <meta name="description" content="探討如何透過精準尺寸、高效物料及精簡設計來減少包裝浪費。幫助品牌在降低成本的同時，提升環保表現並確保產品安全。" />
        <link rel="canonical" href={`${baseUrl}/topics/reduce-packaging-waste`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-blue-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">WASTE_REDUCTION_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-black">
            LESS<br/>
            WASTE<br/>
            <span className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">MORE</span><br/>
            VALUE
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            點樣減少包裝浪費而唔影響產品保護？精益求精：喺最少物料消耗下，提供最強保護。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/blog">了解更多方案</NeoButton>
          </div>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-16">EFFICIENCY_GUIDE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black hover:bg-[#D4FF00] transition-colors group">
              <Zap className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline">RIGHT_SIZING</h3>
              <p className="font-['JetBrains_Mono'] text-xs">精準計算尺寸，減少 10-20% 嘅物料浪費同運輸成本。</p>
            </NeoCard>
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black hover:bg-blue-300 transition-colors group">
              <ShieldAlert className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline">DOWN_GAUGING</h3>
              <p className="font-['JetBrains_Mono'] text-xs">用更薄嘅複合層達到相同保鮮效果，最直接嘅減廢方式。</p>
            </NeoCard>
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black hover:bg-emerald-400 transition-colors group">
              <Leaf className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline">SLIM_DESIGN</h3>
              <p className="font-['JetBrains_Mono'] text-xs">移除唔必要嘅裝飾，採用更精練嘅一體化環保設計。</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative p-4">
            <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_granola_pouch.webp" 
              alt="Waste Reduction Case" 
              className="relative z-10 border-4 border-black"
            />
          </div>
          <div>
            <h2 className="font-black text-5xl uppercase italic mb-8">CASE_STUDY</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-gray-700 leading-relaxed p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              透過優化包裝尺寸，我哋幫客戶減少咗 15% 嘅膠膜使用量，並顯著提升咗貨架展示效率。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            ZERO_WASTE<br/>GOAL.
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/blog">
            Learn More
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchReduceWasteGuidePage
