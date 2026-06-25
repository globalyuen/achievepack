import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteLightbox from '../../components/QuoteLightbox'
import { 
  Download, Printer, CheckCircle, Calendar, Mail, Phone, 
  Package, ArrowRight, Star, Shield, Truck, Clock, 
  ChevronDown, ChevronUp, Leaf, Award, Globe
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const CoffeePouchQuotePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.coffeePouchQuote'
  const [activeTab, setActiveTab] = useState<'roto' | 'digital'>('roto')
  const [showSpecs, setShowSpecs] = useState(true)

  const quoteInfo = {
    quoteNumber: 'Q-2025-COFFEE-001',
    validUntil: '2025-03-31',
    createdAt: '2025-02-19'
  }

  const productSpecs = {
    shape: 'Flat Bottom Pouch',
    surface: 'Kraft Paper (Natural Brown)',
    closure: 'One-Sided Zipper',
    features: ['Degassing Valve', 'Food Grade', 'High Barrier'],
    material: 'Kraft Paper + PET/AL/PE',
    printColors: 'Up to 10 Colors',
    leadTime: '25-30 days after artwork approval'
  }

  const rotoPricing = [
    { product: '100g', size: '105 x 190 x 60', zipper: true, valve: true, qty: 10000, unitPrice: 0.41, total: 4128.00 },
    { product: '100g', size: '105 x 190 x 60', zipper: true, valve: true, qty: 15000, unitPrice: 0.39, total: 5856.00 },
    { product: '100g', size: '105 x 190 x 60', zipper: true, valve: true, qty: 20000, unitPrice: 0.38, total: 7632.00 },
    { product: '200g', size: '110 x 205 x 65', zipper: true, valve: true, qty: 10000, unitPrice: 0.43, total: 4303.20 },
    { product: '200g', size: '110 x 205 x 65', zipper: true, valve: true, qty: 15000, unitPrice: 0.41, total: 6168.00 },
    { product: '200g', size: '110 x 205 x 65', zipper: true, valve: true, qty: 20000, unitPrice: 0.40, total: 7968.00 },
    { product: '500g', size: '135 x 265 x 75', zipper: true, valve: true, qty: 10000, unitPrice: 0.54, total: 5431.20 },
    { product: '500g', size: '135 x 265 x 75', zipper: true, valve: true, qty: 15000, unitPrice: 0.52, total: 7776.00 },
    { product: '500g', size: '135 x 265 x 75', zipper: true, valve: true, qty: 20000, unitPrice: 0.51, total: 10206.00 },
    { product: '1kg', size: '145 x 330 x 100', zipper: false, valve: true, qty: 10000, unitPrice: 0.69, total: 6943.20 },
    { product: '1kg', size: '145 x 330 x 100', zipper: false, valve: true, qty: 15000, unitPrice: 0.67, total: 10098.00 },
    { product: '1kg', size: '145 x 330 x 100', zipper: false, valve: true, qty: 20000, unitPrice: 0.66, total: 13329.60 },
  ]

  const digitalPricing = [
    { product: '100g', size: '105 x 190 x 60', zipper: true, valve: true, qty: 100, unitPrice: 9.77, total: 977.10 },
    { product: '100g', size: '105 x 190 x 60', zipper: true, valve: true, qty: 1000, unitPrice: 1.48, total: 1480.56 },
    { product: '100g', size: '105 x 190 x 60', zipper: true, valve: true, qty: 10000, unitPrice: 0.56, total: 5656.50 },
    { product: '200g', size: '110 x 205 x 65', zipper: true, valve: true, qty: 100, unitPrice: 9.77, total: 977.10 },
    { product: '200g', size: '110 x 205 x 65', zipper: true, valve: true, qty: 1000, unitPrice: 1.52, total: 1523.70 },
    { product: '200g', size: '110 x 205 x 65', zipper: true, valve: true, qty: 10000, unitPrice: 0.61, total: 6091.20 },
    { product: '500g', size: '135 x 265 x 75', zipper: true, valve: true, qty: 100, unitPrice: 10.44, total: 1043.76 },
    { product: '500g', size: '135 x 265 x 75', zipper: true, valve: true, qty: 1000, unitPrice: 1.61, total: 1609.20 },
    { product: '500g', size: '135 x 265 x 75', zipper: true, valve: true, qty: 10000, unitPrice: 0.70, total: 6943.20 },
    { product: '1kg', size: '145 x 330 x 100', zipper: false, valve: true, qty: 100, unitPrice: 11.94, total: 1194.00 },
    { product: '1kg', size: '145 x 330 x 100', zipper: false, valve: true, qty: 1000, unitPrice: 2.05, total: 2044.60 },
    { product: '1kg', size: '145 x 330 x 100', zipper: false, valve: true, qty: 10000, unitPrice: 0.91, total: 9133.20 },
  ]


  const groupByProduct = (data: typeof rotoPricing) => {
    const grouped: Record<string, typeof rotoPricing> = {}
    data.forEach(item => {
      if (!grouped[item.product]) grouped[item.product] = []
      grouped[item.product].push(item)
    })
    return grouped
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white print:bg-white">
      <QuoteLightbox />
{/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white overflow-hidden print:hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/imgs/demo-site/coffee/a_achieve_detail_07_flatlay_3502987.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <img src="/ap-logo.svg" alt="Achieve Pack" className="h-10 brightness-0 invert" />
            <span className="text-amber-300">×</span>
            <span className="text-xl font-light tracking-wide">{t(`${p}.heroSubtitle`)}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t(`${p}.heroTitleLine1`)}<br />{t(`${p}.heroTitleLine2`)}</h1>
          <p className="text-xl text-amber-200 max-w-2xl">{t(`${p}.heroDesc`)}</p>
        </div>
      </div>

      {/* Print Header */}
      <div className="hidden print:block p-8 border-b">
        <div className="flex items-start justify-between">
          <div>
            <img src="/ap-logo-black.svg" alt="Achieve Pack" className="h-12 mb-4" />
            <h1 className="text-3xl font-bold">{t(`${p}.quotationTitle`)}</h1>
            <p className="text-gray-500">{quoteInfo.quoteNumber}</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>{t(`${p}.created`)} {quoteInfo.createdAt}</p>
            <p>{t(`${p}.validUntil`)} {quoteInfo.validUntil}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Quote Info Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 mb-8 print:shadow-none print:border print:rounded-none">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-sm text-gray-500">{t(`${p}.quoteNumber`)}</p>
                <p className="font-bold text-lg">{quoteInfo.quoteNumber}</p>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-sm text-gray-500">{t(`${p}.validUntil`)}</p>
                <p className="font-semibold flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-600" />{quoteInfo.validUntil}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden print:shadow-none">
            <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 p-8 flex items-center justify-center">
              <img 
                src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp" 
                alt="Flat Bottom Coffee Pouch" 
                className="lb-img cursor-zoom-in max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>
            <div className="p-4 grid grid-cols-4 gap-2">
              <img src="/imgs/demo-site/coffee/a_achieve_detail_04_craftsmanship_5633579.webp" alt="Detail" className="rounded-lg aspect-square object-cover lb-img cursor-zoom-in hover:opacity-80 transition" />
              <img src="/imgs/demo-site/coffee/a_achieve_detail_05_dimensional_3952382.webp" alt="Dimensional" className="rounded-lg aspect-square object-cover lb-img cursor-zoom-in hover:opacity-80 transition" />
              <img src="/imgs/demo-site/coffee/a_achieve_detail_08_materials_3186664.webp" alt="Materials" className="rounded-lg aspect-square object-cover lb-img cursor-zoom-in hover:opacity-80 transition" />
              <img src="/imgs/illustrated/a_achievepack_flatbottom_bags_0519153.webp" alt="Illustration" className="rounded-lg aspect-square object-cover lb-img cursor-zoom-in hover:opacity-80 transition" />
            </div>
          </div>

          {/* Product Specifications */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 print:shadow-none">
              <button onClick={() => setShowSpecs(!showSpecs)} className="flex items-center justify-between w-full text-left">
                <h2 className="text-xl font-bold flex items-center gap-2"><Package className="w-5 h-5 text-amber-600" />{t(`${p}.productSpecsTitle`)}</h2>
                {showSpecs ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {showSpecs && (
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between py-2 border-b"><span className="text-gray-600">{t(`${p}.shape`)}</span><span className="font-medium">{productSpecs.shape}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-gray-600">{t(`${p}.surface`)}</span><span className="font-medium">{productSpecs.surface}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-gray-600">{t(`${p}.closure`)}</span><span className="font-medium">{productSpecs.closure}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-gray-600">{t(`${p}.materialStructure`)}</span><span className="font-medium">{productSpecs.material}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-gray-600">{t(`${p}.printColors`)}</span><span className="font-medium">{productSpecs.printColors}</span></div>
                  <div className="flex justify-between py-2"><span className="text-gray-600">{t(`${p}.leadTime`)}</span><span className="font-medium text-amber-700">{productSpecs.leadTime}</span></div>
                  <div className="flex flex-wrap gap-2 pt-3">
                    {productSpecs.features.map(f => (
                      <span key={f} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />{f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                <Leaf className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold">{t(`${p}.ecoFriendlyTitle`)}</h3>
                <p className="text-sm text-gray-600">{t(`${p}.ecoFriendlyDesc`)}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">{t(`${p}.highBarrierTitle`)}</h3>
                <p className="text-sm text-gray-600">{t(`${p}.highBarrierDesc`)}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <Award className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="font-semibold">{t(`${p}.premiumFinishTitle`)}</h3>
                <p className="text-sm text-gray-600">{t(`${p}.premiumFinishDesc`)}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                <Globe className="w-8 h-8 text-orange-600 mb-2" />
                <h3 className="font-semibold">{t(`${p}.globalShippingTitle`)}</h3>
                <p className="text-sm text-gray-600">{t(`${p}.globalShippingDesc`)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden mb-8 print:shadow-none print:break-before-page">
          {/* Tabs */}
          <div className="flex border-b print:hidden">
            <button 
              onClick={() => setActiveTab('roto')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${activeTab === 'roto' ? 'bg-amber-50 text-amber-800 border-b-2 border-amber-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <span className="block text-lg">{t(`${p}.tabRoto`)}</span>
              <span className="text-sm font-normal text-gray-500">{t(`${p}.tabRotoDesc`)}</span>
            </button>
            <button 
              onClick={() => setActiveTab('digital')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition ${activeTab === 'digital' ? 'bg-amber-50 text-amber-800 border-b-2 border-amber-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <span className="block text-lg">{t(`${p}.tabDigital`)}</span>
              <span className="text-sm font-normal text-gray-500">{t(`${p}.tabDigitalDesc`)}</span>
            </button>
          </div>

          {/* Print: Show Tab Title */}
          <div className="hidden print:block p-4 bg-amber-50 border-b">
            <h3 className="text-lg font-bold">{activeTab === 'roto' ? t(`${p}.pricingTitleRoto`) : t(`${p}.pricingTitleDigital`)}</h3>
          </div>

          {/* Pricing Notes */}
          <div className="p-4 bg-amber-50/50 border-b">
            {activeTab === 'roto' ? (
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-amber-600 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t(`${p}.plateCostNote`) }} />
              </div>
            ) : (
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-amber-600 mt-0.5" />
                <span dangerouslySetInnerHTML={{ __html: t(`${p}.digitalPrintNote`) }} />
              </div>
            )}
          </div>

          {/* Pricing Tables by Product */}
          <div className="p-6">
            {Object.entries(groupByProduct(activeTab === 'roto' ? rotoPricing : digitalPricing)).map(([product, items]) => (
              <div key={product} className="mb-6 last:mb-0">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  {product} {t(`${p}.coffeePouch`)}
                  <span className="text-sm font-normal text-gray-500 ml-2">({items[0].size} {t(`${p}.mm`)})</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">{t(`${p}.sizeCol`)}</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">{t(`${p}.zipperCol`)}</th>
                        <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">{t(`${p}.valveCol`)}</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">{t(`${p}.qtyCol`)}</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600">{t(`${p}.unitPriceCol`)}</th>
                        <th className="text-right px-4 py-3 text-sm font-semibold text-gray-600 bg-amber-50">{t(`${p}.totalCol`)}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/30 transition">
                          <td className="px-4 py-3 text-sm">{item.size} {t(`${p}.mm`)}</td>
                          <td className="px-4 py-3 text-center">{item.zipper ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}</td>
                          <td className="px-4 py-3 text-center">{item.valve ? <CheckCircle className="w-4 h-4 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}</td>
                          <td className="px-4 py-3 text-right font-medium">{item.qty.toLocaleString()} {t(`${p}.pcs`)}</td>
                          <td className="px-4 py-3 text-right">${item.unitPrice.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right font-bold text-amber-800 bg-amber-50/50">${item.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Terms */}
          <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6 print:shadow-none">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-amber-600" />{t(`${p}.termsTitle`)}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{t(`${p}.terms1`, { date: quoteInfo.validUntil })}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{t(`${p}.terms2`)}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{t(`${p}.terms3`)}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{t(`${p}.terms4`)}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{t(`${p}.terms5`)}</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />{t(`${p}.terms6`)}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-lg p-6 text-white print:bg-amber-100 print:text-gray-900">
            <h3 className="text-lg font-bold mb-4">{t(`${p}.readyToOrder`)}</h3>
            <p className="mb-6 opacity-90 print:opacity-100">{t(`${p}.contactPrompt`)}</p>
            <div className="space-y-3">
              <a href="mailto:hello@achievepack.com" className="flex items-center gap-3 hover:opacity-80 transition">
                <Mail className="w-5 h-5" />
                <span>hello@achievepack.com</span>
              </a>
              <a href="https://achievepack.com" className="flex items-center gap-3 hover:opacity-80 transition">
                <Globe className="w-5 h-5" />
                <span>www.achievepack.com</span>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 print:border-amber-300">
              <div className="flex items-center gap-2 text-sm opacity-75">
                <Clock className="w-4 h-4" />
                <span>{t(`${p}.responseTime`)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 text-center print:hidden">
          <h2 className="text-2xl font-bold text-amber-900 mb-2">{t(`${p}.haveQuestions`)}</h2>
          <p className="text-gray-600 mb-6">{t(`${p}.questionsDesc`)}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:hello@achievepack.com" className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition font-medium">
              <Mail className="w-4 h-4" />{t(`${p}.reqCustomQuote`)}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-amber-700 text-amber-700 px-6 py-3 rounded-lg hover:bg-amber-50 transition font-medium">
              {t(`${p}.contactUs`)}<ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8 py-6 border-t print:mt-4">
          <div className="flex justify-center gap-6 mb-4 print:hidden">
            <img src="/imgs/cert/fsc.svg" alt="FSC" className="h-10 opacity-60" />
            <img src="/imgs/cert/brcgs.svg" alt="BRCGS" className="h-10 opacity-60" />
            <img src="/imgs/cert/iso.svg" alt="ISO" className="h-10 opacity-60" />
          </div>
          <p>{t(`${p}.copyright`, { year: new Date().getFullYear() })}</p>
          <p className="mt-1">www.achievepack.com • www.pouch.eco</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:bg-white { background: white !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border { border: 1px solid #e5e7eb !important; }
          .print\\:rounded-none { border-radius: 0 !important; }
          .print\\:break-before-page { break-before: page; }
        }
      `}</style>
    </div>
  )
}

export default CoffeePouchQuotePage
