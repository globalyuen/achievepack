import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Eye, Star, Heart, CheckCircle, Palette, ChevronDown, ArrowRight, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'
import ClickableImage from '../../components/ClickableImage'

// Neo-Brutalist Components
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

interface FAQItem {
  q: string
  a: string
}

export default function PouchSurfaceFinishPage() {
  const baseUrl = getBaseUrl()
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const FINISHES = [
    {
      name: "Matte Lamination",
      tagline: "Sophisticated, Anti-Glare & Organic",
      desc: "An elegant, non-reflective finish that absorbs light, creating a natural and high-end organic aesthetic. Resists fingerprints and protects the printed layer from shelf scuffs.",
      features: ["Sophisticated modern look", "Zero fingerprint smudges", "Excellent scratch protection"],
      bestFor: "Organic foods, luxury health products, premium tea & coffee brands",
      price: "Standard (Included in Base Price)",
      color: "bg-emerald-50 border-emerald-900 text-emerald-950",
      icon: Eye
    },
    {
      name: "Gloss Lamination",
      tagline: "Vibrant Color Contrast & High Reflectivity",
      desc: "A highly reflective finish that dramatically boosts color contrast and saturation. Perfect for colorful package artwork that needs to capture instant attention on retail shelving.",
      features: ["Maximum dynamic color range", "100% water and grease resistant", "Sleek reflective pop"],
      bestFor: "Consumer snacks, juices, pet food, and high-contrast designs",
      price: "Standard (Included in Base Price)",
      color: "bg-emerald-50 border-emerald-900 text-emerald-950",
      icon: Sparkles
    },
    {
      name: "Spot Matte Varnish / Contrast",
      tagline: "High-Contrast Tactile Highlights",
      desc: "Creates a gorgeous sensory contrast by placing high-gloss elements on top of a velvety matte background. Your logo, product windows, or text will practically pop off the pouch.",
      features: ["Selective glossy highlights", "High visual & tactile contrast", "Premium commercial appeal"],
      bestFor: "Artisan coffee bags, gourmet chocolates, premium supplements",
      price: "+$0.02 - $0.05 / pouch",
      color: "bg-emerald-100/40 border-emerald-900 text-emerald-950",
      icon: Palette
    },
    {
      name: "Soft-Touch tactile Coating",
      tagline: "Velvety Sensual Premium Feel",
      desc: "An ultra-premium tactile coating that gives your pouch a velvet-like touch. Highly engaging and memorable, it encourages consumers to physically hold your package.",
      features: ["Velvety, soft surface friction", "Matte visual elegance", "Exceptional premium feel"],
      bestFor: "Cosmetic pouches, luxury wellness brands, high-end botanical powders",
      price: "+$0.04 - $0.08 / pouch",
      color: "bg-emerald-100/40 border-emerald-900 text-emerald-950",
      icon: Heart
    },
    {
      name: "Hot Foil Metallic Stamping",
      tagline: "Authentic Gold, Silver & Copper Bling",
      desc: "Metallic stamping that reflects light with pristine metallic clarity. Adds high-end gold, silver, bronze, or rose-gold elements onto selected areas of your packaging artwork.",
      features: ["Reflective metallic finishes", "Crisp line definition", "High luxury positioning"],
      bestFor: "Limited editions, gift packaging, specialty single-origin coffees",
      price: "+$0.03 - $0.07 / pouch",
      color: "bg-emerald-100/40 border-emerald-900 text-emerald-950",
      icon: Star
    }
  ]

  const SPEC_MATRIX = [
    {
      metric: "Gloss Reflectivity",
      matte: "8 - 12 GU (Low Gloss)",
      gloss: "85 - 95 GU (High Reflection)",
      utility: "Gloss maximizes color pop; Matte delivers elegant glare-free retail readability."
    },
    {
      metric: "Haze Value (ASTM D1003)",
      matte: "75% - 85% Haze",
      gloss: "< 3.0% Haze",
      utility: "Matte creates a muted natural look; Gloss provides crystal clear transparent windows."
    },
    {
      metric: "COF (Coefficient of Friction)",
      matte: "0.25 - 0.35 (Low slip, high tactile grip)",
      gloss: "0.15 - 0.22 (High slip, smooth automatic fill)",
      utility: "Gloss speeds up high-speed VFFS auto-filling; Matte feels premium and organic to touch."
    },
    {
      metric: "Adhesion Strength (Foil Stamping)",
      matte: "> 4.5 N/15mm (Pristine bonding)",
      gloss: "> 4.0 N/15mm (Pristine bonding)",
      utility: "Guarantees that gold/silver foil stamps do not flake or peel off during long haul logistics."
    },
    {
      metric: "Lamination Bond Strength",
      matte: "> 2.5 N/15mm (Triple laminate safety)",
      gloss: "> 2.8 N/15mm (Double laminate safety)",
      utility: "Prevents delamination under warm packaging climates or oily product contents."
    }
  ]

  const FAQS: FAQItem[] = [
    {
      q: "What is the Minimum Order Quantity (MOQ) for specialty surface finishes?",
      a: "Our standard Matte and Gloss finishes are available starting at our absolute minimum run of 500 units for digital printing. For premium custom effects like Spot Matte Varnish, Soft-Touch Coating, or Hot Foil Stamping, the minimum runs start at 5,000 units due to custom plating and set-up requirements."
    },
    {
      q: "Can we receive physical samples of Matte, Gloss, and Spot UV finishes before ordering?",
      a: "Absolutely! We offer a Free Premium Sample Kit that includes a variety of physical pouches in different sizes, shapes, and surface finishes (including Gloss, Matte, Spot UV, and Soft-Touch). This allows your product developers to touch, feel, and inspect the durability of each finish. Sample kits are dispatched via express carrier within 24 hours."
    },
    {
      q: "How do we format artwork files for Spot UV or Hot Foil Stamping?",
      a: "For specialty finishes like Spot UV and Hot Foil, your designer must submit a separate layer in the PDF artwork file named 'SPOT_UV' or 'FOIL_STAMP' colored in 100% K (vector solid black). This black vector path indicates the exact physical mask where the varnish or metallic foil should be heat-pressed."
    },
    {
      q: "Does the surface finish impact the lead time of my packaging order?",
      a: "Standard Matte and Gloss lamination add zero additional production time, keeping your digital runs at 10-14 days. Custom Spot UV, soft-touch coatings, and hot foil stamping require specialized tooling alignments and dynamic hot-pressing stages, which add approximately 3-5 business days to the overall production schedule."
    },
    {
      q: "Are these surface finishes certified compostable and eco-friendly?",
      a: "Yes! All standard Matte and Gloss surface films used by pouch.eco are certified compostable under ASTM D6400 / EN 13432 standards (TUV OK Compost and BPI certified). Our custom coatings and metallic foils are formulated as bio-based, biodegradable layers that leave zero microplastics and do not interfere with standard municipal organic composting streams."
    },
    {
      q: "What technical details are needed to receive a wholesale surface quote?",
      a: "To provide an accurate B2B wholesale quotation, we require: (1) Your target pouch dimension and shape, (2) The specific surface finish chosen (e.g. Spot UV contrast vs standard Matte), (3) Estimated order volume per SKU, and (4) The product type being packed to ensure barrier compatibility."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Surface Finish Options | Professional Matte, Gloss & Spot UV | Pouch.eco</title>
        <meta name="description" content="Choose the perfect surface finish for your eco-friendly pouches. Matte, Gloss, Spot UV contrast, Soft-Touch, and Hot Foil. High-fidelity Amazon-quality visual comparison." />
        <link rel="canonical" href={`${baseUrl}/options/surface-finish`} />
        
        <meta property="og:title" content="Surface Finish Options | Make Your Pouch Stand Out | Pouch.eco" />
        <meta property="og:description" content="Infographic surface finish guide comparing Matte, Gloss, and Spot UV contrast. Natural dark green styling." />
        <meta property="og:url" content={`${baseUrl}/options/surface-finish`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/options/surface-finish-comparison.png`} />
      </Helmet>

      {/* Breadcrumbs Navigation */}
      <nav className="bg-emerald-950/5 border-b-2 border-black py-4 px-6" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-medium text-emerald-950/80">
          <Link to="/" className="hover:underline hover:text-emerald-800 transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">Packaging Options</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-950 font-bold" aria-current="page">Surface Finishes</span>
        </div>
      </nav>

      {/* Hero Section - Soothing Dark Green Botanical Theme */}
      <section className="relative pt-16 pb-24 border-b-4 border-black bg-gradient-to-br from-emerald-50 via-green-50/70 to-emerald-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="emerald" className="border-emerald-900 bg-emerald-900 text-white font-bold tracking-wider">
              <Leaf className="w-4 h-4 inline-block mr-1 text-green-300" /> PREMIUM ECO-FRIENDLY OPTIONS
            </NeoBadge>
            <h1 className="mt-8 font-black text-5xl md:text-7xl leading-tight text-emerald-950">
              Professional Surface<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-900">Finish Options</span>
            </h1>
            <p className="mt-8 text-xl text-emerald-950/80 max-w-4xl mx-auto leading-relaxed">
              The surface finish is the first sensory touchpoint your customer has with your brand. Choose a high-quality finish that aligns with your design aesthetic while maintaining strict compliance.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <NeoCard className="text-center bg-white border-2 border-emerald-950/30 hover:shadow-lg transition-shadow">
              <Sparkles className="w-10 h-10 mx-auto text-emerald-800 mb-4" />
              <h3 className="font-bold text-lg mb-1 text-emerald-950">Vibrant Contrast</h3>
              <p className="text-emerald-950/70 text-sm mb-3">Maximize color pop & grease-proof cleaning</p>
              <NeoBadge color="emerald">Go High-Gloss</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-white border-2 border-emerald-950/30 hover:shadow-lg transition-shadow">
              <Eye className="w-10 h-10 mx-auto text-emerald-800 mb-4" />
              <h3 className="font-bold text-lg mb-1 text-emerald-950">Sophisticated Organic</h3>
              <p className="text-emerald-950/70 text-sm mb-3">Anti-glare elegance with natural texture</p>
              <NeoBadge color="emerald">Go Matte</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-white border-2 border-emerald-950/30 hover:shadow-lg transition-shadow">
              <Palette className="w-10 h-10 mx-auto text-emerald-800 mb-4" />
              <h3 className="font-bold text-lg mb-1 text-emerald-950">Tactile Dimensions</h3>
              <p className="text-emerald-950/70 text-sm mb-3">Velvety friction or shiny Spot UV contrasts</p>
              <NeoBadge color="emerald">Go Spot / Custom</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Visual Infographic Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <NeoBadge color="emerald" className="bg-emerald-900 border-emerald-900 text-white font-bold">
                VISUAL SHOWCASE
              </NeoBadge>
              <h2 className="font-black text-4xl md:text-5xl text-emerald-950 leading-tight">
                Visualizing Surface Contrast
              </h2>
              <p className="text-lg text-emerald-900/80 leading-relaxed">
                Our custom-developed <strong>Amazon-grade visual comparison chart</strong> showcases the exact volumetric behavior of our finishes side-by-side. From the anti-reflective qualities of organic Matte to the shiny depth of Gloss and Spot UV textures, this guide ensures your packaging decisions are completely informed.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700"><strong>Pristine Volumetric Angles:</strong> Displays correct light refraction and shape details to match real physical sample pouches.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700"><strong>Pure Botanical Design:</strong> Styled inside a dark green theme matching the authentic organic aesthetic of pouch.eco.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <NeoCard className="p-2 bg-emerald-50 border-4 border-emerald-900 shadow-[8px_8px_0px_0px_#022c22]">
                <ClickableImage 
                  src="/imgs/options/surface-finish-comparison.png" 
                  alt="Amazon-quality flexible stand-up packaging surface finishes infographic comparing Matte, Gloss, and Spot UV contrast in a dark green theme." 
                  className="w-full object-cover border-2 border-black"
                />
                <div className="p-3 text-center text-xs text-emerald-900/80 font-mono">
                  🔍 Click infographic to enlarge. Style: nano banana pro 2
                </div>
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Finishes Section */}
      <section className="py-24 bg-emerald-50/20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl text-emerald-950 mb-4">
              Explore Our Specialty Finishes
            </h2>
            <p className="text-xl text-emerald-900/70">
              Each custom surface layer has unique mechanical and visual traits tailored for commercial shelf presence.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {FINISHES.map((finish, index) => (
              <NeoCard key={index} className={`border-4 border-emerald-900 shadow-[6px_6px_0px_0px_#022c22] ${finish.color}`}>
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white border-2 border-emerald-900">
                        <finish.icon className="w-8 h-8 text-emerald-950" />
                      </div>
                      <div>
                        <h3 className="font-black text-2xl text-emerald-950">{finish.name}</h3>
                        <p className="text-sm font-semibold text-emerald-900/70">{finish.tagline}</p>
                      </div>
                    </div>
                    <p className="text-emerald-950/80 text-base leading-relaxed">{finish.desc}</p>
                    
                    <div className="grid sm:grid-cols-3 gap-3 pt-2">
                      {finish.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                          <span className="text-xs font-medium text-emerald-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 bg-white/70 border-2 border-emerald-900/30 p-5 space-y-4">
                    <div>
                      <p className="text-[10px] font-black text-emerald-950/60 uppercase tracking-widest mb-1">Commercial Application</p>
                      <p className="font-bold text-sm text-emerald-950">{finish.bestFor}</p>
                    </div>
                    <div className="pt-3 border-t border-emerald-900/20 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-black text-emerald-950/60 uppercase tracking-widest">Base Cost Factor</p>
                        <p className="font-black text-lg text-emerald-900">{finish.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical-to-Purchasing Specification Matrix */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="emerald" className="bg-emerald-900 border-emerald-900 text-white font-bold">
              TECHNICAL VALUE METRICS
            </NeoBadge>
            <h2 className="font-black text-4xl md:text-5xl text-emerald-950 mt-4 mb-4">
              Surface Engineering Specifications
            </h2>
            <p className="text-lg text-emerald-900/70 max-w-3xl mx-auto">
              We translate technical properties into purchasing criteria, giving procurement directors exact baseline performance scores.
            </p>
          </div>

          <div className="overflow-x-auto border-4 border-emerald-900 shadow-[6px_6px_0px_0px_#022c22]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-950 text-white border-b-2 border-emerald-900">
                  <th className="p-4 font-mono text-xs uppercase tracking-wider border-r border-emerald-900/30">Measurement Parameter</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider border-r border-emerald-900/30">Matte Finish Baseline</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider border-r border-emerald-900/30">Gloss Finish Baseline</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider">Procurement Significance & Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/20 text-sm">
                {SPEC_MATRIX.map((row, index) => (
                  <tr key={index} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="p-4 font-bold text-emerald-950 border-r border-emerald-900/20 font-mono bg-emerald-50/10">{row.metric}</td>
                    <td className="p-4 text-gray-700 border-r border-emerald-900/20 font-mono">{row.matte}</td>
                    <td className="p-4 text-gray-700 border-r border-emerald-900/20 font-mono">{row.gloss}</td>
                    <td className="p-4 text-emerald-900 font-medium">{row.utility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-emerald-50/20 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="emerald" className="bg-emerald-900 border-emerald-900 text-white font-bold">
              PROCUREMENT HELP CENTER
            </NeoBadge>
            <h2 className="font-black text-4xl md:text-5xl text-emerald-950 mt-4 mb-4">
              Wholesale Surface Finishes FAQ
            </h2>
            <p className="text-lg text-emerald-900/70">
              Clear answers to the six core B2B purchasing pillars regarding sample runs, certifications, and artwork specs.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="border-2 border-emerald-900 bg-white hover:border-emerald-700 transition-colors shadow-[4px_4px_0px_0px_#022c22] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-bold text-lg text-emerald-950">{faq.q}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-emerald-900 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 pt-0 border-t border-emerald-900/20 text-gray-700 leading-relaxed text-sm bg-emerald-50/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA B2B Wholesale / Sample Order Section */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="font-black text-4xl md:text-6xl text-white">
            Choose the Perfect Finish for <br/>
            <span className="text-green-300">Your Sustainable Brand</span>
          </h2>
          <p className="text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
            Order a free catalog kit containing real Matte, Glossy, Soft-Touch, and Spot UV stand-up bags to inspect our material durability first-hand.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-6">
            <NeoCard className="bg-emerald-900 border-2 border-emerald-800 text-left p-6 flex flex-col justify-between shadow-none text-white">
              <div>
                <NeoBadge color="emerald" className="bg-green-700 border-green-600 text-white font-bold text-xs uppercase mb-4">
                  D2C Startup Brands
                </NeoBadge>
                <h3 className="font-bold text-xl mb-2 text-white">Digital Runs (MOQ 500)</h3>
                <p className="text-sm text-green-100/70 mb-6">
                  Perfect for trial launch packaging. Standard Matte or Gloss coating options with lightning fast 10-day lead time.
                </p>
              </div>
              <NeoButton 
                variant="primary" 
                className="w-full text-center py-3 bg-green-500 hover:bg-green-400 text-emerald-950 border-emerald-950 font-bold justify-center"
              >
                Request Free Sample Kit <ArrowRight className="w-4 h-4 ml-2" />
              </NeoButton>
            </NeoCard>

            <NeoCard className="bg-emerald-900/40 border-2 border-emerald-800/80 text-left p-6 flex flex-col justify-between shadow-none text-white">
              <div>
                <NeoBadge color="emerald" className="bg-emerald-800 border-emerald-700 text-white font-bold text-xs uppercase mb-4">
                  B2B Volume Buyers
                </NeoBadge>
                <h3 className="font-bold text-xl mb-2 text-white">Wholesale (MOQ 5,000+)</h3>
                <p className="text-sm text-green-100/70 mb-6">
                  Specialty Spot UV, Soft-Touch velvet laminations, and premium custom gold/silver metallic stamping options.
                </p>
              </div>
              <a 
                href="https://www.achievepack.com/features/surface-finish" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <NeoButton 
                  variant="dark" 
                  className="w-full text-center py-3 border-green-400 text-green-300 hover:bg-emerald-900/50 font-bold justify-center"
                >
                  Visit AchievePack B2B <ArrowRight className="w-4 h-4 ml-2" />
                </NeoButton>
              </a>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
