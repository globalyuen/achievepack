import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Package, Leaf, Zap, Shield, Sparkles, ChevronDown, ChevronUp, Calendar, Mail } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'

// Gallery of degassing options
const DEGASSING_GALLERY = [
  { id: 'smart-valve', name: 'Smart Sticker Valve (AO002)', description: 'Flat square degassing sticker, fully leak-proof', image: '/imgs/function/smart_sticker_valve_detail.png' },
  { id: 'squeeze-test', name: 'Squeeze & Pressure Test', description: 'Zero leak kimchi squeeze test verification', image: '/imgs/function/kimchi_valve_squeeze_test.png' },
  { id: 'production', name: 'Inline Automated Applying', description: 'High-speed automated packaging line integration', image: '/imgs/function/pouch_production_line_valves.png' },
  { id: 'sticker-liner', name: 'Sticker Valves on Liner', description: 'Self-adhesive square sticker degassing valves', image: '/imgs/function/square_sticker_valves.png' },
  { id: 'header-pocket', name: 'Sealed Header Pocket', description: 'Jongga-style suspended header sachet compartment', image: '/imgs/function/jongga_kimchi_bag_seal.png' },
  { id: 'absorber-packet', name: 'CO2 Gas Absorber Packet', description: 'StayFresh food-grade carbon dioxide gas absorber', image: '/imgs/function/stayfresh_co2_absorber.png' },
]

// Comparison table data
const OPTION_COMPARISON = [
  { option: 'CO2 Absorber Packet', placement: 'Loose in bag', cost: '★☆☆☆☆ (Lowest)', liquidProof: 'Yes (packet acts inside)', buyerPerception: 'Good (not for eating)', optimalFor: 'Low budget, bulk packs' },
  { option: 'Sealed Header Pocket', placement: 'Suspended above liquid', cost: '★★☆☆☆ (Low)', liquidProof: 'Yes (sealed in top)', buyerPerception: 'Very Good (isolated sachet)', optimalFor: 'DTC Kimchi, liquid foods' },
  { option: 'Degassing Sticker Valve', placement: 'Applied over micro-vent', cost: '★★★☆☆ (Medium)', liquidProof: 'Yes (hydrophobic)', buyerPerception: 'Excellent (no chemical sachet)', optimalFor: 'Premium Kimchi, Sauces, DTC' },
]

const FAQ_DATA = [
  {
    question: 'If customers squeeze the kimchi bag, will liquid leak out of the sticker valve?',
    answer: 'Absolutely not! Our square sticker degassing valves (AO002) are engineered with a high-performance hydrophobic and oleophobic micro-porous membrane. This allows carbon dioxide gas molecules to pass through and escape under minimal pressure (~0.05-0.1 PSI) while blocking large liquid water or oil molecules. Even under localized squeeze testing, the valve remains 100% leak-proof.'
  },
  {
    question: 'Can I use kimchi CO2 degassing sticker valves for coffee bags?',
    answer: 'We do not recommend using kimchi gas absorbers or sticker valves for roasted coffee. Coffee is highly sensitive to oxygen exposure and requires a round dry degassing valve to preserve flavor oils and release carbon dioxide without drying the beans. Conversely, coffee valves are not designed to handle high liquid and moisture contact, which is why a dedicated hydrophobic sticker valve is needed for kimchi.'
  },
  {
    question: 'How do you apply the sticker valve onto a stand-up pouch?',
    answer: 'The process involves: 1) filling and sealing your kimchi or liquid product in the pouch, 2) punching a clean 1-2 mm micro-vent hole in the upper third of the bag (well above the liquid level), 3) peeling the square sticker valve from its liner, and 4) pressing it firmly over the micro-vent hole to ensure an airtight adhesive edge seal.'
  },
  {
    question: 'Are the materials and adhesives food-safe?',
    answer: 'Yes, all materials, membranes, and adhesives used in our Smart Degassing Stickers and CO2 Absorber Packets are FDA-compliant, non-toxic, and certified food-safe. They are manufactured in dust-free BRC-certified facilities to guarantee zero contamination.'
  },
]

export default function SmartDegassingStickerPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <PouchLayout>
      <Helmet>
        <title>Smart Degassing Sticker for Liquid Packaging | POUCH.ECO</title>
        <meta name="description" content="Venting solutions for gas-releasing liquid packaging like kimchi. Explore square sticker degassing valves, suspended header sachets, and CO2 absorbers. 100% leak-proof and FDA-compliant." />
        <link rel="canonical" href="https://pouch.eco/options/smart-degassing-sticker" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Smart Degassing Sticker for Liquid Packaging | POUCH.ECO" />
        <meta property="og:description" content="Venting solutions for gas-releasing liquid packaging like kimchi. Explore square sticker degassing valves, suspended header sachets, and CO2 absorbers. 100% leak-proof and FDA-compliant." />
        <meta property="og:url" content="https://pouch.eco/options/smart-degassing-sticker" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pouch.eco/imgs/function/smart_sticker_valve_detail.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 border-b-4 border-black overflow-hidden bg-black text-white">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[4px] text-[#10B981] font-black mb-4">
              ACTIVE PACKAGING · ONE-WAY DEGASSING · ZERO BURSTING
            </p>
            <h1 className="text-4xl md:text-6xl font-['Space_Grotesk'] font-black uppercase mb-6 leading-tight">
              Smart Degassing Stickers
              <span className="text-[#10B981]"> for Liquid Packaging</span>
            </h1>
            <p className="text-lg md:text-xl font-['JetBrains_Mono'] mb-8 text-gray-300">
              Stop bloated, swollen, and bursting kimchi packages. Our high-performance flat square sticker valves release excess CO₂ gas while maintaining a 100% leak-proof barrier against liquids and oxygen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#10B981] text-white font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Package className="w-6 h-6 text-black" />
                <span className="text-black">Request Samples</span>
                <ArrowRight className="w-6 h-6 text-black" />
              </Link>
              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-[#10B981] shadow-[8px_8px_0px_0px_#10B981] hover:shadow-[12px_12px_0px_0px_#10B981] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                <Calendar className="w-6 h-6" />
                Book Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PART 1: THE CHALLENGE AND SOLUTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4">
              Gas Control for <span className="text-[#10B981]">Fermenting Foods</span>
            </h2>
            <p className="text-lg font-['JetBrains_Mono'] text-gray-600 max-w-3xl mx-auto">
              Fresh fermented products like kimchi continually release carbon dioxide (CO₂) gas. If sealed in standard pouches, the bags will bloat and burst. We offer three B2C and retail-friendly venting solutions:
            </p>
          </div>

          {/* Main Showcase Image */}
          <div 
            onClick={() => setLightboxImage('/imgs/function/smart_sticker_valve_detail.png')}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-black cursor-zoom-in group"
          >
            <img 
              src="/imgs/function/smart_sticker_valve_detail.png" 
              alt="Smart Degassing Pouch Showcase" 
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase mb-1">Achieve Pack Smart Sticker Valve (AO002)</h3>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-200">
                A flat, square degassing sticker that integrates seamlessly over punched venting holes.
              </p>
            </div>
          </div>

          {/* Degassing Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {DEGASSING_GALLERY.map((item) => (
              <div 
                key={item.id}
                onClick={() => setLightboxImage(item.image)}
                className="bg-white rounded-xl overflow-hidden shadow-lg border-4 border-black hover:-translate-y-1 transition-all cursor-zoom-in group"
              >
                <div className="aspect-square overflow-hidden border-b-2 border-black">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm font-['Space_Grotesk']">{item.name}</h4>
                  <p className="text-xxs text-gray-500 font-['JetBrains_Mono'] mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The Three Methods Detail */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-[#10B981] font-black text-xs uppercase border border-black mb-4 font-['JetBrains_Mono']">Option 01</span>
                <h3 className="text-xl font-black uppercase mb-3 font-['Space_Grotesk']">CO2 Absorber Sachet</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-gray-600 mb-4 leading-relaxed">
                  A food-safe sachet (StayFresh) is dropped directly inside the pouch. It actively traps CO₂ chemically to avoid package swelling. While cost-effective and easy to automate, the loose packet might cause buyer confusion as it is not edible.
                </p>
              </div>
              <img src="/imgs/function/stayfresh_co2_absorber.png" alt="StayFresh sachet" className="w-full h-32 object-cover rounded-lg border-2 border-black" />
            </div>

            <div className="border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-[#10B981] font-black text-xs uppercase border border-black mb-4 font-['JetBrains_Mono']">Option 02</span>
                <h3 className="text-xl font-black uppercase mb-3 font-['Space_Grotesk']">Suspended Header Seal</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-gray-600 mb-4 leading-relaxed">
                  A premium solution pioneered by Korean brands. A seal bar creates a distinct pocket at the top middle of the stand-up pouch, holding the sachet safely above the liquid fill line. This keeps the absorber out of direct contact with the food sauce.
                </p>
              </div>
              <img src="/imgs/function/jongga_kimchi_bag_seal.png" alt="Header seal sachet placement" className="w-full h-32 object-cover rounded-lg border-2 border-black" />
            </div>

            <div className="border-4 border-black p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-neutral-50 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-black text-[#10B981] font-black text-xs uppercase border border-black mb-4 font-['JetBrains_Mono']">Option 03</span>
                <h3 className="text-xl font-black uppercase mb-3 font-['Space_Grotesk']">Degassing Sticker Valve</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-gray-600 mb-4 leading-relaxed">
                  An external flat adhesive square sticker. Applied over a punched 1.5mm hole, its hydrophobic membrane lets internal pressure vent out automatically while fully blocking liquid and preventing external air from entering the bag.
                </p>
              </div>
              <img src="/imgs/function/square_sticker_valves.png" alt="Degassing sticker valves" className="w-full h-32 object-cover rounded-lg border-2 border-black" />
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#D4FF00] border-4 border-black rounded-2xl p-6 mb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
            <h3 className="text-xl font-black uppercase mb-4 text-center font-['Space_Grotesk']">Option Comparison Guide</h3>
            <table className="w-full min-w-[650px] border-collapse font-['JetBrains_Mono'] text-xs">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="p-3 text-left font-black uppercase">Venting Option</th>
                  <th className="p-3 text-left font-black uppercase">Placement</th>
                  <th className="p-3 text-left font-black uppercase">Cost Level</th>
                  <th className="p-3 text-left font-black uppercase">Liquid Proof</th>
                  <th className="p-3 text-left font-black uppercase">Brand Experience</th>
                  <th className="p-3 text-left font-black uppercase">Best Application</th>
                </tr>
              </thead>
              <tbody>
                {OPTION_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="border-b border-black/10 last:border-0 hover:bg-black/5">
                    <td className="p-3 font-bold">{row.option}</td>
                    <td className="p-3">{row.placement}</td>
                    <td className="p-3 font-semibold">{row.cost}</td>
                    <td className="p-3 font-bold text-emerald-800">{row.liquidProof}</td>
                    <td className="p-3">{row.buyerPerception}</td>
                    <td className="p-3 text-gray-700">{row.optimalFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PART 2: LEAKPROOF SCIENCE & APPLICATION */}
      <section className="py-16 bg-neutral-100 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
                100% Leak-Proof <span className="text-[#10B981]">Pressure Control</span>
              </h2>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-700 leading-relaxed mb-4">
                Will liquid leak if the bag is squeezed? Our square sticker valves are engineered with a specialized hydrophobic and oleophobic micro-porous membrane. The pores are micro-sized, allowing single molecules of gas (carbon dioxide) to escape under pressure while completely blocking large water and oil molecules.
              </p>
              <div className="space-y-3 font-['JetBrains_Mono'] text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Zero Liquid Leak:</strong> Verified under squeeze pressure tests. Liquid and sauces stay completely inside.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Oxygen & Moisture Block:</strong> Seals shut instantly once internal pressure is released, avoiding oxygen ingress.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>No Coffee Substitute:</strong> Tuned specifically for high-humidity foods; roasted coffee requires separate dry degassing valves.</span>
                </div>
              </div>
            </div>
            <div 
              onClick={() => setLightboxImage('/imgs/function/kimchi_valve_squeeze_test.png')}
              className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white cursor-zoom-in group"
            >
              <img src="/imgs/function/kimchi_valve_squeeze_test.png" alt="Venting Squeeze Test Infographic" className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" />
              <div className="bg-neutral-50 px-3 py-2 text-xs text-center border-t-2 border-black font-['JetBrains_Mono'] text-gray-500">View Squeeze Test Infographic</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              onClick={() => setLightboxImage('/imgs/function/pouch_production_line_valves.png')}
              className="order-2 md:order-1 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white cursor-zoom-in group"
            >
              <img src="/imgs/function/pouch_production_line_valves.png" alt="Inline Application Process" className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300" />
              <div className="bg-neutral-50 px-3 py-2 text-xs text-center border-t-2 border-black font-['JetBrains_Mono'] text-gray-500">View Assembly Line Mockup</div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-6">
                Step-by-Step <span className="text-[#10B981]">Application</span> Guide
              </h2>
              <p className="font-['JetBrains_Mono'] text-sm text-gray-700 leading-relaxed mb-6">
                To apply the square degassing sticker correctly onto pouches and avoid any edge leaks, follow this process:
              </p>
              <ol className="font-['JetBrains_Mono'] text-xs text-gray-600 space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">1</span>
                  <span><strong>Fill and Seal:</strong> Fill the stand-up pouch with kimchi or liquid food and seal the main ziplock or heat-seal opening fully.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">2</span>
                  <span><strong>Punch Micro-Hole:</strong> Punch a 1–2 mm hole in the upper third of the bag (above product level). Use a backing pad for a clean cut.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">3</span>
                  <span><strong>Peel & Paste:</strong> Peel the sticker valve from the liner. Align it precisely over the punched hole, avoiding skin contact with the adhesive.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-[#10B981] font-bold flex items-center justify-center">4</span>
                  <span><strong>Secure Seal:</strong> Rub and press the edges firmly onto the bag surface to ensure an airtight adhesive contact with no wrinkles.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-10 text-center">
            Frequently Asked <span className="text-[#10B981]">Questions</span>
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-4 border-black rounded-xl overflow-hidden bg-neutral-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  className="w-full flex items-center justify-between p-5 hover:bg-neutral-100 transition-colors text-left"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-md md:text-lg pr-4 font-['Space_Grotesk'] uppercase">{faq.question}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0 text-[#10B981] stroke-[3]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0 stroke-[3]" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="p-5 bg-white border-t-4 border-black">
                    <p className="font-['JetBrains_Mono'] text-xs md:text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#10B981] border-t-4 border-b-4 border-black shadow-[0_8px_0_0_rgba(0,0,0,1)]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-4 text-black">
            Upgrade Your Brand's Fermenting Pouch
          </h2>
          <p className="text-md md:text-lg font-['JetBrains_Mono'] mb-8 text-black/80 max-w-xl mx-auto">
            Order bulk square degassing sticker valves, pre-valved stand-up pouches, or Jongga-style suspended header bags. Sample packs are ready to ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#10B981] font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all"
            >
              <Package className="w-6 h-6" />
              Order Sample Pack
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="mailto:ryan@achievepack.com?subject=Degassing Sticker Valve Specification Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-black uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Mail className="w-6 h-6" />
              Email Specifications
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh]">
            <img 
              src={lightboxImage} 
              alt="Enlarged View" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg border-4 border-black"
            />
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-black hover:bg-neutral-850 border-2 border-white px-3 py-1 font-bold rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </PouchLayout>
  )
}
