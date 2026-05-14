import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Leaf, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Recycle, Trash2  , Box } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const ReduceWasteGuidePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The "Waste-First" Packaging Crisis',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              In 2026, the primary goal of sustainable packaging is <strong>source reduction</strong>. While recycling and composting are critical, the most effective way to lower your carbon footprint is to use <strong>less material</strong> at the beginning of the product lifecycle. Every gram of plastic eliminated at the source is a gram that never enters the landfill or ocean.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800">The Waste Reduction Pyramid</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Level 1: Source Reduction (Lightweighting)</li>
                  <li>• Level 2: Design for Circularity (Recyclability)</li>
                  <li>• Level 3: Material Substitution (Compostability)</li>
                  <li>• Level 4: Consumer Education (Correct Disposal)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">Achieve Pack Waste Tech</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• MDO-PE Thinning (25% Less Plastic)</li>
                  <li>• High-Barrier Mono-Material Structures</li>
                  <li>• Automated "Anti-Waste" Filling Formats</li>
                  <li>• Zero-Scrap Manufacturing Protocols</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we help brands move beyond "sustainable claims" and into <strong>quantifiable waste reduction</strong>. Through advanced structural engineering and material science, we design packaging that uses the absolute minimum amount of polymer required to protect your product's shelf life.
          </p>
        </div>
      )
    },
    {
      id: 'source-reduction',
      title: 'Level 1: Engineering Source Reduction',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            <strong>Source reduction</strong> is the most impactful step in a circular economy. We utilize Machine Direction Orientation (MDO) to stretch polymer molecules, allowing us to create thinner films that maintain the same puncture resistance and barrier strength as thicker, conventional materials.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Lightweighting</h4>
              <p className="text-sm text-neutral-600">Reducing the overall micron thickness of the film by 15-25% through advanced molecular orientation.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Box className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Eliminating "Dead Air"</h4>
              <p className="text-sm text-neutral-600">Custom sizing pouches to fit product volume exactly, reducing empty headspace and shipping volume.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Recycle className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Mono-Material Shift</h4>
              <p className="text-sm text-neutral-600">Replacing multi-material laminates with 100% recyclable mono-PE or mono-PP structures.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/illustrated/a_industrial_compostable_card_v1_5916306.webp" 
              alt="Source reduction in packaging life cycle" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Circular Economy: Visualizing the impact of source reduction on carbon footprint"
            />
          </div>
        </div>
      )
    },
    {
      id: 'design-for-circularity',
      title: 'Level 2: Design for Circularity',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Waste is often a design flaw. When packaging is made from inseparable layers of plastic and foil, it is destined for the landfill. We design for <strong>mechanical and chemical recyclability</strong> from day one.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Achieve Pack Design Protocol</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Solvent-Free Lamination:</strong> Eliminates toxic waste streams and ensures the film is clean for recycling.
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Washable Inks:</strong> Allows recycling facilities to easily remove pigments during the reprocessing phase.
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Recyclable Spouts/Zippers:</strong> Ensuring all components of the pouch belong to the same polymer family.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Life Cycle Assessment (LCA)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We provide <strong>ISO 14040</strong> compliant LCA reports that quantify the waste reduction of your packaging transition. We measure everything from "Cradle-to-Grave" carbon footprint to the specific landfill avoidance metrics of your order.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consumer-education',
      title: 'Level 3: Closing the Loop with Consumer Education',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The best sustainable packaging fails if the consumer throws it in the wrong bin. We help brands integrate <strong>Smart Disposal Assets</strong> into their minimalist packaging designs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/illustrated/a_all_options_card_v3_3800862.webp" 
                alt="Sustainable unboxing and disposal instructions" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Consumer Engagement: Clear disposal instructions reduce recycling contamination"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Disposal Intelligence</h4>
              <p className="text-sm">
                We offer pre-designed templates for:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  <span><strong>How2Recycle Logos:</strong> Standardized instructions for US and Canadian markets.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  <span><strong>QR Compliance Links:</strong> Leading consumers to local composting or recycling drop-off points.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary-600" />
                  <span><strong>On-Pouch Disposal Icons:</strong> Intuitive, minimalist graphics for global markets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Start Your Waste Reduction Journey',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-green-700 to-emerald-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Reduce Material. Increase Impact.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to perform a technical waste audit of your brand's packaging? Our sustainable engineering team will identify the top three areas where you can reduce material use today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-green-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Waste Audit
            </button>
            <Link
              to="/topics/pcr-packaging"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Recycle className="h-5 w-5" />
              Learn About PCR Tech
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            ISO 14001 • SOURCE REDUCTION VERIFIED • BPA FREE • ZERO LANDFILL TARGETS
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is 'Source Reduction' exactly?",
      answer: "Source reduction is the practice of designing packaging that uses less material at the beginning of the manufacturing process. This is often achieved through 'lightweighting'—using thinner, stronger films (like MDO-PE) that provide the same protection with 20% less plastic."
    },
    {
      question: "Is thinner packaging less durable?",
      answer: "Not if it is engineered correctly. By using advanced polymers like BOPA (Nylon) or oriented PE, we can maintain high puncture resistance and burst strength (30+ PSI) even as we reduce the total micron thickness of the pouch."
    },
    {
      question: "Does reducing waste also reduce my costs?",
      answer: "Yes, in several ways. Less material usually means lower per-unit costs and significantly lower shipping costs (due to reduced weight and volume). Additionally, many countries are implementing 'Plastic Taxes' on packaging that isn't recyclable or contains virgin plastic—source reduction helps mitigate these costs."
    },
    {
      question: "How do you help me communicate my waste reduction to customers?",
      answer: "We provide technical data sheets and LCA reports that quantify your success. For example: 'This new pouch uses 24% less plastic than our previous version.' We can also help you design clear, minimalist graphics that communicate this achievement on the bag itself."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Reduce Packaging Waste Guide | Sustainable Engineering | Achieve Pack</title>
        <meta name="description" content="Authority guide to reducing packaging waste. 800+ words on source reduction, lightweighting, circular design, and LCA carbon footprint analysis." />
        <link rel="canonical" href="https://achievepack.com/topics/reduce-waste-guide" />
        <meta name="keywords" content="reduce packaging waste, source reduction guide, lightweighting plastic packaging, circular packaging design, LCA carbon footprint, mono-material recycling" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#065f46"
        title="Reduce Waste Guide: Engineering a Circular Future"
        description="A technical roadmap to eliminating waste through engineered source reduction and circular design protocols."
        keywords={['reduce waste', 'source reduction', 'sustainable packaging guide']}
        heroTitle="Minimum Material. Maximum Impact."
        heroSubtitle="Source Reduction | Circular Design | Waste Audited"
        introSummary="Waste is a design flaw. This technical guide explores how brands can utilize advanced material science—from MDO-PE lightweighting to mono-material circularity—to eliminate unnecessary packaging material, reduce carbon emissions, and drive a truly sustainable brand strategy."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp"
      />
    </>
  )
}

export default ReduceWasteGuidePage
