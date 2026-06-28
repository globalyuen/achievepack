import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Globe, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Waves, Anchor, Ship  , Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const RecycledOceanPlasticPackagingPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.recycledOceanPlasticPackaging'

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: t(`seoPages.pages.recycledOceanPlasticPackaging.theOceanBoundPlasticMission`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Every year, over 11 million metric tons of plastic enter our oceans. <strong>Ocean-Bound Plastic (OBP)</strong> is plastic waste that is at high risk of entering the ocean—typically located within 50km of a coastline in regions without formal waste management. In 2026, integrating OBP into your packaging is a powerful way to fund waste collection infrastructure while reducing your brand's virgin plastic footprint.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">The OBP Crisis</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• 80% of ocean plastic comes from coastal land</li>
                  <li>• Lack of collection funding in SE Asia/Africa</li>
                  <li>• Microplastic degradation in marine ecosystems</li>
                  <li>• Supply chain lack of traceability</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-800">Achieve Pack OBP Tech</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Certified "Prevented Ocean Plastic" Resins</li>
                  <li>• Blockchain-Verified Chain of Custody</li>
                  <li>• 30-50% OBP Content Structures</li>
                  <li>• Ethical Collection Social Audits</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we specialize in <strong>high-purity OBP integration</strong>. We partner with verified coastal collection networks to recover plastic waste before it reaches the sea, reprocessing it into high-performance flexible packaging resins that meet <strong>GRS (Global Recycled Standard)</strong> benchmarks.
          </p>
        </div>
      )
    },
    {
      id: 'traceability-blockchain',
      title: t(`seoPages.pages.recycledOceanPlasticPackaging.traceabilityTheBlockchain`),
      icon: <Anchor className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Trust is the most important component of an ocean plastic claim. We utilize <strong>third-party verified traceability</strong> to ensure that every pound of plastic in your pouch was truly recovered from a high-risk coastal area.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Geo-Tagging</h4>
              <p className="text-sm text-neutral-600">Verification of the specific collection site (e.g., Indonesia, Philippines, Haiti) to ensure high-impact OBP recovery.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-cyan-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>
              <h4 className="font-bold text-neutral-900">GRS Certified</h4>
              <p className="text-sm text-neutral-600">Global Recycled Standard audit of the recycling facility, verifying the material mass-balance and ethical labor.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 shadow-sm">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Social Impact</h4>
              <p className="text-sm text-neutral-600">Our collection partners are audited for fair wages and safety, transforming waste into a livelihood for coastal communities.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/illustrated/a_all_options_card_v3_3800862.jpg" 
              alt="Coastal ocean-bound plastic collection" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Impact Verification: coastal collection teams recovering high-risk OBP"
            />
          </div>
        </div>
      )
    },
    {
      id: 'material-science',
      title: t(`seoPages.pages.recycledOceanPlasticPackaging.materialScienceHighPurity`),
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Ocean-bound plastic is often degraded by UV and salt water. To maintain <strong>high-performance barrier properties</strong>, we utilize advanced mechanical recycling processes that wash, sort, and decontaminate the plastic at the molecular level.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">OBP Integration Strategies</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <strong>Secondary Packaging:</strong> 100% OBP content for mailers and outer wraps where food contact is not a factor.
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <strong>Co-Extruded Pouches:</strong> Integrating 30% OBP into the center layer of a food-safe pouch, shielded by virgin internal barriers.
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <strong>Chemical Recycling:</strong> Breaking OBP down to its monomers to create "Virgin-Equivalent" food-grade resin for all pouch layers.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Technical Performance</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We perform <strong>high-fidelity tensile testing</strong> and <strong>migration analysis</strong> on all OBP batches. Our goal is to ensure that your OBP-enriched pouch has the same puncture resistance and shelf stability as a 100% virgin structure.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'e-e-a-t-authority',
      title: t(`seoPages.pages.recycledOceanPlasticPackaging.eeatTheValueOf`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">
            "Ocean Plastic" is a term often misused. At Achieve Pack, we follow the <strong>Prevented Ocean Plastic (POP)</strong> standard, which is the most authoritative framework for OBP recovery.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/topics/ocean-bound-plastic-hero.png" 
                alt="OBP Pouch on beach mockup" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Marketing Transparency: Communicating the OBP mission to your customers"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Why POP Standards Matter</h4>
              <p className="text-sm">
                Choosing Achieve Pack OBP means your brand is:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-blue-600" />
                  <span><strong>Funding Infrastructure:</strong> Direct investment in waste collection in high-leakage coastal zones.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-blue-600" />
                  <span><strong>Reducing Virgin Plastic:</strong> Every kg of OBP replaces a kg of fossil-fuel derived polymer.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-blue-600" />
                  <span><strong>Enhancing Brand Equity:</strong> A tangible, high-impact sustainability story that resonates with modern consumers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`seoPages.pages.recycledOceanPlasticPackaging.joinTheOceanBound`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-800 to-cyan-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Recover. Recycle. Protect.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to integrate certified ocean-bound plastic into your brand's packaging? Our sustainable engineering team will guide you through the integration and certification process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book OBP Strategy Session
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
            GRS CERTIFIED • OCEAN-BOUND PLASTIC VERIFIED • BLOCKCHAIN TRACEABILITY • BPA FREE
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What exactly is 'Ocean-Bound Plastic'?",
      answer: "Ocean-Bound Plastic (OBP) is defined as plastic waste located within 50km of a coastline in an area where waste management is non-existent or inefficient. By recovering this plastic before it enters the water, we 'prevent' ocean pollution."
    },
    {
      question: "Is OBP safe for food packaging?",
      answer: "Yes, when integrated correctly. We typically use OBP in the non-food contact layers of a co-extruded pouch or utilize chemically recycled OBP resin which is molecularly identical to virgin plastic and 100% food-safe."
    },
    {
      question: "How do I prove to my customers that the plastic is from the ocean?",
      answer: "We provide GRS Transaction Certificates and blockchain-verified collection data for every order. You can also feature the 'Prevented Ocean Plastic' logo on your packaging to communicate your impact."
    },
    {
      question: "Does OBP packaging look different?",
      answer: "Mechanically recycled OBP can have a very slight grey or yellow tint compared to virgin plastic. Many brands choose to lean into this aesthetic as a 'badge of honor,' or we can use opaque matte finishes to maintain a clean, premium look."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`seoPages.pages.recycledOceanPlasticPackaging.metaTitle`)}</title>
        <meta name="description" content={t(`seoPages.pages.recycledOceanPlasticPackaging.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/topics/recycled-ocean-plastic-packaging" />
        <meta name="keywords" content="recycled ocean plastic packaging, ocean bound plastic OBP, prevented ocean plastic, coastal waste collection, GRS certified ocean plastic, sustainable resin" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#075985"
        title={t(`seoPages.pages.recycledOceanPlasticPackaging.heroTitle`)}
        description={t(`seoPages.pages.recycledOceanPlasticPackaging.heroDesc`)}
        keywords={['ocean plastic', 'OBP packaging', 'recycled ocean plastic']}
        heroTitle={t(`seoPages.pages.recycledOceanPlasticPackaging.heroTitle2`)}
        heroSubtitle="Coastal Recovered | GRS Certified | Blockchain Verified"
        introSummary="Ocean-Bound Plastic (OBP) is the front line of the marine pollution crisis. We provide brands with a technical solution to recover high-risk coastal waste and reprocess it into high-barrier flexible packaging, creating a tangible positive impact on global marine ecosystems."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/topics/ocean-bound-plastic-hero.png"
      />
    </>
  )
}

export default RecycledOceanPlasticPackagingPage
