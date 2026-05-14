import React from 'react';
import { Factory, ShieldCheck, AlertTriangle, CheckCircle, Info, Users } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const FoodPackagingSupplierServicePage: React.FC = () => {
  const sections = [
    {
      id: 'how-to-choose',
      title: '食品包裝供應商點揀？',
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            食品安全關乎人命，亦都關乎品牌嘅生存。揀供應商唔可以只睇價錢，要睇佢有無完善嘅質量管理體系同埋對食品級物料嘅專業知識。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900">核心認證</h4>
              <p className="text-sm text-neutral-600 mt-2">供應商必須具備 BRCGS, ISO 22000 或相應嘅食品安全管理認證。</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900">追溯能力</h4>
              <p className="text-sm text-neutral-600 mt-2">每一批物料都要有追溯代碼，確保出現問題時可以快速反應。</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'common-mistakes',
      title: '品牌常見 6 個錯誤',
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {[
            { t: "只追求最低價", d: "低價往往代表回收料比例不明，或生產環境唔達標。" },
            { t: "忽視阻隔性能測試", d: "包裝唔夠防潮，會導致食品過期，造成更大損失。" },
            { t: "無索取證書副本", d: "只聽口頭承諾，無查核 BRC 或 FDA 證書嘅真實性。" },
            { t: "低估運輸損耗", d: "袋身封口強度唔夠，喺物流過程中容易爆開。" },
            { t: "忽視印刷油墨安全性", d: "使用非食品級油墨，有害物質可能會滲透入食品。" },
            { t: "無預留足夠交期", d: "急單往往會導致產品質量檢測被簡化。" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <h5 className="font-bold text-red-900 text-sm">{item.t}</h5>
              <p className="text-xs text-red-800 mt-1">{item.d}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'our-factory',
      title: '專業食品包裝生產線',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <ClickableImage 
            src="/imgs/factory/factory_machine_v1.webp" 
            alt="Food grade packaging production line" 
            className="w-full h-80 object-cover rounded-xl border border-neutral-200 shadow-lg"
          />
          <div className="bg-primary-50 p-6 rounded-xl text-center">
            <h4 className="font-bold text-primary-900 mb-2 italic">點解選擇 Achieve Pack？</h4>
            <p className="text-sm text-neutral-600">
              我哋擁有十多年食品包裝經驗，由無溶劑複合到萬級無塵車間，全方位守護你嘅產品安全。
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="食品包裝供應商點揀？品牌常見 6 個錯誤及解決方案"
      description="選擇食品包裝供應商的專業指南。分析品牌在採購過程中的常見錯誤，並提供如何審查 BRC、FDA 認證及阻隔性能的實務建議。"
      heroTitle="專業食品包裝供應方案"
      heroSubtitle="由原材料到生產工藝，全方位確保你嘅產品安全合規、新鮮持久。"
      heroImage="/imgs/factory/factory_machine_v1.webp"
      introSummary="喺食品行業，包裝唔單止係裝飾，更加係安全嘅屏障。揀啱供應商，就係揀啱咗品牌嘅未來。"
      sections={sections}
      keywords={['food packaging supplier', '食品包裝供應商', '食品安全認證', 'BRCGS', 'FDA 包裝', '包裝採購建議']}
      canonicalUrl="https://achievepack.com/topics/food-packaging-supplier"
      ctaTitle="想為你嘅品牌定制安全包裝？"
      ctaButtonText="立即諮詢與報價"
      ctaButtonUrl="/#contact"
    />
  );
};

export default FoodPackagingSupplierServicePage;
