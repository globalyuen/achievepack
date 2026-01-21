import React, { useState } from 'react'
import { Lock, RefreshCw, Package, CheckCircle, Clock, Target, Shield, Calendar, Mail, Download, X, ChevronLeft, ChevronRight, Image, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const recloseGallery = [
  { src: '/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp', title: 'Reclosure Options Overview', desc: 'Complete range of resealable closure solutions for flexible packaging' },
  { src: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp', title: 'Closure Categories', desc: 'Four main closure types: zippers, spouts, tin-ties, and child-resistant' },
  { src: '/imgs/reclose/ads/a_reclosure_decision_guide_7052390.webp', title: 'Closure Selection Guide', desc: 'How to choose the right closure for your specific product needs' },
  { src: '/imgs/reclose/ads/a_reclosure_value_proposition_0710400.webp', title: 'Closure Benefits', desc: 'Consumer convenience and extended product freshness advantages' },
  { src: '/imgs/reclose/ads/a_reclosure_comparison_scene_9769566.webp', title: 'Closure Comparison', desc: 'Side-by-side comparison of different reclosure mechanisms' },
  { src: '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp', title: 'Press-to-Close Zipper', desc: 'Standard resealable zipper for easy open and close operations' },
  { src: '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp', title: 'Spout Cap Detail', desc: 'Screw cap spout for controlled pouring of liquids and sauces' },
  { src: '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp', title: 'Tin Tie Closure', desc: 'Classic tin tie for coffee bags and artisan bakery products' },
  { src: '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp', title: 'Degassing Valve', desc: 'One-way valve for fresh roasted coffee and fermented products' },
];

const ReclosureOptionsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = recloseGallery.length - 1
    if (newIndex >= recloseGallery.length) newIndex = 0
    setGalleryEnlarged({ src: recloseGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If your product needs to <strong>stay fresh after opening</strong> or requires <strong>child-resistant packaging</strong>—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Snack & Pet Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Resealable zippers for freshness</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Baby & Sauce Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Spout pouches with caps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Cannabis & Pharma</h4>
              <p className="text-sm text-neutral-600 mt-1">Child-resistant certified closures</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Reclosure Options for Eco-Friendly Pouches',
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Keep products fresh and consumers happy with our range of sustainable reclosure solutions.</strong> From press-to-close zippers to child-resistant caps, Achieve Pack offers reclosure options that maintain freshness while supporting your eco-friendly positioning.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Available Reclosure Types:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Press-to-close zippers</strong> – Simple, reliable sealing for everyday products</li>
            <li><strong>Slider zippers</strong> – Easy one-hand operation for convenience</li>
            <li><strong>Spout caps</strong> – Pour control for liquids and powders</li>
            <li><strong>Tin-ties</strong> – Classic look for coffee and artisan products</li>
            <li><strong>Child-resistant closures</strong> – Safety-first for cannabis and pharmaceuticals</li>
          </ul>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Reclosure Solutions Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our range of reclosure options. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {recloseGallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setGalleryEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'zipper-types',
      title: 'Zipper Options',
      icon: <RefreshCw className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Press-to-Close Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• Most economical option</li>
                <li>• 500+ open/close cycles</li>
                <li>• Available in all pouch formats</li>
                <li>• Clear or colored options</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Slider Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• Premium one-hand operation</li>
                <li>• Tactile "click" confirmation</li>
                <li>• Ideal for snacks and pet food</li>
                <li>• Higher perceived value</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Child-Resistant Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• ASTM D3475 certified</li>
                <li>• Required for cannabis packaging</li>
                <li>• Push-and-slide mechanism</li>
                <li>• Senior-friendly (16 CFR 1700)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Velcro-Style Zipper</h4>
              <ul className="text-sm space-y-1">
                <li>• Ultra-quiet opening</li>
                <li>• Soft-touch feel</li>
                <li>• Great for premium products</li>
                <li>• 1000+ cycle durability</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spouts',
      title: 'Spout & Cap Options',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>For liquids, sauces, and pourable products:</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[
              'Standard Screw Cap (8.6mm)',
              'Wide Mouth Cap (15mm)',
              'Flip-Top Dispensing Cap',
              'Child-Resistant Cap',
              'Tamper-Evident Seal',
              'Corner Spout (Space-Saving)',
              'Center Spout (Pour Control)',
              'Pump Dispenser Cap',
              'Squeeze & Measure Cap'
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
      id: 'applications',
      title: 'Product Applications',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Product Type</th>
                  <th className="text-left p-3 border">Recommended Closure</th>
                  <th className="text-left p-3 border">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border">Coffee Beans</td><td className="p-3 border">Tin-tie + Valve</td><td className="p-3 border">Classic look, degassing</td></tr>
                <tr><td className="p-3 border">Snacks & Chips</td><td className="p-3 border">Slider Zipper</td><td className="p-3 border">Easy one-hand access</td></tr>
                <tr><td className="p-3 border">Pet Food</td><td className="p-3 border">Press-to-Close</td><td className="p-3 border">Cost-effective, durable</td></tr>
                <tr><td className="p-3 border">Baby Food Puree</td><td className="p-3 border">Screw Cap Spout</td><td className="p-3 border">Controlled dispensing</td></tr>
                <tr><td className="p-3 border">Cannabis</td><td className="p-3 border">Child-Resistant</td><td className="p-3 border">Regulatory compliance</td></tr>
                <tr><td className="p-3 border">Sauces</td><td className="p-3 border">Flip-Top Spout</td><td className="p-3 border">Easy squeeze & pour</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: 'Order Information',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Min Order (Zippers)</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,000</div>
              <div className="text-sm text-neutral-600">Min Order (Spouts)</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-sm text-neutral-600">Closure Options</div>
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Are zippers eco-friendly?"</h4>
                  <p className="text-sm text-neutral-600">Yes, mono-PE zippers recyclable, PLA zippers compostable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Need child-resistant?"</h4>
                  <p className="text-sm text-neutral-600">ASTM D3475 certified options available</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Spout vs zipper cost?"</h4>
                  <p className="text-sm text-neutral-600">Spouts add 20-40%, we help you decide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I test samples?"</h4>
                  <p className="text-sm text-neutral-600">Free samples for evaluation</p>
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
      icon: <Lock className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Reclosure Options Quote" className="block w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test closures first</p>
              <Link to="/contact" className="block w-full bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
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
          <p className="text-neutral-700">不同產品類型對重封功能有不同需求，選擇正確的閉合方式是提升消費體驗的關鍵。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">零食寵物食品</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">滑塊拉鏈、壓合拉鏈幫助保持零食和寵物食品新鮮度。</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">佔比: 45%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">嬰兒醬料食品</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">嘴嘴壺設計適合嘴兒食品泥、醬料等流體產品的控制倎出。</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">佔比: 30%</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">大麻醫藥</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">兒童安全鎖對大麻和醫藥產品是法規強制要求。</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">佔比: 25%</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">客戶成功案例</h5>
            <p className="text-sm text-neutral-600">「從普通拉鏈升級到滑塊拉鏈後，我們的寵物零食客戶回購率提升25%，客戶反映很喜歡單手就能操作。」— 寵物食品品牌經理</p>
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
          <p className="text-neutral-700">重封包裝市場持續增長，消費者對便利性和新鮮度的要求越來越高。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">78%</div>
              <div className="text-xs text-neutral-500">消費者偏好可重封包裝</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>增長中</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">$8.5B</div>
              <div className="text-xs text-neutral-500">可重封包裝市場規模</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>年增長 6.2%</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">35%</div>
              <div className="text-xs text-neutral-500">提升產品價値感</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>穩定</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">500+</div>
              <div className="text-xs text-neutral-500">拉鏈開合循環次數</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>高耐用</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">市場趨勢洞察</h5>
            <p className="text-sm text-blue-700">消費者對包裝便利性的要求不斷提升，滑塊拉鏈因其單手操作特點成為新寵，預計到2026年將佔市場的40%。</p>
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
          <p className="text-neutral-700">不同重封方式的性能對比，幫助您選擇最適合的解決方案。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border font-semibold">閉合類型</th>
                  <th className="text-left p-3 border font-semibold">操作便利性</th>
                  <th className="text-left p-3 border font-semibold">密封性能</th>
                  <th className="text-left p-3 border font-semibold">適用場景</th>
                  <th className="text-left p-3 border font-semibold">成本影響</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">壓合拉鏈</span></td>
                  <td className="p-3 border">★★★</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">零食、寵物食品、干貨</td>
                  <td className="p-3 border text-green-600 font-medium">+5%</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">滑塊拉鏈</span></td>
                  <td className="p-3 border">★★★★★</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">高端零食、寵物食品</td>
                  <td className="p-3 border text-blue-600 font-medium">+15%</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">嘴嘴壺</span></td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">★★★★★</td>
                  <td className="p-3 border">嬰兒食品、醬料、流體</td>
                  <td className="p-3 border text-purple-600 font-medium">+30%</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">鐐條</span></td>
                  <td className="p-3 border">★★</td>
                  <td className="p-3 border">★★★</td>
                  <td className="p-3 border">咖啡、烘焙食品</td>
                  <td className="p-3 border text-amber-600 font-medium">+10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">選型建議</h5>
            <p className="text-sm text-amber-700">選擇重封方式時，建議從產品形態、使用場景和目標客戶群三個維度考慮。我們提供免費樣品測試，幫助您驗證最佳方案。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are your zippers recyclable or compostable?",
      answer: "Our mono-PE zippers are fully recyclable with PE pouches. For compostable pouches, we offer PLA-based zippers that meet EN 13432 standards. The zipper material always matches the pouch material for proper end-of-life processing."
    },
    {
      question: "What is the child-resistant certification for cannabis packaging?",
      answer: "Our child-resistant pouches are certified to ASTM D3475 standards and comply with 16 CFR 1700 for senior accessibility. We provide COC (Certificate of Compliance) documentation for regulatory submissions."
    },
    {
      question: "Can I have a tear notch AND a zipper?",
      answer: "Yes, most customers combine a tear notch for easy opening with a zipper for reclosure. The tear notch is positioned above the zipper line so the reseal functionality remains intact after opening."
    },
    {
      question: "Do spout pouches cost more than zipper pouches?",
      answer: "Spout pouches typically cost 20-40% more than zipper pouches due to the spout component and additional sealing process. However, they offer unique functionality for liquid and semi-liquid products that zippers can't provide."
    }
  ]

  const relatedLinks = [
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Complete spout pouch solutions" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Most popular zipper format" },
    { title: "Surface Finish Options", url: "/features/surface-finish", description: "Enhance your pouch appearance" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t('seoPages.pages.reclosureOptions.title')}
        description="Sustainable reclosure solutions for flexible packaging. Press-to-close zippers, slider zippers, spout caps, tin-ties, and child-resistant options for eco-friendly pouches."
        keywords={['reclosable pouches', 'zipper bags', 'spout pouch', 'resealable packaging', 'child resistant packaging', 'tin tie bags']}
        canonicalUrl="https://achievepack.com/features/reclosure-options"
        heroTitle={t('seoPages.pages.reclosureOptions.heroTitle')}
        heroSubtitle={t('seoPages.pages.reclosureOptions.heroSubtitle')}
        heroImage="/imgs/seo-photos/a_closure_systems_infographic_4275938.webp"
        heroImageAlt="Various reclosure options for eco-friendly pouches"
        introSummary={t('seoPages.pages.reclosureOptions.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.reclosureOptions.cta.title')}
        ctaDescription={t('seoPages.pages.reclosureOptions.cta.description')}
        ctaButtonText={t('seoPages.pages.reclosureOptions.cta.button')}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"><X className="h-8 w-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2"><ChevronLeft className="h-10 w-10" /></button>
          <img src={galleryEnlarged.src} alt={recloseGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{recloseGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{recloseGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {recloseGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ReclosureOptionsPage
