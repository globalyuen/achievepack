import React from 'react';
import { Recycle, CheckCircle, Info, Settings, ArrowRight } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const RecyclablePackagingGuidePage: React.FC = () => {
  const sections = [
    {
      id: 'design-principles',
      title: '可回收包裝嘅設計原則',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            一個包裝係咪真係「可回收」，好大程度上取決於設計初期嘅物料選擇。如果將唔同類型嘅塑膠複合埋一齊，回收機器就無法分離處理。
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h4 className="text-blue-900 font-bold mb-3 uppercase text-xs tracking-widest">DO: 單一物料設計</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">✅ 使用 100% Mono-PE 或 Mono-PP</li>
                <li className="flex items-center gap-2">✅ 使用可回收嘅數碼印刷油墨</li>
                <li className="flex items-center gap-2">✅ 使用與袋身相同材質嘅拉鍊</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <h4 className="text-red-900 font-bold mb-3 uppercase text-xs tracking-widest">DON'T: 增加處理難度</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">❌ 混合 PET/PE 或 PET/VMPET 結構</li>
                <li className="flex items-center gap-2">❌ 使用大面積無法分離嘅鋁箔</li>
                <li className="flex items-center gap-2">❌ 貼上難以移除嘅非同質標籤</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technology',
      title: '點樣設計先更易被處理？',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            我哋建議品牌採用以下 3 個策略，去提升包裝喺現實回收體系中嘅「可處理性」（Processability）：
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="font-bold text-primary-600">01</div>
              <div>
                <h4 className="font-bold">轉用 Mono-Material 結構</h4>
                <p className="text-sm text-neutral-600">透過優化拉伸工藝，單一材質都可以達到多層複合料嘅阻隔性能，且回收價值極高。</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="font-bold text-primary-600">02</div>
              <div>
                <h4 className="font-bold">簡化油墨與塗層</h4>
                <p className="text-sm text-neutral-600">減少油墨覆蓋率，並使用水性或無溶劑塗層，減少回收過程中嘅化學污染。</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="font-bold text-primary-600">03</div>
              <div>
                <h4 className="font-bold">標準化標籤指引</h4>
                <p className="text-sm text-neutral-600">喺袋身印上清晰嘅回收標誌（例如 How2Recycle），引導消費者正確棄置。</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'gallery',
      title: '可回收包裝實拍',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClickableImage 
            src="/imgs/seo-photos/organic/organic_granola_pouch.webp" 
            alt="Recyclable mono-PE granola pouch" 
            className="rounded-xl border border-neutral-200"
          />
          <ClickableImage 
            src="/imgs/seo-photos/pet-food/pet_treats_pouch_v2.webp" 
            alt="Recyclable pet treats pouch" 
            className="rounded-xl border border-neutral-200"
          />
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="可回收包裝點樣設計先更易被處理？專業設計指南"
      description="了解可回收包裝的核心設計原則。從 Mono-PE 物料選擇到標籤標示，教你如何設計出真正符合回收體系、高品質的環保包裝。"
      heroTitle="可回收包裝設計指南"
      heroSubtitle="由物料源頭開始，設計出真正能夠進入循環經濟嘅優質包裝。"
      heroImage="/imgs/seo-photos/organic/organic_granola_pouch.webp"
      introSummary="設計一個「寫住可回收」嘅袋好簡單，但設計一個「真正被回收」嘅袋好難。呢本指南會從專業角度出發，教你如何優化產品設計。"
      sections={sections}
      keywords={['recyclable packaging', '可回收包裝', 'Mono-PE', '包裝設計', '循環經濟', '環保包裝設計']}
      canonicalUrl="https://achievepack.com/topics/recyclable-packaging"
      ctaTitle="想為你嘅產品定制可回收方案？"
      ctaButtonText="索取樣版套裝"
      ctaButtonUrl="/sample"
    />
  );
};

export default RecyclablePackagingGuidePage;
