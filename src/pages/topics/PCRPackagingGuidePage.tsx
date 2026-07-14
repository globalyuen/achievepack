import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Recycle, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, Trash2 } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const PCRPackagingGuidePage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pCRPackagingGuide'

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'empathy-hook',
      title: 'The Reality of the Challenge',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg space-y-4 mb-8">
          <p className="text-lg text-neutral-800 italic leading-relaxed">
            "Navigating PCR compliance without sacrificing packaging performance is one of the hardest challenges brands face today. Many suppliers offer recycled resins that suffer from gel spots, poor tensile strength, or worse—lack proper GRS certification. We developed our PCR-integrated pouches to give you the exact same mechanical clarity and strength as virgin plastic, backed by verified transaction certificates so you can confidently claim tax exemptions."
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-amber-200">
            <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            <div>
              <p className="text-sm font-bold text-neutral-900">Ryan Wong</p>
              <p className="text-xs text-neutral-600">Chief Packaging Engineer, Achieve Pack</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hero-problem',
      title: 'PCR Packaging: Closing the Plastic Loop',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-neutral-50 to-neutral-200 p-6 rounded-lg border border-neutral-300 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Post-Consumer Recycled (PCR)</strong> resin is the most direct way to decouple packaging from virgin fossil fuels. In 2026, integrating PCR is no longer optional—it is a regulatory mandate and a critical component of <strong>Scope 3 emissions reduction</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-neutral-800">
                <h4 className="font-semibold text-neutral-900">The Virgin Plastic Problem</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• High carbon intensity of fossil resin</li>
                  <li>• Escalating plastic taxes (UK/EU)</li>
                  <li>• Consumer backlash against "virgin" plastic</li>
                  <li>• Supply chain volatility</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-neutral-500">
                <h4 className="font-semibold text-neutral-700">The PCR Solution</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• GRS-Certified Recycled Content</li>
                  <li>• Up to 50% PCR in PET and PE films</li>
                  <li>• FDA-Compliant Food-Grade options</li>
                  <li>• Significant Plastic Tax exemptions</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we specialize in high-performance <strong>PCR-integrated pouches</strong>. By blending 30% to 50% post-consumer resin into the core of your packaging structure, we deliver a product that looks and performs like virgin plastic but carries a significantly lower environmental price tag.
          </p>
        </div>
      )
    },
    {
      id: 'pcr-science',
      title: 'The Science of PCR: Quality & Performance',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Not all PCR is created equal. The challenge in using recycled resin is maintaining <strong>mechanical strength</strong>, <strong>clarity</strong>, and <strong>food safety</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-neutral-200 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-neutral-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Food-Grade Purity</h4>
              <p className="text-sm text-neutral-600">We utilize <strong>FDA-Compliant PCR</strong> processed via advanced mechanical or chemical recycling to ensure zero contamination.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-neutral-200 rounded-lg w-fit mb-4">
                <Layers className="h-6 w-6 text-neutral-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Triplex Engineering</h4>
              <p className="text-sm text-neutral-600">PCR is typically sandwiched between virgin layers to maintain seal integrity and prevent migration.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-neutral-200 rounded-lg w-fit mb-4">
                <ArrowLeftRight className="h-6 w-6 text-neutral-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Visual Clarity</h4>
              <p className="text-sm text-neutral-600">High-purity rPET resins ensure that even at 50% PCR, your packaging remains clear and vibrant.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp" 
              alt="PCR integrated pouch material layers" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Insight: Precision lamination of post-consumer resin for maximum performance and minimum waste"
            />
          </div>
        </div>
      )
    },
    {
      id: 'compliance-grs',
      title: 'GRS Certification & Traceability',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In the era of anti-greenwashing laws, <strong>traceability</strong> is your brand's shield. We provide the technical evidence to back up every PCR claim.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">The Certification Stack</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Global Recycled Standard (GRS)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Verification of recycled content and social/environmental practices in the supply chain.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Transaction Certificates (TCs)</h5>
                  <p className="text-xs text-neutral-600 mt-1">Evidence for every shipment confirming the exact percentage of PCR content provided.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">ISCC PLUS Verification</h5>
                  <p className="text-xs text-neutral-600 mt-1">Ensuring mass-balance traceability for advanced/chemical recycled PCR resins.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Tax Benefits & Incentives</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                By utilizing &gt; 30% PCR content, brands can exempt themselves from the <strong>UK Plastic Packaging Tax</strong> (£217/tonne) and similar levies in the EU and North America. Achieve Pack handles the technical reporting to ensure your brand is compliant and tax-efficient.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'impact-metrics',
      title: 'PCR Impact: The Carbon Reality',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            PCR isn't just about waste; it's about carbon. Our <strong>ISO 14040 Life Cycle Assessments</strong> show a dramatic reduction in CO2e when switching from virgin to recycled resin.
          </p>
          
          <div className="bg-neutral-800 p-8 rounded-2xl text-white">
            <h4 className="font-bold text-center mb-8 uppercase tracking-widest text-neutral-400">Environmental Savings (per 1,000kg Resin)</h4>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-neutral-100 mb-2">-2,500kg</div>
                <p className="text-xs text-neutral-400 uppercase font-bold">CO2e Emissions</p>
                <p className="text-[10px] text-neutral-500 mt-1">vs. Virgin PET production</p>
              </div>
              <div>
                <div className="text-3xl font-black text-neutral-100 mb-2">-70%</div>
                <p className="text-xs text-neutral-400 uppercase font-bold">Fossil Energy</p>
                <p className="text-[10px] text-neutral-500 mt-1">Required for extraction/refining</p>
              </div>
              <div>
                <div className="text-3xl font-black text-neutral-100 mb-2">-50%</div>
                <p className="text-xs text-neutral-400 uppercase font-bold">Water Usage</p>
                <p className="text-[10px] text-neutral-500 mt-1">During material processing</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Integrate PCR Into Your Packaging',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-neutral-800 to-black p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Recycled. Resilient. Ready.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to reduce your brand's plastic tax liability and carbon footprint? Our engineering team will design your PCR transition roadmap today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book PCR Consultation
            </button>
            <Link
              to="/company/certificates"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Shield className="h-5 w-5" />
              View GRS Certificates
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            GRS CERTIFIED • FDA COMPLIANT • UK PLASTIC TAX EXEMPT • 50% MAX PCR
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Will PCR affect the strength of my pouches?",
      answer: "When properly engineered as a 'sandwich' layer between virgin resin, PCR (up to 50%) does not significantly compromise the puncture resistance or seal strength of the final package."
    },
    {
      question: "Is PCR more expensive than virgin plastic?",
      answer: "While the raw resin can sometimes be slightly more expensive due to processing costs, the reduction in Plastic Packaging Taxes and the brand equity gained usually result in a positive net ROI."
    },
    {
      question: "How do you prove the PCR percentage to regulators?",
      answer: "We provide GRS Transaction Certificates for every production run, which are legally recognized evidence of recycled content for tax and compliance purposes."
    },
    {
      question: "Can I use PCR for liquid packaging?",
      answer: "Yes. Our high-performance PCR-PE laminates are suitable for liquid soap, detergents, and even certain food sauces, provided we use the appropriate barrier layers."
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`seoPages.pages.pCRPackagingGuide.metaTitle`)}</title>
        <meta name="description" content={t(`seoPages.pages.pCRPackagingGuide.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/topics/pcr-packaging-guide" />
        <meta name="keywords" content="PCR packaging guide, post-consumer recycled resin, GRS certified packaging, PCR food safe, plastic tax exemption, recycled plastic pouches" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#262626"
        title={t(`seoPages.pages.pCRPackagingGuide.heroTitle`)}
        description={t(`seoPages.pages.pCRPackagingGuide.heroDesc`)}
        keywords={['PCR packaging', 'recycled resin engineering', 'GRS certified guide']}
        heroTitle={t(`seoPages.pages.pCRPackagingGuide.heroTitle2`)}
        heroSubtitle="GRS Certified | 30-50% PCR | FDA Compliant | Carbon Verified"
        introSummary="The most sustainable material is the one that already exists. This guide provides the technical breakdown of how we integrate Post-Consumer Recycled (PCR) resin into high-performance packaging structures, ensuring your brand meets 2026 circularity mandates while maintaining absolute product integrity."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/pcr/guide/a_pcr_sustainability_impact_story_3330780.webp"
      />
    </>
  )
}

export default PCRPackagingGuidePage
