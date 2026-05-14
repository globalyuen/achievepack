import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Droplets, Wind, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Thermometer, Wind as Breeze } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const HUMIDITY_TECH_DATA = {
  wvtrTarget: "WVTR < 0.5g/m2/day (Plastic Equivalent)",
  wvtrMetric: "Achieving < 0.5g/m2/day at 38C / 90% RH, protecting dry goods from environmental moisture intake.",
  heroSubtitle: "WVTR < 0.5g | Bio-EVOH | Compostable Valves | TUV OK Compost"
}

const CompostableHumidityControlPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Compostable Humidity Control: Engineering the Ideal Micro-Climate',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Humidity control is the most difficult technical challenge in the bio-economy. In 2026, protecting moisture-sensitive products like <strong>Coffee, Spices, and Pharmaceuticals</strong> requires a 100% <strong>Compostable High-Barrier</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-600">
                <h4 className="font-semibold text-cyan-800">The Moisture Crisis</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>- High WVTR (Water Vapor Transmission Rate)</li>
                  <li>- Product clumping and mold growth</li>
                  <li>- Aroma loss and oxidation</li>
                  <li>- Traditional plastic/foil waste</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">The Achieve Pack Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>- TUV OK Compost Home High-Barrier</li>
                  <li>- {HUMIDITY_TECH_DATA.wvtrTarget}</li>
                  <li>- Integrated Bio-Degassing Valves</li>
                  <li>- Plant-based PBS/Bio-EVOH structures</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we have mastered <strong>Active Humidity Engineering</strong> for compostable packaging. By utilizing <strong>Bio-EVOH and PBS (Polybutylene Succinate)</strong> laminates, we deliver Water Vapor Transmission Rates (WVTR) and Oxygen Transmission Rates (OTR) that match traditional petroleum-based plastics - ensuring your product stays fresh and potent without the environmental cost.
          </p>
        </div>
      )
    },
    {
      id: 'barrier-science',
      title: 'The Science of Dry: WVTR and OTR Metrics',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Moisture protection is defined by <strong>Water Vapor Transmission Rate (WVTR)</strong>. We utilize advanced bio-polymers that create a molecular shield against environmental humidity.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-cyan-100 rounded-lg w-fit mb-4">
                <Droplets className="h-6 w-6 text-cyan-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Low WVTR</h4>
              <p className="text-sm text-neutral-600">{HUMIDITY_TECH_DATA.wvtrMetric}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Wind className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">High Oxygen Barrier</h4>
              <p className="text-sm text-neutral-600">Bio-EVOH layers block oxygen entry, preventing rancidity and preserving natural aromas.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Multi-Layer Purity</h4>
              <p className="text-sm text-neutral-600">100% compostable laminates (Paper/PBS/Bio-EVOH) for maximum structural integrity.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
              alt="High-barrier compostable humidity control" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Bio-barrier science is now capable of achieving 12+ month shelf-life for moisture-sensitive dry goods"
            />
          </div>
        </div>
      )
    },
    {
      id: 'active-features',
      title: 'Active Preservation: Bio-Valves and Zippers',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Humidity control is not just about the film; it is about the <strong>Closure System</strong>. We provide integrated bio-components that maintain the internal micro-climate.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Closure Engineering</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Compostable Degassing Valves</h5>
                  <p className="text-xs text-neutral-600 mt-1">Allowing CO2 to escape from fresh coffee while blocking oxygen and moisture entry.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Hermetic Bio-Zippers</h5>
                  <p className="text-xs text-neutral-600 mt-1">Re-sealable closures made from 100% compostable resins that maintain a moisture-proof seal.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Heat Seal Integrity</h5>
                  <p className="text-xs text-neutral-600 mt-1">Optimized for high-speed filling lines to ensure zero leaks or moisture ingress.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Sustainable Credibility</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By utilizing <strong>TUV Certified Home Compostable</strong> materials, you build an immediate bond of trust with conscious consumers. Achieve Pack provides the certifications you need to prove your humidity-control packaging is both high-performance and environmentally pure.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Master Your Product Freshness',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-cyan-800 to-blue-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Stay Dry. Stay Pure. Stay Sustainable.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure a high-barrier, compostable humidity-control supply chain for your brand? Our engineering team will review your WVTR requirements today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-cyan-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Barrier Strategy Session
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Order Barrier Samples
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            TUV CERTIFIED - LOW WVTR - HIGH OTR - BIO-VALVE EQUIPPED
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can compostable pouches match the barrier of plastic?",
      answer: "Yes. Our advanced PBS/Bio-EVOH laminates achieve WVTR and OTR levels that are equivalent to traditional petroleum-based plastics, ensuring your product's shelf-life is protected."
    },
    {
      question: "Are the degassing valves compostable?",
      answer: "Yes. We offer 100% TUV-certified compostable one-way degassing valves that break down alongside the pouch in an industrial or home compost environment."
    },
    {
      question: "What products require humidity control?",
      answer: "Ground and whole-bean coffee, spices, superfood powders, pharmaceutical capsules, and certain sensitive electronics all require high-barrier humidity protection."
    },
    {
      question: "How long is the shelf life in these bags?",
      answer: "Depending on the specific product and environmental conditions, our high-barrier compostable pouches can provide 6-12 months of protection, matching standard industry benchmarks."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Compostable Humidity Control | High-Barrier Bio-Packaging | Achieve Pack</title>
        <meta name="description" content="The technical guide to compostable humidity control. 800+ words on WVTR science, Bio-EVOH barriers, compostable degassing valves, and dry-goods preservation." />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-humidity-control" />
        <meta name="keywords" content="compostable humidity control, high barrier compostable, WVTR bio-packaging, compostable coffee valves, moisture proof compostable, bio-EVOH barrier" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#0891b2"
        title="Compostable Humidity Control: Engineering Freshness"
        description="Establishing technical authority in high-performance moisture and aroma protection for the bio-economy."
        keywords={['humidity control', 'compostable barrier', 'WVTR engineering']}
        heroTitle="Dry. Aroma-Pure. Bio-Certified."
        heroSubtitle={HUMIDITY_TECH_DATA.heroSubtitle}
        introSummary="Humidity is the enemy of freshness. This guide outlines how we use advanced bio-polymer science and active closure technology to deliver industry-leading moisture protection in 100% compostable formats - ensuring your sensitive products remain at peak quality."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp"
      />
    </>
  )
}

export default CompostableHumidityControlPage
