import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ShieldCheck, Factory, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Zap, Globe, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles, Microscope, Beaker, FileSearch, ClipboardCheck, Users } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const EcoFriendlySupplierServicePage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Supply Chain Accountability Gap',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Sustainability is only as strong as its weakest link. For brands today, <strong>eco-friendly supplier verification</strong> is the primary defense against greenwashing litigation and supply chain disruption. In 2026, claims of "compostability" or "recyclability" must be backed by a transparent, audit-ready data trail.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                <h4 className="font-semibold text-emerald-800">The Verification Crisis</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• Unverified "Bio-Plastic" claims</li>
                  <li>• Lack of batch-level traceability (GRS/ISCC)</li>
                  <li>• Ethical manufacturing non-compliance</li>
                  <li>• Fragile single-source supply chains</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">The Achieve Pack Standard</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• 4-Pillar SMETA/SEDEX Audited Facilities</li>
                  <li>• ISO 14001 Environmental Management</li>
                  <li>• BRCGS Grade A Food Safety Verification</li>
                  <li>• Real-Time Batch Traceability Logs</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            At Achieve Pack, we serve as the technical gatekeeper for your sustainable packaging supply chain. We perform the rigorous <strong>on-site audits</strong> and <strong>laboratory verifications</strong> required to ensure your packaging is not just green on paper, but ethical and compliant in reality.
          </p>
        </div>
      )
    },
    {
      id: 'audit-protocols',
      title: 'Global Audit Protocols: Beyond Paperwork',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            True verification requires deep-dive inspections. We utilize the world's leading frameworks to benchmark our manufacturing partners.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">SEDEX / SMETA</h4>
              <p className="text-sm text-neutral-600">The gold standard for social and ethical auditing. We verify labor rights, health and safety, and environmental impact.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-neutral-900">ISO 14001</h4>
              <p className="text-sm text-neutral-600">Verification of a dedicated Environmental Management System (EMS) designed to reduce waste and carbon footprint.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-teal-100 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="font-bold text-neutral-900">EcoVadis Rating</h4>
              <p className="text-sm text-neutral-600">Continuous monitoring of supplier CSR (Corporate Social Responsibility) performance and sustainable procurement.</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/seo-photos/a_modern_high_tech_packaging_factory_floor_2218843.webp" 
              alt="Sustainable packaging manufacturing facility" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Operational Transparency: Verified Grade-A BRCGS Manufacturing Facilities"
            />
          </div>
        </div>
      )
    },
    {
      id: 'material-verification',
      title: 'Material Traceability: GRS & ISCC PLUS',
      icon: <FileSearch className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            Claiming "Recycled Content" or "Compostability" requires a verifiable <strong>Chain of Custody (CoC)</strong>. Achieve Pack provides the forensic documentation required to prove the origin of every gram of resin.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Verification Frameworks</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>GRS (Global Recycled Standard):</strong> Verifies the specific percentage of post-consumer recycled content in films.
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>ISCC PLUS (Mass-Balance):</strong> Tracks sustainable resins through complex co-extrusion supply chains.
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-white p-4 rounded-xl border border-neutral-200">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>TUV Austria Certificates:</strong> Third-party laboratory proof of home and industrial compostability.
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">Life Cycle Assessment (LCA)</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We provide <strong>ISO 14040/44</strong> compliant LCA data for our verified suppliers, allowing you to quantify the exact carbon savings (kg CO2e) of switching from fossil-based multi-layers to Achieve Pack mono-materials.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'on-site-audit',
      title: 'The Value of On-Site Verification',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            In a global marketplace, digital certificates can be falsified. Achieve Pack maintains an <strong>on-the-ground presence</strong> in key manufacturing hubs to perform physical verification of quality control and social standards.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
              <ClickableImage 
                src="/imgs/seo-photos/a_quality_inspector_checking_pouches_in_factory_9918233.webp" 
                alt="Quality inspector auditing packaging production" 
                className="w-full h-auto rounded-lg shadow-sm"
                caption="Physical Verification: On-site QA and Social Compliance Audits"
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">Our 5-Step Audit Protocol</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">1.</span>
                  <span><strong>Document Review:</strong> Verification of current ISO/BRCGS/GRS certificates.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">2.</span>
                  <span><strong>Site Inspection:</strong> Physical audit of machine hygiene and safety protocols.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">3.</span>
                  <span><strong>Process Validation:</strong> Verification of material tracking and separation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">4.</span>
                  <span><strong>Worker Interviews:</strong> Confirming ethical labor practices and fair wages.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-emerald-600">5.</span>
                  <span><strong>Batch Sampling:</strong> Independent lab testing for migration and barrier performance.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Audit-Proof Your Supply Chain',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-900 to-teal-900 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Transparency is the Ultimate Luxury.</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to secure a verified, high-performance sustainable supply chain? Let's discuss your compliance requirements and audit needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Supply Chain Audit
            </button>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShieldCheck className="h-5 w-5" />
              Our Compliance Process
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            SEDEX MEMBER • ISO 14001 • BRCGS GRADE A • ECOVADIS GOLD
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "How do you verify a supplier is truly ethical?",
      answer: "We primarily utilize SEDEX/SMETA 4-Pillar audits which cover Labor Standards, Health & Safety, Environment, and Business Ethics. We also perform unannounced site visits and interview factory workers to ensure the documented standards match reality."
    },
    {
      question: "Can you provide the GRS certificates for my specific order?",
      answer: "Yes. For every order of PCR (Post-Consumer Recycled) packaging, we provide a Transaction Certificate (TC) that links your specific production run to the verified recycled resin source."
    },
    {
      question: "What is BRCGS Grade A and why does it matter?",
      answer: "BRCGS is the leading global standard for food safety in packaging. A 'Grade A' rating indicates the highest level of hygiene, contamination control, and traceability, making the facility suitable for the world's largest food brands."
    },
    {
      question: "How do you handle supply chain disruptions?",
      answer: "We maintain a distributed network of verified manufacturing partners across multiple geographical regions. This 'Dynamic Sourcing' model ensures that your brand is protected against local labor strikes, natural disasters, or logistics bottlenecks."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Eco-Friendly Supplier Verification | Supply Chain Audits | Achieve Pack</title>
        <meta name="description" content="Technical guide to sustainable supplier verification. 800+ words on SEDEX/SMETA, ISO 14001, BRCGS, and GRS material traceability protocols." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-friendly-supplier-verification" />
        <meta name="keywords" content="eco-friendly supplier verification, sustainable supply chain audit, SEDEX SMETA packaging, BRCGS grade A, GRS traceability, ISO 14001 packaging" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Eco-Friendly Supplier Verification"
        description="Establishing technical accountability and ethical transparency across your sustainable packaging supply chain."
        keywords={['supplier verification', 'packaging audit', 'sustainable supply chain']}
        heroTitle="Transparency. Not Greenwashing."
        heroSubtitle="Audit-Ready | Ethically Verified | GRS Certified"
        introSummary="In the complex world of sustainable packaging, trust must be earned through data. We provide the comprehensive verification services—from on-site SMETA audits to batch-level GRS traceability—required to protect your brand and ensure a resilient, ethical supply chain."
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/seo-photos/a_about_sustainability_mission_5914909.webp"
      />
    </>
  )
}

export default EcoFriendlySupplierServicePage
