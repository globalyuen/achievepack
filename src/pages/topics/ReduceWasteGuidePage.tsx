import React from 'react';
import { Leaf, Info, CheckCircle, ArrowRight, ShieldAlert, Zap } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const ReduceWasteGuidePage: React.FC = () => {
  const sections = [
    {
      id: 'why-reduce',
      title: '點樣減少包裝浪費而唔影響產品保護？',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            過度包裝（Over-packaging）唔單止浪費成本，更會損害品牌形象。但減少包裝唔代表要犧牲保護。我哋可以透過以下 3 個維度嚟優化：
          </p>

          <div className="space-y-8 mt-8">
            <div className="flex gap-6">
              <div className="bg-primary-100 p-4 rounded-full h-fit">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">1. 優化尺寸比例（Right-sizing）</h4>
                <p className="text-sm">
                  好多品牌為咗美觀而選擇過大嘅袋，導致裡面充斥大量空氣。精準嘅尺寸計算可以減少 10-20% 嘅物料浪費，同時降低運輸成本。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-blue-100 p-4 rounded-full h-fit">
                <ShieldAlert className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">2. 使用高效阻隔材料</h4>
                <p className="text-sm">
                  透過先進嘅物料科學，我哋可以用更薄嘅複合層達到相同（甚至更好）嘅保鮮效果。減少厚度（Down-gauging）係最直接嘅減廢方式。
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-green-100 p-4 rounded-full h-fit">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">3. 減少非必要裝飾</h4>
                <p className="text-sm">
                  考慮移除唔必要嘅塑膠提手、過大嘅裝飾性標籤，轉而採用更精練嘅一體化設計。
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: '精簡包裝案例',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <ClickableImage 
            src="/imgs/seo-photos/organic/organic_granola_pouch.webp" 
            alt="Optimized size packaging example" 
            className="w-full h-80 object-cover rounded-xl border border-neutral-200"
          />
          <div className="bg-neutral-100 p-4 rounded-lg italic text-sm text-neutral-600 text-center">
            「Right-sizing」方案：減少 15% 膠膜使用量，每年為品牌節省數萬美金物流成本。
          </div>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="點樣減少包裝浪費而唔影響產品保護？減廢全攻略"
      description="探討如何透過精準尺寸、高效物料及精簡設計來減少包裝浪費。幫助品牌在降低成本的同時，提升環保表現並確保產品安全。"
      heroTitle="減少包裝浪費：精益求精"
      heroSubtitle="透過科學設計，喺最少嘅物料消耗下，提供最強大嘅產品保護。"
      heroImage="/imgs/seo-photos/organic/organic_granola_pouch.webp"
      introSummary="減少包裝廢棄物（Reduce Waste）唔單止係為咗地球，更加係為咗品牌嘅營運效益。"
      sections={sections}
      keywords={['reduce packaging waste', '減少包裝浪費', '過度包裝', '包裝優化', '環保包裝設計', '物流成本優化']}
      canonicalUrl="https://achievepack.com/topics/reduce-packaging-waste"
      ctaTitle="想為你嘅產品進行包裝優化審核？"
      ctaButtonText="了解更多方案"
      ctaButtonUrl="/blog"
    />
  );
};

export default ReduceWasteGuidePage;
