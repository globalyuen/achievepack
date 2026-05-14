import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, Info, HelpCircle, FileText, Globe, BarChart3, FlaskConical, Scale, Zap, ClipboardCheck, Search } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const FoodPackagingSupplierPage: React.FC = () => {
  const sections = [
    {
      id: 'audit-importance',
      title: 'The Critical Audit: Ensuring Food Safety in the Global Supply Chain',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            In 2026, selecting a food packaging supplier is no longer just a procurement task—it is a critical <strong>risk management</strong> function. A failure in packaging safety (migration, physical contamination, or barrier failure) can lead to massive product recalls and irreparable brand damage. At Achieve Pack, we advocate for a <strong>Total Quality Management (TQM)</strong> approach to supplier auditing.
          </p>
          <div className="grid md:grid-cols-2 gap-8 py-4">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-600" /> GFSI Benchmarking
              </h4>
              <p className="text-sm leading-relaxed">
                We strictly audit our production facilities against <strong>Global Food Safety Initiative (GFSI)</strong> recognized standards, primarily <strong>BRCGS (Issue 6)</strong> and <strong>SQF</strong>. These standards ensure that food safety is integrated into every phase of manufacturing, from resin intake to final palletization.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Search className="h-4 w-4 text-primary-600" /> HACCP Implementation
              </h4>
              <p className="text-sm leading-relaxed">
                Every line in our facility operates under a <strong>Hazard Analysis and Critical Control Point (HACCP)</strong> plan. We identify potential chemical, physical, and biological hazards—such as metal fragments in extrusion or ink migration—and implement real-time monitoring to eliminate them.
              </p>
            </div>
          </div>
          <p className="text-md leading-relaxed font-semibold">
            Our commitment to Authoritativeness means we provide full transparency into our audit scores and corrective action reports (CARs), ensuring you have total confidence in your primary packaging partner.
          </p>
        </div>
      )
    },
    {
      id: 'migration-science',
      title: 'Migration Science: OML, SML, and Food Contact Compliance',
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700 font-['Inter']">
          <p className="text-md leading-relaxed">
            The most significant hidden risk in food packaging is <strong>chemical migration</strong>. This refers to the transfer of substances from the packaging into the food.
          </p>
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <h4 className="text-primary-900 font-bold mb-4">The Compliance Trinity</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1" />
                <p className="text-sm"><strong>OML (Overall Migration Limit):</strong> Measuring the total amount of non-volatile substances that migrate from the material under standardized test conditions (using food simulants like 3% Acetic Acid or 95% Ethanol).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1" />
                <p className="text-sm"><strong>SML (Specific Migration Limit):</strong> Testing for specific hazardous substances like heavy metals, phthalates, or primary aromatic amines (PAAs).</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1" />
                <p className="text-sm"><strong>NIAS (Non-Intentionally Added Substances):</strong> Advanced screening for chemical by-products or impurities that aren't listed on the TDS but can appear during the manufacturing process.</p>
              </div>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/food_supplier.png" 
            alt="Quality Control Audit in Food Packaging Facility" 
            className="rounded-2xl border border-neutral-200 shadow-lg mt-8"
          />
        </div>
      )
    },
    {
      id: 'traceability-protocols',
      title: 'End-to-End Traceability: From Resin to Retail',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            A recall is only manageable if your traceability is precise. We maintain a <strong>Digital Chain of Custody</strong> for every pouch produced.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm text-center">
              <div className="font-bold text-xs uppercase mb-2">Resin Batch</div>
              <p className="text-xs text-neutral-500">Every ton of polymer is tracked by CoA and lot number back to the petrochemical source.</p>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm text-center">
              <div className="font-bold text-xs uppercase mb-2">Line Logs</div>
              <p className="text-xs text-neutral-500">Extrusion temperatures, dwell times, and operator IDs are recorded for every hour of production.</p>
            </div>
            <div className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm text-center">
              <div className="font-bold text-xs uppercase mb-2">Final QC</div>
              <p className="text-xs text-neutral-500">Every box is tagged with a unique barcode that links it to the specific production window and material batch.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'supplier-scorecard',
      title: 'The Audit Scorecard: 5 Questions to Ask Your Current Supplier',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            If your current supplier cannot answer these five questions with documentation, your brand is at risk:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">01</div>
              <div className="text-sm"><strong>"Can you provide a BRCGS or SQF audit report from the last 12 months?"</strong> (Lab certificates are not enough).</div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">02</div>
              <div className="text-sm"><strong>"What simulants were used for your latest OML migration test?"</strong> (Must match your specific food type: acidic, oily, etc).</div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">03</div>
              <div className="text-sm"><strong>"How do you monitor for physical contamination on the conversion line?"</strong> (Look for metal detection and optical sensing).</div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">04</div>
              <div className="text-sm"><strong>"Do you have a third-party audit of your social and environmental practices (SEDEX/EcoVadis)?"</strong></div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">05</div>
              <div className="text-sm"><strong>"What is your 'MOCK RECALL' success rate?"</strong> (The ability to trace a lot in under 4 hours).</div>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Is BRCGS certification mandatory for food packaging suppliers?",
      answer: "While not strictly a legal mandate in all regions, BRCGS (Global Standard for Packaging Materials) is the *de facto* requirement for major retailers and enterprise-level food brands. It provides the highest level of assurance that the manufacturer follows GFSI-benchmarked food safety protocols."
    },
    {
      question: "What is the difference between SQF and BRCGS?",
      answer: "SQF (Safe Quality Food) is more common in North America and Australia, while BRCGS is the dominant standard in Europe and much of Asia. Both are GFSI-benchmarked and cover similar territory: hygiene, quality management, site standards, and process control. An audit in either is a sign of a world-class supplier."
    },
    {
      question: "How do you ensure food safety with recycled (PCR) content?",
      answer: "PCR for food contact requires either a 'Non-Objection Letter' (NOL) from the FDA or an EFSA opinion. We ensure safety by using only certified food-grade PCR resins and placing them behind a 'functional barrier' layer of virgin plastic, which has been scientifically proven to block chemical migration."
    },
    {
      question: "What is NIAS, and why should I care?",
      answer: "NIAS stands for Non-Intentionally Added Substances. These are chemicals like impurities, reaction by-products, or degradation products that aren't part of the material formulation but can still migrate into food. Advanced suppliers like Achieve Pack perform NIAS screening to ensure total consumer safety beyond standard lab tests."
    },
    {
      question: "Can I perform my own on-site audit of your facility?",
      answer: "Yes. We welcome third-party or brand-led audits. We believe that transparency is the cornerstone of a long-term partnership. We can also provide virtual tours and digital access to our quality management system (QMS) logs."
    },
    {
      question: "What is a Technical Data Sheet (TDS) vs. a Certificate of Analysis (CoA)?",
      answer: "A TDS describes the *intended* properties of a material (e.g., expected tensile strength and barrier). A CoA is a document provided with *your specific order* that proves the material actually met those specs during the manufacturing run. You should always demand a CoA with every delivery."
    }
  ];

  return (
    <SEOPageLayout
      title="Food Packaging Supplier Audit Guide 2026: BRCGS & GFSI Standards"
      description="The authoritative guide to auditing food packaging suppliers. Deep-dive into BRCGS benchmarks, migration science (OML/SML), and end-to-end traceability. 800+ words of technical research."
      heroTitle="Supplier Audits: Protecting Your Brand's Safety"
      heroSubtitle="Mastering the technical complexity of food safety benchmarks, migration chemistry, and global supply chain transparency."
      heroImage="/imgs/generated/food_supplier.png"
      introSummary="In the modern food industry, your packaging supplier is an extension of your brand's safety culture. This 800+ word master guide leverages a decade of quality engineering expertise to help you navigate the complexity of GFSI benchmarks, HACCP implementation, and chemical migration science. Learn how to perform a deep-dive audit that ensures your pouches are not just pretty, but structurally and chemically sound."
      sections={sections}
      faqs={faqs}
      keywords={['food packaging supplier audit', 'BRCGS packaging standard', 'GFSI benchmarks packaging', 'migration testing OML SML', 'HACCP for packaging', 'supplier quality scorecard', 'packaging traceability protocol', 'food safety compliance 2026']}
      canonicalUrl="https://achievepack.com/topics/food-packaging-supplier"
    />
  );
};

export default FoodPackagingSupplierPage;
