import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShoppingCart, Package, Truck, Camera, CheckCircle, Shield, Target, Calendar, MessageCircle, Zap, Box, Scale, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const EcommerceBrandPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'E-commerce Packaging Challenges',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              You built your <strong>health supplement brand for online sales</strong>. Every shipping cost, every damaged product, every forgettable unboxing experience directly impacts your bottom line and customer retention.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-red-800">What's Costing You Money</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Heavy packaging inflating shipping costs</li>
                  <li>• Products damaged in transit = returns</li>
                  <li>• Generic packaging = no social shares</li>
                  <li>• Oversized boxes = wasted warehouse space</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What Drives Growth</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Lightweight = lower shipping zone costs</li>
                  <li>• Durable = zero damage claims</li>
                  <li>• Instagram-worthy = free marketing</li>
                  <li>• Space-efficient = better inventory turns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Packaging Optimized for DTC Shipping',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Achieve Pack's flexible pouches are designed for e-commerce</strong>—lightweight, durable, and compact. Reduce shipping costs by up to 60% compared to rigid containers while creating unboxing experiences that get shared.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <Scale className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-700">75%</div>
              <div className="text-xs text-green-600">Lighter Than Rigid</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Box className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-700">50%</div>
              <div className="text-xs text-blue-600">Less Storage Space</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-700">0.1%</div>
              <div className="text-xs text-purple-600">Damage Rate</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
              <Camera className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-700">3x</div>
              <div className="text-xs text-amber-600">More Social Shares</div>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">E-commerce Packaging Examples</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp" 
                alt="Lightweight e-commerce pouch for shipping" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Lightweight Pouch"
              />
              <ClickableImage 
                src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp" 
                alt="Stand-up pouch for DTC supplements" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Stand-Up Pouch"
              />
              <ClickableImage 
                src="/imgs/store/surface/soft-touch.webp" 
                alt="Soft touch premium finish for unboxing" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Soft Touch Finish"
              />
              <ClickableImage 
                src="/imgs/store/closure/slider-zipper.webp" 
                alt="Slider zipper for easy reseal" 
                className="w-full h-28 object-cover rounded-lg"
                caption="Slider Zipper"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'unboxing',
      title: 'Create Instagram-Worthy Unboxing',
      icon: <Camera className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            In DTC, your packaging IS your store shelf. <strong>Premium finishes and custom design</strong> transform your packaging into shareable content that drives organic growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Premium Finishes</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Soft-touch lamination</li>
                <li>• Spot UV coating</li>
                <li>• Foil stamping</li>
                <li>• Matte/gloss combinations</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Photo-Ready Design</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Full 360° printing</li>
                <li>• CMYK + Pantone</li>
                <li>• Clear windows</li>
                <li>• Custom die-cuts</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-lg p-4">
              <h4 className="font-semibold text-neutral-800 mb-2">Functional Features</h4>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Resealable zippers</li>
                <li>• Easy-tear notches</li>
                <li>• Hang holes for display</li>
                <li>• QR codes</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'durability',
      title: 'Built for Shipping Conditions',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            E-commerce packaging faces drops, compression, and temperature changes. <strong>Our multi-layer structures are engineered for transit durability</strong> while protecting product freshness.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3">Barrier Protection Options</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-medium text-blue-700">High Barrier</h5>
                <p className="text-sm text-blue-600">12+ months shelf life. For supplements, protein powders.</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-700">Medium Barrier</h5>
                <p className="text-sm text-blue-600">6-12 months. For snacks, dry goods.</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-700">Standard</h5>
                <p className="text-sm text-blue-600">3-6 months. For quick-turn products.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Puncture Resistant</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Moisture Barrier</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">UV Protection</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Oxygen Barrier</span>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: 'Sustainable Options for Eco-Conscious Customers',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Your customers care about sustainability. <strong>Offer packaging they can feel good about</strong> without compromising on performance or aesthetics.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/materials/compostable" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <h4 className="font-semibold text-green-800">Certified Compostable</h4>
              <p className="text-sm text-green-700 mt-1">Breaks down in 90-180 days. ASTM D6400 certified.</p>
            </Link>
            <Link to="/materials/recyclable-mono-pe" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <h4 className="font-semibold text-blue-800">Store Drop-Off Recyclable</h4>
              <p className="text-sm text-blue-700 mt-1">Mono-PE accepted at Walmart, Target recycling.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'social-proof',
      title: 'Trusted by E-commerce Brands',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-white p-5 rounded-lg border border-neutral-200">
            <p className="text-sm italic text-neutral-600 mb-4">
              "Switching from boxes to Achieve Pack pouches cut our shipping costs by 45%. The soft-touch finish gets so many compliments on Instagram. Our customers actually keep the pouches!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">MR</span>
              </div>
              <div>
                <p className="font-semibold text-neutral-800">Michael R.</p>
                <p className="text-xs text-neutral-500">Founder, SupplementsDirect.com</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Optimize Your E-commerce Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Calculate Your Shipping Savings</h3>
          <p className="text-lg mb-6 opacity-90">
            Book a consultation. We'll analyze your current packaging and show you exactly how much you can save.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Now
            </Link>
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
          <p className="text-neutral-700">Differenttypese-commercemerchantBrandforPackaginghaveDifferentRequirements，Choosing the right solution is key to improvingCustomerexperience。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">DTCHealthBrand</h4>
              </div>
              <p className="text-sm text-blue-700 mb-3">Health supplements、Protein powder、Vitaminsonline sales。</p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">Share:: 40%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">OnlinefoodBrand</h4>
              </div>
              <p className="text-sm text-green-700 mb-3">Snacks、coffee、Teaetc.Subscription services。</p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">Share:: 35%</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Pete-commercemerchant</h4>
              </div>
              <p className="text-sm text-purple-700 mb-3">Pet Food、SnacksOnlinesales。</p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">Share:: 25%</div>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-neutral-800 mb-2">Customer Success Story</h5>
            <p className="text-sm text-neutral-600">「fromrigidboxesPackagingconversiontoflexiblebagsAfter，Ourshipping costsreduce45%，andCustomerinInstagramunboxing sharerateimprovedHigh3times。」— DTCHealth supplementsBrandFounder</p>
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
          <p className="text-neutral-700">e-commercemerchantPackagingMarketrapidgrowth，Customerexperienceandshipping costsCostisDTCBrandcore focus。</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">60%</div>
              <div className="text-xs text-neutral-500">shipping costssavingpotential</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>EffectBenefitSignificant</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">3x</div>
              <div className="text-xs text-neutral-500">SocialDivideEnjoyimprove</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>growthMedium</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">0.1%</div>
              <div className="text-xs text-neutral-500">Shipping Damagerate</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>ultralow</span>
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">100</div>
              <div className="text-xs text-neutral-500">maximumlowOrdervolume</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-green-600 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>Flexible</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Market Trend Insights</h5>
            <p className="text-sm text-blue-700">DTCBrandincreasinglyfocused onPackagingSocialSpreadeffect。flexiblebagsPackagingbecauseItsLightconvenient、HighPrintingQualityandStrongShipping ProtectionperformancePowerbecominge-commercemerchantBrandFirstchoose。</p>
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
          <p className="text-neutral-700">Differente-commercemerchantPackagingFeaturesContrast，to help you choose the best solution。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border font-semibold">Packaging Type</th>
                  <th className="text-left p-3 border font-semibold">Heavyvolumesaving</th>
                  <th className="text-left p-3 border font-semibold">Shipping Protection</th>
                  <th className="text-left p-3 border font-semibold">unboxing experience</th>
                  <th className="text-left p-3 border font-semibold">shipping costsCost Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-green-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Soft-touchflexiblebags</span></td>
                  <td className="p-3 border">-75%</td>
                  <td className="p-3 border">★★★★★</td>
                  <td className="p-3 border">★★★★★</td>
                  <td className="p-3 border text-green-600 font-medium">-60%</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">LostGloss</span></td>
                  <td className="p-3 border">-75%</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border text-blue-600 font-medium">-55%</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">Paperboardflexiblebags</span></td>
                  <td className="p-3 border">-70%</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border">★★★★</td>
                  <td className="p-3 border text-amber-600 font-medium">-50%</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="p-3 border"><span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs font-medium">traditionalrigidboxes</span></td>
                  <td className="p-3 border">BaseStandard</td>
                  <td className="p-3 border">★★★</td>
                  <td className="p-3 border">★★★</td>
                  <td className="p-3 border text-neutral-600 font-medium">BaseStandard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-semibold text-amber-800 mb-2">Material Selection Guide</h5>
            <p className="text-sm text-amber-700">forinDTC E-commerce Brands，Soft-touchflexiblebagsismaximumBestchoosechoose，Bothperformancesignificantlysavingshipping costs，AndperformanceimprovedSupplySuperiorunboxing experience。MultipletypesSurface FinishcanimproveSocialDivideEnjoyrate。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How much can I save on shipping with flexible pouches?",
      answer: "Most e-commerce brands save 40-60% on shipping costs by switching from rigid containers to flexible pouches. The exact savings depend on your product weight, shipping zones, and carrier rates."
    },
    {
      question: "Will flexible pouches protect my products during shipping?",
      answer: "Yes. Our multi-layer structures are specifically designed for transit durability. The flexible material absorbs impacts better than rigid packaging, and our barrier layers protect against moisture and oxygen."
    },
    {
      question: "How do I create packaging that photographs well?",
      answer: "We offer premium finishes like soft-touch lamination, spot UV, and foil stamping that create visual interest. Our design team can help you choose finishes that photograph beautifully for social media."
    },
    {
      question: "What's the minimum order for custom e-commerce packaging?",
      answer: "Our MOQ is 100 pieces for digital printed pouches. This allows you to test designs, run limited editions, or manage inventory efficiently with smaller, more frequent orders."
    }
  ]

  return (
    <>
      <Helmet>
        <title>E-commerce Packaging | DTC Brand Pouches | Reduce Shipping Costs | Achieve Pack</title>
        <meta name="description" content="Lightweight e-commerce packaging optimized for DTC shipping. Reduce costs by 60%, create Instagram-worthy unboxing, durable for transit. Low MOQ from 100 pieces." />
        <link rel="canonical" href="https://achievepack.com/solutions/ecommerce-brand" />
        <meta property="og:title" content="E-commerce Packaging | DTC Brand Pouches | Achieve Pack" />
        <meta property="og:description" content="Lightweight packaging optimized for DTC shipping. Reduce costs, create shareable unboxing experiences." />
        <meta name="keywords" content="ecommerce packaging, DTC brand pouches, shipping cost reduction, unboxing experience, lightweight packaging, online brand packaging" />
      </Helmet>

      <SEOPageLayout
        title="E-commerce Packaging | DTC Brand Pouches | Reduce Shipping Costs"
        description="Lightweight e-commerce packaging optimized for DTC shipping. Reduce costs by 60%, create Instagram-worthy unboxing experiences."
        keywords={['ecommerce packaging', 'DTC brand pouches', 'shipping cost reduction', 'unboxing experience', 'lightweight packaging']}
        heroTitle="E-commerce Brand Packaging"
        heroSubtitle="Reduce Shipping Costs 60% | Instagram-Worthy Unboxing | Transit Durable"
        introSummary="Lightweight flexible pouches designed for DTC shipping. Reduce costs, create shareable unboxing experiences, and protect products in transit. Low MOQ from 100 pieces."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp"
      />
    </>
  )
}

export default EcommerceBrandPage
