import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Heart, Leaf, Package, Sun, CheckCircle, Calendar, MessageCircle, Award, Target, Store, Sparkles, Palette, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ArtisanProducerPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Packaging for Artisan Makers',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-lg border border-rose-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              You create <strong>small-batch gourmet products</strong> with care—handcrafted granolas, artisan chocolates, specialty preserves. Your packaging should tell that story, but high MOQs and generic options don't match your craft.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">Artisan Challenges</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Small batches, irregular production</li>
                  <li>• Generic packaging doesn't convey craft</li>
                  <li>• Farmers market conditions (sun, heat)</li>
                  <li>• Limited budget for packaging</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What You Need</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Low MOQ for small runs</li>
                  <li>• Packaging that tells your story</li>
                  <li>• Durable for outdoor markets</li>
                  <li>• Eco-friendly to match values</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'small-batch',
      title: 'Made for Small-Batch Production',
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            We understand artisan economics. <strong>Order as few as 100 pouches</strong>—perfect for seasonal products, new recipes, or limited editions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-rose-50 p-5 rounded-lg border border-rose-200 text-center">
              <div className="text-3xl font-bold text-rose-700 mb-2">100</div>
              <div className="text-sm text-rose-600 font-medium">Piece Minimum</div>
              <p className="text-xs mt-2 text-neutral-600">No overstock waste</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 text-center">
              <div className="text-3xl font-bold text-amber-700 mb-2">Seasonal</div>
              <div className="text-sm text-amber-600 font-medium">Flexibility</div>
              <p className="text-xs mt-2 text-neutral-600">Holiday/harvest editions</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">No</div>
              <div className="text-sm text-green-600 font-medium">Plate Costs</div>
              <p className="text-xs mt-2 text-neutral-600">Change designs freely</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'craft-aesthetic',
      title: 'Packaging That Tells Your Story',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Artisan products deserve artisan packaging. <strong>Natural textures and finishes</strong> that communicate handcrafted quality and connect with conscious consumers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Craft Aesthetics</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Natural kraft paper look</li>
                <li>• Clear windows for product visibility</li>
                <li>• Matte finishes for organic feel</li>
                <li>• Earth-tone printing</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Custom Options</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Your logo and brand story</li>
                <li>• Ingredient lists and certifications</li>
                <li>• Batch numbers and dates</li>
                <li>• Seasonal/limited edition labels</li>
              </ul>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
                alt="Artisan chocolate packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Artisan Chocolate"
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_tea_craft_australia_garden_morning_8955209.webp"
                alt="Artisan tea packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Craft Tea"
              />
              <ClickableImage 
                src="/imgs/store/barrier/3-paper.webp"
                alt="Kraft paper finish" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Kraft Paper"
              />
              <ClickableImage 
                src="/imgs/store/closure/normal-zipper.webp"
                alt="Resealable zipper closure" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Resealable"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'markets',
      title: 'Built for Farmers Markets',
      icon: <Sun className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Farmers market conditions are tough—direct sun, temperature swings, handling by customers. <strong>Our pouches are designed for real-world durability</strong> while maintaining product freshness.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">Market-Ready Features</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• UV-resistant printing</li>
                <li>• Puncture-resistant materials</li>
                <li>• Stand-up design for display</li>
              </ul>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Resealable for sampling</li>
                <li>• Moisture barrier protection</li>
                <li>• Easy hang hole option</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable',
      title: 'Sustainability That Matches Your Values',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Your customers care about the planet—so do you. <strong>Choose packaging that aligns with artisan values</strong> and tells your sustainability story.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800">Home/Industrial Compostable</h4>
              <p className="text-sm text-green-700 mt-1">Kraft paper with PLA. Breaks down naturally. Perfect for eco-conscious markets.</p>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800">Recyclable Options</h4>
              <p className="text-sm text-blue-700 mt-1">Store drop-off recyclable. Communicate recycling instructions to customers.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Package Your Craft With Care',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-rose-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Samples for Your Products</h3>
          <p className="text-lg mb-6 opacity-90">
            Tell us about your artisan products. We'll recommend packaging that matches your brand and send samples for evaluation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Store className="h-5 w-5" />
              Browse Options
            </Link>
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
          <p className="text-neutral-700">不同類型的手工產品對包裝有不同需求，選擇正確的包裝是品牌成功的關鍵。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-5 rounded-xl border border-rose-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-rose-600" />
                <h4 className="font-semibold text-rose-800">手工食品生產者</h4>
              </div>
              <p className="text-sm text-rose-700 mb-3">巧克力、果醬、烘焙食品等手工精制產品。</p>
              <div className="text-xs text-rose-600 bg-rose-100 px-2 py-1 rounded inline-block">佔比: 45%</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">農夫市集攻商</h4>
              </div>
              <p className="text-sm text-amber-700 mb-3">農市產品、有機食品、在地特產等。</p>
              <div className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded inline-block">佔比: 35%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">小批量品牌</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">限量版、季節性產品、新品測試等。</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">佔比: 20%</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">客戶成功案例</h5>
            <p className="text-sm text-neutral-600">「從100件起訂讓我可以測試不同的產品和設計，無需擔心庫存壓力。現在我的手工果醬在農夫市集非常受歡迎。」— 手工果醬品牌創辦人</p>
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
          <p className="text-neutral-700">手工食品市場持續增長，消費者對手工精製產品的需求越來越高。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">$28B</div>
              <div className="text-xs text-neutral-500">手工食品市場規模</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>年增長 8.5%</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-rose-600 mb-1">67%</div>
              <div className="text-xs text-neutral-500">消費者偏好手工產品</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>增長中</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">45%</div>
              <div className="text-xs text-neutral-500">願意支付溢價</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>穩定</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">100</div>
              <div className="text-xs text-neutral-500">最低起訂量</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>靈活</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">市場趨勢洞察</h5>
            <p className="text-sm text-blue-700">手工食品市場不斷擴大，消費者越來越重視產品的真實性和品牌故事。環保包裝在農夫市集等渠道特別受歡迎。</p>
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
          <p className="text-neutral-700">不同包裝材料的特點對比，幫助您選擇最適合手工產品的解決方案。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border font-semibold">包裝類型</th>
                  <th className="text-left p-3 border font-semibold">最低起訂</th>
                  <th className="text-left p-3 border font-semibold">環保認證</th>
                  <th className="text-left p-3 border font-semibold">適用場景</th>
                  <th className="text-left p-3 border font-semibold">成本</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">牍紙可堆肥</span></td>
                  <td className="p-3 border">100件</td>
                  <td className="p-3 border">★★★★★</td>
                  <td className="p-3 border">農夫市集、有機店</td>
                  <td className="p-3 border text-green-600 font-medium">$$</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">可回收透明</span></td>
                  <td className="p-3 border">100件</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">精品店、零售</td>
                  <td className="p-3 border text-blue-600 font-medium">$</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">牍紙開窗</span></td>
                  <td className="p-3 border">100件</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">展示商品、包裝礙物</td>
                  <td className="p-3 border text-amber-600 font-medium">$$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">選材建議</h5>
            <p className="text-sm text-amber-700">對於手工食品生產者，建議優先考慮牍紙包裝，能夠傳達手工、自然的品牌形象。開窗設計可以展示產品，提升購買欲望。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What's the minimum order for artisan products?",
      answer: "Just 100 pieces. This allows you to package small batches, test new products, or create limited seasonal editions without overcommitting to large inventory."
    },
    {
      question: "Can I order different sizes in one order?",
      answer: "Yes. Many artisan producers order mixed sizes—small pouches for samples, larger ones for full products. We can accommodate mixed size orders with the same artwork."
    },
    {
      question: "Do you offer packaging for farmers markets?",
      answer: "Absolutely. Our stand-up pouches are designed for display, with UV-resistant printing and durable materials that withstand outdoor market conditions."
    },
    {
      question: "Can I customize for seasonal products?",
      answer: "Yes! Digital printing means no plate costs—you can create holiday editions, harvest specials, or any seasonal variations without paying extra setup fees."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Artisan Producer Packaging | Small Batch | Low MOQ | Achieve Pack</title>
        <meta name="description" content="Packaging for artisan food makers. Low MOQ from 100 pieces, craft aesthetics, farmers market durable, sustainable options. Perfect for small-batch gourmet products." />
        <link rel="canonical" href="https://achievepack.com/solutions/artisan-producer" />
        <meta name="keywords" content="artisan packaging, small batch packaging, farmers market packaging, gourmet food packaging, craft food pouches, low MOQ artisan" />
      </Helmet>

      <SEOPageLayout
        title="Artisan Producer Packaging | Small Batch Solutions"
        description="Packaging for artisan food makers. Low MOQ from 100 pieces, craft aesthetics, farmers market durable."
        keywords={['artisan packaging', 'small batch packaging', 'farmers market packaging', 'gourmet food packaging']}
        heroTitle="Packaging for Artisan Makers"
        heroSubtitle="100 Piece MOQ | Craft Aesthetics | Market Durable"
        introSummary="Package your handcrafted products with the care they deserve. Low minimum orders, natural craft finishes, and sustainable materials that tell your story."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
      />
    </>
  )
}

export default ArtisanProducerPage
