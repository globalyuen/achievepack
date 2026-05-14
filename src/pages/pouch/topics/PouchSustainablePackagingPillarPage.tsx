import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Leaf, AlertTriangle, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchSustainablePackagingPillarPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>什麼是可持續包裝？品牌點樣揀先唔會踩雷 | Pouch.eco</title>
        <meta name="description" content="深入探討可持續包裝定義，教你如何區分真實與虛假的環保包裝，避免品牌漂綠陷阱。涵蓋可堆肥、可回收及 PCR 材料全攻略。" />
        <link rel="canonical" href={`${baseUrl}/topics/sustainable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-[#D4FF00] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">ECO_STRATEGY_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic">
            SUSTAINABLE<br/>
            IS_NOT_A<br/>
            <span className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">BUZZWORD</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            什麼是可持續包裝？品牌點樣揀先唔會踩雷？拒絕漂綠，為你嘅品牌揀選真正具備證據支持嘅方案。
          </p>
          <div className="mt-16 flex flex-wrap gap-6">
            <NeoButton variant="dark" to="/quote">聯絡我們</NeoButton>
            <NeoButton variant="secondary" to="/materials">材料中心</NeoButton>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="blue">THE_DEFINITION</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">什麼是<br/>可持續包裝？</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed border-l-8 border-[#D4FF00] pl-6">
              可持續包裝覆蓋成個生命週期。由減少資源消耗、確保功能性，到社會責任，缺一不可。
            </p>
            <div className="mt-12 space-y-4">
              {[
                "認證先係「通行證」",
                "考慮廢物處理流向",
                "物料透明度極致化",
                "拒絕空洞嘅口號"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#F0F0F0] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  <CheckCircle className="text-black w-6 h-6 flex-shrink-0" />
                  <span className="font-black uppercase text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4FF00] translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white">
              <ClickableImage 
                src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
                alt="Sustainable Packaging" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-4xl md:text-6xl uppercase italic mb-16">點樣揀先唔會踩雷？</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-white" className="!p-8 hover:bg-[#D4FF00] transition-colors group">
              <h3 className="font-black text-2xl uppercase mb-4">1. 確認認證</h3>
              <p className="font-['JetBrains_Mono'] text-gray-600 mb-6 text-sm">
                確保物料有 EN13432 或 BPI 等國際認證，而唔係口頭話「可降解」。
              </p>
            </NeoCard>
            <NeoCard color="bg-white" className="!p-8 hover:bg-blue-400 transition-colors group">
              <h3 className="font-black text-2xl uppercase mb-4">2. 考慮處理流向</h3>
              <p className="font-['JetBrains_Mono'] text-gray-600 mb-6 text-sm">
                你嘅目標市場有無相應嘅回收設施？Mono-PE 會比複合塑膠更易回收。
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            READY_FOR<br/>UPGRADE.
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/quote">
            立即聯絡我們
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchSustainablePackagingPillarPage
