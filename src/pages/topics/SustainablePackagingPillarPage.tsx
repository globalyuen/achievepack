import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart3, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, Recycle, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Leaf, Trash2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const SustainablePackagingPillarPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.sustainablePackagingPillar'

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`seoPages.pages.sustainablePackagingPillar.theFivePillars`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              True sustainability is not a single feature; it's a multi-dimensional engineering strategy. In 2026, the <strong>Circular Economy</strong> demands that brands optimize for carbon footprint, material recovery, and supply chain ethics simultaneously.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h4 className="font-semibold text-blue-800">The Problem</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Fragmented sustainability goals</li>
                  <li>• High-carbon "recyclable" structures</li>
                  <li>• Lack of verifiable end-of-life data</li>
                  <li>• Regulatory non-compliance (SB 54, PPWR)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-800">The 5 Pillar Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Pillar 1: Source Reduction (Lightweighting)</li>
                  <li>• Pillar 2: Design for Recyclability (Mono-Materials)</li>
                  <li>• Pillar 3: Compostable Integrity (Certified EN 13432)</li>
                  <li>• Pillar 4: PCR Integration (Post-Consumer Resin)</li>
                  <li>• Pillar 5: Carbon Neutrality (LCA Optimization)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            Achieve Pack provides the <strong>technical architecture</strong> to align your brand with these pillars. We move beyond "green" marketing and into <strong>ISO 14040 Life Cycle Assessments</strong> and <strong>Cyclos-HTP recyclability certifications</strong>, ensuring your packaging is as functional as it is responsible.
          </p>
        </div>
      )
    },
    {
      id: 'pillar-1-2',
      title: t(`seoPages.pages.sustainablePackagingPillar.pillars1And2`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The most sustainable package is the one that uses the least material. <strong>Source Reduction</strong> (Pillar 1) focuses on lightweighting without sacrificing barrier performance. <strong>Design for Recyclability</strong> (Pillar 2) transitions multi-layer plastics to <strong>Mono-PE</strong> or <strong>Mono-PP</strong> structures.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">Technical Insight: Mono-PE</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By utilizing <strong>MDO-PE (Machine Direction Orientation)</strong> technology, we create high-clarity, high-stiffness films that are 100% recyclable in the standard PE stream. This eliminates the need for non-recyclable PET layers while maintaining <strong>EVOH barrier</strong> integrity for shelf-life preservation.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">Technical Insight: Lightweighting</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Switching from rigid glass or PET jars to <strong>flexible pouches</strong> reduces packaging weight by up to 80%. This directly translates to lower <strong>Scope 3 emissions</strong> during transport and a reduced <strong>EPR (Extended Producer Responsibility)</strong> tax liability.
              </p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/topics/sustainable-lifecycle-pillar.png" 
              alt="Sustainable packaging pillars and life cycle" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Framework: The interconnected nature of the 5 pillars in a circular economy"
            />
          </div>
        </div>
      )
    },
    {
      id: 'pillar-3-4',
      title: t(`seoPages.pages.sustainablePackagingPillar.pillars3And4`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Where mechanical recycling is not feasible (e.g., heavily contaminated food packaging), <strong>Compostability</strong> (Pillar 3) offers a biological recovery path. For mainstream plastic, <strong>PCR Integration</strong> (Pillar 4) reduces reliance on virgin fossil resins.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Advanced Material Science</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>Bio-PBS & NK Paper:</strong> Certified home-compostable structures with high aroma retention.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>30% - 50% GRS PCR:</strong> GRS-certified post-consumer recycled content for PET and PE films.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span><strong>ISCC PLUS Traceability:</strong> Ensuring the ethical and technical integrity of the recycled resin supply chain.</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.jpg" 
                alt="Close up of sustainable pouch material layers" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Structural Integrity: Multi-layer engineering optimized for Pillar 2 (Recyclability)"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pillar-5-lca',
      title: t(`seoPages.pages.sustainablePackagingPillar.pillar5`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The final pillar is the <strong>quantification</strong> of impact. We use <strong>ISO 14040/44 Life Cycle Assessments</strong> to calculate the kg CO2e of your packaging from cradle-to-customer.
          </p>
          
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-6 text-center italic uppercase tracking-wider">The Carbon Math (Typical 500g Coffee Pouch)</h4>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-blue-600 mb-2">-65%</div>
                <p className="text-xs text-neutral-500 uppercase font-bold">Transport Carbon</p>
                <p className="text-[10px] text-neutral-400 mt-1">vs. Glass Jars</p>
              </div>
              <div>
                <div className="text-3xl font-black text-green-600 mb-2">-40%</div>
                <p className="text-xs text-neutral-500 uppercase font-bold">Production Energy</p>
                <p className="text-[10px] text-neutral-400 mt-1">vs. Virgin PET</p>
              </div>
              <div>
                <div className="text-3xl font-black text-indigo-600 mb-2">+90%</div>
                <p className="text-xs text-neutral-500 uppercase font-bold">Recyclability</p>
                <p className="text-[10px] text-neutral-400 mt-1">in PE Streams</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`seoPages.pages.sustainablePackagingPillar.buildYourStrategy`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-indigo-800 to-black p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Expert Engineering. Sustainable Success.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to audit your packaging against the 5 pillars of 2026 sustainability? Our engineering team is standing by to design your transition roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book LCA Consultation
            </button>
            <Link
              to="/company/about"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Shield className="h-5 w-5" />
              Our Certification Hub
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
      question: "Which pillar is the most important for my brand?",
      answer: "It depends on your product and your market. For e-commerce, Pillar 1 (Source Reduction) often yields the highest ROI. For retail food in Europe, Pillar 2 (Recyclability) is mandatory due to PPWR regulations."
    },
    {
      question: "Can one package achieve all 5 pillars?",
      answer: "Some can, but there are often trade-offs. For example, a 100% compostable pouch (Pillar 3) might have a higher carbon footprint (Pillar 5) than a 100% recyclable mono-PE pouch (Pillar 2). We help you navigate these technical trade-offs."
    },
    {
      question: "What is the minimum PCR percentage I should target?",
      answer: "Regulators (like the UK Plastic Packaging Tax or California SB 54) generally set 30% as the minimum benchmark. We can engineer structures with up to 50% PCR while maintaining food safety and barrier properties."
    },
    {
      question: "How do you verify the recyclability of your mono-materials?",
      answer: "We utilize the Cyclos-HTP certification protocol, which is the industry standard in Europe and recognized globally, to verify that our Mono-PE and Mono-PP structures achieve &gt; 90% recovery rates."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`seoPages.pages.sustainablePackagingPillar.metaTitle`)}</title>
        <meta name="description" content={t(`seoPages.pages.sustainablePackagingPillar.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/topics/sustainable-packaging-pillar" />
        <meta name="keywords" content="sustainable packaging pillars, circular economy packaging, packaging source reduction, design for recycling, PCR integration packaging, carbon neutral packaging strategy" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e1b4b"
        title={t(`seoPages.pages.sustainablePackagingPillar.heroTitle`)}
        description={t(`seoPages.pages.sustainablePackagingPillar.heroDesc`)}
        keywords={['sustainable packaging strategy', '5 pillars of sustainability', 'packaging engineering']}
        heroTitle={t(`seoPages.pages.sustainablePackagingPillar.heroTitle2`)}
        heroSubtitle="Source Reduction | Recyclability | Compostability | PCR | Carbon Neutral"
        introSummary="The era of single-feature sustainability is over. To succeed in 2026, brands must adopt a multi-pillar strategy that balances material efficiency, recyclability, and carbon impact. This guide provides the technical roadmap for building a future-proof packaging architecture that satisfies regulators, retailers, and the planet."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/topics/sustainable-lifecycle-pillar.png"
      />
    </>
  )
}

export default SustainablePackagingPillarPage
