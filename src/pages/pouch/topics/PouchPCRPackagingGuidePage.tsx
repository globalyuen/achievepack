import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Package, Recycle, CheckCircle, Info } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchPCRPackagingGuidePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>PCR 包裝係咩？適合邊類產品？ | Pouch.eco</title>
        <meta name="description" content="深入了解 PCR (消費後回收塑膠) 包裝。由定義、優點到行業適用性分析，助品牌透過再生材料實現可持續發展目標。" />
        <link rel="canonical" href={`${baseUrl}/topics/pcr-packaging`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-orange-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">RECYCLED_CONTENT_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-black">
            PCR<br/>
            IS_NOT<br/>
            <span className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">TRASH</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            PCR 包裝係咩？適合邊類產品？賦予塑膠第二次生命，實現循環經濟。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/quote">獲取報價</NeoButton>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <NeoCard color="bg-[#F0F0F0]">
            <h3 className="font-black text-2xl mb-6 italic underline">BEST_APPLICATIONS</h3>
            <ul className="space-y-4 font-['JetBrains_Mono']">
              <li className="flex items-center gap-3">✨ 美容與個人護理</li>
              <li className="flex items-center gap-3">✨ 家居清潔用品</li>
              <li className="flex items-center gap-3">✨ 電子產品外包裝</li>
              <li className="flex items-center gap-3">✨ 二次物流包裝</li>
            </ul>
          </NeoCard>
          <div className="relative">
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_white_tea_pouch.webp" 
              alt="PCR Pouch" 
              className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#D4FF00] border-b-8 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic text-black">
            SECOND<br/>CHANCE.
          </h2>
          <NeoButton variant="dark" to="/quote">獲取樣版與報價</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchPCRPackagingGuidePage
