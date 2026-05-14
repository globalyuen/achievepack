import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Sprout, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCompostablePackagingBlogPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>可堆肥包裝真係可堆肥？你要知道嘅 5 件事 | Pouch.eco</title>
        <meta name="description" content="深入淺出探討可堆肥包裝的真相。涵蓋工業堆肥與家用堆肥區別、認證標準以及品牌轉型時必須注意的 5 大核心知識。" />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-emerald-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">COMPOST_TRUTH_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-white">
            IS_IT_REAL<br/>
            COMPOST<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">ABLE?</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            可堆肥包裝真係可堆肥？你要知道嘅 5 件事。教你撥開迷霧，選擇真正有效嘅方案。
          </p>
          <div className="mt-16">
            <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/#contact">諮詢意見</NeoButton>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black">
              <h3 className="font-black text-2xl mb-6 italic underline">THE_5_FACTS</h3>
              <ul className="space-y-6">
                {[
                  { t: "工業 vs 家用堆肥", d: "溫度、濕度同時間係關鍵。" },
                  { t: "零殘留測試", d: "分解後係咪真係變返二氧化碳同水？" },
                  { t: "認證即係保險", d: "EN13432 係業界唯一標杆。" },
                  { t: "保質期管理", d: "通常只有 12 個月左右嘅壽命。" },
                  { t: "唔好掉入回收箱", d: "可堆肥物料會污染塑膠回收鏈。" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-black text-emerald-600">[{i+1}]</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.t}</h4>
                      <p className="text-xs text-gray-600 font-['JetBrains_Mono']">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </NeoCard>
            <div className="flex flex-col gap-8">
              <ClickableImage 
                src="/imgs/seo-photos/organic/organic_white_tea_pouch.webp" 
                alt="Compostable Packaging" 
                className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              />
              <div className="p-8 bg-black text-white border-4 border-[#D4FF00]">
                <h4 className="font-black text-2xl mb-4 italic">FACT_CHECK</h4>
                <p className="font-['JetBrains_Mono'] text-sm">
                  真正嘅可堆肥包裝分解後會變成生物質，而唔係微塑膠。認證先係品牌最重要嘅「通行證」。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            GROW_WITH<br/>NATURE.
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/#contact">
            立即聯絡我們
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostablePackagingBlogPage
