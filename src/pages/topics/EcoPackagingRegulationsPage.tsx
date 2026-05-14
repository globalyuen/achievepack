import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Scale, Shield, CheckCircle, Award, Calendar, MessageCircle, Target, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, Layers, FileText, Gavel } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const EcoPackagingRegulationsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Navigating the 2026 Global Eco-Packaging Regulatory Landscape',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Compliance is the new baseline for brand survival. In 2026, packaging regulations have shifted from voluntary guidelines to <strong>legally enforceable mandates</strong> with significant financial penalties for non-compliance.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-slate-800">
                <h4 className="font-semibold text-slate-900">Regulatory Hurdles</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• EU PPWR (Packaging & Packaging Waste Regulation)</li>
                  <li>• California SB 54 (Plastic Pollution Prevention)</li>
                  <li>• UK Plastic Packaging Tax mandates</li>
                  <li>• FTC Green Guides (Anti-Greenwashing)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">Achieve Pack Compliance</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Certified 100% Recyclable Mono-Materials</li>
                  <li>• Verifiable 30%+ PCR Content Integration</li>
                  <li>• PFAS-Free Aqueous Barrier Coatings</li>
                  <li>• ISO 14040 Life Cycle Assessments (LCA)</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we serve as your <strong>regulatory technical partner</strong>. We monitor the shifting requirements of the EU, North America, and Australia to ensure your packaging remains compliant, tax-exempt, and protected against greenwashing litigation.
          </p>
        </div>
      )
    },
    {
      id: 'ppwr-regulation',
      title: 'EU PPWR: The Circular Mandate',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The <strong>Packaging and Packaging Waste Regulation (PPWR)</strong> is the most ambitious environmental law in history, mandating that all packaging in the EU must be <strong>recyclable</strong> by 2030 and meet strict <strong>recycled content</strong> targets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Recycle className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Design for Recycling</h4>
              <p className="text-sm text-neutral-600">Mandatory adherence to 'Recyclability Performance Grades' (A to E). We target Grade A for all mono-materials.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Recycled Content</h4>
              <p className="text-sm text-neutral-600">Minimum 35% recycled content required for plastic packaging by 2030. We are already GRS-ready.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-bold text-neutral-900">Reduction Targets</h4>
              <p className="text-sm text-neutral-600">A 15% reduction in overall packaging waste per capita by 2040. Flexible pouches are the primary tool for this reduction.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
              alt="Compliance testing in packaging manufacturing" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="EEAT Protocol: Verifying material compliance with global PPWR and SB 54 standards"
            />
          </div>
        </div>
      )
    },
    {
      id: 'california-sb54',
      title: 'California SB 54: The US Benchmark',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            California's <strong>Plastic Pollution Prevention and Packaging Producer Responsibility Act (SB 54)</strong> requires all single-use packaging to be <strong>recyclable or compostable</strong> by 2032.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">SB 54 Compliance Pillars</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">EPR Fee Modulation</h5>
                  <p className="text-xs text-neutral-600 mt-1">Non-compliant brands pay higher fees. Our mono-materials qualify for the lowest fee tiers.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Plastic Source Reduction</h5>
                  <p className="text-xs text-neutral-600 mt-1">Mandates a 25% reduction in plastic packaging weight. Lightweight pouches are the optimal solution.</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">Certified Recovery</h5>
                  <p className="text-xs text-neutral-600 mt-1">Claims of recyclability must be backed by evidence of actual recovery in the California infrastructure.</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Anti-Greenwashing & The FTC</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The <strong>FTC Green Guides</strong> (and similar laws like the UK CMA Green Claims Code) require that environmental claims be <strong>specific, prominent, and verifiable</strong>. Achieve Pack provides the <strong>ISO 14040 LCA data</strong> and <strong>Cyclos-HTP certifications</strong> you need to make bulletproof claims without legal risk.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-audit',
      title: 'Our Regulatory Support Protocol',
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            We don't just supply bags; we supply compliance. Our <strong>EEAT Regulatory Protocol</strong> ensures your brand is protected.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp" 
                alt="Technical structure overview for regulatory compliance" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Regulatory Insight: Multi-layer engineering optimized for global tax exemptions"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Compliance Deliverables</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>Declaration of Compliance (DoC):</strong> Full material and safety data.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>GRS Certificates:</strong> Verifying recycled content for tax relief.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span><strong>LCA Reports:</strong> ISO-compliant carbon impact data.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Secure Your Regulatory Strategy',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-slate-800 to-blue-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Compliant. Certified. Confident.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Is your packaging ready for the 2026 regulatory audit? Our technical team will perform a compliance review and design your transition roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Regulatory Consultation
            </button>
            <Link
              to="/company/certificates"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <Award className="h-5 w-5" />
              Our Certification Hub
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            PPWR COMPLIANT • SB 54 READY • GRS CERTIFIED • FTC ALIGNED
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do the new EU laws affect UK-based brands?",
      answer: "While the UK is no longer in the EU, any brand exporting to the European market must comply with PPWR. Furthermore, the UK Plastic Packaging Tax already mandates 30% recycled content to avoid a £217/tonne levy."
    },
    {
      question: "What happens if my packaging is found to be non-compliant?",
      answer: "Under laws like SB 54 and PPWR, companies can face daily fines, product recalls, and high-profile greenwashing litigation. We help you proactively audit your structures to avoid these risks."
    },
    {
      question: "Are 'Store Drop-Off' claims still legal under SB 54?",
      answer: "The rules are tightening. Claims of recyclability in California now require 'Truth in Labeling' verification, meaning you must prove that the material is actually being collected and sorted by local MRFs. We provide the Cyclos-HTP data to support these claims."
    },
    {
      question: "Does Achieve Pack provide PFAS-free certification?",
      answer: "Yes. We offer independent laboratory testing reports confirming that our aqueous grease barriers and polymer additives are 100% PFAS-free, exceeding the requirements of California AB 1200."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Eco-Packaging Regulations Guide | Global Compliance | Achieve Pack</title>
        <meta name="description" content="Master the technical landscape of eco-packaging regulations. 800+ words on EU PPWR, California SB 54, FTC Green Guides, and global plastic tax compliance." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-packaging-regulations" />
        <meta name="keywords" content="eco-packaging regulations, EU PPWR guide, California SB 54 compliance, FTC Green Guides packaging, global plastic tax, sustainable packaging law" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#1e293b"
        title="Eco-Packaging Regulations: The 2026 Compliance Roadmap"
        description="Establishing technical authority in global packaging law, EPR mandates, and anti-greenwashing compliance."
        keywords={['packaging regulations', 'PPWR compliance', 'SB 54 guide']}
        heroTitle="Compliant. Not Confused."
        heroSubtitle="EU PPWR | California SB 54 | FTC Green Guides | EPR Optimized"
        introSummary="The era of voluntary sustainability is over. This guide provides the technical and legal breakdown of the global regulatory landscape—from mandatory recyclability grades in Europe to the source reduction mandates of California—ensuring your brand is protected, tax-exempt, and ready for the 2026 circular economy."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp"
      />
    </>
  )
}

export default EcoPackagingRegulationsPage
