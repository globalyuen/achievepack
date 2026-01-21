import React from 'react'
import { Package, CheckCircle, Scissors, FileText, Target, Shield, Calendar, Mail, Download, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const FlatPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.flatPouches'
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you need <strong>economical single-serve packaging, samples, or sachets</strong>—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Sample Producers</h4>
              <p className="text-sm text-neutral-600 mt-1">Product samples, trial sizes</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Food Service</h4>
              <p className="text-sm text-neutral-600 mt-1">Sauce sachets, sugar packets</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Tea & Spice Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Single-serve portions</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What is a 3-Side Seal Pouch?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>A 3-side seal pouch (also called flat pouch or sachet) is sealed on three sides with an open top for filling.</strong> This is the most economical flexible packaging format, ideal for samples, single-serve products, and lightweight items.
          </p>
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Key Advantages:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Most cost-effective pouch format</li>
              <li>✓ Efficient material usage (less waste)</li>
              <li>✓ Compact shipping and storage</li>
              <li>✓ Quick to fill and seal</li>
              <li>✓ Easy tear-open access</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'types',
      title: '3-Side vs 4-Side Seal',
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-primary-200 rounded-lg p-4">
              <h4 className="font-semibold text-primary-800 mb-2">3-Side Seal</h4>
              <p className="text-sm mb-2">Made from folded film, sealed on 3 sides:</p>
              <ul className="text-sm space-y-1">
                <li>• One folded edge (no seal)</li>
                <li>• Two side seals</li>
                <li>• Bottom or top seal after filling</li>
                <li>• Most economical option</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">4-Side Seal</h4>
              <p className="text-sm mb-2">Made from two separate sheets:</p>
              <ul className="text-sm space-y-1">
                <li>• Sealed on all 4 edges</li>
                <li>• Slightly more surface area</li>
                <li>• Different front/back materials possible</li>
                <li>• Slightly higher cost</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Common Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Product samples',
              'Single-serve portions',
              'Spice sachets',
              'Sugar & sweetener packets',
              'Sauce sachets',
              'Tea bags (outer)',
              'Seed packets',
              'Promotional items',
              'Pharmaceutical sachets',
              'Cosmetic samples',
              'Hotel amenities',
              'Wet wipes'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Available Features',
      icon: <Scissors className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Opening Features</h4>
              <ul className="text-sm space-y-1">
                <li>• Tear notch (V-notch or laser scored)</li>
                <li>• Easy-peel seal</li>
                <li>• Perforated line</li>
                <li>• Die-cut shapes</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Additional Options</h4>
              <ul className="text-sm space-y-1">
                <li>• Hang hole for display</li>
                <li>• Clear window</li>
                <li>• Matte/gloss finish</li>
                <li>• Foil stamping</li>
              </ul>
            </div>
          </div>
          
          {/* Flat Pouch Examples Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">3-Side Seal Pouch Options</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/pouch shape/3-side.webp" 
                alt="Three side seal flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption="3-Side Seal"
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-clear.webp" 
                alt="Clear flat pouch for product visibility" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Clear Film"
              />
              <ClickableImage 
                src="/imgs/store/barrier/2-paper.webp" 
                alt="Kraft paper flat sachet eco-friendly" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Kraft Paper"
              />
              <ClickableImage 
                src="/imgs/store/eco-material/compostable.webp" 
                alt="Compostable flat pouch sachet" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Compostable"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Are sachets eco-friendly?"</h4>
                  <p className="text-sm text-neutral-600">Yes, PLA and paper/PLA options available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"What's the minimum order?"</h4>
                  <p className="text-sm text-neutral-600">500 plain, 1,000 custom printed</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can they have zippers?"</h4>
                  <p className="text-sm text-neutral-600">Yes, or consider stand-up pouches for resealable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I get samples?"</h4>
                  <p className="text-sm text-neutral-600">Free sachet samples for evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Get Started?',
      icon: <Package className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Flat Pouches Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test sachets first</p>
              <Link to="/contact" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-neutral-900">食品調味料 Food & Condiments</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">醬料包、糖包、調味包、香料包</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">佔比 45%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-neutral-900">美容樣品 Cosmetic Samples</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">面膜精華、乳液樣品、洗護試用</p>
              <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded inline-block">佔比 30%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">醫藥保健 Pharmaceutical</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">藥品分裝、保健品試用、營養補充劑</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">佔比 25%</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">客戶成功案例 Success Story</h4>
            <p className="text-sm text-neutral-600">「我們的醬料品牌轉用三邊封小包裝後，單位成本降低35%，且完美適配餐飲渠道的即用需求，大幅提升了市場覆蓋率。」</p>
            <p className="text-xs text-neutral-500 mt-2">— 調味品生產商，月出貨量 200萬包</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: '市場數據 Market Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">$8.2B</div>
              <div className="text-sm opacity-90">全球小包裝市場規模</div>
              <div className="text-xs opacity-75 mt-1">2024年估值</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">6.8%</div>
              <div className="text-sm opacity-90">年複合增長率</div>
              <div className="text-xs opacity-75 mt-1">2024-2030</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">35%</div>
              <div className="text-sm opacity-90">餐飲市場佔比</div>
              <div className="text-xs opacity-75 mt-1">最大終端應用</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">150億</div>
              <div className="text-sm opacity-90">亞太年消費量</div>
              <div className="text-xs opacity-75 mt-1">全球最大市場</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">市場趨勢洞察</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>單次用量市場</strong>：便利性需求推動小包裝持續增長</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>可堆肥材料</strong>：PLA等環保材料需求年增25%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: '材料對比 Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-200 px-4 py-2 text-left">材料類型</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">阻隔性</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">成本</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">環保性</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">推薦應用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PET/PE 透明</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">可回收</td>
                  <td className="border border-neutral-200 px-4 py-2">糖包、乾燥食品</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">鋁箔複合</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">難回收</td>
                  <td className="border border-neutral-200 px-4 py-2">醬料、藥品</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">牛皮紙複合</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">天然外觀</td>
                  <td className="border border-neutral-200 px-4 py-2">茶包、香料</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">PLA 可堆肥</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 可堆肥</td>
                  <td className="border border-neutral-200 px-4 py-2">有機食品、樣品</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">選材建議</h4>
            <p className="text-sm text-primary-700">三邊封袋適合對成本敏感的單次使用場景。如需液體包裝選鋁箔材質；如有環保要求選PLA可堆肥材料。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between 3-side seal and 4-side seal?",
      answer: "3-side seal pouches are made from folded film (sealed on 3 sides), while 4-side seal pouches use two separate sheets (sealed on all 4 sides). 3-side seal is more economical, while 4-side seal offers slightly more surface area and allows different materials on front and back."
    },
    {
      question: "What is the minimum order for sachets?",
      answer: "Our MOQ for custom printed sachets is 1,000 units. For plain sachets, we can offer 500 units. The lower price point per unit makes sachets economical even at smaller quantities."
    },
    {
      question: "Can flat pouches have a resealable zipper?",
      answer: "Traditional flat pouches are single-use, but we can add a zipper to create a resealable flat pouch. However, for resealable applications, stand-up pouches typically offer better functionality and value."
    },
    {
      question: "Are flat pouches available in compostable materials?",
      answer: "Yes, we offer compostable flat pouches made from PLA, paper/PLA, or cellulose-based films. These are certified to EN 13432 for industrial composting."
    }
  ]

  const tables = [
    {
      title: "Flat Pouch Size Guide",
      data: {
        headers: ["Size", "Dimensions", "Typical Capacity", "Common Use"],
        rows: [
          ["Small sachet", "50 × 70mm", "5-10g / 5-10ml", "Sugar packets, samples"],
          ["Medium sachet", "70 × 100mm", "10-30g", "Spices, sauce sachets"],
          ["Large sachet", "100 × 150mm", "30-100g", "Tea outer, seed packets"],
          ["Sample pouch", "80 × 120mm", "20-50g", "Product samples"],
          ["Promotional", "120 × 180mm", "50-100g", "Promotional items"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing alternative" },
    { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly sachet options" },
    { title: "Coffee & Tea", url: "/industry/coffee-tea", description: "Tea sachet solutions" }
  ]

  return (
    <SEOPageLayout
      title="3-Side Seal Pouches | Flat Pouches | Sachets | Sample Packaging"
      description="Custom 3-side seal flat pouches for samples, sachets, and single-serve products. Most economical flexible packaging. Compostable options available. MOQ 500."
      keywords={[
        '3 side seal pouch',
        'flat pouch',
        'sachet packaging',
        'sample pouches',
        'single serve packets',
        'sachet bags',
        'flat bag packaging',
        '4 side seal pouch'
      ]}
      canonicalUrl="https://achievepack.com/packaging/flat-pouches"
      heroTitle={t('seoPages.pages.flatPouches.heroTitle')}
      heroSubtitle={t('seoPages.pages.flatPouches.heroSubtitle')}
      heroImage="/imgs/pouch-shape/a_three_side_seal_pouch_isolated_0879222.webp"
      heroImageAlt="3-side seal flat pouch sachet packaging"
      introSummary={t('seoPages.pages.flatPouches.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  )
}

export default FlatPouchesPage
