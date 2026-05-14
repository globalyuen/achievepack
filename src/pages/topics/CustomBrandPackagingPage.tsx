import React from 'react';
import { Package, Sparkles, Printer, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const CustomBrandPackagingPage: React.FC = () => {
  const sections = [
    {
      id: 'one-stop-solution',
      title: '由物料到印刷一次搞掂',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            品牌定制包裝唔單止係印個 Logo。一個成功嘅方案需要考慮<strong>品牌定位、產品保護、成本控制同埋環保價值</strong>。我哋提供全流程嘅定制服務。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-bold">物料研發與選擇</h4>
                  <p className="text-sm text-neutral-500">根據你嘅產品特性（例如：有無咖啡閥、需要幾高阻隔性），推薦最合適嘅環保材質。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Printer className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold">數碼與銅版印刷</h4>
                  <p className="text-sm text-neutral-500">數碼印刷適合小批量、多 SKU；銅版印刷適合大批量、極致色彩精度。滿足不同階段嘅品牌需求。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Package className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold">結構與袋型定制</h4>
                  <p className="text-sm text-neutral-500">由平底袋（Flat Bottom）到站立袋（Stand-up Pouch），定制最適合貨架展示嘅形狀。</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ClickableImage 
                src="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp" 
                alt="Custom brand packaging example" 
                className="rounded-2xl border border-neutral-200 shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: '定制流程：簡單 4 步',
      icon: <ArrowRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { s: "Step 01", t: "諮詢與報價", d: "確定需求、數量同交期。" },
            { s: "Step 02", t: "設計與打樣", d: "提供刀版圖，確認印刷樣版。" },
            { s: "Step 03", t: "量產製造", d: "嚴格品控，高效生產。" },
            { s: "Step 04", t: "全球物流", d: "準時送到你嘅倉庫或工廠。" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white border border-neutral-200 rounded-xl">
              <span className="text-[10px] font-black text-primary-500 uppercase tracking-widest">{item.s}</span>
              <h5 className="font-bold text-sm mt-1">{item.t}</h5>
              <p className="text-[10px] text-neutral-500 mt-2">{item.d}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <SEOPageLayout
      title="品牌定制包裝方案：由物料到印刷一次搞掂 | 專業包裝服務"
      description="為品牌提供一站式定制包裝解決方案。涵蓋物料研發、數碼印刷、結構設計及全球物流。助初創及成長型品牌打造具備競爭力的包裝。"
      heroTitle="品牌定制包裝方案"
      heroSubtitle="專業團隊助你由零開始，打造最具視覺衝擊力同環保價值嘅產品包裝。"
      heroImage="/imgs/seo-photos/organic/organic_dried_mango_pouch.webp"
      introSummary="喺 Achieve Pack，我哋唔單止提供產品，更提供方案。無論你係初創品牌定係成熟企業，我哋都能滿足你對定制包裝嘅極致要求。"
      sections={sections}
      keywords={['custom packaging for brands', '品牌定制包裝', '包裝印刷服務', '包裝物料研發', '一站式包裝方案', 'Achieve Pack']}
      canonicalUrl="https://achievepack.com/topics/custom-packaging"
      ctaTitle="準備好開啟你嘅包裝項目？"
      ctaButtonText="立即開始項目"
      ctaButtonUrl="/quote"
    />
  );
};

export default CustomBrandPackagingPage;
