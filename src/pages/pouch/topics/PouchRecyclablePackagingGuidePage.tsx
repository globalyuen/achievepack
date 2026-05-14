import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Recycle, CheckCircle, Settings, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchRecyclablePackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>可回收包裝點樣設計先更易被處理？ | Pouch.eco</title>
        <meta name="description" content="了解可回收包裝的核心設計原則。從 Mono-PE 物料選擇到標籤標示，教你如何設計出真正符合回收體系、高品質的環保包裝。" />
        <link rel="canonical" href={`${baseUrl}/topics/recyclable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-blue-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">DESIGN_GUIDE_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-white">
            RECYCLABLE<br/>
            DESIGN<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">THINKING</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            可回收包裝點樣設計先更易被處理？專業指南：由物料源頭開始，實現循環經濟。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/sample">獲取樣版套裝</NeoButton>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">DO_AND_DONT</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">設計原則</h2>
            <div className="mt-12 space-y-8">
              <div className="p-6 bg-green-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-xl mb-4 text-green-900">✅ DO: 單一物料設計</h4>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  <li>使用 100% Mono-PE 或 Mono-PP</li>
                  <li>使用可回收嘅數碼印刷油墨</li>
                  <li>標準化回收標籤引導</li>
                </ul>
              </div>
              <div className="p-6 bg-red-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-black text-xl mb-4 text-red-900">❌ DON'T: 增加處理難度</h4>
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  <li>混合 PET/PE 結構</li>
                  <li>使用大面積無法分離嘅鋁箔</li>
                  <li>難以移除嘅非同質標籤</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_granola_pouch.webp" 
              alt="Recyclable Packaging" 
              className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#D4FF00] border-b-8 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic text-black">
            CYCLE_THE<br/>FUTURE.
          </h2>
          <NeoButton variant="dark" to="/sample">索取樣版套裝</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchRecyclablePackagingGuidePage
