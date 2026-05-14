import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Info, HelpCircle, FileCheck } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'

const PouchCompostableCertificationFAQPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>EN13432 同 ASTM D6400 有咩分別？ | Pouch.eco</title>
        <meta name="description" content="詳盡比較 EN13432 與 ASTM D6400 兩大主流工業堆肥認證。教品牌如何根據目標市場選擇正確的認證，確保環保合規。" />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-certification`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <NeoBadge color="magenta">CERT_STANDARDS_V1</NeoBadge>
          <h1 className="mt-8 font-black text-6xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter italic">
            EN13432<br/>
            VS<br/>
            <span className="text-[#D4FF00] drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">D6400</span>
          </h1>
          <p className="mt-12 text-2xl md:text-4xl font-black font-['JetBrains_Mono'] text-black max-w-3xl bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            EN13432 同 ASTM D6400 有咩分別？教品牌點樣根據目標市場選擇正確嘅認證，確保合規。
          </p>
          <div className="mt-16">
            <NeoButton variant="dark" to="/quote">獲取報價</NeoButton>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="p-8 border-b-4 border-black bg-[#D4FF00]">
              <h2 className="font-black text-3xl uppercase italic">THE_COMPARISON</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['JetBrains_Mono'] text-sm">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-6 border-r border-gray-800">項目</th>
                    <th className="p-6 border-r border-gray-800">EN 13432 (EU)</th>
                    <th className="p-6">ASTM D6400 (US)</th>
                  </tr>
                </thead>
                <tbody className="divide-y-4 divide-black">
                  <tr>
                    <td className="p-6 font-black border-r-4 border-black">降解率</td>
                    <td className="p-6 border-r-4 border-black">6 個月內 90%</td>
                    <td className="p-6">180 日內 90%</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-black border-r-4 border-black">碎裂度</td>
                    <td className="p-6 border-r-4 border-black">12 星期 2mm 篩網</td>
                    <td className="p-6">12 星期 2mm 篩網</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-black border-r-4 border-black">適用市場</td>
                    <td className="p-6 border-r-4 border-black">歐、澳、亞</td>
                    <td className="p-6">北美市場必備</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#D4FF00] border-b-8 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none mb-12 italic text-black">
            GET_THE<br/>PROOF.
          </h2>
          <NeoButton variant="dark" to="/quote">獲取專業報價</NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableCertificationFAQPage
