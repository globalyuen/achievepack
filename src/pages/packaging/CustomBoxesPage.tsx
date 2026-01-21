import React from 'react'
import { Package, CheckCircle, Shield, Target, Calendar, Phone, Download, Mail, Leaf, Award, TrendingUp, MessageCircle, Factory, BarChart3, ArrowLeftRight, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const CustomBoxesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.customBoxes'
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you need <strong>premium rigid packaging for artisan products</strong>—chocolate, tea, coffee, or luxury gifts—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Chocolate & Confectionery</h4>
              <p className="text-sm text-neutral-600 mt-1">Premium presentation with gold foil & embossing</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Coffee & Tea Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Rigid mailer boxes for premium blends</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Artisan Food Producers</h4>
              <p className="text-sm text-neutral-600 mt-1">FSC certified sustainable packaging</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'What Custom Boxes Do We Offer?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            <strong>Achieve Pack offers premium custom printed rigid boxes</strong> designed for artisan food products, specialty coffee, luxury gifts, and high-end retail. Our boxes feature FSC certified materials, matte lamination, and optional premium finishes including gold foil stamping and embossing.
          </p>
          
          {/* Box Type 1: Corrugated Mailer */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/imgs/store/box/corrugated-box/2be65396-ac07-44d0-b54c-2422d3bfe981.webp" 
                  alt="Custom Printed Corrugated Mailer Box" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Corrugated Mailer Boxes</h4>
                <p className="text-sm text-neutral-600 mb-3">Perfect for coffee, tea, and artisan foods requiring sturdy shipping protection.</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>✓ 500g size: 130 × 85 × 35mm</div>
                  <div>✓ 1kg size: 270 × 85 × 35mm</div>
                  <div>✓ CMYK custom printing</div>
                  <div>✓ Matte finish standard</div>
                  <div>✓ Gold foil available</div>
                  <div>✓ FSC certified paper</div>
                </div>
                <div className="mt-4">
                  <Link to="/store/product/box-corrugated-custom" className="inline-flex items-center text-primary-600 font-semibold hover:underline">
                    View Pricing & Order →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Box Type 2: Tuck Box */}
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
                  alt="Custom Printed Tuck Box with Gold Foil" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold text-neutral-900 mb-2">Tuck Boxes (Cartons)</h4>
                <p className="text-sm text-neutral-600 mb-3">Elegant folding cartons for chocolate bars, tea sachets, and premium confectionery.</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>✓ 100g size: 81 × 162 × 15mm</div>
                  <div>✓ 250g white card</div>
                  <div>✓ Gold foil stamping</div>
                  <div>✓ Embossed details</div>
                  <div>✓ Matte finish</div>
                  <div>✓ FSC certified</div>
                </div>
                <div className="mt-4">
                  <Link to="/store/product/box-tuck-custom" className="inline-flex items-center text-primary-600 font-semibold hover:underline">
                    View Pricing & Order →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Premium Features & Finishes',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">✨ Gold Foil Stamping</h4>
              <p className="text-sm text-amber-700">Hot-stamped metallic gold accents for luxury branding</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">🎨 Embossed Details</h4>
              <p className="text-sm text-blue-700">Raised texture for tactile premium experience</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">📦 Matte Lamination</h4>
              <p className="text-sm text-neutral-700">Sophisticated matte finish standard on all boxes</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🌱 FSC Certified</h4>
              <p className="text-sm text-green-700">Sustainably sourced recycled paper materials</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">🖨️ CMYK Printing</h4>
              <p className="text-sm text-purple-700">Full-color custom printing for vibrant branding</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">💪 Rigid Construction</h4>
              <p className="text-sm text-red-700">2.0mm grayboard for premium structural integrity</p>
            </div>
          </div>
          
          {/* Box Types Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">Box Types & Styles</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp" 
                alt="Corrugated mailer box for shipping and e-commerce" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Corrugated Mailer"
              />
              <ClickableImage 
                src="/imgs/store/box/tuck-box/8a2918bb-a48c-44a3-875d-6e766e5f305f.webp" 
                alt="Tuck box carton for chocolate and confectionery" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Tuck Box Carton"
              />
              <ClickableImage 
                src="/imgs/store/surface/stamp-foil.webp" 
                alt="Gold foil stamping for luxury box packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Gold Foil Finish"
              />
              <ClickableImage 
                src="/imgs/store/surface/emboss.webp" 
                alt="Embossed texture for premium box packaging" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Embossed Texture"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Perfect For These Products',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍫</div>
              <h4 className="font-semibold text-amber-800">Chocolate</h4>
              <p className="text-xs text-amber-700 mt-1">Bars, truffles, pralines</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍵</div>
              <h4 className="font-semibold text-green-800">Tea</h4>
              <p className="text-xs text-green-700 mt-1">Loose leaf, sachets, gift sets</p>
            </div>
            <div className="bg-amber-100 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">☕</div>
              <h4 className="font-semibold text-amber-900">Coffee</h4>
              <p className="text-xs text-amber-800 mt-1">Specialty beans, gift boxes</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍬</div>
              <h4 className="font-semibold text-pink-800">Confectionery</h4>
              <p className="text-xs text-pink-700 mt-1">Candies, sweets, macarons</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🍪</div>
              <h4 className="font-semibold text-orange-800">Bakery</h4>
              <p className="text-xs text-orange-700 mt-1">Cookies, biscuits, pastries</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-semibold text-purple-800">Gift Sets</h4>
              <p className="text-xs text-purple-700 mt-1">Luxury gift packaging</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🧈</div>
              <h4 className="font-semibold text-yellow-800">Artisan Foods</h4>
              <p className="text-xs text-yellow-700 mt-1">Honey, jams, specialty</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-semibold text-indigo-800">Premium Retail</h4>
              <p className="text-xs text-indigo-700 mt-1">High-end shelf display</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Eco-Friendly & Sustainable',
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">🌱 Our Sustainability Commitment</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2">FSC Certified Materials</h5>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>✓ Recycled paper and cardboard</li>
                  <li>✓ Responsibly sourced fibers</li>
                  <li>✓ Supports sustainable forestry</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-green-700 mb-2">Recyclable Packaging</h5>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>✓ Curbside recyclable</li>
                  <li>✓ Minimal material waste</li>
                  <li>✓ Eco-conscious production</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            Looking for flexible eco packaging? Explore our <Link to="/materials/compostable" className="text-primary-600 hover:underline">compostable pouches</Link> and <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable mono-PE options</Link>.
          </p>
        </div>
      )
    },
    {
      id: 'pricing',
      title: 'Pricing & MOQ',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-3">📦 Corrugated Mailer Box Pricing</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="px-3 py-2 text-left">Quantity</th>
                    <th className="px-3 py-2 text-left">500g Box</th>
                    <th className="px-3 py-2 text-left">1kg Box</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-3 py-2">200 pcs</td>
                    <td className="px-3 py-2">$514.50 ($2.57/pc)</td>
                    <td className="px-3 py-2">$1,285.50 ($6.43/pc)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-3 py-2">1,000 pcs</td>
                    <td className="px-3 py-2">$771.75 ($0.77/pc)</td>
                    <td className="px-3 py-2">$1,714.50 ($1.71/pc)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-3 py-2">5,000 pcs</td>
                    <td className="px-3 py-2">$2,054.25 ($0.41/pc)</td>
                    <td className="px-3 py-2">$3,859.50 ($0.77/pc)</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">10,000 pcs</td>
                    <td className="px-3 py-2">$3,657.38 ($0.37/pc)</td>
                    <td className="px-3 py-2">$5,040.75 ($0.50/pc)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">🎁 Tuck Box Pricing (100g)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-100">
                    <th className="px-3 py-2 text-left">Quantity</th>
                    <th className="px-3 py-2 text-left">Total Price</th>
                    <th className="px-3 py-2 text-left">Unit Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amber-200">
                    <td className="px-3 py-2">200 pcs</td>
                    <td className="px-3 py-2">$1,105.50</td>
                    <td className="px-3 py-2">$5.53/pc</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="px-3 py-2">1,000 pcs</td>
                    <td className="px-3 py-2">$1,381.50</td>
                    <td className="px-3 py-2">$1.38/pc</td>
                  </tr>
                  <tr className="border-b border-amber-200">
                    <td className="px-3 py-2">5,000 pcs</td>
                    <td className="px-3 py-2">$2,761.50</td>
                    <td className="px-3 py-2">$0.55/pc</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">10,000 pcs</td>
                    <td className="px-3 py-2">$4,486.50</td>
                    <td className="px-3 py-2">$0.45/pc</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>🚢 Shipping included:</strong> All prices include sea freight delivery (40-60 days). Production time is approximately 30 days. For larger quantities or custom sizes, <button onClick={openCalendly} className="underline cursor-pointer">contact us for a custom quote</button>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Box Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key considerations for custom box packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product protection</strong> – Corrugated for shipping, tuck boxes for retail display</li>
            <li><strong>Branding impact</strong> – Gold foil and embossing for premium positioning</li>
            <li><strong>Sustainability</strong> – FSC certified for eco-conscious brands</li>
            <li><strong>Custom sizes</strong> – <button onClick={openCalendly} className="text-primary-600 hover:underline cursor-pointer">Contact us for bespoke dimensions</button></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best custom box supplier for chocolate packaging?"</li>
              <li>• "Low MOQ rigid boxes with gold foil stamping?"</li>
              <li>• "FSC certified gift boxes for artisan food products?"</li>
              <li>• "Custom printed mailer boxes for coffee beans?"</li>
              <li>• "Premium tuck boxes with embossing for tea brand?"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is a Custom Box Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Premium/luxury products</li>
                <li>• Retail shelf presentation</li>
                <li>• Gift packaging needs</li>
                <li>• Brands requiring premium finishes</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• E-commerce subscription boxes</li>
                <li>• Artisan food sampling</li>
                <li>• Corporate gift packs</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Consider Alternatives If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• You need flexible packaging</li>
                <li>• Moisture barrier is critical</li>
                <li>• <Link to="/packaging/stand-up-pouches" className="underline">Pouches may be better →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Order Custom Boxes?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a call to discuss custom sizes and finishes</p>
              <button onClick={openCalendly} className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Order Now</h4>
              <p className="text-sm text-neutral-600 mb-4">Browse boxes and order online</p>
              <Link to="/store?category=boxes" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Shop Boxes
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Compare with flexible pouches</p>
              <Link to="/packaging/stand-up-pouches" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 transition">
                View Pouches
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
                <h4 className="font-semibold text-neutral-900">巧克力糖果 Chocolate & Confectionery</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">精品巧克力、手工糖果、節日禮盒</p>
              <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block">佔比 40%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-neutral-900">咖啡茶葉 Coffee & Tea</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">精品咖啡禮盒、高端茶葉包裝、訂閱盒</p>
              <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded inline-block">佔比 35%</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-neutral-900">精品禮品 Premium Gifts</h4>
              </div>
              <p className="text-sm text-neutral-600 mb-3">企業禮品、婚慶喜糖、節日套裝</p>
              <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded inline-block">佔比 25%</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-900 mb-3">客戶成功案例 Success Story</h4>
            <p className="text-sm text-neutral-600">「我們的精品巧克力品牌採用金箔壓印+壓紋包裝盒後，產品售價提升30%，客戶聹予率增加45%，包裝成為我們品牌差異化的重要優勢。」</p>
            <p className="text-xs text-neutral-500 mt-2">— 手工巧克力品牌，年銀售額增長 60%</p>
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
              <div className="text-3xl font-bold">$28B</div>
              <div className="text-sm opacity-90">全球包裝盒市場</div>
              <div className="text-xs opacity-75 mt-1">2024年規模</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">4.8%</div>
              <div className="text-sm opacity-90">年複合增長率</div>
              <div className="text-xs opacity-75 mt-1">2024-2030</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">68%</div>
              <div className="text-sm opacity-90">消費者看重包裝</div>
              <div className="text-xs opacity-75 mt-1">影響購買決策</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center">
              <div className="text-3xl font-bold">52%</div>
              <div className="text-sm opacity-90">願為FSC付溫價</div>
              <div className="text-xs opacity-75 mt-1">環保意識提升</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-3">市場趨勢洞察</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>開箱體驗升級</strong>：精品品牌重視包裝的第一印象</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                <span><strong>FSC認證標配</strong>：85%高端品牌選擇環保包裝</span>
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
                  <th className="border border-neutral-200 px-4 py-2 text-left">盒型類型</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">結構強度</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">成本</th>
                  <th className="border border-neutral-200 px-4 py-2 text-center">適用場景</th>
                  <th className="border border-neutral-200 px-4 py-2 text-left">推薦應用</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">瓦楞紙郵寄盒</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">運輸保護</td>
                  <td className="border border-neutral-200 px-4 py-2">咖啡、茶葉、訂閱盒</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">紙卡折盒</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">零售展示</td>
                  <td className="border border-neutral-200 px-4 py-2">巧克力棒、茶包</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 px-4 py-2 font-medium">硬紙盒 + 金箔</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">奢華高端</td>
                  <td className="border border-neutral-200 px-4 py-2">精品巧克力、禮品</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-neutral-200 px-4 py-2 font-medium">FSC認證材質</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">💰💰</td>
                  <td className="border border-neutral-200 px-4 py-2 text-center">🌱 環保優先</td>
                  <td className="border border-neutral-200 px-4 py-2">有機食品、綠色品牌</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-primary-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">選材建議</h4>
            <p className="text-sm text-primary-700">紙盒包裝適合高端奢華定位產品。需運輸保護選瓦楞紙；追求極致奢華感選金箔壓紋；環保優先選FSC認證材質。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What types of custom boxes do you offer?",
      answer: "We offer two main types: Corrugated Mailer Boxes (ideal for coffee, tea, and shipping-protected products in 500g and 1kg sizes) and Tuck Boxes/Cartons (perfect for chocolate bars, tea sachets, and premium confectionery). Both feature custom CMYK printing, matte lamination, and optional gold foil stamping with embossing."
    },
    {
      question: "What is the minimum order quantity for custom boxes?",
      answer: "Our minimum order quantity is 200 pieces for both corrugated mailer boxes and tuck boxes. This low MOQ makes custom printed boxes accessible for small artisan brands, startups, and businesses testing new packaging designs."
    },
    {
      question: "Are your boxes eco-friendly?",
      answer: "Yes, all our boxes are made from FSC certified recycled paper and cardboard. They are fully recyclable in standard curbside recycling programs. We prioritize sustainable materials to support eco-conscious brands."
    },
    {
      question: "What premium finishes are available?",
      answer: "We offer gold foil hot stamping, embossed details, and matte lamination as standard. These premium finishes create a luxury unboxing experience perfect for chocolate, tea, coffee, and gift packaging applications."
    },
    {
      question: "What are the available sizes?",
      answer: "Corrugated Mailer Boxes come in 500g (130 × 85 × 35mm) and 1kg (270 × 85 × 35mm) sizes. Tuck Boxes are available in 100g size (81 × 162 × 15mm). For custom dimensions, please contact our team for a bespoke quote."
    },
    {
      question: "How long does production and shipping take?",
      answer: "Production takes approximately 30 days. Shipping via sea freight is included in all prices and takes 40-60 days. Total lead time is approximately 70-90 days from order confirmation. For urgent orders, please inquire about air freight options."
    },
    {
      question: "Do you offer samples before ordering?",
      answer: "Yes, we can provide samples for evaluation before placing a full order. Please contact us to arrange sample boxes. For standard orders, we recommend starting with our minimum 200 piece order to test with your products and customers."
    },
    {
      question: "Can I get custom sizes for my products?",
      answer: "Absolutely! We offer bespoke sizing for larger quantity orders. Contact our team with your product dimensions and we'll provide a custom quote. Custom tooling may be required for non-standard sizes."
    }
  ]

  const tables = [
    {
      title: "Box Sizes Overview",
      data: {
        headers: ["Box Type", "Size Label", "Dimensions (L×W×H)", "Best For"],
        rows: [
          ["Corrugated Mailer", "500g", "130 × 85 × 35mm", "Small coffee bags, tea boxes"],
          ["Corrugated Mailer", "1kg", "270 × 85 × 35mm", "Large coffee bags, gift sets"],
          ["Tuck Box", "100g", "81 × 162 × 15mm", "Chocolate bars, tea sachets"]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Corrugated Boxes",
      url: "/store/product/box-corrugated-custom",
      description: "Order custom printed mailer boxes - MOQ 200 pieces"
    },
    {
      title: "Shop Tuck Boxes",
      url: "/store/product/box-tuck-custom",
      description: "Premium cartons with gold foil & embossing"
    },
    {
      title: "Stand-Up Pouches",
      url: "/packaging/stand-up-pouches",
      description: "Flexible alternative for food packaging"
    },
    {
      title: "Flat Bottom Bags",
      url: "/packaging/flat-bottom-bags",
      description: "Premium pouches for coffee and tea"
    },
    {
      title: "Compostable Materials",
      url: "/materials/compostable",
      description: "Eco-friendly flexible packaging options"
    }
  ]

  return (
    <SEOPageLayout
      title="Custom Boxes | Rigid Mailer Boxes | Tuck Boxes | Gift Packaging"
      description="Custom printed rigid boxes for chocolate, tea, coffee, and artisan foods. Premium finishes including gold foil, embossing, matte lamination. FSC certified. MOQ 200 pieces. Sea freight included."
      keywords={[
        'custom boxes',
        'rigid boxes',
        'mailer boxes',
        'tuck boxes',
        'gift boxes',
        'chocolate packaging',
        'tea box packaging',
        'coffee box packaging',
        'gold foil boxes',
        'FSC certified boxes',
        'embossed packaging',
        'custom printed boxes'
      ]}
      canonicalUrl="https://achievepack.com/packaging/custom-boxes"
      heroTitle="Custom Printed Boxes"
      heroSubtitle="Premium rigid packaging for chocolate, tea, coffee & artisan foods"
      heroImage="/imgs/store/box/corrugated-box/a_half_open_box_3d_perspective_7357116.webp"
      heroImageAlt="Custom printed rigid boxes with gold foil and embossing for premium food packaging"
      introSummary="Achieve Pack offers premium custom printed boxes with FSC certified materials, gold foil stamping, and embossing. Perfect for chocolate, tea, coffee, and artisan food brands seeking luxury presentation. MOQ 200 pieces with sea freight included. Production 30 days + 40-60 days shipping."
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Ready to Order Custom Boxes?"
      ctaDescription="Create premium packaging for your artisan products with our custom printed boxes. MOQ 200 pieces."
      ctaButtonText="Shop Custom Boxes"
      ctaButtonUrl="/store?category=boxes"
    />
  )
}

export default CustomBoxesPage
