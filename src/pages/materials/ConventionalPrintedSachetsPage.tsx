import React, { useState } from 'react';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle, Check, HelpCircle, User } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConventionalPrintedSachetsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeImgTab, setActiveImgTab] = useState<number>(0);

  const getTranslationArray = <T = string,>(key: string): T[] => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? (val as T[]) : [];
  };

  const images = [
    {
      src: '/imgs/store/products/small-sachet-conventional-thumbnail-1.png',
      alt: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.tabs.gold.alt'),
      label: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.tabs.gold.label')
    },
    {
      src: '/imgs/store/products/small-sachet-conventional-thumbnail-2.png',
      alt: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.tabs.digital.alt'),
      label: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.tabs.digital.label')
    },
    {
      src: '/imgs/store/products/small-sachet-conventional-thumbnail-3.png',
      alt: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.tabs.traditional.alt'),
      label: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.tabs.traditional.label')
    }
  ];

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.overview.title'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-base leading-relaxed">
            {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.overview.p1')}
          </p>
          <p>
            {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.overview.p2')}
          </p>
          
          <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 mt-4 space-y-2">
            <h4 className="font-bold text-primary-900 mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary-600" />
              {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.overview.boxTitle')}
            </h4>
            <p className="text-xs text-primary-800 leading-relaxed">
              {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.overview.boxText')}
            </p>
            <div className="text-[10px] text-amber-700 font-bold bg-amber-50 border border-amber-200 p-2 rounded-lg mt-2">
              {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.overview.warningText')}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'custom-pricing',
      title: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.title'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.intro')}</p>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {/* Hot Stamping Card */}
            <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 border border-amber-200 text-amber-800">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.badge')}
                </span>
                <h4 className="font-bold text-neutral-900 mt-2">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.title')}
                </h4>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.desc')}
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.p500')}</span>
                    <span className="text-neutral-900 font-bold">$159.60 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.p1000')}</span>
                    <span className="text-neutral-900 font-bold">$210.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.p2000')}</span>
                    <span className="text-neutral-900 font-bold">$285.60 USD</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-200/60 font-semibold">
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.setup')}<br />
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.hotStamping.moq')}
              </div>
            </div>

            {/* Digital Color Printing Card */}
            <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 border border-indigo-200 text-indigo-800">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.badge')}
                </span>
                <h4 className="font-bold text-neutral-900 mt-2">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.title')}
                </h4>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.desc')}
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.p1000')}</span>
                    <span className="text-neutral-900 font-bold">$231.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.p2000')}</span>
                    <span className="text-neutral-900 font-bold">$336.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.p3000')}</span>
                    <span className="text-neutral-900 font-bold">$441.00 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.p5000')}</span>
                    <span className="text-neutral-900 font-bold">$651.00 USD</span>
                  </div>
                  <div className="flex justify-between text-indigo-700">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.p10k')}</span>
                    <span className="font-black">$0.1092 / pc</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-200/60 font-semibold">
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.setup')}<br />
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.digitalColor.sampleFee')}
              </div>
            </div>

            {/* Traditional Gravure Card */}
            <div className="border border-neutral-200 rounded-xl p-4 bg-neutral-50/50 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 border border-emerald-200 text-emerald-800">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.badge')}
                </span>
                <h4 className="font-bold text-neutral-900 mt-2">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.title')}
                </h4>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.desc')}
                </p>
                <div className="mt-3 space-y-1.5 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.p50k')}</span>
                    <span className="text-emerald-700 font-bold">$1,890.00 USD</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.unitPrice')}</span>
                    <span className="font-bold">$0.0378 / pc</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 pt-2 border-t border-neutral-200/60 font-semibold">
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.setup')}<br />
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.traditionalGravure.moq')}
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-800 leading-relaxed font-semibold">
            {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.options.title')}
            <ul className="list-disc pl-5 mt-1 space-y-0.5">
              <li>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.options.roundCorners')}</li>
              <li>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.customPricing.options.highVolume')}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'unprinted-skus',
      title: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.title'),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.p1')}
          </p>

          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mt-4">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900 text-sm">
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.tableHeader')}
              </h4>
            </div>
            <div className="overflow-x-auto text-xs">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-neutral-600 uppercase">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.colSku')}
                    </th>
                    <th className="px-4 py-3 text-center font-bold text-neutral-600 uppercase">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.colQty')}
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-neutral-600 uppercase">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.colUnitPrice')}
                    </th>
                    <th className="px-4 py-3 text-right font-bold text-neutral-600 uppercase">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.colTotalCost')}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-150 font-semibold">
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row1.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row1.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$2.70 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row2.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row2.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row3.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row3.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row4.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row4.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row5.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row5.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row6.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row6.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row7.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row7.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row8.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row8.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row9.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row9.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr className="bg-neutral-50/55">
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row10.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row10.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-neutral-800">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row11.sku')}
                    </td>
                    <td className="px-4 py-3 text-center text-neutral-500">
                      {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.unprintedSkus.rows.row11.qty')}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-500">$0.30 USD</td>
                    <td className="px-4 py-3 text-right text-emerald-600 font-bold">$30.00 USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.title'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.intro')}</p>

          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
            {/* Tabs Header */}
            <div className="flex border-b bg-neutral-50 text-xs font-bold">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgTab(idx)}
                  className={`flex-1 py-3 px-2 border-r last:border-r-0 transition ${
                    activeImgTab === idx ? 'bg-white border-b-2 border-primary-600 text-primary-700 font-black' : 'text-neutral-500 hover:bg-neutral-100'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
            
            {/* Dynamic Image View */}
            <div className="p-4 flex flex-col items-center">
              <div className="relative max-w-md w-full aspect-square border border-neutral-150 rounded-lg overflow-hidden bg-neutral-50">
                <img 
                  src={images[activeImgTab].src} 
                  alt={images[activeImgTab].alt} 
                  className="w-full h-full object-cover p-2"
                />
              </div>
              <p className="text-[11px] text-neutral-500 font-bold text-center mt-3 leading-relaxed">
                {t('seoPages.pages.conventionalPrintedSachets.achievePack.sections.visualGallery.caption', { alt: images[activeImgTab].alt })}
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = getTranslationArray<{ question: string; answer: string }>('seoPages.pages.conventionalPrintedSachets.achievePack.faqs');

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <SEOPageLayout
        title={t('seoPages.pages.conventionalPrintedSachets.achievePack.seo.title')}
        description={t('seoPages.pages.conventionalPrintedSachets.achievePack.seo.description')}
        keywords={getTranslationArray<string>('seoPages.pages.conventionalPrintedSachets.achievePack.seo.keywords')}
        canonicalUrl="https://achievepack.com/materials/conventional-printed-sachets"
        heroTitle={t('seoPages.pages.conventionalPrintedSachets.achievePack.seo.heroTitle')}
        heroSubtitle={t('seoPages.pages.conventionalPrintedSachets.achievePack.seo.heroSubtitle')}
        heroImage="/imgs/store/products/small-sachet-conventional-thumbnail-1.png"
        heroImageAlt={t('seoPages.pages.conventionalPrintedSachets.achievePack.seo.heroTitle')}
        introSummary={t('seoPages.pages.conventionalPrintedSachets.achievePack.seo.introSummary')}
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        ctaTitle={t('seoPages.pages.conventionalPrintedSachets.achievePack.cta.title')}
        ctaDescription={t('seoPages.pages.conventionalPrintedSachets.achievePack.cta.description')}
        ctaButtonText={t('seoPages.pages.conventionalPrintedSachets.achievePack.cta.buttonText')}
        ctaButtonUrl="/store/product/small-sachet-conventional"
        heroBgColor="#0f172a"
      />
    </div>
  );
};

export default ConventionalPrintedSachetsPage;

