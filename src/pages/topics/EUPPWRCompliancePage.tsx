import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Scale, Shield, CheckCircle, Award, Calendar, MessageCircle, 
  Target, Zap, Globe, FileText, Leaf, ArrowRight, ChevronDown, 
  Sparkles, Layers, BookOpen, AlertTriangle, BarChart2 
} from 'lucide-react'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import ClickableImage from '../../components/ClickableImage'

// B2B Corporate Layout
import SEOPageLayout from '../../components/SEOPageLayout'

// B2C Brutalist Layout
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

interface FAQItem {
  q: string
  a: string
}

const EUPPWRCompliancePage: React.FC = () => {
  const isPouchDomain = getDomain() === 'pouch'
  const { openCalendly } = useCalendly()
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // Common B2B/B2C FAQ Content
  const FAQS: FAQItem[] = [
    {
      q: "What is the immediate significance of the mid-August 2026 deadline?",
      a: "By mid-August 2026, packaging placed on the EU market faces much stricter compliance and audit regulations under the newly adopted PPWR. This represents the official start of mandatory reporting, Extended Producer Responsibility (EPR) tiering, and strict bans on non-minimization practices."
    },
    {
      q: "What does the 2030 mandate mean for flexible packaging formats?",
      a: "By 2030, all packaging placed on the EU market must be generally recyclable by design. Multi-layer plastics that cannot be cleanly separated will be phased out in favor of mono-materials like Recyclable Mono-PE or certified compostable barriers."
    },
    {
      q: "How does the 'Packaging Minimization' rule affect premium decorative boxes?",
      a: "The law limits packaging weight and volume to the absolute minimum required for safety and logistics. Decorative, oversized packaging that exists solely to enhance brand image may be restricted unless protected by specific trademark design-rights."
    },
    {
      q: "Are compostable surface laminates and zippers allowed under PPWR?",
      a: "Yes! The EU specifically mandates compostability for tea bags, coffee pods, sticky fruit labels, and very lightweight bags. Pouch.eco's EN 13432 compostable structures and bio-based barriers are fully compliant."
    },
    {
      q: "What documentation must brand owners supply before placing packs on the market?",
      a: "Brand owners must prepare a comprehensive Declaration of Conformity (DoC), technical specification records verifying GRS PCR content, PFAS-free lab test approvals, and dynamic recovery tracking data for each packaging SKU."
    },
    {
      q: "How can Achieve Pack and Pouch.eco assist my transition roadmap?",
      a: "Pouch.eco offers low-MOQ digital print runs (starting at 100 bags) for rapid D2C prototype testing. Achieve Pack provides high-volume, cost-optimized commercial wholesale manufacturing (MOQ 5,000+) certified for VFFS automatic packaging lines."
    }
  ]

  const TECH_MATRIX = [
    {
      param: "Recyclability Rating",
      value: "Grade A Design for Recycling (RecyClass aligned)",
      benefit: "Mono-PE pouches are fully sorted by local MRFs, qualifying you for lowest possible EPR taxes."
    },
    {
      param: "PFAS Barriers (ASTM F1918)",
      value: "100% PFAS-Free Aqueous Coating",
      benefit: "Fully complies with upcoming EU bans and strict US state laws (California AB 1200 / AB 1201)."
    },
    {
      param: "Post-Consumer Recycled (PCR)",
      value: "GRS-Certified 30%+ Recycled Content",
      benefit: "Exempts your brand from the UK Plastic Packaging Tax (£217/t) and EU packaging levy (€0.80/kg)."
    },
    {
      param: "Compostability Standards",
      value: "TÜV OK Compost & BPI (EN 13432 / ASTM D6400)",
      benefit: "Authorizes placement of official trust badges, ensuring greenwashing protection."
    },
    {
      param: "Packaging Minimization",
      value: "Ultra-Lightweight Flexible Pouches",
      benefit: "Saves up to 70% plastic weight compared to rigid jars, exceeding EU per-capita waste limits."
    }
  ]

  // =========================================================================
  // 1. RENDER B2C Pouch.eco Layout (Bold Retro-Brutalist)
  // =========================================================================
  if (isPouchDomain) {
    const b2cSections = [
      {
        id: 'ppwr-2026',
        title: 'The Mid-August 2026 Countdown',
        icon: <Calendar className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <div className="bg-[#10b981] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
              <h3 className="font-black text-2xl uppercase mb-4">Adapt or Face High Penalties</h3>
              <p className="font-bold text-lg mb-4">
                Sustainability is no longer voluntary. By **mid-August 2026**, the EU’s Packaging and Packaging Waste Regulation (PPWR) becomes legally binding. Brands importing or distributing in Europe must act now.
              </p>
              <div className="bg-black text-[#D4FF00] p-4 font-mono text-sm border-2 border-black grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="block text-white mb-1">⏱️ Mid-2026 Deadline:</strong>
                  Stricter compliance enforcement, mandatory Extended Producer Responsibility (EPR) reporting, and heavy anti-greenwashing penalties begin.
                </div>
                <div>
                  <strong className="block text-white mb-1">🌱 2030 Mandate:</strong>
                  100% of packaging placed on the EU market must be fully recyclable by design. Non-compliant multi-layer plastics will be banned.
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At **Pouch.eco**, we help e-commerce and D2C brands navigate this legal shift. Moving away from standard, hard-to-recycle laminated packaging is simple with our bio-based, certified compostable, and recyclable mono-materials.
            </p>
          </div>
        )
      },
      {
        id: 'minimization-design',
        title: 'Design Constraints & Packaging Minimization',
        icon: <Target className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              One of the biggest impacts on brand packaging is **packaging minimization**. The EU PPWR demands that every package be designed to use the minimum weight and volume necessary for product safety. 
            </p>
            <div className="bg-white border-4 border-black p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl text-emerald-950 uppercase">Restricting Oversized & Decorative Packaging</h4>
              <p className="text-sm text-gray-600">
                Decorative elements, double-walls, and excess empty spaces intended solely to boost brand presence are highly restricted. Exceptions apply only to legally registered designs or active trademark rights.
              </p>
              <div className="bg-emerald-50 border-2 border-emerald-900 p-4 font-mono text-xs text-emerald-950">
                <strong>💡 Action Item:</strong> Audit your premium boxes, thick layers, and shaped containers immediately. Shift toward lightweight, high-performance flexible stand-up pouches to reduce shipping weight and volume.
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'infographic-ppwr',
        title: 'Official EU PPWR Compliance Infographic',
        icon: <Layers className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Our custom-designed compliance model visualizes how a compliant, sustainable flexible package is built. This nature-inspired dark green illustration details how Pouch.eco structures satisfy both European and North American regulations.
            </p>
            <NeoCard className="p-2 bg-emerald-50 border-4 border-emerald-900 shadow-[8px_8px_0px_0px_#022c22]">
              <ClickableImage 
                src="/imgs/topics/eu-ppwr-compliance.png" 
                alt="EU PPWR Packaging Compliance Infographic showing mono-PE recycled material, design for recycling, 100% PFAS-free barrier, and EPR compliance." 
                className="w-full object-cover border-2 border-black"
              />
              <div className="p-3 text-center text-xs text-emerald-900/80 font-mono">
                🔍 Click infographic to enlarge. Style: nano banana pro 2
              </div>
            </NeoCard>
          </div>
        )
      },
      {
        id: 'materials-pouch',
        title: 'Compliant Materials & Safe Claims',
        icon: <Shield className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Under the new regulation, vague marketing claims like \"eco-friendly,\" \"natural,\" or \"green\" are classified as high-risk greenwashing unless supported by verified third-party records.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-bold text-emerald-950 uppercase mb-2">✅ Acceptable Claims</h4>
                <ul className="text-xs space-y-2 font-mono">
                  <li>• \"100% Recyclable Mono-PE\" (supported by MRF sort test certificates)</li>
                  <li>• \"GRS-Certified 30%+ PCR Content\" (backed by raw material trace documents)</li>
                  <li>• \"TÜV OK Compost Home\" (verifying EN 13432 compliance)</li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black p-4">
                <h4 className="font-bold text-red-900 uppercase mb-2">❌ Restricted Claims</h4>
                <ul className="text-xs space-y-2 font-mono">
                  <li>• \"Biodegradable packaging\" (vague, lacks standard time/condition guidelines)</li>
                  <li>• \"Eco-friendly bag\" (lacks specific certification alignment)</li>
                  <li>• \"100% Compostable\" (where zippers or valves have not been certified)</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#D4FF00]/10 border-4 border-black p-6">
              <h4 className="font-black text-lg uppercase mb-2">Technical Specification Matrix</h4>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b-2 border-black bg-white/50">
                      <th className="p-2 border-r border-black font-bold">Metric Parameter</th>
                      <th className="p-2 border-r border-black font-bold">Compliant Value</th>
                      <th className="p-2 font-bold">Brand Value & Tax Relief</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TECH_MATRIX.map((row, idx) => (
                      <tr key={idx} className="border-b border-black/20">
                        <td className="p-2 border-r border-black font-bold">{row.param}</td>
                        <td className="p-2 border-r border-black">{row.value}</td>
                        <td className="p-2">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'roadmap-action',
        title: 'Sourcing Workstream: What to Do Now',
        icon: <FileText className="w-6 h-6" />,
        content: (
          <div className="space-y-6 text-gray-700">
            <p>
              Moving to compliant packaging requires systematic planning. We recommend executing a **5-step compliance roadmap**:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm font-mono bg-white p-6 border-4 border-black">
              <li><strong>SKU packaging audit:</strong> Map all present bags by waste weight, lamination types, and PFAS presence.</li>
              <li><strong>Materials redesign:</strong> Shift non-minimization materials to Recyclable Mono-PE or organic Home Compostables.</li>
              <li><strong>Label & claim review:</strong> Eliminate broad claims; print clear sorting and recyclability guides.</li>
              <li><strong>Conformity documentation:</strong> Accumulate Declaration of Conformity and lab migration records.</li>
              <li><strong>Supplier confirmation:</strong> Partner with active, certified packaging suppliers to verify compliance chains.</li>
            </ol>
          </div>
        )
      }
    ]

    return (
      <BlogArticleTemplate
        title="EU PPWR Packaging Compliance Guide 2026 | Pouch.eco"
        metaDescription="Master the EU's new PPWR packaging law before mid-August 2026. Actionable brand-owner checklist, design minimization, mono-materials, and safe claims."
        canonicalUrl="https://www.pouch.eco/blog/eu-ppwr-compliance-guide"
        keywords={['EU PPWR compliance guide', 'EU packaging law 2026', 'brand owner packaging audit', 'recyclable mono-PE packaging', 'anti-greenwashing packaging claims']}
        publishedDate="2026-05-31T08:00:00Z"
        modifiedDate="2026-05-31T08:00:00Z"
        categoryTag="Regulations"
        categoryColor="#022c22"
        heroTitle={
          <>
            EU PPWR Packaging Law:<br />
            <span className="text-emerald-800">2026 Brand Owner Guide</span>
          </>
        }
        heroSubtitle="The countdown to mid-August 2026 has begun. From mandatory recyclability to strict packaging minimization rules, master the technical compliance roadmap."
        heroImage="/imgs/topics/eu-ppwr-compliance.png"
        heroImageAlt="EU PPWR packaging law compliance infographic showing stand-up pouch specifications"
        sections={b2cSections}
        faqSections={FAQS.map(faq => ({ q: faq.q, a: faq.a }))}
        calendlyUrl="https://calendly.com/ryan-achievepack/30min"
        achievePackLink="https://www.achievepack.com/topics/eu-ppwr-compliance"
        achievePackText="Need High-Volume Automatic VFFS Packing Runs? Visit AchievePack.com for B2B wholesale pricing (5,000+ pcs)"
        showTableOfContents={true}
        relatedArticles={[
          {
            title: 'Eco Packaging Regulations',
            url: '/blog/eco-packaging-regulations-guide',
            image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
          },
          {
            title: 'BPI Certified Guide',
            url: '/blog/bpi-certified-guide',
            image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
          }
        ]}
      />
    )
  }

  // =========================================================================
  // 2. RENDER B2B Achievepack.com Layout (Sleek Corporate Dark Green)
  // =========================================================================
  const b2bSections = [
    {
      id: 'ppwr-overview',
      title: 'EU PPWR Circular Economy Mandates',
      icon: <Globe className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <p className="text-lg font-medium text-neutral-900">
            Compliance is a product engineering challenge, not just a legal formality. By <strong>mid-August 2026</strong>, packaging placed on the EU market faces strict EPR fee modulates, and by <strong>2030</strong> must generally be recyclable.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-emerald-800 shadow-sm">
              <h4 className="font-bold text-emerald-950">Immediate Regulatory Risk</h4>
              <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                <li>• Stricter waste minimization auditing</li>
                <li>• Higher EPR tax levy on multi-layer plastics</li>
                <li>• Strict PFAS-free testing declarations</li>
                <li>• Authorized local representative checks</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <h4 className="font-bold text-emerald-950">Achieve Pack Solutions</h4>
              <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                <li>• Grade A Sort-Compliant Mono-PE</li>
                <li>• certified 30%+ PCR GRS-Ready film</li>
                <li>• Independent EN 13432 compostability chains</li>
                <li>• Verified ISO 14040 carbon accounting</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-minimization',
      title: 'Packaging Minimization & Design Restrictions',
      icon: <Target className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            The PPWR places heavy focus on <strong>packaging minimization</strong>. Brand owners must ensure every package weight and volume is reduced to the technical minimum required for logistics and protection.
          </p>
          <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-xl space-y-4">
            <h4 className="font-bold text-neutral-900">Preventing Decorative Waste</h4>
            <p className="text-sm text-neutral-600">
              Double-walls, oversized boxes, and hollow spaces intended solely to project premium luxury are restricted. Premium brands using gift sets, rigid tubes, or complex shapes must audit their structures early to secure legal exceptions or registered trademark shields.
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-900/10 p-5 rounded-xl text-sm text-emerald-950 font-mono">
            <strong>💡 B2B Sourcing Strategy:</strong> Lightweight stand-up pouches represent up to 70% material weight reduction compared to rigid glass or plastic jars, making them the optimal tool for source reduction compliance.
          </div>
        </div>
      )
    },
    {
      id: 'compliance-infographic',
      title: 'Visualizing PPWR Compliance & Specifications',
      icon: <Layers className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Our premium B2B engineering infographic outlines the components of an EU-compliant flexible pouch. Displays our certified mono-PE and compostable layers.
          </p>
          <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 shadow-sm max-w-2xl mx-auto">
            <ClickableImage 
              src="/imgs/topics/eu-ppwr-compliance.png" 
              alt="EU PPWR Packaging Compliance Infographic" 
              className="w-full h-auto rounded-lg"
              caption="Achieve Pack Technical Design: Fully aligned with GRS PCR, PFAS-Free, and Grade A sort metrics. Style: nano banana pro 2"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials-recyclability',
      title: 'Material Recyclability & Certified Claims',
      icon: <Award className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Multi-layer laminates (e.g. PET/ALU/PE) face high tax penalties and are being phased out in the EU due to sorting complexity. brands must transition to mono-material structures where possible.
          </p>
          
          <div className="bg-emerald-950/5 border border-emerald-900/20 rounded-xl overflow-hidden mt-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-emerald-950 text-white font-mono text-xs uppercase tracking-wider">
                  <th className="p-4 border-r border-emerald-900/30">Measurement Metric</th>
                  <th className="p-4 border-r border-emerald-900/30">Compliant Value</th>
                  <th className="p-4">Procurement & Tax Relief Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/10">
                {TECH_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/20 transition-colors">
                    <td className="p-4 font-bold text-emerald-950 border-r border-emerald-900/10 font-mono">{row.param}</td>
                    <td className="p-4 text-neutral-700 border-r border-emerald-900/10 font-mono text-xs">{row.value}</td>
                    <td className="p-4 text-emerald-900 font-medium text-xs">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-workstream',
      title: 'The 5-Step Brand Compliance Workstream',
      icon: <FileText className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Sourcing, compliance, and product teams must coordinate to safeguard EU distribution pipelines. Implement this protocol:
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">01. AUDIT</span>
              <p className="text-xs text-neutral-600">Audit every packaging SKU for excess volume, materials and PFAS.</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">02. DESIGN</span>
              <p className="text-xs text-neutral-600">Transition complex barriers to mono-PE or home compostables.</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">03. LABEL</span>
              <p className="text-xs text-neutral-600">Prepare clear consumer sorting details. Remove vague eco claims.</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">04. DOCUMENT</span>
              <p className="text-xs text-neutral-600">Secure lab migration data and GRS PCR traceability chains.</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">05. PARTNER</span>
              <p className="text-xs text-neutral-600">Secure certified supply commitments from active packaging mills.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Secure Your Regulatory Strategy',
      icon: <MessageCircle className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 p-10 rounded-2xl text-white text-center shadow-xl">
          <h3 className="text-3xl font-black mb-4">Transition Seamlessly to EU-Compliant Pouches</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our technical engineers will audit your volumetric structures and draft a transition timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Book Technical Consultation
            </button>
            <Link
              to="/company/certificates"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-md"
            >
              <Award className="w-5 h-5" />
              Download Certifications
            </Link>
          </div>
          <p className="mt-8 text-[10px] opacity-60 uppercase tracking-widest font-mono">
            PPWR CERTIFIED • GRS PCR READY • PFAS-FREE AQUEOUS BARRIER • ISO 14040 LCA COMPLIANT
          </p>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>EU PPWR Packaging Compliance Guide: 2026 Brand Roadmap | Achieve Pack</title>
        <meta name="description" content="Master the EU's Packaging and Packaging Waste Regulation (PPWR) before the mid-August 2026 deadline. Actionable brand-owner audits, minimization, and certified mono-PE." />
        <link rel="canonical" href="https://www.achievepack.com/topics/eu-ppwr-compliance" />
        <meta name="keywords" content="EU PPWR compliance guide, EU packaging law 2026, packaging minimization rules, anti-greenwashing packaging claims, certified mono-PE packaging, post-consumer recycled plastic taxes" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#022c22"
        title="EU PPWR Compliance: The 2026 Brand Packaging Roadmap"
        description="A technical guide for procurement directors auditing materials, labels, and minimization rules before the 2026 enforcement."
        keywords={['PPWR compliance', 'EU packaging regulations', 'mono-PE transition']}
        heroTitle="Compliant. Minimized. Certified."
        heroSubtitle="Master the EU's Ambitions Packaging Regulations (PPWR)"
        introSummary="The voluntary phase of sustainability is officially over. With strict packaging minimization limits coming into force by mid-August 2026 and mandatory recyclability grades leading into 2030, brand owners exporting to the European Union must transition. This engineering guide details the technical and sourcing criteria required to protect your distribution and margin."
        sections={b2bSections}
        faqs={FAQS.map(faq => ({ question: faq.q, answer: faq.a }))}
        schemaType="Article"
        heroImage="/imgs/topics/eu-ppwr-compliance.png"
      />
    </>
  )
}

export default EUPPWRCompliancePage
