import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowLeftRight, 
  HelpCircle, 
  Layers, 
  DollarSign, 
  CheckCircle, 
  FileText, 
  Lock, 
  ShoppingBag, 
  Calendar, 
  ChevronRight, 
  Award,
  Sparkles,
  Zap,
  Info,
  ArrowRight
} from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const PouchCustomVsStandardPackagingPage: React.FC = () => {
  const baseUrl = getBaseUrl()

  const METRICS = [
    { label: 'Combined SKU Run Discount', value: 'Up to 25%', unit: 'Save', desc: 'Grouping same-sized flavor bags.' },
    { label: 'Standard Digital Run MOQ', value: '100', unit: 'units', desc: 'Budget-friendly starting volume.' },
    { label: 'Closure Reliability', value: 'Velcro®', unit: 'Hook', desc: 'Autofit and powder resistance.' },
    { label: 'Turnaround Time', value: '15-20', unit: 'Days', desc: 'Standardized co-printing efficiency.' }
  ]

  const STORE_ITEMS = [
    { name: 'Stand Up – Metalised With Zipper (Best Seller)', path: '/store/product/conven-sup-met-zip' },
    { name: 'Stand Up – Metalised No Zipper', path: '/store/product/conven-sup-met-xzip' },
    { name: 'Stand Up – Clear With Zipper', path: '/store/product/conven-sup-clear-zip' },
    { name: 'Stand Up – Clear No Zipper', path: '/store/product/conven-sup-clear-xzip' },
    { name: '3 Side Seal – Metalised With Zipper', path: '/store/product/conven-3ss-met-zip' },
    { name: '3 Side Seal – Metalised No Zipper', path: '/store/product/conven-3ss-met-xzip' },
    { name: '3 Side Seal – Clear With Zipper', path: '/store/product/conven-3ss-clear-zip' },
    { name: '3 Side Seal – Clear No Zipper', path: '/store/product/conven-3ss-clear-xzip' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Custom Quotes vs. Standard Store Runs | Packaging ROI | Pouch.eco</title>
        <meta name="description" content="Technical guide to tailored B2B custom quote packaging vs standardized co-printed store runs. Master the combined SKU volume hack and premium Velcro tracks." />
        <link rel="canonical" href={`${baseUrl}/topics/custom-vs-standard-packaging`} />
        <meta name="keywords" content="custom vs standard packaging, combined SKU run, group production pouches, velcro pouch closure, conventional stand up pouch, 3 side seal bag" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">PRODUCTION_MATRIX_V2.1</NeoBadge>
          <h1 className="mt-8 font-black text-5xl md:text-8xl lg:text-9xl leading-none uppercase italic">
            Tailored Quote.<br/>
            Standard Run.<br/>
            <span className="text-emerald-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">Optimize ROI.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Deciding between off-the-shelf standardized checkout runs and specialized B2B dynamic quotes? This technical guide highlights co-printed co-extrusion runs, combined SKU hacks, and tactile Velcro closure tracks.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" href="https://calendly.com/30-min-free-packaging-consultancy">Technical Spec Call</NeoButton>
            <NeoButton variant="secondary" to="/store?category=conventional-digital">Explore Digital Store</NeoButton>
          </div>
        </div>
      </section>

      {/* Core Concept: Store vs. Custom */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
                alt="Custom printed pouch co-production runs" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">PRODUCTION_FLOW</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Standard vs.<br/>Custom Specs.</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                Standard store items rely on **Group Production (collective co-printing)** to bypass massive machine setup charges. This creates low MOQs and budget-friendly pricing but requires fixed standard sizing, an unprinted bottom gusset (essential for crop-mark sensors), and standard press zippers. Custom dynamic quotes are built around custom millimeter dimensions, fully printed gussets, and high-performance Velcro closures.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {METRICS.map((m, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-800">{m.label}</h4>
                    <p className="text-xl font-black">{m.value} <span className="text-[10px] opacity-60 font-normal">{m.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined SKU Hack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">VOLUME_GROUPING_HACK</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">Combined SKU<br/>Grouping.</h2>
          
          <div className="grid md:grid-cols-2 gap-12 font-['JetBrains_Mono']">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">01. The Pouch Dimension Hack</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                If your Chocolate, Vanilla, and Strawberry flavors share the exact same physical pouch size and material, they can be printed continuously on the same web roll.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">02. Instantaneous Press Transitions</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Our advanced HP Indigo 20000 digital printing presses switch artwork lanes immediately without stopping the press or altering hardware plates.
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">03. Grouped Discount Pricing</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Instead of paying the premium rate of three separate 100-piece orders, your order is combined and charged at the unified 300-piece bulk price, saving you up to 25%!
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">04. Flexible Graphics Control</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                Even though dimensions are matching, every single card, barcode, ingredient list, and primary SKU graphic remains fully independent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zipper vs Velcro */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">CLOSURE_ENGINEERING</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Standard Zippers<br/>vs. Premium Velcro.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-white">
              <Lock className="w-12 h-12 mb-6" />
              <h4 className="font-black text-2xl uppercase mb-4">Standard Press-To-Close Zipper</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70 mb-6">
                Excellent interlocking friction seals ideal for standard solid and liquid contents. However, fine powders (cocoa, supplements, flour) can clog the physical tracks, making closing tedious for the end-user.
              </p>
              <NeoBadge color="neutral">STOCK_STANDARD</NeoBadge>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(20,83,45,1)]">
              <Sparkles className="w-12 h-12 mb-6" />
              <h4 className="font-black text-2xl uppercase mb-4">Premium Velcro® Sensory Closure</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70 mb-6">
                Innovative hook-to-hook closure track. Auto-aligns easily upon contact, fully powder-proof (fine grains pass through without clogging), and provides satisfying audible/tactile closure feedback.
              </p>
              <NeoBadge color="lime">DYNAMIC_QUOTE_ONLY</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Heads Up: Store Related Items */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">STORE_HEADS_UP</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">Online Store<br/>Group runs.</h2>
            <p className="mt-4 font-['JetBrains_Mono'] text-sm text-gray-600">
              Need fast turnaround (15–20 days) and low MOQs? Check out our conventional stand-up pouches and 3-side seal flat pouches (available with and without zippers).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {STORE_ITEMS.map((item, i) => (
              <Link 
                key={i}
                to={item.path}
                className="border-4 border-black p-4 font-['JetBrains_Mono'] font-black text-xs uppercase bg-white hover:bg-[#D4FF00] hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between group"
              >
                {item.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert FAQ */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="lime">SOURCING_FAQ</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">Expert Specs.</h2>
          <div className="space-y-4">
            {[
              { q: "Why is the bottom gusset raw on standard co-printing runs?", a: "Standard co-printing shares the machine web across changing graphics. Leaving the bottom gusset unprinted prevents registration sensor collisions, allowing precise cuts." },
              { q: "What does SKU grouping do to my packaging cost?", a: "Grouping Vanilla and Chocolate designs of identical dimensions allows them to count as a single high-volume run, moving you into a cheaper bulk pricing tier." },
              { q: "Can I get premium Velcro tracks on a standard 100-pc checkout?", a: "No. Premium Velcro closures require custom extrusion and slit calibration. They are only available via customized dynamic B2B quotes." },
              { q: "What is the baseline MOQ for custom dimensional pouches?", a: "Custom dynamic sizes start at 1,000 units. For micro-batches (100–500 pcs), standard store fixed-size pouches are the best option." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">LAUNCH_METRICS</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">Shed the<br/>Premium.</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            Ready to configure your ideal B2B pouch parameters? Let's trace your SKU dims and closure options today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/store" className="!bg-white !text-emerald-950">Browse Conventional Store</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              Consult a Packaging Architect
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomVsStandardPackagingPage
