import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart3, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, FileSearch, Trash2, MicroscopeIcon  , Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RealWorldSustainabilityPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Moving Beyond Greenwashing: The Reality of 2026',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 p-6 rounded-lg border border-neutral-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Sustainability in packaging is often treated as a marketing buzzword. However, in 2026, global regulators (FTC Green Guides, UK CMA Green Claims Code) are demanding <strong>quantifiable, real-world data</strong>. A pouch that is "compostable in a lab" but lacks infrastructure to reach a compost pile is not a solution—it's a liability.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <h4 className="font-semibold text-red-800">The Greenwashing Gap</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Unverified "Recyclable" claims</li>
                  <li>• Lab-only "Compostability" data</li>
                  <li>• Lack of Scope 3 emission tracking</li>
                  <li>• Misleading "Plastic-Free" branding</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">Achieve Pack Real-World Tech</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• ISO 14040/44 Life Cycle Assessment (LCA)</li>
                  <li>• Material Specific Carbon Footprint (CO2e)</li>
                  <li>• Landfill Avoidance Metrics (by weight)</li>
                  <li>• Extended Producer Responsibility (EPR) Strategy</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we provide the <strong>technical evidence</strong> required to back your sustainability claims. We move beyond "eco-friendly" and into <strong>LCA-verified carbon reduction</strong> and <strong>verified recyclability scores</strong> (Cyclos-HTP), ensuring your brand is protected against litigation and truly serves the planet.
          </p>
        </div>
      )
    },
    {
      id: 'lca-science',
      title: 'Life Cycle Assessment (LCA): The Truth in Numbers',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The only way to compare the sustainability of two packaging formats is through an <strong>ISO 14040/44 Life Cycle Assessment</strong>. This cradle-to-grave analysis measures the total environmental impact of your packaging, from raw material extraction to end-of-life disposal.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Carbon Footprint</h4>
              <p className="text-sm text-neutral-600">Quantifying the total kg CO2e produced per 1,000 units, including energy used in manufacturing and transport.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Trash2 className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Landfill Impact</h4>
              <p className="text-sm text-neutral-600">Measuring the mass of material destined for landfill vs. the amount recovered through circular streams.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                <MicroscopeIcon className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Eutrophication</h4>
              <p className="text-sm text-neutral-600">Calculating the impact on water systems (nitrogen/phosphorus runoff) during the material production phase.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/seo-photos/a_sustainable_packaging_life_cycle_infographic_style_3318244.webp" 
              alt="LCA Cradle-to-Grave Analysis" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Evidence-Based Sustainability: A visual representation of ISO 14040 LCA metrics"
            />
          </div>
        </div>
      )
    },
    {
      id: 'regulatory-compliance',
      title: 'Navigating the Global Regulatory Minefield',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In 2026, "unsubstantiated green claims" are illegal in major markets. Achieve Pack ensures your brand complies with the world's strictest <strong>consumer protection laws</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Key Regulatory Frameworks</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">FTC Green Guides (US)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Requiring clear, prominent, and reliable evidence for any environmental claim made on a product label or website.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">CMA Green Claims Code (UK)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Enforcing six key principles, including accuracy, transparency, and the consideration of the full product life cycle.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">EU Green Claims Directive</h5>
                  <p className="text-xs text-neutral-600 mt-1">Mandating third-party verification and a standardized methodology for environmental product declarations (EPD).</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Extended Producer Responsibility (EPR)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We help brands navigate <strong>EPR mandates</strong> (like California SB 54 or UK EPR), which require companies to pay fees based on the recyclability and weight of their packaging. By transitioning to <strong>Mono-PE</strong> or <strong>Source-Reduced</strong> structures, we can significantly lower your brand's annual EPR liability.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'real-world-circularity',
      title: 'Real-World Circularity: Closing the Loop',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Circularity only works if the material is actually recovered. We focus on <strong>design-for-recycling</strong> and <strong>certified PCR integration</strong> to ensure your packaging has a second life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
                alt="Verified circular manufacturing facility" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Operational Transparency: Verified manufacturing for circular packaging assets"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Circularity Benchmarks</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Verified Recyclability:</strong> Achieving &gt; 90% recovery rates in standard PE streams (Cyclos-HTP certified).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>ISCC PLUS Traceability:</strong> Certified chain of custody for bio-circular and recycled resins.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Supply Chain Audits:</strong> On-site SMETA and ISO 14001 verification for all manufacturing partners.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Audit Your Real-World Sustainability',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-800 to-black p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Truth. Not Trends.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure the technical evidence your brand needs to back its sustainability claims? Let's start with a comprehensive Life Cycle Assessment (LCA) of your current packaging.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book LCA Consultation
            </button>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <FileSearch className="h-5 w-5" />
              Our Verification Process
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            ISO 14040/44 • FTC COMPLIANT • BRCGS CERTIFIED • GRS VERIFIED
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is the biggest mistake brands make in sustainability?",
      answer: "Relying on vague, unquantified claims like 'eco-friendly' or 'green.' Modern regulators and consumers demand specific data, such as the exact carbon footprint reduction (CO2e) or a third-party recyclability certification."
    },
    {
      question: "Does 'compostable' always mean better for the planet?",
      answer: "Not necessarily. A compostable bag often has a higher carbon footprint to produce than a recycled plastic pouch. The 'better' choice depends on your local waste infrastructure and your brand's specific sustainability goals (carbon vs. landfill avoidance)."
    },
    {
      question: "How do you calculate the carbon footprint of my order?",
      answer: "We use ISO-compliant LCA software and primary data from our manufacturing facilities to calculate the emissions from resin production, film extrusion, printing, lamination, and transport (Cradle-to-Customer)."
    },
    {
      question: "Can I use your data for my ESG reporting?",
      answer: "Absolutely. We provide high-fidelity technical data sheets and third-party certificates that are suitable for use in ESG reports, investor presentations, and regulatory filings."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Real-World Sustainability | LCA & Regulatory Compliance | Achieve Pack</title>
        <meta name="description" content="The definitive guide to real-world packaging sustainability. 800+ words on ISO 14040 LCA, FTC Green Guide compliance, and verifiable carbon reduction data." />
        <link rel="canonical" href="https://achievepack.com/topics/real-world-sustainability" />
        <meta name="keywords" content="real-world sustainability packaging, ISO 14040 LCA, FTC green guides compliance, packaging carbon footprint, sustainable supply chain audit, EPR packaging tax" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#171717"
        title="Real-World Sustainability: Data vs. Marketing"
        description="Establishing technical authority through verifiable Life Cycle Assessments and global regulatory compliance."
        keywords={['real-world sustainability', 'LCA packaging', 'sustainable compliance']}
        heroTitle="Data. Not Distraction."
        heroSubtitle="ISO 14040 LCA | Regulatory Compliant | Verifiable Impact"
        introSummary="The time for vague sustainability claims is over. We help brands build technical authority by providing the quantifiable evidence—from cradle-to-grave Life Cycle Assessments to third-party recyclability certifications—required to thrive in a regulated, data-driven global market."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/seo-photos/a_sustainable_packaging_life_cycle_infographic_style_3318244.webp"
      />
    </>
  )
}

export default RealWorldSustainabilityPage
