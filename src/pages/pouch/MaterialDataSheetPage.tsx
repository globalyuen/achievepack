import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDomain } from '../../utils/domain';
import Footer from '../../components/Footer';
import StoreFooter from '../../components/StoreFooter';

export default function MaterialDataSheetPage() {
  const isPouch = getDomain() === 'pouch';
  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <Helmet>
        <title>Material Data Sheet - 60gsm Kraft Paper + 50μ Compostable Film | Achieve Pack</title>
        <meta name="description" content="Technical data sheet for 60gsm Kraft Paper + 50μ Compostable Inner Film packaging material." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link to={isPouch ? "/" : "/store"} className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-600 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden mb-16">
          {/* Header */}
          <div className="bg-primary-900 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <img src="/ap-logo-white.webp" alt="Achieve Pack Logo" className="h-10 mb-4" />
                <h1 className="text-3xl font-bold mb-2">Technical Data Sheet</h1>
                <p className="text-primary-200">Preliminary Specification</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <p className="text-sm text-primary-200">Last Update: March 2026</p>
                <a 
                  href="/pdfs/material_data_sheet.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-white text-primary-900 px-4 py-2 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Product Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b border-neutral-200 pb-2">
                Product Overview / 产品概览
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p><strong>Product name / 产品名称:</strong> 60gsm Kraft Paper + 50μ Compostable Inner Film</p>
                <p><strong>Structure / 结构:</strong> Kraft paper / 牛皮纸 + Compostable film / 可堆肥薄膜</p>
                <p><strong>Calculation basis / 计算基准:</strong> Nominal total thickness 0.13mm (130μ) for 1 m².</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Properties */}
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 border-b border-neutral-200 pb-2">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Paper based compostable laminate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">100% Home and Industrial Compostable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Natural Kraft Paper appearance and texture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Excellent sealing properties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-neutral-700">Printable surface</span>
                  </li>
                </ul>
              </div>

              {/* Applications & Certs */}
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-4 border-b border-neutral-200 pb-2">
                  Common Usage / 应用场景
                </h3>
                <ul className="space-y-2 mb-6 text-neutral-700">
                  <li>• Dry foods, snack foods, baked goods</li>
                  <li>• Coffee beans, ground coffee, and tea</li>
                  <li>• Confectionery and chocolates</li>
                  <li>• Grains, nuts & seeds, dried fruits</li>
                </ul>

                <h3 className="text-xl font-bold text-primary-900 mb-4 border-b border-neutral-200 pb-2">
                  Certifications
                </h3>
                <div className="flex gap-4">
                  <img src="/imgs/bpi.svg" alt="BPI Certified" className="h-12 object-contain" />
                  <img src="/bcorp.svg" alt="B Corp" className="h-12 object-contain" />
                </div>
              </div>
            </div>

            {/* Visual Structure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b border-neutral-200 pb-2">
                Material Structure Visualization
              </h2>
              <div className="bg-neutral-50 rounded-xl p-8 flex justify-center items-center border border-neutral-200">
                <img 
                  src="https://achievepack.com/imgs/store/barrier/2-paper.webp" 
                  alt="Kraft Paper + Compostable Film Structure" 
                  className="max-w-full h-auto max-h-64 object-contain shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Construction Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b border-neutral-200 pb-2">
                Construction & Material Data / 结构与材料数据
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary-50">
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900">Layer / 层级</th>
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900">Material / 材料</th>
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900 text-center">Basis weight<br/>克重 (g/m²)</th>
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900 text-center">Thickness<br/>厚度 (mm)</th>
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900 text-center">Thickness<br/>厚度 (μm)</th>
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900 text-center">Weight share<br/>重量占比 (%)</th>
                      <th className="p-3 border border-neutral-200 font-semibold text-primary-900 text-center">Thickness share<br/>厚度占比 (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr>
                      <td className="p-3 border border-neutral-200 font-medium">Outer / 外层</td>
                      <td className="p-3 border border-neutral-200">Kraft paper 牛皮纸 (uncoated)</td>
                      <td className="p-3 border border-neutral-200 text-center">60</td>
                      <td className="p-3 border border-neutral-200 text-center">0.08</td>
                      <td className="p-3 border border-neutral-200 text-center">80</td>
                      <td className="p-3 border border-neutral-200 text-center">46.2</td>
                      <td className="p-3 border border-neutral-200 text-center">61.5</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-medium">Inner / 内层</td>
                      <td className="p-3 border border-neutral-200">Compostable film 可堆肥薄膜 (50μ, ρ=1.4)</td>
                      <td className="p-3 border border-neutral-200 text-center">70</td>
                      <td className="p-3 border border-neutral-200 text-center">0.05</td>
                      <td className="p-3 border border-neutral-200 text-center">50</td>
                      <td className="p-3 border border-neutral-200 text-center">53.8</td>
                      <td className="p-3 border border-neutral-200 text-center">38.5</td>
                    </tr>
                    <tr className="bg-neutral-50 font-semibold text-primary-900">
                      <td className="p-3 border border-neutral-200">Total / 合计</td>
                      <td className="p-3 border border-neutral-200">Laminated structure 复合结构</td>
                      <td className="p-3 border border-neutral-200 text-center">130</td>
                      <td className="p-3 border border-neutral-200 text-center">0.13 (nominal)</td>
                      <td className="p-3 border border-neutral-200 text-center">130</td>
                      <td className="p-3 border border-neutral-200 text-center">100</td>
                      <td className="p-3 border border-neutral-200 text-center">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              <div className="mt-6 bg-neutral-50 p-4 rounded-lg text-sm text-neutral-600 border border-neutral-200">
                <p className="font-semibold text-neutral-800 mb-2">Notes / 说明：</p>
                <ul className="space-y-1">
                  <li>• 60gsm kraft paper typical thickness range 70–85μ; here nominal 80μ (0.08mm) taken as outer layer thickness.</li>
                  <li>• Compostable film thickness fixed at 50μ (0.05mm); with density 1.4g/cm³, this gives approx. 70g/m² basis weight.</li>
                  <li>• Thickness share = layer thickness ÷ total thickness × 100%（例如：纸层 0.08 / 0.13 ≈ 61.5%，膜层 0.05 / 0.13 ≈ 38.5%）。</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 pt-8 flex flex-col items-center justify-center text-center">
              <p className="text-neutral-500 mb-2">For further details, please contact Achieve Pack's technical team.</p>
              <div className="flex gap-6 text-sm text-neutral-600 font-medium">
                <span>{isPouch ? 'www.pouch.eco' : 'www.achievepack.com'}</span>
                <span>ryan@achievepack.com</span>
                <span>Tel: +852 6970 4411</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global Footer */}
      {isPouch ? <Footer /> : <StoreFooter />}
    </div>
  );
}
