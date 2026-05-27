import React, { useState } from 'react'
import { Package, Zap, DollarSign, Settings, Gauge, Layers, ShoppingBag, Award, Users, Globe, FileCheck, Building2, Sparkles, Leaf, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images from /imgs/function/roll/
const rollstockGallery = [
  { src: '/imgs/function/roll/hero.webp', title: 'Achieve Pack® Pre-Zippered Rollstock', desc: 'Achieve Pack® Pre-Zipper Roll Film' },
  { src: '/imgs/function/roll/a_kv2_how_it_works_7440796.webp', title: 'How Pre-Zippered Rollstock Works', desc: 'Pre-Zipper Roll FilmIfWhatWork' },
  { src: '/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp', title: 'Zipper Technology Detail', desc: 'ZipperTechnologyDetails' },
  { src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp', title: 'No New Equipment Required', desc: 'NoRequireNewIncreaseEquipment' },
  { src: '/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp', title: 'Cost & Material Savings', desc: 'CostAndMaterialExcellentTrend' },
  { src: '/imgs/function/roll/a_kv6_efficiency_9836360.webp', title: 'Production Efficiency', desc: 'ProduceLineEfficiency' },
  { src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp', title: 'Flexible Applications', desc: 'MultipleApplicationFormStyle' },
  { src: '/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp', title: 'Design Your System with Achieve Pack', desc: 'And Achieve Pack TogetherDesign' },
]

const PreZipperedRollstockPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  const isPouchDomain = getDomain() === 'pouch'
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = rollstockGallery.length - 1
    if (newIndex >= rollstockGallery.length) newIndex = 0
    setGalleryEnlarged({ src: rollstockGallery[newIndex].src, index: newIndex })
  }

  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    content, 
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    content: string
    imageLeft?: boolean
    index: number
  }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      {imageLeft ? (
        <>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-neutral-700">{content}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-neutral-700">{content}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: 'Achieve Pack® Pre-Zippered Rollstock Overview',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Convert your rollstock into resealable pouches without new equipment</strong> — Achieve Pack® pre-zippered rollstock allows brands to upgrade standard packaging to resealable pouches on existing VFFS/HFFS lines.
            </p>
            <p className="text-neutral-700">
              Achieve Pack® pre-zippered rollstock allows brands to upgrade standard packaging to resealable pouches on existing VFFS/HFFS lines with minimal equipment changes.
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/roll/hero.webp"
            imageAlt="Achieve Pack Pre-Zippered Rollstock Hero"
            title="Achieve Pack® Pre-Zippered Rollstock"
            content="Our pre-zippered rollstock features zippers applied transversely to the film roll before it reaches your production line. Run it on existing VFFS or HFFS equipment with minimal adjustments to produce cut-to-open, recloseable pouches from standard rollstock."
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: 'How Pre-Zippered Rollstock Works',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv2_how_it_works_7440796.webp"
            imageAlt="How Pre-Zippered Rollstock Works"
            title="Pre-Applied Zipper Technology"
            content="The zipper is applied transversely to the film roll before it reaches your line. Run it on existing VFFS or HFFS equipment with minimal adjustments. Produce cut-to-open, recloseable pouches from standard rollstock without investing in new inline zipper systems."
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Zap className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Pre-applied zipper</h4>
              <p className="text-sm text-green-700">Zipper pre-applied to roll film</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Settings className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Minimal adjustments</h4>
              <p className="text-sm text-green-700">Requires only minor line adjustment</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Package className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Recloseable pouches</h4>
              <p className="text-sm text-green-700">Repeatably sealable packaging</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'production-sample',
      title: 'Production Sample',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">See It In Action</h3>
            <p className="text-neutral-700 mb-6">
              Watch how our pre-zippered rollstock creates a perfect tearable and resealable pouch directly from the roll film. 
            </p>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <video 
                src="/imgs/function/roll/production-sample.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-md border border-neutral-100 bg-black"
                poster="/imgs/function/roll/production-sample.jpg"
              />
              <img 
                src="/imgs/function/roll/production-sample.jpg" 
                alt="Pre-Zippered Rollstock Production Sample" 
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-md border border-neutral-100 hidden md:block"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-detail',
      title: 'Pre-Applied Zipper Zone Detail',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp"
            imageAlt="Pre-Applied Zipper Zone Detail"
            title="Pre-Applied Zipper on Rollstock"
            content="Precise placement and sealing of zippers before forming the pouch. The zipper profile and seal are engineered for reliable reclosure performance. Custom zipper length and position available to match your product requirements."
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'no-equipment',
      title: 'No New Equipment Required',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv4_no_equipment_5802224.webp"
            imageAlt="No New Equipment Required"
            title="Run on Your Existing Lines"
            content="Use with conventional VFFS and HFFS equipment. No major capital investment needed—only minor clearance adjustments to the forming tube. Your existing packaging lines become capable of producing premium resealable pouches instantly."
            imageLeft={false}
            index={3}
          />
          
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">✓ Equipment Compatibility</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-amber-700"><strong>VFFS (Vertical Form Fill Seal)</strong></p>
                <p className="text-amber-600">Vertical Form Fill Seal Machinery</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>HFFS (Horizontal Form Fill Seal)</strong></p>
                <p className="text-amber-600">Horizontal Form Fill Seal Machinery</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cost-savings',
      title: 'Cost & Material Savings',
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_cost_optimization_2620198.webp"
            imageAlt="Cost and Material Savings"
            title="Reduce Cost, Save Material"
            content="Custom zipper length and placement help cut waste and lower cost per pack. Compared to traditional in-line zipper systems, pre-zippered rollstock can save up to 25% on zipper material by only applying zippers where needed, not across the entire width."
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Up to 25% Material Savings</h4>
              <p className="text-sm text-green-700">Custom zipper length reduces waste</p>
              <p className="text-xs text-green-600 mt-1">Reduced zipper waste cuts costs</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Lower Total Cost</h4>
              <p className="text-sm text-green-700">No inline zipper equipment investment</p>
              <p className="text-xs text-green-600 mt-1">No need for zipper equipment investment</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'efficiency',
      title: 'Production Efficiency & Speed',
      icon: <Gauge className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_kv6_efficiency_9836360.webp"
            imageAlt="Production Efficiency and Speed"
            title="Maintain Speed, Boost Efficiency"
            content="Run at speeds comparable to non-zippered films. Reduce set-up time compared to in-line zipper systems. Improve overall line throughput with pre-zippered rollstock that requires minimal adjustments."
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Gauge className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">High Speed</h4>
              <p className="text-xs text-blue-600">Maintain original line speeds</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">Fast Setup</h4>
              <p className="text-xs text-blue-600">Rapid format changeovers</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Settings className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800 text-sm">15%+ Faster</h4>
              <p className="text-xs text-blue-600">Shortened production time</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Flexible Applications',
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_versatility_9776242.webp"
            imageAlt="Flexible Applications"
            title="From Pillow Packs to Stand-Up Pouches"
            content="Ideal for snacks, frozen foods, pet food, powders and more. The same production line can run both regular non-zippered rollstock and Achieve Pack® pre-zippered rollstock, providing flexibility for multiple SKUs and price points."
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🍿</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Snacks</h4>
              <p className="text-xs text-neutral-500">Chips & Pretzels</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">❄️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Frozen Foods</h4>
              <p className="text-xs text-neutral-500">Vegetables & Meats</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🐕</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Pet Food</h4>
              <p className="text-xs text-neutral-500">Treats & Kibble</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥤</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Powders</h4>
              <p className="text-xs text-neutral-500">Supplements</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">Supported Pouch Styles</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Pillow Bags</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Stand-Up Pouches</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-green-600" />
                <span className="text-green-700">Flat Bottom Bags</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consumer-experience',
      title: 'Consumer Convenience',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Cut to Open, Zip to Reclose</h3>
            <p className="text-neutral-700 mb-4">
              Add easy reclose convenience to your existing packaging format. Consumers cut open the top, then use the zipper to reseal—keeping snacks crisp, frozen foods fresh, and powders dry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">Extended Freshness</h4>
              <p className="text-sm text-neutral-600">Delay moisture and oxygen exposure</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">Better Experience</h4>
              <p className="text-sm text-neutral-600">Easy reclose for on-the-go</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
              <h4 className="font-semibold text-neutral-800">Higher Repurchase</h4>
              <p className="text-sm text-neutral-600">Enhanced user satisfaction</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-system',
      title: 'Design Your System with Achieve Pack',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/roll/a_achievepack_partnership_cta_8348442.webp"
            imageAlt="Design Your System with Achieve Pack"
            title="Design Your Pre-Zippered Rollstock System"
            content="From snacks to frozen food, one pre-zippered rollstock for all your resealable needs. Our team helps you choose the right film structure, barrier level, zipper style, and printing options for your specific application."
            imageLeft={false}
            index={7}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">3 Steps to Your Custom Solution</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">1</div>
                <h5 className="font-medium text-neutral-800">Choose Film Structure</h5>
                <p className="text-sm text-neutral-600">Select barrier level and width</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">2</div>
                <h5 className="font-medium text-neutral-800">Define Zipper Style</h5>
                <p className="text-sm text-neutral-600">Set length and position</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold mb-3">3</div>
                <h5 className="font-medium text-neutral-800">Add Printing</h5>
                <p className="text-sm text-neutral-600">Run on your existing lines</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: 'Why Trust Achieve Pack?',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Industry-Leading Expertise in Flexible Packaging</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of experience manufacturing flexible packaging, Achieve Pack has supplied pre-zippered rollstock and resealable pouches to snack brands, frozen food manufacturers, and pet food companies across North America, Europe, and Asia-Pacific.
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">FDA Compliant</h4>
              <p className="text-xs text-neutral-500">Food contact approved</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">BRC Certified</h4>
              <p className="text-xs text-neutral-500">Food safety standard</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">500+ Brands</h4>
              <p className="text-xs text-neutral-500">Trusted worldwide</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">13+ Years</h4>
              <p className="text-xs text-neutral-500">Industry experience</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">Explore Related Solutions</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Our Certifications
              </Link>
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Layers className="h-4 w-4" /> Reclosure Options
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> FAQs
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Package className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
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
              <a href="mailto:ryan@achievepack.com?subject=Pre-Zippered Rollstock Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is pre-zippered rollstock?",
      answer: "Pre-zippered rollstock is flexible packaging film that comes with zippers already applied transversely before reaching your production line. This allows you to produce resealable pouches on existing VFFS/HFFS equipment without investing in inline zipper application systems."
    },
    {
      question: "What equipment is compatible with pre-zippered rollstock?",
      answer: "Achieve Pack® pre-zippered rollstock is compatible with conventional VFFS (Vertical Form Fill Seal) and HFFS (Horizontal Form Fill Seal) equipment. Only minor clearance adjustments to the forming tube are typically required—no major capital investment needed."
    },
    {
      question: "How much cost savings can I expect?",
      answer: "Pre-zippered rollstock can save up to 25% on zipper material by only applying zippers where needed rather than across the entire film width. You also save on equipment investment and reduce setup time compared to inline zipper systems, potentially cutting overall production time by 15% or more."
    },
    {
      question: "What pouch styles can I produce with pre-zippered rollstock?",
      answer: "You can produce pillow bags, stand-up pouches, and flat bottom bags with pre-zippered rollstock. Zipper position and length are customizable, and options include Bag-Top, E-Z Tab, and other opening styles."
    },
    {
      question: "What products are best suited for pre-zippered packaging?",
      answer: "Pre-zippered rollstock is ideal for snacks, frozen foods, pet food, powders, and any product that benefits from resealable packaging. The reclosure feature helps maintain freshness after opening—keeping snacks crisp, frozen foods defrost-free, and powders dry."
    },
    {
      question: "Can I run both zippered and non-zippered films on the same line?",
      answer: "Yes! The same production line can run both regular non-zippered rollstock and Achieve Pack® pre-zippered rollstock, giving you flexibility to offer multiple SKUs at different price points without equipment changes."
    },
    {
      question: "What barrier options are available?",
      answer: "We offer barrier and non-barrier options including high-barrier metalized films, clear films, powder-proof structures, and peel-seal configurations. Our team can recommend the best structure for your specific product requirements."
    },
    {
      question: "What is the minimum order quantity for pre-zippered rollstock?",
      answer: "Minimum order quantity typically starts at 5,000-10,000 meters depending on film specifications. Contact us for exact quotes based on your requirements including film width, barrier type, and printing needs."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Compostable Pouches", url: "/materials/compostable", description: "100% plastic-free eco-friendly material options" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Fully recyclable single-material structure" },
    { title: "PCR Materials", url: "/materials/pcr", description: "Post-consumer recycled content options" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-bottom pouch style" },
    { title: "Pillow Bags", url: "/packaging/pillow-bags", description: "Classic flow-wrap format" },
    // Features
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "All zipper and seal types available" },
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Surface Finishes", url: "/features/surface-finish", description: "Matte, gloss, soft-touch options" },
    // Related function pages
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Certified child-safety packaging" },
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging solutions" },
    // Industry applications
    { title: "Snack Packaging", url: "/industry/snacks", description: "Crispy snack pouch solutions" },
    { title: "Pet Food Bags", url: "/industry/pet-food", description: "Durable pet treat packaging" },
    { title: "Frozen Food Packaging", url: "/industry/frozen-food", description: "Freeze-resistant pouch options" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our safety certifications" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  const b2cSections = [
    {
      id: 'zero-machinery-investment',
      title: 'Resealable Pouches with Zero Equipment Investment',
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            For growing direct-to-consumer (DTC) brands, upgrading to premium resealable pouches is a massive branding victory. However, standard in-line zipper machinery additions can cost tens of thousands of dollars in upfront capital. That is a massive budget barrier for a startup. 
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">
              <strong>"Upgrade your bags on your existing machines today."</strong>
            </p>
            <p className="text-sm text-neutral-800 leading-relaxed font-semibold">
              With Pouch.eco's pre-zippered roll film, you can bypass the capital equipment overhead entirely. Startups can upgrade standard pillow packs, three-side seal bags, or stand-up tubes into fully resealable, customer-friendly zipper pouches using their existing Vertical Form Fill Seal (VFFS) or Horizontal Form Fill Seal (HFFS) packaging machinery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_kv4_no_equipment_5802224.webp', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_kv4_no_equipment_5802224.webp" alt="No expensive packaging machinery upgrades required" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">Click to enlarge</div>
            </button>
            <div className="space-y-3 font-sans">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">Minor Adjustments, Major Results</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By pre-applying the resealable zipper transversely on the film before it is rolled and shipped to your facility, the only adjustment required on your standard packing machine is minor clearance tweaks on the forming tube or folder. Your existing bagger can run this film seamlessly at high speeds.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-pre-applied-works',
      title: 'The Magic of Pre-Applied Zipper Technology',
      icon: <Layers className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            How does it work without heavy inline tooling? We handle the engineering complexity in our specialized cleanrooms before the film ever leaves our floor.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 font-sans">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">Under the Hood: Pre-Applied Film</h4>
              <ul className="text-sm space-y-2 text-neutral-600 font-semibold">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>Transverse Application:</strong> We seal high-quality zipper profiles at precise spacing intervals directly onto the flat web film roll.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>Zero Heat Shock:</strong> The zippers are applied with surgical heat control to prevent structural crinkling, ensuring your final pouch lies completely flat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>Ready-to-Feed:</strong> The film arrives rolled and aligned perfectly with your print layouts. Simply mount it to your HFFS/VFFS roll spindle and start filling.</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp', index: 2 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_achievepack_zipper_technology_4352447.webp" alt="Pre-applied zipper zone details" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">Click to enlarge</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'startup-moq-digital',
      title: 'Startup-Friendly Low MOQs & Test Runs',
      icon: <Gauge className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Enterprise rollstock manufacturers usually demand tens of thousands of meters per design run. This locks out small-batch roasters, boutique spice blenders, organic pet treat crafters, and startup supplement lines who are still testing market-fit. 
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-sans">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">Flexible Short Runs (500–1000m)</h4>
            <p className="text-sm text-neutral-700 leading-relaxed font-semibold">
              We have re-engineered the film lamination line to support startup testing. You can order customized pre-zippered roll film in ultra-convenient short runs starting from just 500 to 1,000 meters. Try new recipes, seasonal fragrances, or regional flavor profiles without tying up critical cash flow in heavy warehouse inventory.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">No Cylinder Fees</h5>
              <p className="text-xs text-black">Our high-resolution digital press means you pay $0 in cylinder setup fees. Pivot and edit designs instantly.</p>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">Multi-SKU Batches</h5>
              <p className="text-xs text-black">Split your short film run between different flavor designs or seasonal variations under a single order.</p>
            </div>
            <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-sans">
              <h5 className="font-black uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">Rapid Prototypes</h5>
              <p className="text-xs text-neutral-700">Receive custom-printed film rolls on your packing line in under 2 weeks. Launch quickly!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'freshness-branding-lock',
      title: 'Pantry Freshness & DTC Brand Loyalty',
      icon: <ShoppingBag className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            For premium artisanal goods, packaging is an extension of your customer experience. Once a consumer tears open a conventional non-resealable bag, they are forced to use ugly chip-clips, tape, or dump the contents into generic glass jars—losing your branded artwork and logo entirely.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center font-sans">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/roll/a_achievepack_versatility_9776242.webp', index: 6 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/roll/a_achievepack_versatility_9776242.webp" alt="DTC Brand loyalty and packaging freshness" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">Click to enlarge</div>
            </button>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase font-semibold">Keep Your Logo in the Spotlight</h4>
              <ul className="text-sm space-y-2 text-neutral-700 font-semibold">
                <li>🍉 Ultimate Product Freshness: Multi-layer barrier lamination protects volatile flavor profiles, delicate scents, and sensitive moisture levels.</li>
                <li>🏡 Daily Pantry Billboard: When the bag sits in the pantry, your bold custom-printed retro design stays front and center for every snack session.</li>
                <li>🛠️ Tailored Sizing & Features: Match your specific pouch width, tear notches, hang holes, and gloss/matte finishes to design a highly personalized, sensory-rich box.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title="Pre-Zippered Rollstock | Resealable Film for Startups | POUCH.ECO"
        metaDescription="Upgrade standard packaging into resealable pouches on your existing VFFS/HFFS lines with ZERO equipment investment. Low MOQs from 500-1000m!"
        canonicalUrl="https://pouch.eco/function/pre-zippered-rollstock"
        keywords={['pre-zippered rollstock', 'resealable roll film', 'HFFS VFFS rollstock', 'low MOQ flexible packaging', 'startup roll film']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author="POUCH.ECO Editorial Team"
        heroTitle={
          <div className="space-y-4">
            {/* Neo-brutalist Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
              <span>/</span>
              <Link to="/function" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Packaging Functions</Link>
              <span>/</span>
              <span className="bg-[#D4FF00] text-black px-1.5 py-0.5 border border-black font-bold font-semibold">Pre-Zippered Rollstock</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-black text-[#D4FF00] border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-bold">
                🚀 Zero Machine Capital Required
              </span>
              <Link 
                to="/packaging/stand-up-pouches" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold"
              >
                🔄 View Premade Pouches →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              Pre-Zippered<br />
              <span className="text-[#10b981]">Roll Film</span><br />
              Startup Guide
            </h1>
          </div>
        }
        heroSubtitle="Resealable convenience without the expensive machine upgrades. Feed our pre-zippered rollstock directly into your standard HFFS/VFFS form-fill benders and generate gorgeous zipper pouches on day one."
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt="POUCH.ECO pre-zippered roll film packaging guide for startups"
        categoryTag="FUNCTION"
        categoryColor="#10b981"
        readTime="4 min read"
        sections={b2cSections}
        ctaTitle="Ditch the Equipment Overhead"
        ctaDescription="Book a free 30-minute machinery and design consultation. We will analyze your current HFFS/VFFS setup, verify forming tube clearance specs, and send custom roll stock trial samples to your production site."
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/pre-zippered-rollstock"
        achievePackText="Looking for industrial volume B2B contract packing and commercial rollstock runs?"
        showTableOfContents={true}
        relatedArticles={[
          {
            title: 'Writable & Stampable Pouches: SKU Agility for Craft Brands',
            url: '/knowledge/writable-stampable-pouches',
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          },
          {
            title: 'Child-Resistant Packaging: Safety-Lock Zip Guide',
            url: '/function/child-resistant-bags',
            image: '/imgs/function/cr/a_hero_child_resistant_bags_2511210.webp'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title="Pre-Zippered Rollstock | Achieve Pack® Resealable Film"
        description="Achieve Pack® pre-zippered rollstock converts your existing VFFS/HFFS lines into resealable pouch production. No new equipment needed. Save up to 25% on zipper material. Ideal for snacks, frozen foods, pet food."
        keywords={['pre-zippered rollstock', 'resealable film', 'VFFS zipper film', 'HFFS resealable', 'pre-applied zipper', 'recloseable packaging', 'snack packaging', 'frozen food packaging', 'pet food bags', 'zipper rollstock', 'resealable pouches', 'flexible packaging film', 'Pre-Zipper Roll Film', 'CanRepeatedSealPackaging']}
        canonicalUrl="https://achievepack.com/function/pre-zippered-rollstock"
        heroTitle="Achieve Pack® Pre-Zippered Rollstock"
        heroSubtitle="Convert your rollstock into resealable pouches without new equipment."
        heroImage="/imgs/function/roll/hero.webp"
        heroImageAlt="Achieve Pack Pre-Zippered Rollstock"
        introSummary="Achieve Pack® pre-zippered rollstock features zippers applied transversely before your production line. Run on existing VFFS/HFFS equipment with minimal adjustments. Save up to 25% on zipper material and reduce production time by 15%+."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Pre-Zippered Rollstock?"
        ctaDescription="Get Achieve Pack® pre-zippered rollstock for snacks, frozen foods, pet food, and more. Compatible with your existing lines."
        ctaButtonText="Get a Quote"
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
          <img src={galleryEnlarged.src} alt={rollstockGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{rollstockGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{rollstockGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PreZipperedRollstockPage
