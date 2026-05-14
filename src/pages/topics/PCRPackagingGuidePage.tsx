import React from 'react';
import { Package, Recycle, CheckCircle, Info, AlertCircle, ShoppingBag } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const PCRPackagingGuidePage: React.FC = () => {
  const sections = [
    {
      id: 'what-is-pcr',
      title: 'PCR 包裝係咩？',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            <strong>PCR (Post-Consumer Recycled)</strong> 指嘅係「消費後回收塑膠」。同一般嘅工廠廢料回收（PIR）唔同，PCR 係由消費者用完、掉棄，再經由回收系統處理而成嘅再生塑膠。
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
            <h4 className="font-bold text-primary-900 mb-2 italic">PCR 嘅核心價值：</h4>
            <p className="text-sm">
              每一噸 PCR 嘅使用，都代表減少咗一噸原生塑膠（Virgin Plastic）嘅生產，並賦予廢棄物第二次生命，係實現循環經濟（Circular Economy）嘅關鍵物料。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'suitability',
      title: 'PCR 適合邊類產品？',
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            雖然 PCR 非常環保，但由於再生過程嘅特性，品牌喺選擇時需要考慮產品類型：
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-3">最佳應用領域</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-center gap-2 font-medium">✨ 美容與個人護理（洗頭水、乳液）</li>
                <li className="flex items-center gap-2 font-medium">✨ 家居清潔用品</li>
                <li className="flex items-center gap-2 font-medium">✨ 電子產品外包裝</li>
                <li className="flex items-center gap-2 font-medium">✨ 非直接接觸食品嘅二次包裝</li>
              </ul>
            </div>
            <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-3">食品級 PCR 注意事項</h4>
              <p className="text-sm text-neutral-600">
                如果用於直接接觸食品，必須確保 PCR 來源符合 FDA 或 EFSA 認證。我哋提供經過嚴格過濾同去味處理嘅高品質 PCR，確保安全衛生。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'PCR 包裝實拍',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <ClickableImage 
            src="/imgs/seo-photos/organic/organic_white_tea_pouch.webp" 
            alt="PCR content packaging example" 
            className="w-full h-80 object-cover rounded-xl border border-neutral-200"
          />
          <div className="bg-neutral-100 p-4 rounded-lg">
            <p className="text-xs text-neutral-500 text-center">
              通常 PCR 含量可達 30%-50%，喺環保同包裝韌性之間達到完美平衡。
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="PCR 包裝係咩？適合邊類產品？PCR 材質指南"
      description="深入了解 PCR (消費後回收塑膠) 包裝。由定義、優點到行業適用性分析，助品牌透過再生材料實現可持續發展目標。"
      heroTitle="PCR：賦予塑膠第二次生命"
      heroSubtitle="減少原生塑膠消耗，提升品牌環保形象，實現真正嘅循環包裝。"
      heroImage="/imgs/seo-photos/organic/organic_white_tea_pouch.webp"
      introSummary="PCR 物料已經成為歐美大牌嘅標配。了解點樣喺你嘅包裝中加入 PCR，係品牌升級嘅重要一步。"
      sections={sections}
      keywords={['PCR packaging', 'PCR 包裝', '消費後回收塑膠', '再生塑膠', '環保包裝材質', '循環經濟']}
      canonicalUrl="https://achievepack.com/topics/pcr-packaging"
      ctaTitle="想諮詢 PCR 含量同物料性能？"
      ctaButtonText="獲取樣版與報價"
      ctaButtonUrl="/quote"
    />
  );
};

export default PCRPackagingGuidePage;
