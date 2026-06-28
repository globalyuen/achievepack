import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Layers, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Recycle, Trash2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const MonoMaterialSolutionPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.monoMaterialSolution'

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Mono-Material Engineering: Solving the Recycling Puzzle',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              The primary barrier to a circular economy in packaging is the "multi-material" laminate. In 2026, <strong>Mono-Material engineering</strong> is the only way to ensure that flexible pouches are recoverable, sortable, and high-value for recyclers.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-800">The Problem</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• PET/PE/ALU layers cannot be separated</li>
                  <li>• Contaminated recycling streams</li>
                  <li>• Downcycling to low-value products</li>
                  <li>• High "non-recyclable" plastic taxes</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">The Mono-Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• 100% Polyethylene (PE) or Polypropylene (PP)</li>
                  <li>• High Barrier without Foil (EVOH/AlOx)</li>
                  <li>• Homogeneous zippers, valves, and fitments</li>
                  <li>• &gt; 90% recovery rate (Cyclos-HTP)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            Achieve Pack's <strong>Mono-Material</strong> platform replaces the traditional PET outer layer with <strong>MDO-PE (Machine Direction Oriented Polyethylene)</strong>. This breakthrough allows for high-clarity, high-stiffness packaging that performs like traditional plastic but recycles as easily as a milk jug.
          </p>
        </div>
      )
    },
    {
      id: 'technical-breakdown',
      title: 'Technical Breakdown: PE/PE vs. PP/PP',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Depending on your product's requirements for heat resistance, clarity, and moisture barrier, we offer two primary mono-material paths.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">Mono-PE (Polyethylene)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                The global standard for flexible recyclability. Suitable for dry snacks, frozen foods, and supplements.
              </p>
              <ul className="text-xs space-y-1 text-neutral-500">
                <li>• Structure: MDO-PE / PE or PE / EVOH / PE</li>
                <li>• Pros: Highest recovery rate, store-drop-off compatible</li>
                <li>• Barrier: High moisture, medium oxygen</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-2">Mono-PP (Polypropylene)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Best for high-heat applications, high-clarity needs, and superior moisture barrier.
              </p>
              <ul className="text-xs space-y-1 text-neutral-500">
                <li>• Structure: OPP / CPP or OPP / AlOx / CPP</li>
                <li>• Pros: High heat resistance (up to 121°C), superior gloss</li>
                <li>• Barrier: Exceptional moisture, high oxygen</li>
              </ul>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.jpg" 
              alt="Mono-material pouch structural layers" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Structural Purity: Engineering multi-layer performance using a single polymer family"
            />
          </div>
        </div>
      )
    },
    {
      id: 'mdo-technology',
      title: 'MDO-PE: The Secret to High Performance',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            <strong>Machine Direction Orientation (MDO)</strong> is a process where PE film is stretched under controlled heat. This molecular alignment significantly improves the film's technical properties.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white border border-neutral-200 rounded-xl">
              <div className="font-black text-2xl text-blue-600 mb-1">3X</div>
              <p className="text-xs font-bold uppercase text-neutral-500">{t(`seoPages.pages.monoMaterialSolution.stiffness`)}</p>
              <p className="text-[10px] text-neutral-400 mt-1">Allowing for thinner films and better stand-up performance on retail shelves.</p>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded-xl">
              <div className="font-black text-2xl text-blue-600 mb-1">95%</div>
              <p className="text-xs font-bold uppercase text-neutral-500">{t(`seoPages.pages.monoMaterialSolution.hazeReduction`)}</p>
              <p className="text-[10px] text-neutral-400 mt-1">Delivering the crystal-clear optics of PET without the recycling penalties.</p>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded-xl">
              <div className="font-black text-2xl text-blue-600 mb-1">+40%</div>
              <p className="text-xs font-bold uppercase text-neutral-500">{t(`seoPages.pages.monoMaterialSolution.heatResistance`)}</p>
              <p className="text-[10px] text-neutral-400 mt-1">Ensuring the outer layer doesn't melt during the heat-sealing process.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-eeat',
      title: 'EEAT: Verified Circularity',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In a regulated market, a claim is only as good as its certificate. We provide the <strong>technical documentation</strong> required for global compliance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/illustrated/a_topic_04_digital_print_var_b_3318604.jpg" 
                alt="Mono-material production line quality control" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Operational Integrity: Verifying polymer purity on every production batch"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Our Technical Proof</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span><strong>Cyclos-HTP:</strong> Certified recyclability for PE and PP streams.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span><strong>CEFLEX Compliance:</strong> Aligned with the 'Designing for a Circular Economy' guidelines.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span><strong>FTC Green Guides:</strong> Verifiable evidence for recyclable claims on primary packaging.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Upgrade to Mono-Material',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-800 to-indigo-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Simplify. Recapture. Sustain.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to transition your product line to a high-performance mono-material structure? Our engineers are ready to design your circular future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Technical Review
            </button>
            <Link
              to="/products/recyclable-mono-material-pouches"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Recycle className="h-5 w-5" />
              View Mono-PE Products
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            MDO-PE TECH • CYCLOS-HTP CERTIFIED • NIR SORTABLE • PFAS FREE
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can I use mono-material for liquids or heavy products?",
      answer: "Yes. By utilizing specialized co-extruded sealants (like LLDPE) and adjusting the film thickness, we can engineer mono-PE pouches with the puncture resistance and seal strength required for liquids and heavy contents up to 5kg."
    },
    {
      question: "Does the zipper need to be removed for recycling?",
      answer: "No. For a pouch to be truly 'mono-material,' every component must be made from the same polymer family. We use PE zippers for our PE pouches and PP zippers for our PP pouches, ensuring the entire bag is recycled as one unit."
    },
    {
      question: "Is EVOH recyclable in the PE stream?",
      answer: "Yes, provided it remains below 5% of the total structure's weight. At this concentration, EVOH is considered a 'recyclable-compatible' barrier and does not contaminate the resulting rPE resin."
    },
    {
      question: "How do mono-materials help with plastic taxes?",
      answer: "In jurisdictions like the UK or Italy, non-recyclable plastic is taxed heavily. By switching to a certified recyclable mono-material, you can often significantly reduce or eliminate these tax liabilities."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`seoPages.pages.monoMaterialSolution.metaTitle`)}</title>
        <meta name="description" content={t(`seoPages.pages.monoMaterialSolution.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/topics/mono-material-packaging" />
        <meta name="keywords" content="mono-material packaging, MDO-PE technology, mono-PE pouches, mono-PP packaging, recyclable mono-material, cyclos-htp certification" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e3a8a"
        title={t(`seoPages.pages.monoMaterialSolution.heroTitle`)}
        description={t(`seoPages.pages.monoMaterialSolution.heroDesc`)}
        keywords={['mono-material solutions', 'mono-PE engineering', 'recyclable packaging tech']}
        heroTitle={t(`seoPages.pages.monoMaterialSolution.heroTitle2`)}
        heroSubtitle="MDO-PE | Mono-PP | Cyclos-HTP Certified | CEFLEX Ready"
        introSummary="The key to circularity is simplicity. By engineering complex packaging performance—including high barrier and heat resistance—into a single polymer family, we eliminate the need for non-recyclable laminates. This guide explores the material science of Mono-PE and Mono-PP, the technologies behind them, and how they secure your brand's future in a regulated market."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.jpg"
      />
    </>
  )
}

export default MonoMaterialSolutionPage
