import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Coffee, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Wind, Droplets } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const GreenCoffeeMaterialsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Green Coffee Packaging: Engineering the Perfect Barrier',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-stone-50 to-amber-50 p-6 rounded-lg border border-stone-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Coffee is one of the most chemically complex products in the food industry. Protecting its <strong>volatile aromatic compounds</strong> while meeting 2026 sustainability mandates requires <strong>advanced barrier engineering</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-amber-800">
                <h4 className="font-semibold text-amber-900">The Coffee Degradation Crisis</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Oxidation of sensitive coffee oils</li>
                  <li>• Moisture-induced staleness</li>
                  <li>• CO2 degassing pressure issues</li>
                  <li>• Traditional non-recyclable foil laminates</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-stone-500">
                <h4 className="font-semibold text-stone-700">The Achieve Pack Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Mono-PE High-Barrier (Metal-Free)</li>
                  <li>• Certified Home Compostable structures</li>
                  <li>• Integrated Recyclable Degassing Valves</li>
                  <li>• OTR/WVTR performance matching foil</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we specialize in <strong>Green Coffee Materials</strong> that don't compromise on freshness. By utilizing <strong>High-Barrier EVOH</strong> and <strong>MDO-PE</strong> technology, we provide 100% recyclable mono-material pouches that deliver the same shelf-life as traditional triplex foil structures, with a fraction of the carbon footprint.
          </p>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'Aroma Protection: The Science of Gas Barriers',
      icon: <Wind className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Coffee requires an absolute barrier against oxygen (O2) and water vapor (H2O). We utilize <strong>spectrophotometry</strong> and <strong>MOCON testing</strong> to verify our barrier performance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <Wind className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">OTR &lt; 0.1</h4>
              <p className="text-sm text-neutral-600">Oxygen Transmission Rates below 0.1 cc/m²/day, ensuring fresh-roasted aroma for up to 12 months.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-stone-100 rounded-lg w-fit mb-4">
                <Droplets className="h-6 w-6 text-stone-600" />
              </div>
              <h4 className="font-bold text-neutral-900">WVTR &lt; 0.1</h4>
              <p className="text-sm text-neutral-600">Water Vapor Transmission Rates that prevent moisture ingress and bean softening in humid climates.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-neutral-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-neutral-600" />
              </div>
              <h4 className="font-bold text-neutral-900">One-Way Valves</h4>
              <p className="text-sm text-neutral-600">Recyclable degassing valves that allow CO2 to escape while blocking O2 from entering.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
              alt="High barrier coffee packaging structure" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Advanced EVOH barrier integration for professional-grade coffee freshness"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compostable-coffee',
      title: 'Home Compostable: The Ultimate Circular Solution',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            For specialty roasters, <strong>Home Compostable</strong> materials (TUV Austria OK Compost Home) offer the highest level of consumer engagement and environmental integrity.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Compostable Stack</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">NK Paper / PBS / Bio-Barrier</h5>
                  <p className="text-xs text-neutral-600 mt-1">A 100% plastic-free (by weight) structure that breaks down in backyard compost bins.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">High Grease Resistance</h5>
                  <p className="text-xs text-neutral-600 mt-1">Engineered to handle the natural oils of dark-roasted coffee without staining or delamination.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Certified Degassing</h5>
                  <p className="text-xs text-neutral-600 mt-1">Industrial and home-compostable valve options that disappear along with the pouch.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Sustainable Roasting ROI</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Specialty coffee consumers are willing to pay a 15-20% premium for brands that utilize <strong>verifiable sustainable packaging</strong>. Achieve Pack provides the certifications and marketing assets you need to communicate this value.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recyclable-mono-pe',
      title: 'Recyclable Mono-PE: The Industrial Standard',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            For large-scale retailers, <strong>Recyclable Mono-PE</strong> is the preferred structure. It is fully compatible with standard plastic recycling streams (Category 4 LDPE).
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
                alt="Recyclable coffee pouch with mono-PE structure" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Recycling Ready: High-barrier mono-PE coffee pouches optimized for curbside recovery"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Technical Features</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span><strong>MDO-PE Technology:</strong> Enhanced stiffness for better shelf presence.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span><strong>Metal-Free Barrier:</strong> Microwave-safe and easier to recycle than aluminum.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span><strong>High-Resolution Print:</strong> Digital or Rotogravure options for stunning branding.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Fresh Coffee. Zero Waste.',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-stone-800 to-amber-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Expertise. Aroma. Sustainability.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to upgrade your coffee packaging to a high-barrier sustainable structure? Our engineering team will design your aroma-protection roadmap today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-stone-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Coffee Strategy Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Coffee Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            AESTHETIC FINISHES • HIGH BARRIER • RECYCLABLE • COMPOSTABLE
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Do your sustainable pouches have degassing valves?",
      answer: "Yes. We offer both recyclable mono-PE valves and certified compostable valves to ensure your fresh-roasted coffee doesn't cause the pouch to burst while maintaining its environmental integrity."
    },
    {
      question: "Will mono-PE protect my coffee as well as aluminum foil?",
      answer: "Yes. Our advanced EVOH-integrated mono-PE structures achieve OTR (Oxygen Transmission Rate) levels equivalent to traditional foil-based bags, ensuring a 12-month shelf life."
    },
    {
      question: "Are your compostable bags certified?",
      answer: "Absolutely. All our compostable coffee materials are certified by TUV Austria (OK Compost Home and Industrial) and BPI, meeting EN 13432 and ASTM D6400 standards."
    },
    {
      question: "Can I print in small quantities for seasonal roasts?",
      answer: "Yes. Our digital HP Indigo technology allows for high-resolution custom printing with MOQs as low as 500 units per SKU, perfect for limited edition roasts and startups."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Green Coffee Packaging Materials | High Barrier Sustainable | Achieve Pack</title>
        <meta name="description" content="Master the technical landscape of green coffee packaging. 800+ words on high-barrier mono-PE, compostable coffee bags, OTR/WVTR science, and aroma protection." />
        <link rel="canonical" href="https://achievepack.com/topics/green-coffee-materials" />
        <meta name="keywords" content="green coffee packaging, sustainable coffee bags, mono-PE coffee pouches, compostable coffee packaging, aroma barrier coffee, coffee degassing valve" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#44403c"
        title="Green Coffee Materials: Aroma Protection Engineering"
        description="Establishing technical authority in high-barrier sustainable coffee packaging and aroma preservation."
        keywords={['coffee packaging', 'sustainable barrier', 'aroma protection']}
        heroTitle="Fresh Coffee. Future-Proofed."
        heroSubtitle="High Barrier | Recyclable Mono-PE | Home Compostable | Degassing Valves"
        introSummary="Specialty coffee demands absolute barrier integrity. This guide provides the technical breakdown of how we replace non-recyclable multi-layer foil with high-performance mono-materials and certified compostables that preserve your roast's complex aromatic profile while meeting global sustainability mandates."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp"
      />
    </>
  )
}

const Leaf = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 21 2c-2 4-2.5 5.5-3.6 11.2A7 7 0 0 1 11 20z" />
    <path d="M11 20v-5" />
    <path d="M7 20h4" />
  </svg>
)

export default GreenCoffeeMaterialsPage
