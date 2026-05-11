import React, { useState } from 'react'
import { Zap, Shield, Thermometer, Package, Droplets, Maximize, ArrowRight, Leaf, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Award, Users, Globe, FileCheck, Building2, Sparkles, Database, LayoutPanelTop, SearchCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images for Candle Wax Packaging
const candleGallery = [
  { src: '/imgs/function/heat-resistant-candle-hero.png', title: 'High-Heat Compostable Candle Pouch', desc: 'Capable of handling 85°C hot wax pour directly into the bag.' },
  { src: '/imgs/function/heat-resistant-layers-tech.png', title: 'Multi-Layer Tech Cross-Section', desc: 'NatureFlex and PBS composite layers for maximum heat resistance.' },
]

const HeatResistantCandlePackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
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
    titleCn, 
    content, 
    contentCn,
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    titleCn: string
    content: string | React.ReactNode
    contentCn: string
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
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <div className="text-neutral-700">{content}</div>
            <p className="text-neutral-600 text-sm italic">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <div className="text-neutral-700">{content}</div>
            <p className="text-neutral-600 text-sm italic">{contentCn}</p>
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
            <p className="text-neutral-700">
              常规的可堆肥材料（如标准的 PLA）在 50-60°C 就会变形。我们的方案采用了高耐热 PBS 热封层，确保蜡烛浇注时的结构安全性。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/heat-resistant-candle-hero.png"
            imageAlt="Hot wax pouring into compostable pouch"
            title="Engineered for 85°C+ Performance"
            titleCn="为 85°C+ 高温灌装而生"
            content="Pouring 284g of hardened candle wax at 85°C requires more than just a bag—it requires material excellence. Conventional compostable films like standard PLA soften and leak when exposed to heat. Our high-heat pouches utilize advanced PBS (Polybutylene succinate) or NatureFlex cellulose to ensure the bag holds its shape, seal, and integrity throughout the pouring and cooling process."
            contentCn="浇注 284g 硬化蜡烛蜡需要材料具备极高的耐热性。我们采用 PBS 或 NatureFlex 纤维素复合材料，确保袋子在高温液体环境下不渗漏、不软化。"
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
              <li><strong>NatureFlex™ Outer Layer:</strong> A wood-pulp based cellulose that offers excellent clarity and printability while remaining stable at high temperatures.</li>
              <li><strong>High-Heat PBS Sealant:</strong> Unlike PLA, crystallized PBS can withstand boiling water temperatures (up to 100°C) without losing its hermetic seal.</li>
              <li><strong>Bio-PE/CPLA Tiers:</strong> Optional layers for added puncture resistance, essential for sharp edges on hardened wax.</li>
            </ul>
          </div>

          <AlternatingSection
            image="/imgs/function/heat-resistant-layers-tech.png"
            imageAlt="Technical layer diagram"
            title="Triplex Barrier Protection"
            titleCn="三层复合高阻隔技术"
            content="Our technical construction doesn't just resist heat; it protects your fragrance. The high-barrier NatureFlex layer ensures that the essential oils in your candles don't migrate through the film, preserving the 'cold throw' and 'hot throw' of your scents for months on the shelf."
            contentCn="我们的三层复合结构不仅能耐高温，还能有效锁住香精，确保蜡烛在货架上长期保持香味。"
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
            针对 1070 个订单、6 款设计的需求，数码印刷（Digital Printing）是唯一的商业可行路径。我们精选的供应商如 Anacotte 支持单款 200 个起订。
          </p>
        </div>
      )
    },
    {
      id: 'supplier-insights',
      title: 'Expert Supplier Comparison (85°C Capable)',
      icon: <SearchCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <p className="text-neutral-700">
            We have audited global suppliers to find the perfect match for 155mm x 229mm x 99mm candle pouches. Here is our expert selection:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-3">Supplier Name</th>
                  <th className="p-3">Max Temp</th>
                  <th className="p-3">MOQ Capability</th>
                  <th className="p-3">Price Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr className="bg-green-50">
                  <td className="p-3 font-bold">Anacotte Packaging</td>
                  <td className="p-3">95°C</td>
                  <td className="p-3 text-green-700 font-bold">Best for Low MOQ (200/SKU)</td>
                  <td className="p-3">Premium ($0.95-$1.10)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">DXC / Qiyu Pack</td>
                  <td className="p-3">100°C</td>
                  <td className="p-3">MOQ 500/SKU (Negotiable)</td>
                  <td className="p-3 text-emerald-600 font-bold">Best Value ($0.80)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Enviro Flex Pack</td>
                  <td className="p-3">85°C</td>
                  <td className="p-3">MOQ 1000</td>
                  <td className="p-3">Standard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-neutral-100 p-4 rounded-lg text-xs leading-relaxed text-neutral-600">
            <strong>Achieve Pack Wisdom:</strong> 雖然 Anacotte 單價較高，但對於 1070 個、分 6 款設計嘅細訂單嚟講，佢係唯一唔需要付擔高昂「開機費」嘅選擇。對於成熟品牌，我哋建議搵 DXC 或者 Qiyu（齊裕）大批量生產以降低成本。
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

  return (
    <>
      <SEOPageLayout heroBgColor="#171717"
        title="High-Heat Compostable Candle Packaging (85°C+) | Achieve Pack"
        description="Heat-resistant compostable stand-up pouches for candle wax (85°C+). PBS and NatureFlex materials with low MOQ digital printing. Certified eco-friendly candle packaging solutions."
        keywords={['compostable candle packaging', 'heat resistant pouches', 'candle wax bags', 'PBS pouches', 'NatureFlex candle bags', 'high temperature compostable packaging', 'digital printing candle bags', 'low MOQ eco packaging', 'wax pour pouches', 'sustainable candle jars alternative', '85 degree heat resistant bags']}
        canonicalUrl="https://achievepack.com/function/heat-resistant-compostable-pouches"
        heroTitle="The High-Heat Eco Pouch for Candle Makers"
        heroSubtitle="Safely pour hot wax at 85°C into 100% compostable packaging. No plates, low MOQ, zero compromises on heat resistance."
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
