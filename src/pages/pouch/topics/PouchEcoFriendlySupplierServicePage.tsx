import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, ShieldCheck, Search, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchEcoFriendlySupplierServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>環保包裝供應商點分真定假？ | Pouch.eco</title>
        <meta name="description" content="教品牌如何審核環保包裝供應商的真實性。從查核第三方認證、物料溯源到實驗室數據，教你避開漂綠陷阱，選擇真正具備證據支持的供應商。" />
        <link rel="canonical" href={`${baseUrl}/topics/eco-friendly-packaging-supplier`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-emerald-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">ANTI_GREENWASH_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic text-white">
            REAL_ECO<br/>
            OR_FAKE<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">GREEN?</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            環保包裝供應商點分真定假？拒絕含糊不清嘅口號，選擇真正具備證據支持嘅伙拍。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/#contact">聯絡我們</NeoButton>
          </div>
        </div>
      </section>

      {/* Verification Grid */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-16">VERIFICATION_SYSTEM</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black hover:bg-[#D4FF00] transition-colors">
              <ShieldCheck className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline">CERT_CHECK</h3>
              <p className="font-['JetBrains_Mono'] text-xs">確認證書名與供應商名一致，並在線查核有效期。</p>
            </NeoCard>
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black hover:bg-blue-400 transition-colors">
              <Search className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline">MATERIAL_TRACK</h3>
              <p className="font-['JetBrains_Mono'] text-xs">索取 TC 證書，追蹤 PCR 或可堆肥物料嘅真實來源。</p>
            </NeoCard>
            <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black hover:bg-magenta-400 transition-colors">
              <CheckCircle className="w-12 h-12 mb-6" />
              <h3 className="font-black text-xl mb-4 underline">DATA_PROVE</h3>
              <p className="font-['JetBrains_Mono'] text-xs">要求實驗室實測數據，確保性能與環保價值並存。</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            NO_MORE<br/>LIES.
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/#contact">
            Contact Us
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchEcoFriendlySupplierServicePage
