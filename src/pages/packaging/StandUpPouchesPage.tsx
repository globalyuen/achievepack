import React, { useState } from 'react'
import { Package, Leaf, Shield, CheckCircle, Zap, Award, ChevronDown, ChevronLeft, ChevronRight, X, Heart, HelpCircle, Sparkles, MessageCircle, BookOpen, Target, Calendar, Phone, Mail, Factory, BarChart3, ArrowLeftRight, ShoppingBag, ArrowRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBrandConfig } from '../../utils/domain'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'

const StandUpPouchesPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.standUpPouches'

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const supPhotoGallery = [
    { src: '/imgs/pouch-shape/achieve-pack-sup-hero.png', title: 'Premium Printed Stand-Up Pouch', desc: 'Custom printed stand-up pouch showcasing beautiful digital printing with high contrast and vibrant eco-inks.' },
    { src: '/imgs/pouch-shape/achieve-pack-sup-lifestyle.png', title: 'Stand-Up Pouch Lifestyle Use', desc: 'Sustainable stand-up pouch presented in a modern, organic B2B food branding scene.' },
    { src: '/imgs/pouch-shape/achieve-pack-k-seal.png', title: 'Heavy-Duty K-Seal Pouch Base', desc: 'diagonal K-seal bottom structure engineered to carry heavier items (up to 5kg) with extreme base stability.' },
    { src: '/imgs/pouch-shape/eco-stand-up-pouch.png', title: 'Zero Waste Compostable Kraft SUP', desc: 'Official FSC-certified natural kraft paper stand-up pouch supporting high moisture protection and resealable zippers.' }
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = supPhotoGallery.length - 1
    if (newIndex >= supPhotoGallery.length) newIndex = 0
    setGalleryEnlarged({ src: supPhotoGallery[newIndex].src, index: newIndex })
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (1): pouch.eco (B2C)
  // ----------------------------------------------------
  if (isPouch()) {
    return (
      <PouchLayout>
        <DualDomainSEOHead 
          title="Custom Stand-Up Pouches | Eco-Friendly Stand Up Bags | Pouch.eco"
          description="Certified compostable & recyclable custom printed stand-up pouches. Low MOQ 500 pcs, organic ink, plant PLA or recyclable Mono-PE barriers. Free design mockups."
          keywords={['custom stand up pouches', 'eco stand up bags', 'compostable stand up pouches', 'recyclable coffee bags', 'pouch.eco', 'sustainable flexible packaging']}
          schemaType="Product"
        />

        {/* Hero Section */}
        <section className="bg-[#10b981] text-black py-24 px-6 border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-block bg-[#D4FF00] text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Shelf-Standing Eco Packaging
              </div>
              <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl leading-none uppercase tracking-tight">
                STAND-UP<br/>
                <span className="text-[#D4FF00] bg-black px-4 py-1 border-4 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">POUCHES</span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                Certified compostable PLA plant-stars & recyclable Mono-PE structures. Outstanding barrier preservation, durable zippers, and custom sizes.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  Book Free Call
                </NeoButton>
                <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20stand%20up%20pouches" variant="secondary">
                  WhatsApp Specialist
                </NeoButton>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="relative border-4 border-black p-4 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/imgs/pouch-shape/achieve-pack-sup-hero.png" 
                  alt="Premium Eco Stand-Up Pouch" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -top-6 -right-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 text-sm">
                  LOW MOQ: 500!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Benefits */}
        <section className="py-20 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              ADVANCED <span className="bg-black text-[#D4FF00] border-2 border-black px-2.5 py-1 inline-block -rotate-1">FLEXIBLE</span> PERFORMANCE
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <NeoCard color="bg-[#D4FF00]">
                <Leaf className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">Compostable & Recyclable</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  Choose 100% home/industrial compostable films or curbside recyclable mono-material structures. Help customers easily recycle.
                </p>
              </NeoCard>
              
              <NeoCard color="bg-white">
                <Shield className="w-8 h-8 text-[#10b981] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">OTR/WVTR Gas Locks</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  High-performance inner barriers protect against oxygen and moisture transmission (&lt;1.0 cc/m²/24hr). Extend product shelf life up to 12 months.
                </p>
              </NeoCard>

              <NeoCard color="bg-[#00FFFF]">
                <Package className="w-8 h-8 text-black mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">Stable Gusset Base</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">
                  Precision-folded oval or heavy-duty diagonal K-seal bottom options. Allows perfect shelf standing and maximizes internal volume.
                </p>
              </NeoCard>

              <NeoCard color="bg-black text-[#D4FF00]">
                <Zap className="w-8 h-8 text-[#D4FF00] mb-4" />
                <h3 className="font-black text-xl uppercase mb-2">Bespoke Closures</h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-white">
                  Add resealable press-to-close zippers, tin-ties, sliders, one-way degassing coffee valves, or custom-shaped windows.
                </p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* Real-world Product Photo Showcases */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="mb-4">
                <NeoBadge color="magenta">Visual Showcase</NeoBadge>
              </div>
              <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl uppercase mt-2 tracking-tight">
                REAL-WORLD PRODUCTION RUNS
              </h2>
              <p className="font-['JetBrains_Mono'] text-neutral-600 mt-2">
                Click any real-world print run sample to inspect our high-definition print clarity, gusset seals, and premium finishes:
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {supPhotoGallery.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryEnlarged({ src: photo.src, index: i })}
                  className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all text-left w-full group"
                >
                  <div className="aspect-square bg-neutral-100 border-2 border-black overflow-hidden mb-2">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-black text-sm uppercase truncate">{photo.title}</h4>
                  <p className="text-[10px] text-neutral-500 font-['JetBrains_Mono'] truncate mt-1">{photo.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications & Pricing */}
        <section className="py-24 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-12 tracking-tight">
              SPECIFICATIONS & <span className="bg-[#D4FF00] text-black border-2 border-black px-2.5 py-1 inline-block -rotate-1">PRICING</span>
            </h2>
            <NeoCard color="bg-white" className="!p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full font-['JetBrains_Mono'] text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-black text-[#D4FF00] border-b-4 border-black">
                      <th className="border-2 border-black p-4 font-black uppercase">Size (W x H + G)</th>
                      <th className="border-2 border-black p-4 font-black uppercase">Volumetric Capacity</th>
                      <th className="border-2 border-black p-4 font-black uppercase">Barrier Performance</th>
                      <th className="border-2 border-black p-4 font-black uppercase">Best Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">70 x 110 + 40mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">20g - 50g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 1.0</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">DTC single-serve samples, gourmet spice pods, cosmetic powder sachets</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">100 x 150 + 60mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">50g - 100g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 1.0</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">Organic tea leaf bundles, visual candy displays, premium pet treats</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">120 x 200 + 80mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">100g - 250g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 0.5</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">Specialty coffee beans with degassing valve, loose granola, protein chips</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">150 x 230 + 90mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">250g - 500g</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 0.5</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">Bulk snack bags, raw superfoods, powdered ingredients, supplement pouches</td>
                    </tr>
                    <tr>
                      <td className="border-2 border-black p-4 font-bold text-neutral-900 bg-amber-50/40">180 x 280 + 100mm</td>
                      <td className="border-2 border-black p-4 text-black font-semibold">500g - 1kg</td>
                      <td className="border-2 border-black p-4 text-emerald-600 font-bold">OTR & WVTR &lt; 0.1</td>
                      <td className="border-2 border-black p-4 text-xs text-neutral-700">Professional wholesale kibble pet food, premium retail bath salts, bulk seeds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </NeoCard>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <NeoCard color="bg-[#D4FF00]" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">500 units</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Ultra-low custom MOQ
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">Perfect for startup scaling, limited seasonal runs, and SKU testing</p>
              </NeoCard>
              <NeoCard color="bg-[#00FFFF]" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1">24 Hours</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-neutral-800">
                  complimentary dielines
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">Get precise vector drawings adjusted for your exact volumetric specifications</p>
              </NeoCard>
              <NeoCard color="bg-[#FF00FF] text-white" className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-1 text-[#D4FF00]">100% Free</div>
                <p className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
                  compostable sample kit
                </p>
                <p className="text-[10px] text-neutral-200 mt-1">Receive a kit containing 10 physical pouches to test barrier properties</p>
              </NeoCard>
            </div>
          </div>
        </section>

        {/* Global B2C FAQ */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 tracking-tight">
              FREQUENTLY ASKED <span className="text-[#10b981]">QUESTIONS</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Are stand-up pouches really compostable or recyclable?',
                  a: 'Yes! We offer two distinct eco paths. Our compostable pouches feature BPI and TÜV certified bio-films (like plant-starch PLA and NatureFlex wood pulp) that safely decompose in 90-180 days under organic conditions. Our recyclable pouches use mono-material PE or PP structures that are fully compatible with store drop-off and standard circular recycling lines.'
                },
                {
                  q: 'Will these pouches keep our dry food or coffee fresh?',
                  a: 'Absolutely. We apply high-barrier barrier films providing OTR & WVTR under 1.0 (some metallized cellulose stacks drop below 0.1). Combined with our certified one-way degassing valves, your product is protected from oxidation and moisture ingress for up to 12 months.'
                },
                {
                  q: 'What bottom gusset formats do you support?',
                  a: 'We support standard round bottom gussets for light products, K-seal diagonal bases that push heavy loads outwards for maximum standing structure, and plow bottom gussets for single-source continuous rolls.'
                },
                {
                  q: 'Do you offer custom sizes and shape tooling?',
                  a: 'Yes. Beyond standard sizes (from 20g to 5kg), we build custom dielines down to the millimeter scale. We also manufacture custom shapes (like round flasks or bottle shapes) with custom die-cut tooling to give your DTC brand unique shelf presence.'
                }
              ].map((item, idx) => (
                <NeoCard key={idx} color="bg-[#F0F0F0]/50" className="border-4">
                  <h3 className="font-black text-lg mb-2 uppercase">{item.q}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed">{item.a}</p>
                </NeoCard>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Lightbox */}
        {galleryEnlarged && (
          <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
            <button
              onClick={() => setGalleryEnlarged(null)}
              className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            <img
              src={galleryEnlarged.src}
              alt={supPhotoGallery[galleryEnlarged.index]?.title}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
              <p className="font-bold text-lg">{supPhotoGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-sm text-white/80 mt-1 leading-relaxed">{supPhotoGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {supPhotoGallery.length}</p>
            </div>
          </div>
        )}
      </PouchLayout>
    )
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (2): achievepack.com (B2B)
  // ----------------------------------------------------

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Packaging Shapes', url: '/store' },
    { label: 'Custom Stand-Up Pouches', url: '/packaging/stand-up-pouches' }
  ]

  const sections = [
    {
      id: 'overview',
      title: 'Custom Stand-Up Pouches Wholesale & Supply',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            <strong>Custom Stand-Up Pouches (SUP)</strong> represent the gold standard in premium commercial flexible packaging. Derived from BRCGS-certified factory production lines, our pouches deliver maximum shelf presence, lightweight material savings, and robust barrier protection specifically calibrated for global DTC startups and scaling wholesale food brands.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-bold text-primary-800 text-lg mb-2">Key B2B Commercial Performance Indicators:</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• <strong>75% Lighter Footprint</strong> – Drastically reduces warehousing storage space and long-haul shipping emissions vs glass jars or metal tins.</li>
                <li>• <strong>360° Branding Real Estate</strong> – Full-width digital layout coverage printed with certified soy-based plant inks.</li>
                <li>• <strong>Resealable Integration</strong> – Durable zip locks and sliders that prevent product shelf degradation.</li>
                <li>• <strong>Automatic Line Compatibility</strong> – Engineered roll width tolerance allowing seamless integration on auto VFFS/HFFS lines.</li>
              </ul>
            </div>
            <div>
              <ClickableImage 
                src="/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" 
                alt="Achieve Pack custom stand-up pouches wholesale direct supplier" 
                className="w-full rounded-lg shadow-md border border-neutral-100"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Parameter Translation & Buying Guide',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Professional procurement requires strict verification of material data. Here is how our raw technical metrics translate directly into B2B buying benefits:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden border border-neutral-200">
              <thead>
                <tr className="bg-primary-600 text-white font-semibold">
                  <th className="p-3">Technical Dimension</th>
                  <th className="p-3">Raw Specs & Materials</th>
                  <th className="p-3">B2B Purchasing Utility & Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">Barrier Layer</td>
                  <td className="p-3">NatureFlex™ MetCellulose or Recyclable EVOH (OTR &lt; 1.0, WVTR &lt; 1.0)</td>
                  <td className="p-3">Creates an absolute gas and water lock, preserving coffee aroma, snack crispness, and powder integrity for 12+ months.</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-900">Dimensions & Base</td>
                  <td className="p-3">Bespoke Millimeter Dielines (70-300mm width, plow/oval/K-seal gusset bases)</td>
                  <td className="p-3">Calibrated to volumetric density blueprint, preventing bottom seal rupture and ensuring flawless standing structure.</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">Sealing Strength</td>
                  <td className="p-3">Seal strength &gt; 35 N/15mm (engineered low-temp PBAT/Mono-PE seal resins)</td>
                  <td className="p-3">Guarantees zero burst leakage under high-pressure automated packing lines operating up to **65 bags per minute**.</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-900">Export Packaging</td>
                  <td className="p-3">Triple-layer double-wall export carton containing secondary moisture barriers</td>
                  <td className="p-3">Protects rollstock and finished bags against ocean-humidity degradation and high-stack shipping box damage.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Target B2B Application Scenarios',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Our custom printed stand-up bags are engineered to meet specific regulatory and chemical barrier criteria across professional use cases:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-amber-200 bg-amber-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-amber-900 mb-2">☕ Specialty Coffee Roasters</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                High OTR locks combined with one-way degassing valves to vent gas while locking out oxygen ingress. Perfect for retaining roasted bean integrity.
              </p>
              <span className="text-[10px] bg-white text-amber-700 border border-amber-300 px-2 py-0.5 rounded font-semibold">12-Month Roasted Freshness</span>
            </div>
            <div className="border border-green-200 bg-green-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">🌱 Organic Foods & Snacks</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                Compostable kraft paper and PLA starch bio-films certified under European EN 13432. Meets rising retail and consumer eco-expectations.
              </p>
              <span className="text-[10px] bg-white text-green-700 border border-green-300 px-2 py-0.5 rounded font-semibold">TÜV Home Compostable</span>
            </div>
            <div className="border border-blue-200 bg-blue-50/50 p-5 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">🐾 Pet Food & Treats</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                Heavy-duty diagonal K-seal bottoms that prevent grease migration and support bulk volumetric weight (from 1kg up to 5kg) without bursting.
              </p>
              <span className="text-[10px] bg-white text-blue-700 border border-blue-300 px-2 py-0.5 rounded font-semibold">Diagonal Gusset Stability</span>
            </div>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-neutral-900 mb-2">Heavier Volume stability: K-Seal Bottom Spotlight</h4>
              <p className="text-sm text-neutral-600 mb-3">
                For wholesale pet food, high-density supplements, or coffee beans, we integrate custom **K-seal bases**. The diagonal sealing structure guides product weight outwards, improving shelf-standing stability and preventing base crumple.
              </p>
              <Link to="/knowledge/k-seal-stand-up-pouches" className="inline-flex items-center gap-1 text-primary-700 font-bold hover:underline text-xs">
                Learn how K-seal increases volume capacity →
              </Link>
            </div>
            <div className="w-full md:w-1/4">
              <ClickableImage 
                src="/imgs/pouch-shape/achieve-pack-k-seal.png" 
                alt="Achieve Pack K-seal stand up pouches wholesale" 
                className="w-full rounded-lg bg-white p-2 border border-neutral-100 shadow-sm"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'Real Production Runs & Materials Verification',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 text-sm">
            We operate 4 high-speed digital lines supporting multiple SKUs. Review our actual production runs of BRC compliant, certified compostable and recyclable stand-up pouches:
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {supPhotoGallery.map((photo, i) => (
              <button
                key={i}
                onClick={() => setGalleryEnlarged({ src: photo.src, index: i })}
                className="block text-left w-full border border-neutral-200 rounded-xl p-2 bg-white hover:shadow-md transition cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden bg-neutral-50 mb-2">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
                </div>
                <h5 className="font-bold text-xs text-neutral-800 truncate">{photo.title}</h5>
                <p className="text-[10px] text-neutral-500 truncate mt-0.5">{photo.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "1. What is the Minimum Order Quantity (MOQ) for custom stand-up pouches?",
      answer: "We support startups with an industry-low digital printing MOQ of just 500 units per design. For larger wholesale volumes, we operate rotogravure plate printing from 5,000 units, providing the ultimate wholesale cost efficiency."
    },
    {
      question: "2. Do you provide physical pre-production samples?",
      answer: "Yes, we ship a free sustainable sample kit with 10 physical pouches to test barrier properties. For custom orders, we generate a 24-hour PDF soft proof and can construct exact custom digital mockups before bulk manufacture."
    },
    {
      question: "3. Can you manufacture stand-up pouches according to custom volumetric CAD drawings?",
      answer: "Yes. Our material engineers analyze your product volumetric density and customize bottom gussets and dimensions down to the millimeter scale. We provide a custom dieline layout PDF within 24 hours."
    },
    {
      question: "4. What is the production and transit lead time for commercial runs?",
      answer: "Digital runs finish in 7-10 business days; rotogravure plate orders take 12-14 days. Express DHL/FedEx air delivery to USA/EU takes 5-7 business days, and economical ocean freight is available in 20-30 days."
    },
    {
      question: "5. What certifications are available to verify eco-friendly compliance?",
      answer: "Our biopolymers carry official certificate numbers from BPI (Biodegradable Products Institute #10529618) and TÜV Austria (OK Compost HOME). Stacks comply with ASTM D6400 (US) and EN 13432 (EU) compostability guidelines."
    },
    {
      question: "6. What details must be submitted to receive a wholesale quotation?",
      answer: "Please provide estimated volumetric capacity (or exact dimensions), material preference (compostable kraft, mono-PE recyclable, high barrier), zip/degassing valve requirements, number of SKUs, and vector artwork."
    }
  ]

  const tables = [
    {
      title: "Commercial Volumetric Size Matrix",
      data: {
        headers: ["Dimensions (W x H + G)", "Volumetric Weight", "Recommended Application Scenarios"],
        rows: [
          ["70 x 110 + 40mm", "20g - 50g", "Product sample sachets, gourmet spices, dry botanical extracts"],
          ["100 x 150 + 60mm", "50g - 100g", "Skincare powder bags, single-origin tea leaf, pet treat boxes"],
          ["120 x 200 + 80mm", "100g - 250g", "Specialty coffee beans (with valve), organic granolas, protein crisps"],
          ["150 x 230 + 90mm", "250g - 500g", "Commercial organic oats, large snack SKUs, bath salt canisters"],
          ["180 x 280 + 100mm", "500g - 1kg", "Pet food kibble bags, bulk grains, wholesale coffee beans"]
        ]
      }
    }
  ]

  const relatedLinks = [
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Stable 5-panel box-gusset alternative" },
    { title: "Coffee & Tea Solutions", url: "/industry/coffee-tea", description: "Bags with degassing valves and tin-ties" },
    { title: "Compostable Material Spec", url: "/materials/compostable", description: "Compare OK Compost biopolymer specs" }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#166534"
        title="Custom Stand-Up Pouches Wholesale | Direct Manufacturer | Achieve Pack"
        description="BRCGS & ISO-9001 certified stand-up pouches. Custom printed SUP bags using compostable PLA or recyclable Mono-PE films. Low MOQ 500 pcs, global shipping."
        canonicalUrl="https://achievepack.com/packaging/stand-up-pouches"
        heroTitle="Custom Stand-Up Pouches Wholesale"
        heroSubtitle="BRCGS Certified Factory-Direct • Low MOQ 500 Units • 100% Certified Eco-Films"
        introSummary="Direct supplier of certified compostable and curbside recyclable stand-up pouches. Calibrated with high-performance OTR/WVTR oxygen barriers and diagnostic bottom gussets to prevent seal burst, ensuring 12+ months shelf life."
        heroImage="/imgs/pouch-shape/achieve-pack-sup-hero.png"
        sections={sections}
        keywords={['custom stand up pouches', 'wholesale stand up bags', 'compostable stand up pouches', 'BRC certified flexible packaging', 'achieve pack stand up pouch']}
        schemaType="Product"
        faqs={faqs}
        tables={tables}
        relatedLinks={relatedLinks}
        breadcrumbs={breadcrumbs}
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={supPhotoGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
            <p className="font-bold text-lg">{supPhotoGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/80 mt-1 leading-relaxed">{supPhotoGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {supPhotoGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default StandUpPouchesPage
