import React from 'react';
import { ShieldCheck, Info, HelpCircle, FileCheck, ArrowLeftRight, ArrowRight } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CompostableCertificationFAQPage: React.FC = () => {
  const sections = [
    {
      id: 'comparison',
      title: 'EN13432 同 ASTM D6400 有咩分別？',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            雖然兩者都係針對「工業堆肥」嘅國際標準，但佢哋分別代表咗歐洲（EN）同美國（ASTM）嘅不同檢測體系。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-200 text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="border border-neutral-200 p-3 text-left">標準項目</th>
                  <th className="border border-neutral-200 p-3 text-left font-bold text-primary-700">EN 13432 (歐洲)</th>
                  <th className="border border-neutral-200 p-3 text-left font-bold text-blue-700">ASTM D6400 (美國)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 p-3 font-semibold">生物降解性</td>
                  <td className="border border-neutral-200 p-3">6 個月內 90% 轉化為 CO2</td>
                  <td className="border border-neutral-200 p-3">180 日內 90% 轉化為 CO2</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-3 font-semibold">碎裂程度</td>
                  <td className="border border-neutral-200 p-3">3 個月內通過 2mm 篩網</td>
                  <td className="border border-neutral-200 p-3">12 星期內通過 2mm 篩網</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-3 font-semibold">毒性測試</td>
                  <td className="border border-neutral-200 p-3">嚴格限制重金屬含量</td>
                  <td className="border border-neutral-200 p-3">符合 EPA 標準嘅金屬限制</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-3 font-semibold">應用範圍</td>
                  <td className="border border-neutral-200 p-3">歐盟、英、澳等市場認可度高</td>
                  <td className="border border-neutral-200 p-3">北美市場（美、加）必備認證</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'why-important',
      title: '點解認證咁重要？',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">
            如果你嘅包裝無呢啲認證標誌，海關可能會拒絕入境，或者零售商會拒絕上架。最重要嘅係，認證確保咗：
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="p-4 bg-white border border-neutral-200 rounded-lg shadow-sm">
              <h5 className="font-bold text-neutral-900 mb-1">✅ 法律合規性</h5>
              <p className="text-xs text-neutral-500">符合各國對環保聲明（Green Claims）嘅監管，避免巨額罰款。</p>
            </li>
            <li className="p-4 bg-white border border-neutral-200 rounded-lg shadow-sm">
              <h5 className="font-bold text-neutral-900 mb-1">✅ 消費者信任</h5>
              <p className="text-xs text-neutral-500">透明嘅認證標誌能顯著提升品牌溢價同客戶忠誠度。</p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "如果我已經有 EN13432，仲需唔需要 ASTM D6400？",
      answer: "如果你嘅產品主要銷往美國市場，我哋建議同時持有 BPI 認證（基於 ASTM D6400）。如果係銷往歐洲或東南亞，EN13432 通常已經足夠。"
    },
    {
      question: "有無「家用堆肥」嘅認證？",
      answer: "有，常見嘅係 TUV AUSTRIA 嘅 OK compost HOME 認證。家用堆肥嘅要求比工業堆肥更嚴苛，因為家用堆肥溫度較低。"
    }
  ];

  return (
    <SEOPageLayout
      title="EN13432 同 ASTM D6400 有咩分別？可堆肥認證全攻略"
      description="詳盡比較 EN13432 與 ASTM D6400 兩大主流工業堆肥認證。教品牌如何根據目標市場選擇正確的認證，確保環保合規。"
      heroTitle="可堆肥認證：標準與差異"
      heroSubtitle="專業分析歐洲與美國標準，助你嘅品牌產品順利開拓全球環保市場。"
      heroImage="/imgs/company/bpi/bpi.svg"
      introSummary="喺揀選可堆肥包裝供應商時，認證文件係唯一嘅證明。了解 EN13432 同 ASTM D6400 嘅核心差異，係每位採購經理嘅必修課。"
      sections={sections}
      faqs={faqs}
      keywords={['compostable packaging certification', 'EN13432', 'ASTM D6400', 'BPI 認證', '工業堆肥標準', '環保認證']}
      canonicalUrl="https://achievepack.com/topics/compostable-certification"
      ctaTitle="需要認證證書或報價？"
      ctaButtonText="獲取專業報價"
      ctaButtonUrl="/quote"
    />
  );
};

export default CompostableCertificationFAQPage;
