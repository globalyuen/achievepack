import React from 'react';
import { Leaf, ShieldCheck, AlertTriangle, CheckCircle, Info, HelpCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useCalendly } from '../../contexts/CalendlyContext';

const SustainablePackagingPillarPage: React.FC = () => {
  const { openCalendly } = useCalendly();

  const sections = [
    {
      id: 'what-is-sustainable',
      title: '什麼是可持續包裝？',
      icon: <HelpCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            可持續包裝（Sustainable Packaging）唔單止係「綠色」咁簡單。佢涵蓋咗由原材料採購、生產過程、物流配送到最後廢棄處理嘅成個生命週期。
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-xl">
            <h4 className="text-primary-900 font-bold mb-2">可持續包裝嘅三大標準：</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 font-bold text-primary-800">1. 環境影響（Environmental Impact）：減少資源消耗同碳足跡。</li>
              <li className="flex items-center gap-2 font-bold text-primary-800">2. 功能性（Functionality）：保護產品，減少浪費。</li>
              <li className="flex items-center gap-2 font-bold text-primary-800">3. 社會責任（Social Responsibility）：生產過程公平透明。</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-to-choose',
      title: '品牌點樣揀先唔會踩雷？',
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            好多品牌為咗「綠色」而盲目轉用某啲物料，但如果唔考慮回收設施，反而會造成更多問題。以下係避免「漂綠」（Greenwashing）嘅 4 個要點：
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900">1. 確認認證（Certification Check）</h4>
              <p className="text-sm text-neutral-600 mt-2">確保物料有 EN13432 或 BPI 等國際認證，而唔係口頭話「可降解」。</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900">2. 考慮廢物處理流向</h4>
              <p className="text-sm text-neutral-600 mt-2">你嘅目標市場有無相應嘅回收設施？Mono-PE 會比複合塑膠更容易進入回收體系。</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900">3. 物料透明度</h4>
              <p className="text-sm text-neutral-600 mt-2">了解每一層物料嘅成分，避免使用含 PFAS 或無法回收嘅膠水。</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900">4. 生命周期分析</h4>
              <p className="text-sm text-neutral-600 mt-2">考慮由生產到回收嘅整體碳足跡，有時更輕嘅包裝比「可生物降解」但好重嘅包裝更環保。</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-study',
      title: '成功案例展示',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="relative group">
            <ClickableImage 
              src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
              alt="Sustainable coffee packaging solution" 
              className="w-full h-96 object-cover rounded-2xl border border-neutral-200 shadow-lg"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
              <h4 className="font-bold text-primary-900">真實轉型方案</h4>
              <p className="text-sm text-neutral-700 mt-1">
                某精品咖啡品牌由複合塑膠轉用 100% 可回收 Mono-PE 袋，唔單止解決咗回收難題，更將包裝重量減少咗 15%。
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "可持續包裝係唔係一定好貴？",
      answer: "初期物料成本可能高 10-20%，但透過優化設計減少材料浪費，同埋品牌形象提升帶來嘅溢價，長遠嚟講係一項值得嘅投資。"
    },
    {
      question: "可生物降解係咪最好嘅選擇？",
      answer: "唔一定。如果你嘅市場無工業堆肥設施，可回收（Recyclable）物料如 Mono-PE 往往係更實際嘅可持續方案。"
    }
  ];

  return (
    <SEOPageLayout
      title="可持續包裝是什麼？品牌點樣揀先唔會踩雷"
      description="深入探討可持續包裝定義，教你如何區分真實與虛假的環保包裝，避免品牌漂綠陷阱。涵蓋可堆肥、可回收及 PCR 材料全攻略。"
      heroTitle="可持續包裝全攻略"
      heroSubtitle="拒絕漂綠，為你嘅品牌揀選真正具備證據支持嘅環保包裝方案。"
      heroImage="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp"
      introSummary="喺追求環保嘅大趨勢下，好多品牌都想轉用可持續包裝。但市場上資訊混亂，品牌一唔小心就會陷入「漂綠」陷阱。呢篇文會幫你理清思路。"
      sections={sections}
      faqs={faqs}
      keywords={['sustainable packaging', '可持續包裝', '環保包裝', '漂綠', 'greenwashing', '品牌包裝設計']}
      canonicalUrl="https://achievepack.com/topics/sustainable-packaging"
    />
  );
};

export default SustainablePackagingPillarPage;
