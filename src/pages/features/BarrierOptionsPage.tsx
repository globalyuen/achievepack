import React, { useState } from 'react'
import { Shield, Thermometer, Package, CheckCircle, Clock, Target, Calendar, Mail, Download, X, ChevronLeft, ChevronRight, Image, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const barrierGallery = [
  { src: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', title: 'Eco-Friendly Barrier Technology', desc: 'Our sustainable barrier solutions protect products while minimizing environmental impact' },
  { src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', title: 'Barrier Level Comparison', desc: 'Compare Low, Medium, High, and Max barrier options for your product needs' },
  { src: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp', title: 'Kraft Paper Barrier Options', desc: 'Paper-based solutions with low to medium barrier properties' },
  { src: '/imgs/barrier/ads/a_kraft_high_max_4456348.webp', title: 'High Barrier Kraft', desc: 'Enhanced kraft paper with superior oxygen barrier for extended shelf life' },
  { src: '/imgs/barrier/ads/a_transparent_options_3839456.webp', title: 'Transparent Barrier Films', desc: 'Clear packaging with various barrier levels for product visibility' },
  { src: '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp', title: 'Metallic Barrier Detail', desc: 'Aluminum-free metallic appearance with maximum barrier protection' },
  { src: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', title: 'Application Scenarios', desc: 'Match the right barrier level to your specific product requirements' },
  { src: '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp', title: 'Eco Value Proposition', desc: 'Sustainable barrier solutions that dont compromise on protection' },
  { src: '/imgs/barrier/ads/a_closing_consultation_6756895.webp', title: 'Expert Consultation', desc: 'Get personalized barrier recommendations from our packaging specialists' },
];

const BarrierOptionsPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = barrierGallery.length - 1
    if (newIndex >= barrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: barrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you need to <strong>protect your product from oxygen, moisture, or light</strong> while maintaining eco-friendly credentials—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Food & Beverage</h4>
              <p className="text-sm text-neutral-600 mt-1">Coffee, snacks, pet food shelf life</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Supplements</h4>
              <p className="text-sm text-neutral-600 mt-1">Protein, vitamins, powders protection</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Unsure of Barrier</h4>
              <p className="text-sm text-neutral-600 mt-1">Free shelf-life testing available</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Barrier Options for Eco-Friendly Packaging',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Protect your products with the right barrier level while maintaining sustainability.</strong> Achieve Pack offers low, medium, and high barrier options in both recyclable and compostable materials to match your product's shelf life requirements.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Barrier Protection Levels:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Low Barrier (3-6 months)</strong> – Ideal for dry goods with fast turnover</li>
            <li><strong>Medium Barrier (6-12 months)</strong> – Balanced protection for most products</li>
            <li><strong>High Barrier (12-24 months)</strong> – Maximum protection for sensitive products</li>
          </ul>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Barrier Solutions Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our range of barrier packaging options. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {barrierGallery.map((img, index) => (
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
      id: 'barrier-types',
      title: 'Barrier Level Comparison',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Low Barrier</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">3-6 Months</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: 50-100 cc/m²/day</li>
                <li>• MVTR: 10-20 g/m²/day</li>
                <li>• Best eco-credentials</li>
                <li>• Lowest cost option</li>
              </ul>
              <p className="text-xs text-green-700 mt-3">Best for: Dry snacks, cookies, tea, granola</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Medium Barrier</h4>
              <div className="text-2xl font-bold text-blue-600 mb-2">6-12 Months</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: 5-20 cc/m²/day</li>
                <li>• MVTR: 2-5 g/m²/day</li>
                <li>• Good sustainability</li>
                <li>• Moderate cost</li>
              </ul>
              <p className="text-xs text-blue-700 mt-3">Best for: Coffee, nuts, pet treats, cereals</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg border-2 border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-2">High Barrier</h4>
              <div className="text-2xl font-bold text-primary-600 mb-2">12-24 Months</div>
              <ul className="text-sm space-y-1">
                <li>• OTR: {'<'} 1 cc/m²/day</li>
                <li>• MVTR: {'<'} 1 g/m²/day</li>
                <li>• Maximum protection</li>
                <li>• Premium positioning</li>
              </ul>
              <p className="text-xs text-primary-700 mt-3">Best for: Coffee, supplements, baby food</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Sustainable Barrier Materials',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Choose from eco-friendly barrier solutions:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Material</th>
                  <th className="text-left p-3 border">Barrier Level</th>
                  <th className="text-left p-3 border">Sustainability</th>
                  <th className="text-left p-3 border">Best Application</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Kraft + PLA</td><td className="p-3 border">Low</td><td className="p-3 border text-green-600">Compostable</td><td className="p-3 border">Dry goods, tea, cookies</td></tr>
                <tr><td className="p-3 border font-medium">Mono-PE</td><td className="p-3 border">Medium</td><td className="p-3 border text-blue-600">Recyclable</td><td className="p-3 border">Snacks, pet food</td></tr>
                <tr><td className="p-3 border font-medium">Mono-PE + EVOH</td><td className="p-3 border">High</td><td className="p-3 border text-blue-600">Recyclable*</td><td className="p-3 border">Coffee, supplements</td></tr>
                <tr><td className="p-3 border font-medium">Bio-PE</td><td className="p-3 border">Medium</td><td className="p-3 border text-green-600">Bio-based</td><td className="p-3 border">Organic products</td></tr>
                <tr><td className="p-3 border font-medium">PCR Plastic</td><td className="p-3 border">Medium-High</td><td className="p-3 border text-blue-600">30-100% recycled</td><td className="p-3 border">General food</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500">*EVOH layer is {'<'}5% of total structure, accepted in most recycling streams</p>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Product Recommendations',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-green-800 text-sm mb-2">Low Barrier Products</h5>
              <ul className="text-xs space-y-1 text-green-700">
                <li>• Dried fruits & vegetables</li>
                <li>• Cookies & biscuits</li>
                <li>• Loose-leaf tea</li>
                <li>• Granola & muesli</li>
                <li>• Rice & grains</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-semibold text-blue-800 text-sm mb-2">Medium Barrier Products</h5>
              <ul className="text-xs space-y-1 text-blue-700">
                <li>• Roasted coffee beans</li>
                <li>• Nuts & seeds</li>
                <li>• Pet food & treats</li>
                <li>• Protein powders</li>
                <li>• Breakfast cereals</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg">
              <h5 className="font-semibold text-primary-800 text-sm mb-2">High Barrier Products</h5>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• Ground coffee</li>
                <li>• Vitamins & supplements</li>
                <li>• Baby food</li>
                <li>• Freeze-dried products</li>
                <li>• Pharmaceutical powders</li>
              </ul>
            </div>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-sm text-neutral-600">Barrier Levels</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">Barrier Testing</div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            Not sure which barrier level you need? We offer free shelf-life testing to determine the optimal barrier for your product.
          </p>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Not sure which barrier I need?"</h4>
                  <p className="text-sm text-neutral-600">Free shelf-life testing to determine optimal barrier</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is high-barrier still eco-friendly?"</h4>
                  <p className="text-sm text-neutral-600">Yes, mono-PE with EVOH ({'<'}5%) is recyclable</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I get samples?"</h4>
                  <p className="text-sm text-neutral-600">Free material samples for testing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"What's the minimum order?"</h4>
                  <p className="text-sm text-neutral-600">500 units for all barrier levels</p>
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
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Barrier Options Quote" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Testing</h4>
              <p className="text-sm text-white/80 mb-4">Shelf-life testing</p>
              <Link to="/contact" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Request Testing
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: 'Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">DifferentIndustryforBarrierhaveDifferentRequirements，Choosing the right barrierPremiumparticularlyProductSuccesskey。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">foodBeveragesIndustry</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">coffee、nuts、Snacks、Pet Foodetc. require precise oxygen andMoisture barrier。</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">Share:: 65%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Health supplementsIndustry</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">Vitamins、Protein powder、Nutritional supplementsetc.requireHighbarrier to protect active ingredients。</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">Share:: 20%</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Infantfood</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">Baby Food、Baby foodetc.requiremaximumHighPremiumsafety barrier protection。</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">Share:: 15%</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">Customer Success Story</h5>
            <p className="text-sm text-neutral-600">「fromLow BarrierincreasedPremiumtoMediumbarrierAfter，OurcoffeeProductshelf lifefrom3 monthsextendedto9 months，Customersatisfactionimprove40%。」— Specialty coffeeBrandFounder</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: 'Market Data & Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">barrierPackagingMarketcontinuedgrowth，solutionMarketTrendhelp you make betterchoosechoose。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">$42B</div>
              <div className="text-xs text-neutral-500">GlobalbarrierPackagingMarketSize</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>yeargrowth 5.8%</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">72%</div>
              <div className="text-xs text-neutral-500">BrandconsiderationsEco-friendlybarrier</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>growthMedium</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
              <div className="text-xs text-neutral-500">Consumersfocused onProductfreshness</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>stable</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">30%</div>
              <div className="text-xs text-neutral-500">RecyclablebarrierMaterialgrowth</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>rapidgrowth</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Market Trend Insights</h5>
            <p className="text-sm text-blue-700">SustainablebarrierPackagingRequirementsrapidgrowth，Mono-PE + EVOH structurebecauseItsRecyclabilitybecomingMarketfavorite，Expected by2027yearconvertedshareHighbarrierMarket45%portionamount。</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: 'Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">DifferentbarrierMaterialfocusedperformanceContrast，to help you choose the best solution。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border font-semibold">barrierPremiumType</th>
                  <th className="text-left p-3 border font-semibold">OTR oxygenthroughrate</th>
                  <th className="text-left p-3 border font-semibold">MVTR WaterSteamGasthroughrate</th>
                  <th className="text-left p-3 border font-semibold">RecommendMaterial</th>
                  <th className="text-left p-3 border font-semibold">CostPointnumber</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Low Barrier</span></td>
                  <td className="p-3 border">50-100 cc/m²/day</td>
                  <td className="p-3 border">10-20 g/m²/day</td>
                  <td className="p-3 border">Kraft + PLA、Mono-PE</td>
                  <td className="p-3 border text-green-600 font-medium">$</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Mediumbarrier</span></td>
                  <td className="p-3 border">5-20 cc/m²/day</td>
                  <td className="p-3 border">2-5 g/m²/day</td>
                  <td className="p-3 border">Mono-PE、Bio-PE</td>
                  <td className="p-3 border text-blue-600 font-medium">$$</td>
                </tr>
                <tr className="hover:bg-primary-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">Highbarrier</span></td>
                  <td className="p-3 border">&lt;1 cc/m²/day</td>
                  <td className="p-3 border">&lt;1 g/m²/day</td>
                  <td className="p-3 border">Mono-PE + EVOH、PCR</td>
                  <td className="p-3 border text-primary-600 font-medium">$$$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">Material Selection Guide</h5>
            <p className="text-sm text-amber-700">choosechoosebarrierPremiumTypewhen，RecommendationfromProductproperties、targetshelf lifeandPreCalculateThreeDimensiondegreeComprehensiveSuitableconsiderations。OurimprovedSupplyFreeFeeshelf lifetestService，HelpYouConfirmFixedmaximumBestbarriersolution。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do I know which barrier level my product needs?",
      answer: "The required barrier depends on your product's sensitivity to oxygen and moisture, and your target shelf life. We offer free shelf-life testing where we package your product in different barrier materials and monitor quality over time. Contact us for a consultation."
    },
    {
      question: "Can high-barrier packaging still be sustainable?",
      answer: "Yes! Our mono-PE high-barrier pouches with thin EVOH layer (<5%) are accepted in most recycling streams. We also offer bio-based high-barrier options. The key is matching the right barrier to your actual needs - over-engineering barriers wastes resources."
    },
    {
      question: "What is OTR and MVTR?",
      answer: "OTR (Oxygen Transmission Rate) measures how much oxygen passes through the material. MVTR (Moisture Vapor Transmission Rate) measures water vapor passage. Lower numbers mean better barrier protection. We provide test certificates for all materials."
    },
    {
      question: "Do you offer barrier testing services?",
      answer: "Yes, we provide complimentary barrier testing for qualified orders. We can test your current packaging or run comparative tests with different barrier materials to optimize your packaging choice."
    }
  ]

  const relatedLinks = [
    { title: "Compostable Materials", url: "/materials/compostable", description: "Low barrier eco-friendly options" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Medium-high barrier recyclable" },
    { title: "Coffee & Tea Packaging", url: "/industry/coffee-tea", description: "High barrier applications" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t('seoPages.pages.barrierOptions.title')}
        description="Choose the right barrier level for your sustainable packaging. Low, medium, and high barrier options in recyclable and compostable materials. Free shelf-life testing available."
        keywords={['barrier packaging', 'high barrier pouches', 'oxygen barrier', 'moisture barrier', 'shelf life packaging', 'EVOH barrier']}
        canonicalUrl="https://achievepack.com/features/barrier-options"
        heroTitle={t('seoPages.pages.barrierOptions.heroTitle')}
        heroSubtitle={t('seoPages.pages.barrierOptions.heroSubtitle')}
        heroImage="/imgs/seo-photos/a_achievepack_barrier_range_comparison_2896222.webp"
        heroImageAlt="Barrier protection levels for eco-friendly packaging"
        introSummary={t('seoPages.pages.barrierOptions.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.barrierOptions.cta.title')}
        ctaDescription={t('seoPages.pages.barrierOptions.cta.description')}
        ctaButtonText={t('seoPages.pages.barrierOptions.cta.button')}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={barrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{barrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{barrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {barrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default BarrierOptionsPage
