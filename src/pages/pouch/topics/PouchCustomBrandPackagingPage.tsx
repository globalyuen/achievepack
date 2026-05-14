import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Package, Sparkles, Printer, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomBrandPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>品牌定制包裝方案：由物料到印刷一次搞掂 | Pouch.eco</title>
        <meta name="description" content="為品牌提供一站式定制包裝解決方案。涵蓋物料研發、數碼印刷、結構設計及全球物流。助初創及成長型品牌打造具備競爭力的包裝。" />
        <link rel="canonical" href={`${baseUrl}/topics/custom-packaging`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-purple-600 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">BRAND_ELEVATION_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-white">
            CUSTOM<br/>
            BEYOND<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">LOGO</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            品牌定制包裝方案：由物料到印刷一次搞掂。助你打造具備競爭力同環保價值嘅包裝。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/quote">開始項目</NeoButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <NeoBadge color="blue">ONE_STOP_FLOW</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase leading-tight italic">服務流程</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { i: <Layers />, t: "物料研發", d: "根據產品特性推薦最合適材質。" },
                { i: <Printer />, t: "全能印刷", d: "數碼與銅版印刷滿足不同規模。" },
                { i: <Package />, t: "結構定制", d: "由平底袋到站立袋全方位選擇。" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-[#F0F0F0] border-4 border-black hover:translate-x-2 transition-transform">
                  <div className="bg-white p-3 border-2 border-black">{item.i}</div>
                  <div>
                    <h4 className="font-black text-xl">{item.t}</h4>
                    <p className="text-xs font-['JetBrains_Mono']">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
              alt="Custom Brand Packaging" 
              className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#D4FF00] border-b-8 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-[10rem] uppercase leading-none mb-12 italic text-black">
            LET'S_BUILD.
          </h2>
          <NeoButton variant="dark" to="/quote">Start Project</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomBrandPackagingPage
