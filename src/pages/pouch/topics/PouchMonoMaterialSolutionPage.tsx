import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layers, Recycle, Zap, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchMonoMaterialSolutionPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>點解單一物料包裝更受品牌歡迎？ | Pouch.eco</title>
        <meta name="description" content="了解 Mono-Material 單一物料包裝如何成為品牌環保轉型的首選。涵蓋 Mono-PE 阻隔性能、回收優勢以及行業應用案例。" />
        <link rel="canonical" href={`${baseUrl}/topics/mono-material-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-cyan-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">MONO_SOLUTIONS_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-white">
            MONO<br/>
            POWER<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">ONLY</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            點解單一物料包裝更受品牌歡迎？兼顧高性能同 100% 可回收，係未來合規嘅首選。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/#contact">聯絡專家</NeoButton>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-white" className="border-4 border-black hover:bg-[#D4FF00] transition-colors group">
              <Recycle className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline italic">100%_RECYCLABLE</h3>
              <p className="font-['JetBrains_Mono'] text-xs text-gray-600">直接進入軟塑膠回收鏈，無需分離多層材質。</p>
            </NeoCard>
            <NeoCard color="bg-white" className="border-4 border-black hover:bg-cyan-400 transition-colors group">
              <Zap className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline italic">HIGH_BARRIER</h3>
              <p className="font-['JetBrains_Mono'] text-xs text-gray-600">MDO-PE 技術提供同級別最強嘅防潮性能。</p>
            </NeoCard>
            <NeoCard color="bg-white" className="border-4 border-black hover:bg-magenta-400 transition-colors group">
              <CheckCircle className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline italic">FUTURE_READY</h3>
              <p className="font-['JetBrains_Mono'] text-xs text-gray-600">完全符合歐盟及各國日益嚴格嘅回收法規。</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative p-4">
            <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
              alt="Mono PE Pouch" 
              className="relative z-10 border-4 border-black"
            />
          </div>
          <div>
            <h2 className="font-black text-5xl uppercase italic mb-8">REAL_WORLD_CASE</h2>
            <p className="font-['JetBrains_Mono'] text-lg text-gray-700 leading-relaxed p-6 bg-white border-l-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              我哋嘅 Mono-PE 方案已經成功幫多個精品零食品牌實現全線可回收轉型，且保質期完全無受影響。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            MONO_IS<br/>ENOUGH.
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/#contact">
            聯絡包裝專家
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchMonoMaterialSolutionPage
