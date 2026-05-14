import React from 'react';
import { Sprout, CheckCircle, Info, AlertCircle, HelpCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const CompostablePackagingBlogPage: React.FC = () => {
  const sections = [
    {
      id: 'the-truth',
      title: '可堆肥包裝真係可堆肥？你要知道嘅 5 件事',
      icon: <HelpCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8 text-neutral-700">
          <p className="text-lg leading-relaxed">
            好多品牌對「可堆肥」存在誤解，以為掉喺草堆就得。其實「可堆肥」背後有一套嚴謹嘅標準。轉用前，請先睇清楚呢 5 件事：
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-bold text-neutral-900">工業堆肥 vs 家用堆肥</h4>
                <p className="text-sm mt-1">大部分可堆肥袋需要喺 58°C 高溫、特定濕度嘅工業環境下先會分解。如果你嘅市場無呢啲設施，佢哋最後都係去咗堆填區。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-bold text-neutral-900">分解後係咪「零殘留」？</h4>
                <p className="text-sm mt-1">真正嘅可堆肥包裝分解後會變成二氧化碳、水同生物質，而唔係細碎嘅塑膠（Microplastics）。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-bold text-neutral-900">認證先係「通行證」</h4>
                <p className="text-sm mt-1">無 EN13432 或 ASTM D6400 標誌嘅「可堆肥」產品，基本上都可以視為無效聲稱。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-bold text-neutral-900">保質期（Shelf Life）限制</h4>
                <p className="text-sm mt-1">可堆肥袋會隨時間同環境濕度自然降解，通常保質期只有 12 個月左右，品牌需要優化庫存管理。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-bold text-neutral-900">對回收體系嘅威脅</h4>
                <p className="text-sm mt-1">可堆肥袋千祈唔好掉入藍色回收箱！佢會污染傳統塑膠回收鏈，降低 PCR 物料質量。</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-proof',
      title: '認證物料實測',
      icon: <Sprout className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <ClickableImage 
            src="/imgs/seo-photos/organic/organic_white_tea_pouch.webp" 
            alt="Certified compostable tea packaging" 
            className="w-full h-80 object-cover rounded-xl border border-neutral-200"
          />
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-sm text-amber-800 italic font-medium">
              圖中展示嘅係使用 Kraft Paper + PLA 結構嘅可堆肥茶袋，已獲得工業堆肥認證。
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="可堆肥包裝真係可堆肥？你要知道嘅 5 件事"
      description="深入淺出探討可堆肥包裝的真相。涵蓋工業堆肥與家用堆肥區別、認證標準以及品牌轉型時必須注意的 5 大核心知識。"
      heroTitle="可堆肥包裝：真相與實務"
      heroSubtitle="幫你撥開迷霧，選擇真正適合你品牌同市場嘅可堆肥方案。"
      heroImage="/imgs/seo-photos/organic/organic_white_tea_pouch.webp"
      introSummary="可堆肥包裝（Compostable Packaging）被視為解決塑膠污染嘅終極方案，但你真係了解佢點運作嗎？"
      sections={sections}
      keywords={['compostable packaging', '可堆肥包裝', 'EN13432', 'ASTM D6400', '工業堆肥', '家用堆肥']}
      canonicalUrl="https://achievepack.com/topics/compostable-packaging"
      ctaTitle="對可堆肥包裝有疑問？"
      ctaButtonText="立即諮詢專家"
      ctaButtonUrl="/#contact"
    />
  );
};

export default CompostablePackagingBlogPage;
