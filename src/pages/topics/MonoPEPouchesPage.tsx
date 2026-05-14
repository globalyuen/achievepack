import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Thermometer  , FileSearch } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const MonoPEPouchesPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Mono-Material Revolution: Solving the Multi-Layer Problem',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Traditionally, flexible pouches have been "multi-layer" (e.g., PET/ALU/PE), making them impossible to recycle. <strong>Mono-PE (Polyethylene) pouches</strong> solve this by utilizing a single polymer family for the entire structure. In 2026, this is the <strong>#1 sustainable transition</strong> for brands aiming for 100% recyclability without sacrificing barrier performance.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">The Recyclability Barrier</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Eliminating mixed-material "contamination"</li>
                  <li>• Compatibility with SPI Code 4 PE streams</li>
                  <li>• High-purity resin recovery for second-life PCR</li>
                  <li>• Compliance with EU PPWR circularity mandates</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">Achieve Pack Mono Tech</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• MDO-PE (Machine Direction Oriented) Stiffness</li>
                  <li>• EVOH-PE High Oxygen Barrier (&lt; 0.5 OTR)</li>
                  <li>• High-Purity "Metal-Free" Lamination</li>
                  <li>• Recyclable PE Zippers & Spouts</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we have mastered the <strong>all-PE structure</strong>. By utilizing MDO-PE (Machine Direction Oriented) for the outer layer and specialized EVOH-PE barriers, we provide the shelf life of foil-lined bags in a format that can be dropped into standard plastic recycling bins.
          </p>
        </div>
      )
    },
    {
      id: 'mdo-pe-engineering',
      title: 'The Science of MDO-PE: Strength Through Stretching',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The biggest hurdle for mono-PE has always been <strong>heat resistance and stiffness</strong>. Traditional PE is too soft for high-speed filling lines and melts at the same temperature as the sealant.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">How MDO-PE Works</h4>
              <p className="text-sm leading-relaxed">
                Machine Direction Orientation (MDO) involves stretching the PE film under controlled temperature. This aligns the molecular chains, resulting in:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>High Modulus:</strong> Stiffness comparable to PET, allowing for high-speed HFFS/VFFS filling.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Heat Resistance:</strong> An 8-12°C higher melting point, preventing the bag from melting during the sealing process.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Improved Clarity:</strong> Near-glass clarity for windows and product visibility.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/mono-pe-recyclable-hero.png" 
              alt="Mono-PE Material Structure" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Single-polymer engineering that enables 100% recyclability"
            />
          </div>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-technology',
      title: 'High-Barrier Mono-PE: EVOH & AlOx',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Recyclability is useless if the product spoils. We utilize <strong>specialized barrier additives</strong> that are compatible with the PE recycling stream (CEFLEX approved) to provide elite shelf stability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">EVOH-PE</h4>
              <p className="text-sm text-neutral-600">A co-extruded gas barrier that blocks 99.9% of oxygen. Fully compatible with PE streams at &lt; 5% total weight.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">AlOx/SiOx Coating</h4>
              <p className="text-sm text-neutral-600">Vacuum-deposited nano-coatings that provide a glass-like moisture and oxygen barrier without using metal foil.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Thermometer className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Hot-Tack Strength</h4>
              <p className="text-sm text-neutral-600">Our sealant layers are engineered for immediate bond strength, critical for heavy products like rice or pet food.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: 'Compliance & Recyclability Verification',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Claiming "Recyclable" requires proof. Achieve Pack mono-PE pouches are engineered to follow the <strong>CEFLEX</strong> and <strong>PRE (Plastic Recyclers Europe)</strong> design-for-recycling guidelines.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-neutral-900">Global Certification</h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Our structures have been audited and certified by third-party labs (like Cyclos-HTP or Interseroh) to ensure they achieve a <strong>recyclability rate of &gt; 90%</strong> in existing municipal infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-neutral-900">Technical Traceability</h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We provide the <strong>Technical Data Sheets (TDS)</strong> and <strong>Declaration of Compliance (DoC)</strong> required for your brand's ESG reporting and Extended Producer Responsibility (EPR) fee reductions.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Upgrade to 100% Recyclable Mono-PE',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Circular Design. Proven Performance.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transition from non-recyclable multi-layers to high-performance mono-PE? Our engineering team will match your current shelf life using our 100% recyclable structures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Recyclability Audit
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Mono-PE Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            CEFLEX COMPLIANT • SPI CODE 4 • MDO-PE TECH • BPA FREE
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the difference between PE and Mono-PE?",
      answer: "A standard PE bag might have a PET outer layer for stiffness, which makes it non-recyclable. 'Mono-PE' means the entire structure—including the outer print layer, the barrier layer, and the sealant—is made from the same Polyethylene family, allowing it to be recycled as a single unit."
    },
    {
      question: "Is Mono-PE as stiff as standard PET/PE bags?",
      answer: "Yes, when utilizing MDO (Machine Direction Orientation) technology. MDO-PE mimics the stiffness and thermal resistance of PET, ensuring the bag stands up on the shelf and runs efficiently on automated packaging lines."
    },
    {
      question: "Can I get a high oxygen barrier with Mono-PE?",
      answer: "Absolutely. We utilize co-extruded EVOH (Ethylene Vinyl Alcohol) layers within the PE structure. Because EVOH makes up less than 5% of the total weight, the bag remains 100% recyclable according to CEFLEX and PRE guidelines."
    },
    {
      question: "Are these bags recyclable at home?",
      answer: "Recyclability depends on your local municipality. In many countries, Mono-PE pouches are accepted in 'Soft Plastic' or 'Store Drop-off' recycling programs. We help brands integrate clear 'How2Recycle' instructions on their artwork."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Mono-PE Recyclable Pouches | High-Barrier Circular Tech | Achieve Pack</title>
        <meta name="description" content="Technical guide to Mono-PE recyclable pouches. 800+ words on MDO-PE engineering, EVOH barrier science, and circular economy compliance." />
        <link rel="canonical" href="https://achievepack.com/topics/mono-pe-pouches" />
        <meta name="keywords" content="mono-PE pouches, recyclable flexible packaging, MDO-PE technology, EVOH barrier PE, circular packaging design, mono-material recyclability" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e3a8a"
        title="Mono-PE Pouches: The Future of Recyclability"
        description="Engineering high-performance flexible packaging that is 100% recyclable through mono-material innovation."
        keywords={['mono-PE pouches', 'recyclable pouches', 'circular economy packaging']}
        heroTitle="Recyclable. Without Compromise."
        heroSubtitle="High-Barrier MDO-PE | 100% Circular | Lab-Verified"
        introSummary="The days of landfill-bound multi-layer packaging are numbered. We provide the technical bridge to 100% recyclability through Mono-PE engineering, delivering the stiffness, barrier protection, and shelf-impact your brand demands in a circular-ready format."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_mono_recyclable_certification_compliance_7572715.webp"
      />
    </>
  )
}

export default MonoPEPouchesPage
