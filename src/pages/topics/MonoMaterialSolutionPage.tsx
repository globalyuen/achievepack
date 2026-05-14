import React from 'react';
import { Layers, Recycle, Zap, CheckCircle, Info, ShieldCheck } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const MonoMaterialSolutionPage: React.FC = () => {
  const sections = [
    {
      id: 'why-mono',
      title: '點解單一物料包裝更受品牌歡迎？',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            傳統包裝通常由 3-4 層唔同嘅塑膠（例如 PET, Nylon, Aluminum, PE）複合而成。雖然性能好，但極難回收。<strong>單一物料（Mono-Material）</strong>係目前兼顧環保同性能嘅最佳平衡方案。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white border-b-4 border-primary-500 rounded-xl shadow-sm">
              <Recycle className="h-8 w-8 text-primary-600 mb-3" />
              <h4 className="font-bold mb-2">100% 可回收</h4>
              <p className="text-xs text-neutral-500">因為係單一材質，可以直接進入軟塑膠回收體系，無需分離。</p>
            </div>
            <div className="p-6 bg-white border-b-4 border-blue-500 rounded-xl shadow-sm">
              <Zap className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2">卓越阻隔性能</h4>
              <p className="text-xs text-neutral-500">透過先進嘅拉伸技術（MDO），Mono-PE 都可以達到極高嘅防潮防氧效果。</p>
            </div>
            <div className="p-6 bg-white border-b-4 border-green-500 rounded-xl shadow-sm">
              <ShieldCheck className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-bold mb-2">符合未來法規</h4>
              <p className="text-xs text-neutral-500">各國政府正逐步禁止難以回收嘅複合包裝，Mono-Material 係「未來合規」嘅選擇。</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Mono-Material 嘅應用範疇',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 font-medium">
            我哋提供嘅 Mono-PE 同 Mono-PP 方案已經成熟應用於以下行業：
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
              <img src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <h5 className="font-bold">精品零食與乾果</h5>
                <p className="text-xs text-neutral-500">保持爽脆口感，延長保質期。</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
              <img src="/imgs/seo-photos/pet-food/pet_treats_pouch_v2.webp" className="w-16 h-16 rounded-lg object-cover" />
              <div>
                <h5 className="font-bold">寵物食品與零食</h5>
                <p className="text-xs text-neutral-500">提供卓越嘅耐穿刺性同防潮效果。</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="點解單一物料包裝更受品牌歡迎？Mono-Material 方案全解析"
      description="了解 Mono-Material 單一物料包裝如何成為品牌環保轉型的首選。涵蓋 Mono-PE 阻隔性能、回收優勢以及行業應用案例。"
      heroTitle="單一物料：環保包裝嘅新標準"
      heroSubtitle="兼顧高性能同 100% 可回收，幫你嘅品牌喺可持續發展道路上領先一步。"
      heroImage="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp"
      introSummary="喺全球禁塑令同環保法規日益嚴格嘅今天，單一物料（Mono-Material）已經由「可選」變成了「必選」。"
      sections={sections}
      keywords={['mono-material packaging', '單一物料包裝', 'Mono-PE', 'Mono-PP', '可回收包裝', '包裝解決方案']}
      canonicalUrl="https://achievepack.com/topics/mono-material-packaging"
      ctaTitle="想諮詢專業嘅單一物料方案？"
      ctaButtonText="聯絡包裝專家"
      ctaButtonUrl="/#contact"
    />
  );
};

export default MonoMaterialSolutionPage;
