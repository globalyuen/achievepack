import React from 'react';
import { Factory, ShieldCheck, Info, ClipboardCheck, Search, Zap, Globe, FileCheck, HelpCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const FoodPackagingSupplierServicePage: React.FC = () => {
  const sections = [
    {
      id: 'auditing-standards',
      title: 'Global Auditing Standards: BRCGS, SQF, and ISO 22000',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            Selecting a food packaging supplier is one of the most critical decisions in your supply chain. In an era of global food safety regulations, a simple "ISO 9001" certificate is no longer sufficient. Trustworthy suppliers must adhere to the <strong>Global Food Safety Initiative (GFSI)</strong> recognized standards.
          </p>
          <div className="grid md:grid-cols-2 gap-8 py-4">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary-600" /> BRCGS (AA Grade)
              </h4>
              <p className="text-sm leading-relaxed text-neutral-600">
                The <strong>British Retail Consortium Global Standard (BRCGS)</strong> is the gold standard for packaging. It covers everything from hazard analysis and critical control points (HACCP) to site security and senior management commitment. We only work with factories that maintain an 'AA' or 'A' grade audit result.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-primary-600" /> SQF (Safe Quality Food)
              </h4>
              <p className="text-sm leading-relaxed text-neutral-600">
                Common in North America, <strong>SQF Level 2/3</strong> ensures that a food safety plan has been implemented and that all packaging materials are manufactured under strict hygiene controls to prevent physical, chemical, or biological contamination.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'migration-testing',
      title: 'Technical Expertise: Migration Testing & Chemical Safety',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            Safety in flexible packaging is often invisible. It involves the complex chemistry of how resins, adhesives, and inks interact with the food inside.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
            <h4 className="text-blue-900 font-bold mb-3">Expert Insight: OML vs. SML</h4>
            <p className="text-sm text-blue-800 leading-relaxed mb-4">
              We subject every new material structure to <strong>Overall Migration Limit (OML)</strong> and <strong>Specific Migration Limit (SML)</strong> testing using food simulants (like 3% Acetic Acid or 95% Ethanol). This ensures that the concentration of substances transferring from the pouch to the food remains well below the safety thresholds set by the EU Regulation 10/2011 and the US FDA.
            </p>
            <p className="text-xs text-blue-700 italic">
              Don't just ask for a "food grade" certificate. Ask for the specific migration data for your product category (Dry, Fatty, Acidic).
            </p>
          </div>
          <ClickableImage 
            src="/imgs/generated/food_supplier.png" 
            alt="Modern Clean-Room Food Packaging Factory" 
            className="rounded-3xl border border-neutral-200 shadow-2xl"
          />
        </div>
      )
    },
    {
      id: 'ink-safety',
      title: 'Low-Migration Inks: The Foundation of Safe Branding',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            The external printing on your pouch can penetrate the substrate and contaminate the food. This is known as "set-off" or "diffusion" migration.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">01</div>
              <div>
                <h4 className="font-bold">Nestlé Guidance Compliance</h4>
                <p className="text-xs text-neutral-500 mt-1">We utilize inks that comply with the Swiss Ordinance and the Nestlé Guidance Note on Packaging Inks, which prohibits the use of harmful photo-initiators like ITX.</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">02</div>
              <div>
                <h4 className="font-bold">Solvent-Free Lamination</h4>
                <p className="text-xs text-neutral-500 mt-1">By removing solvents from the lamination process, we eliminate the risk of residual solvent smell and improve the overall purity of the package.</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'factory-audit-checklist',
      title: 'Expert Audit: How to Screen a Packaging Partner',
      icon: <Search className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            When performing an E-E-A-T audit of a potential supplier, look for these specific operational indicators:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Class 100,000 Clean Room environment for conversion.",
              "Full batch traceability from raw resin to finished pallet.",
              "In-house laboratory for OTR, WVTR, and Bond Strength testing.",
              "Pest control system with independent monthly audits.",
              "Incoming raw material inspection (COA verification).",
              "Retention of samples for every batch for at least 2 years."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "What is the difference between food-safe and food-grade?",
      answer: "Food-grade refers to the material's properties (safe for contact), while food-safe refers to the entire environment in which the package was made (clean-room, audited staff hygiene, migration testing)."
    },
    {
      question: "Do you provide COC (Certificate of Conformance) with every order?",
      answer: "Yes. Every shipment includes a COC that references the batch number, the test results for seal strength, and the raw material lot numbers for full traceability."
    },
    {
      question: "How do I know your inks won't smell?",
      answer: "We use a GC-MS (Gas Chromatography-Mass Spectrometry) test to measure residual solvents. This ensures the pouch is 'odorless' and 'taint-free' before it leaves the factory floor."
    },
    {
      question: "Are your factories Sedex or BSCI audited?",
      answer: "Yes. In addition to food safety audits, our production partners undergo social responsibility audits like Sedex (SMETA) or BSCI to ensure ethical labor practices and environmental management."
    },
    {
      question: "Can I audit your facility personally?",
      answer: "Absolutely. We encourage technical audits from our brand partners. Transparency is the foundation of trust, and we welcome your quality control team to inspect our production lines."
    }
  ];

  return (
    <SEOPageLayout
      title="Food Packaging Supplier Audit: The Expert Guide to Safety & Compliance"
      description="Learn how to audit food packaging suppliers using E-E-A-T principles. Explore BRCGS/SQF standards, migration testing (OML/SML), and ink safety for flexible pouches."
      heroTitle="Selecting a Food-Safe Packaging Partner"
      heroSubtitle="Moving beyond the quote to technical verification of safety, hygiene, and global regulatory compliance."
      heroImage="/imgs/generated/food_supplier.png"
      introSummary="In the food industry, your packaging is your final point of safety. A failure in material integrity or a migration issue can lead to catastrophic recalls and brand damage. This guide provides the expert framework needed to audit suppliers based on the rigorous technical standards of the global food safety initiative."
      sections={sections}
      faqs={faqs}
      keywords={['food packaging supplier audit', 'BRCGS packaging standards', 'migration testing flexible pouches', 'food safe clean room packaging', 'low migration inks Nestle guidance', 'packaging traceability systems']}
      canonicalUrl="https://achievepack.com/topics/food-packaging-supplier"
    />
  );
};

export default FoodPackagingSupplierServicePage;
