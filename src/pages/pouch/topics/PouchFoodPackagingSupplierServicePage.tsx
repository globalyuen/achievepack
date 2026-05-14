import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Factory, AlertTriangle, Users, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchFoodPackagingSupplierServicePage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>食品包裝供應商點揀？品牌常見 6 個錯誤 | Pouch.eco</title>
        <meta name="description" content="選擇食品包裝供應商的專業指南。分析品牌在採購過程中的常見錯誤，並提供如何審查 BRC、FDA 認證及阻隔性能的實務建議。" />
        <link rel="canonical" href={`${baseUrl}/topics/food-packaging-supplier`} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="blue">SUPPLY_AUDIT_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic">
            CHOOSE<br/>
            RIGHT<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">VENDOR</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            食品包裝供應商點揀？品牌常見 6 個錯誤。專業審核指南：守護你嘅產品安全。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/#contact">立即諮詢</NeoButton>
          </div>
        </div>
      </section>

      {/* Mistakes Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-5xl uppercase italic mb-16">TOP_6_MISTAKES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "只追求最低價",
              "忽視阻隔性能測試",
              "無索取證書副本",
              "低估運輸損耗",
              "忽視印刷油墨安全",
              "無預留足夠交期"
            ].map((text, i) => (
              <NeoCard key={i} color="bg-white" className="border-4 border-black hover:bg-red-400 transition-colors group">
                <span className="font-black text-2xl mb-4 block">0{i+1}</span>
                <h4 className="font-bold text-xl">{text}</h4>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Preview */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">FACTORY_STANDARD</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">專業生產線</h2>
            <p className="mt-8 text-xl text-gray-800 font-['JetBrains_Mono'] leading-relaxed p-6 bg-blue-50 border-4 border-black">
              萬級無塵車間，BRCGS 認證。我哋由源頭確保每一份包裝都符合全球食品安全標準。
            </p>
          </div>
          <ClickableImage 
            src="/imgs/factory/factory_machine_v1.webp" 
            alt="Factory Line" 
            className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic">
            SAFETY_FIRST.
          </h2>
          <NeoButton variant="primary" className="!bg-[#D4FF00] !text-black" to="/#contact">
            Enquire Now
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchFoodPackagingSupplierServicePage
