import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Trash2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RecyclablePackagingGuidePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Roadmap to 100% Recyclable Packaging',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Recyclability is the cornerstone of the 2026 Circular Economy. However, "recyclable" is no longer just a label; it's a <strong>technical performance standard</strong> defined by collection infrastructure, sortability, and material purity.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-800">The Recyclability Crisis</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Multi-material laminates (PET/PE) are landfill-bound</li>
                  <li>• NIR sorting failure due to Carbon Black inks</li>
                  <li>• Contamination from non-recyclable zippers/valves</li>
                  <li>• Vague "store drop-off" claims without data</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-800">Achieve Pack Engineering</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Mono-PE & Mono-PP Structures</li>
                  <li>• MDO-PE Technology for PET Replacement</li>
                  <li>• Recyclable Zippers & One-Way Valves</li>
                  <li>• Cyclos-HTP Certified (&gt; 90% Recovery)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we help brands transition from non-recyclable multi-layer plastics to <strong>certified mono-material solutions</strong>. We utilize <strong>MDO-PE (Machine Direction Orientation)</strong> and <strong>High-Barrier EVOH</strong> to create pouches that are fully compatible with standard PE recycling streams while maintaining the shelf-life of traditional laminates.
          </p>
        </div>
      )
    },
    {
      id: 'mono-material-science',
      title: 'Mono-Material Science: The New Standard',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Traditional pouches use PET (Polyester) for strength and PE (Polyethylene) for sealing. Because these polymers have different melting points, they cannot be recycled together. Our <strong>Mono-Material</strong> solution uses layers of the same polymer (PE/PE or PP/PP).
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">MDO-PE Outer</h4>
              <p className="text-sm text-neutral-600">Machine Direction Oriented PE provides the stiffness and heat resistance traditionally offered by PET.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-cyan-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h4 className="font-bold text-neutral-900">EVOH Barrier</h4>
              <p className="text-sm text-neutral-600">A thin &lt; 5% barrier layer that blocks oxygen but remains fully compatible with PE recycling.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">High-Speed Seal</h4>
              <p className="text-sm text-neutral-600">Co-extruded LLDPE sealants optimized for wide seal windows on vertical and horizontal filling lines.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="Recyclable Mono-PE pouch material comparison" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Technical Clarity: Achieving 100% recyclability without sacrificing shelf-life performance"
            />
          </div>
        </div>
      )
    },
    {
      id: 'certification-sortability',
      title: 'Sortability: Why Your Ink Matters',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            A pouch is only recyclable if it can be identified by <strong>Near-Infrared (NIR)</strong> sensors at a Material Recovery Facility (MRF).
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Sorting Tech Stack</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">NIR-Sortable Inks</h5>
                  <p className="text-xs text-neutral-600 mt-1">We utilize carbon-black-free inks that allow NIR sensors to penetrate the surface and identify the underlying recyclable PE resin.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Recyclable Componentry</h5>
                  <p className="text-xs text-neutral-600 mt-1">Our zippers and degassing valves are manufactured from 100% Polyethylene, ensuring the entire package stays in the circular loop.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Cyclos-HTP Verification</h5>
                  <p className="text-xs text-neutral-600 mt-1">Third-party lab testing verifying that &gt; 90% of the material is recoverable as high-quality recycled resin.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Extended Producer Responsibility (EPR)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Transitioning to recyclable mono-materials is the most effective way to reduce <strong>EPR tax liability</strong> (such as California SB 54 or UK Plastic Packaging Tax). Recyclable packaging often qualifies for lower "eco-modulated" fees, providing a direct financial return on your sustainability investment.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'implementation-roadmap',
      title: 'EEAT: Your Transition Roadmap',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Moving to recyclable packaging requires careful testing. We help you manage the transition with <strong>Material Testing Reports</strong> and <strong>Trial Rolls</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.webp" 
                alt="Recyclable material manufacturing and quality control" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Operational Precision: Our manufacturing lines are optimized for certified mono-material extrusion"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Transition Benchmarks</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span><strong>Phase 1:</strong> Structure matching and barrier verification (OTR/WVTR).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span><strong>Phase 2:</strong> Trial roll production for VFFS/HFFS line testing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span><strong>Phase 3:</strong> Final certification and 'How2Recycle' label preparation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Audit Your Recyclability Strategy',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-800 to-indigo-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Transition to Circular. Start Today.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure your brand's future with certified recyclable packaging? Our engineering team is ready to design your Mono-Material roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Recyclability Consultation
            </button>
            <Link
              to="/products/recyclable-mono-material-pouches"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Package className="h-5 w-5" />
              View Recyclable Products
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            CYCLOS-HTP CERTIFIED • PE-STREAM READY • PFAS FREE • MDO-PE TECH
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Is 'Store Drop-Off' the only way to recycle mono-PE pouches?",
      answer: "Currently, in many markets like the US, flexible PE is collected via store drop-off programs (How2Recycle). However, in Europe and emerging systems in California, advanced MRFs are increasingly sorting flexible PE into high-quality circular streams."
    },
    {
      question: "Will my graphics look as good on mono-PE?",
      answer: "Yes. Our MDO-PE films offer high clarity and gloss, comparable to traditional PET. We use high-resolution digital and rotogravure printing to ensure your brand's visual identity remains premium."
    },
    {
      question: "Do mono-material bags cost more?",
      answer: "While the resin costs for MDO-PE and EVOH are slightly higher than standard PET/PE, the reduction in EPR tax liability and the avoidance of plastic taxes often result in a neutral or favorable total cost of ownership."
    },
    {
      question: "Can I use mono-PE for high-barrier food products?",
      answer: "Absolutely. We co-extrude or laminate EVOH into the PE structure to achieve oxygen barriers (OTR) &lt; 1.0 cc/m², making it suitable for coffee, snacks, and supplements."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Recyclable Packaging Guide | Mono-Material Engineering | Achieve Pack</title>
        <meta name="description" content="Master the technical transition to recyclable packaging. 800+ words on Mono-PE engineering, MDO-PE technology, and Cyclos-HTP certification." />
        <link rel="canonical" href="https://achievepack.com/topics/recyclable-packaging-guide" />
        <meta name="keywords" content="recyclable packaging guide, mono-material packaging, mono-PE pouches, MDO-PE technology, cyclos-htp certification, recyclable food packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e3a8a"
        title="Recyclable Packaging: The Mono-Material Revolution"
        description="Establishing technical authority in certified, circular-economy packaging solutions."
        keywords={['recyclable packaging', 'mono-material engineering', 'MDO-PE guide']}
        heroTitle="Circular. Certified. Circular."
        heroSubtitle="Mono-PE | MDO-PE Tech | Cyclos-HTP Certified | EPR Ready"
        introSummary="The future of packaging is mono-material. This guide provides the technical breakdown of how we replace non-recyclable multi-layer plastics with high-performance Mono-PE and Mono-PP structures that are fully compatible with global recycling infrastructure—without compromising on barrier performance or brand aesthetics."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default RecyclablePackagingGuidePage
