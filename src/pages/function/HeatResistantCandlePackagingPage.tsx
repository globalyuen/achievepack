import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Zap, Shield, Thermometer, Package, Droplets, Maximize, ArrowRight, Leaf, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Users, Globe, FileCheck, Building2, Sparkles, Database, LayoutPanelTop, SearchCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images for Candle Wax Packaging
const candleGallery = [
  { src: '/imgs/function/heat-resistant-candle-hero.png', title: 'High-Heat Compostable Candle Pouch', desc: 'Capable of handling 85°C hot wax pour directly into the bag.' },
  { src: '/imgs/spec/pcr-pet-kraft-triplex-clear.webp', title: 'NK/Kraft/PBS Triplex Structure', desc: 'NatureFlex (NK), FSC Kraft Paper, and High-Heat PBS composite layers for maximum heat resistance.' },
]


const HeatResistantCandlePackagingPage: React.FC = () => {
  const { t } = useTranslation()

  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const visualBreadcrumbsAndLabels = (
    <div className="space-y-3">
      {/* Visual Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-neutral-300/90 uppercase tracking-wider">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <span className="text-neutral-400">/</span>
        <Link to="/materials" className="hover:text-white transition">Eco-Friendly Materials</Link>
        <span className="text-neutral-400">/</span>
        <span className="text-[#10b981] font-bold">Heat-Resistant Candle Bags</span>
      </div>

      {/* Visual Badges & Switch Link */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-[#10b981] text-white rounded-full uppercase tracking-wider shadow-sm">
          🌱 Certified Eco friendly
        </span>
        <Link 
          to="/products/compostable-side-gusset-bags" 
          className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-white rounded-full transition border border-white/20 uppercase tracking-wider"
        >
          🔄 View Compostable Gusset Bags →
        </Link>
      </div>
    </div>
  )

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = candleGallery.length - 1
    if (newIndex >= candleGallery.length) newIndex = 0
    setGalleryEnlarged({ src: candleGallery[newIndex].src, index: newIndex })
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
    content: string | React.ReactNode
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
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <div className="text-neutral-700">{content}</div>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <div className="text-neutral-700">{content}</div>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'the-challenge',
      title: 'The High-Heat Pouch Challenge',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Can compostable bags handle hot candle wax?</strong> Most eco-friendly materials fail at 50°C. We engineered a solution that withstands 85°C.
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/heat-resistant-candle-hero.png"
            imageAlt="Hot wax pouring into compostable pouch"
            title="Engineered for 85°C+ Performance"
            content="Pouring 284g of hardened candle wax at 85°C requires more than just a bag—it requires material excellence. Conventional compostable films like standard PLA soften and leak when exposed to heat. Our high-heat pouches utilize advanced PBS (Polybutylene succinate) or NatureFlex cellulose to ensure the bag holds its shape, seal, and integrity throughout the pouring and cooling process."
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'material-science',
      title: 'Material Science: NatureFlex & PBS',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="prose prose-sm max-w-none text-neutral-700">
            <p>
              To achieve 85°C microwave and stovetop safety, we move beyond basic starch-based films. The secret lies in our **Heat-Stable Barrier Architecture**:
            </p>
            <ul className="space-y-2">
              <li><strong>NatureFlex™ (NK) Outer Layer:</strong> A wood-pulp based cellulose that offers excellent clarity and printability while remaining stable at high temperatures.</li>
              <li><strong>FSC Kraft Paper Middle Layer:</strong> Provides the structural backbone and the natural, premium tactile feel desired by boutique candle brands.</li>
              <li><strong>High-Heat PBS Sealant:</strong> Our bio-based Polybutylene succinate can withstand temperatures up to 100°C without losing its hermetic seal.</li>
            </ul>

          </div>

          <AlternatingSection
            image="/imgs/spec/pcr-pet-kraft-triplex-clear.webp"
            imageAlt="NK / Kraft Paper / PBS Structure"
            title="NK / Kraft Paper / PBS Triplex"
            content="This 100% compostable bio-structure is specifically engineered for the candle industry. The NK layer handles the heat, the Kraft paper adds rigidity, and the PBS ensures a fail-safe seal even when pouring heavy, hot wax. It's the ultimate plastic-free alternative to traditional glass jars."
            imageLeft={false}
            index={1}
          />

        </div>
      )
    },
    {
      id: 'low-moq',
      title: 'Digital Printing & Low MOQ Strategy',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Startup candle brands often face a barrier: High Minimum Order Quantities (MOQ). Traditional plate printing requires 5,000+ units per design. For a line of 6 scents, that's 30,000 bags—a massive capital outlay.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-primary-200 p-5 rounded-xl shadow-sm">
              <LayoutPanelTop className="h-6 w-6 text-primary-600 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">Digital Printing (Low MOQ)</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                <li>• MOQ: 1,000 total (e.g., 6 designs x 178 pcs)</li>
                <li>• No plate costs</li>
                <li>• High-resolution photo quality</li>
                <li>• Fast 2-3 week lead time</li>
              </ul>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 p-5 rounded-xl">
              <Database className="h-6 w-6 text-neutral-400 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">Cylinder Printing (High Volume)</h4>
              <ul className="text-sm space-y-1 text-neutral-500">
                <li>• MOQ: 5,000+ per design</li>
                <li>• Initial plate cost ($150-250 per color)</li>
                <li>• Lowest unit price for mass production</li>
                <li>• 4-5 week lead time</li>
              </ul>
            </div>
          </div>
          <p className="text-sm italic text-neutral-500">
            For 1,070 units across 6 designs, digital printing is the only commercially viable path. Our selected partners support low MOQ requirements for boutique brands.
          </p>
        </div>
      )
    },
    {
      id: 'supplier-insights',
      title: 'Our Proprietary Supply Protocol',
      icon: <SearchCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-primary-50 p-8 rounded-xl border-4 border-primary-900 shadow-xl">
            <h3 className="text-2xl font-black text-neutral-900 mb-4 uppercase tracking-tight">Our Integrated Solution Network</h3>
            <p className="text-neutral-700 mb-6">
              Finding the right pouch for 85°C wax isn't just about a supplier; it's about engineering the perfect material stack. We have audited over 15 global production lines to curate a proprietary network that meets these exact thermal and structural requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 border-2 border-primary-200 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-1 italic underline decoration-primary-500 decoration-4">The Boutique Specialist</h4>
                <p className="text-sm text-neutral-600">Perfect for 1,000 unit launches across multiple designs. We manage the digital printing process to eliminate plate costs while ensuring 95°C heat stability.</p>
              </div>
              <div className="bg-white p-4 border-2 border-primary-200 rounded-lg">
                <h4 className="font-bold text-neutral-900 mb-1 italic underline decoration-primary-500 decoration-4">The High-Volume Partner</h4>
                <p className="text-sm text-neutral-600">For established brands, we leverage our scale to provide 100°C-capable PBS pouches at the most competitive global price points.</p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg text-sm leading-relaxed text-neutral-700 mt-6 border-l-8 border-neutral-900">
            <strong>The Achieve Pack Advantage:</strong> We remove the risk of trial and error. By working with us, you gain access to a pre-vetted supply chain and material engineering that has already been stress-tested for candle wax pouring.
          </div>
        </div>
      )
    },
    {
      id: 'knowhow',
      title: 'Our Knowledge: Why the Seal Matters',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-neutral-900">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Gusset Reinforcement
              </h4>
              <p className="text-xs text-neutral-600">Liquid candle wax is heavy. The 99mm bottom gusset (49.5mm x 2) must be heat-sealed with a 5mm overlap to prevent "corner leaking" under hydraulic pressure.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-neutral-900">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Shrinkage Tension
              </h4>
              <p className="text-xs text-neutral-600">As wax cools, it shrinks. We recommend NatureFlex/PBS composites because they maintain elasticity during thermal contraction, preventing the "crinkly" look of standard PLA.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold flex items-center gap-2 text-neutral-900">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Microwave Stability
              </h4>
              <p className="text-xs text-neutral-600">For customers who melt wax directly in the pouch, our CPLA layers prevent localized "hot spots" from melting the film, ensuring stovetop and microwave safety.</p>
            </div>
          </div>
          <div className="bg-primary-900 text-white p-6 rounded-xl">
            <p className="text-sm leading-relaxed italic">
              "We don't just sell bags; we sell the assurance that your 85°C wax won't end up on your factory floor. Our expertise in high-heat compostable polymers allows candle makers to ditch the glass jar without ditching performance." 
              <br/>— Achieve Pack Engineering Team
            </p>
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
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Food-Grade Packaging Experts Since 2011</h3>
            <p className="text-neutral-700 mb-4">
              Achieve Pack has been manufacturing food-safe flexible packaging for over 13 years. Our high-heat compostable pouches are produced in BRC-certified facilities and tested to meet international food contact standards.
            </p>
          </div>
          
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
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Pack Your Candles?',
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Get Your High-Heat Sample Kit</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center border border-white/20">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Technical Consultation</h4>
              <p className="text-sm text-white/80 mb-4">Discuss material compatibility with your specific wax formula.</p>
              <button onClick={openCalendly} className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center border border-white/20">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Request Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get a detailed breakdown for 1,000+ units with digital printing.</p>
              <a href="mailto:ryan@achievepack.com?subject=Heat-Resistant Candle Pouch Inquiry" className="block w-full bg-white text-neutral-900 px-4 py-2 rounded-lg font-semibold hover:bg-neutral-100 transition">
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
      question: "Can I pour 85°C hot wax directly into these pouches?",
      answer: "Yes. Our specific NatureFlex/PBS triplex composite is engineered to withstand up to 95°C. This allows you to pour most soy, paraffin, or beeswax blends directly into the bag without deformation."
    },
    {
      question: "What is the minimum order quantity for multiple scents?",
      answer: "With digital printing, we can support orders as low as 1,000 total bags, which can be split across multiple designs (e.g., 6 designs at 166 units each). This is perfect for limited edition or seasonal candle releases."
    },
    {
      question: "Are these bags 100% compostable?",
      answer: "Absolutely. All materials used—including the zippers and valves (if needed)—are certified to ASTM D6400 or OK Compost Industrial standards. They will break down completely in industrial composting facilities within 90-180 days."
    },
    {
      question: "Do I need to pay for printing plates?",
      answer: "Not with digital printing. We charge zero plate fees for digital runs. You only pay for the bags and a small setup fee per SKU, saving you thousands in upfront costs."
    },
    {
      question: "Will the fragrance (essential oils) damage the bag?",
      answer: "No. The PBS barrier layer is chemically resistant to most natural essential oils and synthetic fragrances used in candle making, preventing delamination or odor leakage."
    }
  ]

  const relatedLinks = [
    { title: "Compostable Pouches", url: "/materials/compostable", description: "Learn about our range of eco-materials." },
    { title: "Digital Printing Solutions", url: "/printing/digital", description: "Low MOQ, no plate fees." },
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Classic doypack style for candles." },
    { title: "High-Barrier Materials", url: "/features/barrier-options", description: "Protecting your fragrance integrity." },
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title="High-Heat Compostable Candle Wax Pouches Guide | POUCH.ECO"
        metaDescription="Pour hot wax directly into certified 100% compostable candle pouches. No glass jars, low MOQ from 500 units, beautiful natural organic Kraft!"
        canonicalUrl="https://pouch.eco/function/heat-resistant-compostable-pouches"
        keywords={['compostable candle bags', 'heat resistant candle pouches', 'wax pour pouches', 'PBS pouches', 'NatureFlex candle bags']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author="POUCH.ECO Editorial Team"
        heroTitle={
          <div className="space-y-4">
            {/* Neo-brutalist Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
              <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
              <span>/</span>
              <Link to="/materials" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Eco-Friendly Materials</Link>
              <span>/</span>
              <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">Heat-Resistant Candle Bags</span>
            </div>

            {/* Badges / Cross Links */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#10b981] text-white border-2 border-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                🌱 High-Heat Certified
              </span>
              <Link 
                to="/products/compostable-side-gusset-bags" 
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-black bg-[#00FFFF] text-black border-2 border-black hover:bg-[#D4FF00] transition-colors uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                🔄 View Compostable Gusset Bags →
              </Link>
            </div>

            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mt-4">
              High-Heat<br />
              <span className="text-[#10b981]">Candle Pouches</span><br />
              DTC Startup Guide
            </h1>
          </div>
        }
        heroSubtitle="Safely pour hot wax at 85°C into 100% compostable packaging. Ditch heavy glass jars and start with just 500 units!"
        heroImage="/imgs/function/heat-resistant-candle-hero.png"
        heroImageAlt="POUCH.ECO heat resistant compostable candle pouch wax pour guide"
        categoryTag="ECO_PRODUCTS"
        categoryColor="#10b981"
        readTime="8 min read"
        sections={sections}
        ctaTitle="Ditch Heavy Glass Jars Today"
        ctaDescription="Book a quick 30-minute packaging audit with our specialists to review candle wax formulas, sizes, and order free custom stamp sample kits."
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/heat-resistant-compostable-pouches"
        achievePackText="Need enterprise-level bulk orders or advanced B2B material engineering?"
        showTableOfContents={true}
        relatedArticles={[
          {
            title: 'Why Writable & Stampable Pouches are Essential for Eco-Packers',
            url: '/knowledge/writable-stampable-pouches',
            image: '/imgs/knowledge/writable-stampable-pouches.jpg'
          },
          {
            title: 'Compostable Side Gusset Pouches: Sizing & Scent Preservation',
            url: '/products/compostable-side-gusset-bags',
            image: '/imgs/store/products/compostable-side-gusset-collection.png'
          }
        ]}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#171717"
        title="High-Heat Compostable Candle Packaging (85°C+) | Achieve Pack"
        description="Heat-resistant compostable stand-up pouches for candle wax (85°C+). PBS and NatureFlex materials with low MOQ digital printing. Certified eco-friendly candle packaging solutions."
        keywords={['compostable candle packaging', 'heat resistant pouches', 'candle wax bags', 'PBS pouches', 'NatureFlex candle bags', 'high temperature compostable packaging', 'digital printing candle bags', 'low MOQ eco packaging', 'wax pour pouches', 'sustainable candle jars alternative', '85 degree heat resistant bags']}
        canonicalUrl="https://achievepack.com/function/heat-resistant-compostable-pouches"
        heroTitle="The High-Heat Eco Pouch for Candle Makers"
        heroSubtitle="Safely pour hot wax at 85°C into 100% compostable packaging. No plates, low MOQ, zero compromises on heat resistance."
        aboveTitle={visualBreadcrumbsAndLabels}
        heroImage="/imgs/function/heat-resistant-candle-hero.png"
        heroImageAlt="Premium compostable candle pouch being filled with hot wax"
        introSummary="Transitioning to sustainable packaging shouldn't mean compromising on your manufacturing process. We provide the material know-how to handle 85°C wax pours in a fully certified compostable format."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Elevate Your Candle Brand?"
        ctaDescription="Ditch the glass and go eco with high-heat pouches. Request your custom quote today."
        ctaButtonText="Talk to a Specialist"
      />
      
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
          <img src={galleryEnlarged.src} alt={candleGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{candleGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{candleGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {candleGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default HeatResistantCandlePackagingPage
