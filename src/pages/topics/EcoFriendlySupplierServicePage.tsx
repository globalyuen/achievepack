import React from 'react';
import { Leaf, ShieldCheck, AlertTriangle, CheckCircle, Info, Search } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const EcoFriendlySupplierServicePage: React.FC = () => {
  const sections = [
    {
      id: 'verify-authenticity',
      title: '環保包裝供應商點分真定假？',
      icon: <Search className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            市場上好多供應商都話自己係「環保」，但當要求提供證明時，往往只係模糊其詞。要分辨真假環保供應商，你需要查核以下 3 大核心指標：
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white border-b-4 border-green-500 rounded-xl shadow-sm">
              <ShieldCheck className="h-8 w-8 text-green-600 mb-3" />
              <h4 className="font-bold mb-2 text-sm uppercase">1. 第三方認證</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                一定要有第三方機構核發嘅證書（如 BPI, TUV, GRS），並確認證書上嘅公司名同生產商一致。
              </p>
            </div>
            <div className="p-6 bg-white border-b-4 border-blue-500 rounded-xl shadow-sm">
              <Info className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold mb-2 text-sm uppercase">2. 物料溯源（Traceability）</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                真嘅環保供應商可以提供 TC (Transaction Certificate) 或物料清單，證明 PCR 或可堆肥物料嘅真實來源。
              </p>
            </div>
            <div className="p-6 bg-white border-b-4 border-amber-500 rounded-xl shadow-sm">
              <AlertTriangle className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-bold mb-2 text-sm uppercase">3. 實驗室實測數據</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                除咗證書，仲要有實際嘅阻隔性能、拉伸測試等數據，證明環保物料同傳統料一樣耐用。
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'our-commitment',
      title: 'Achieve Pack：拒絕漂綠，數據說話',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            我哋深知環保係一項長期承諾，而唔係噱頭。我哋提供：
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm">完整的認證鏈</h5>
                <p className="text-xs text-neutral-500">由 BPI 到 B Corp，我哋嘅每一個環保聲明都有據可查。</p>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-sm">透明的物料報告</h5>
                <p className="text-xs text-neutral-500">為客戶提供詳細嘅物料規格表（TDS）同埋環保證書副本。</p>
              </div>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="環保包裝供應商點分真定假？分辨漂綠供應商指南"
      description="教品牌如何審核環保包裝供應商的真實性。從查核第三方認證、物料溯源到實驗室數據，教你避開漂綠陷阱，選擇真正具備證據支持的供應商。"
      heroTitle="環保供應商：誠信與證據"
      heroSubtitle="拒絕含糊不清嘅環保口號，為你嘅品牌選擇具備真實證據支持嘅包裝伙伴。"
      heroImage="/imgs/company/bpi/bpi.svg"
      introSummary="喺可持續發展嘅浪潮下，環保包裝供應商如雨後春筍，但質素良莠不齊。了解點樣分辨「真環保」，係品牌規避風險嘅關鍵。"
      sections={sections}
      keywords={['eco friendly packaging supplier', '環保包裝供應商', '漂綠辨別', '包裝供應商審核', '環保認證查核', 'Achieve Pack']}
      canonicalUrl="https://achievepack.com/topics/eco-friendly-packaging-supplier"
      ctaTitle="想為你嘅品牌進行環保包裝審核？"
      ctaButtonText="立即聯絡我們"
      ctaButtonUrl="/#contact"
    />
  );
};

export default EcoFriendlySupplierServicePage;
