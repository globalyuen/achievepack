import React from 'react';
import { ShieldCheck, Info, HelpCircle, FileText, Globe, BarChart3, FlaskConical, Scale, Zap, ClipboardCheck, Search, Award, Eye } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const EcoFriendlySupplierVerificationPage: React.FC = () => {
  const sections = [
    {
      id: 'verification-philosophy',
      title: 'Verification Over Marketing: Building a Trustworthy Eco-Brand',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            In the 2026 marketplace, "Eco-Friendly" is no longer a self-declared status; it is a <strong>technically verified attribute</strong>. With the rise of the EU Green Claims Directive, brands must provide substantive evidence for every environmental claim. At Achieve Pack, we advocate for a <strong>Three-Tier Verification</strong> approach that combines site audits, material certifications, and independent lab testing.
          </p>
          <div className="grid md:grid-cols-2 gap-8 py-4">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-600" /> ISO 14001 Framework
              </h4>
              <p className="text-sm leading-relaxed">
                We only partner with facilities that maintain <strong>ISO 14001</strong> Environmental Management System certification. This ensures that the manufacturing process itself—from wastewater treatment to energy efficiency—is optimized to minimize ecological impact.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary-600" /> Carbon Transparency
              </h4>
              <p className="text-sm leading-relaxed">
                Our verification process includes providing brands with <strong>Product Carbon Footprint (PCF)</strong> data. We measure Scope 1, 2, and 3 emissions for your specific pouch structure, allowing you to make data-driven ESG disclosures.
              </p>
            </div>
          </div>
          <p className="text-md leading-relaxed font-semibold">
            True sustainability requires "Authoritativeness." We don't ask you to trust us; we provide the third-party audit reports from <strong>EcoVadis</strong> and <strong>SEDEX</strong> that prove our commitment.
          </p>
        </div>
      )
    },
    {
      id: 'technical-verification',
      title: 'Technical Verification Protocols: Beyond the Certificate',
      icon: <Search className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700 font-['Inter']">
          <p className="text-md leading-relaxed">
            A certificate is only as good as the lab that issued it. We utilize world-class testing bodies like <strong>SGS</strong>, <strong>TUV Austria</strong>, and <strong>Intertek</strong> to perform independent verification of our materials.
          </p>
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <h4 className="text-primary-900 font-bold mb-4">Our Verification Matrix</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1" />
                <p className="text-sm"><strong>Biodegradation Kinetics:</strong> Testing under EN13432 to ensure materials disintegrate within the biological window.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1" />
                <p className="text-sm"><strong>NIR Sortability:</strong> Optical scanning tests to confirm the pouch is detectable by municipal recycling infrastructure.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-1" />
                <p className="text-sm"><strong>PCR Purity:</strong> GRS (Global Recycled Standard) transaction certificates proving the recycled content origin.</p>
              </div>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/eco_audit.png" 
            alt="Scientific Verification of Eco-Friendly Materials" 
            className="rounded-2xl border border-neutral-200 shadow-lg mt-8"
          />
        </div>
      )
    },
    {
      id: 'supply-chain-transparency',
      title: 'Supply Chain Transparency: Tier 1 & Tier 2 Visibility',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            Greenwashing often hides in Tier 2 and Tier 3 of the supply chain. Our verification protocol extends back to the resin manufacturers.
          </p>
          <div className="bg-neutral-900 text-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-primary-400 font-bold mb-4">The Chain of Custody</h4>
            <p className="text-sm leading-relaxed text-neutral-300">
              By utilizing <strong>ISCC PLUS</strong> mass-balance accounting, we can trace the sustainable feedstock (bio-based or recycled) from the petrochemical refinery all the way to the finished pouch on your retail shelf. This provides the "Trustworthiness" required to satisfy global regulatory audits and environmental NGOs.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'procurement-scorecard',
      title: 'Sustainable Procurement: Building Your Supplier Scorecard',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            We help our clients build robust <strong>Sustainable Procurement Policies</strong>. A modern supplier scorecard should evaluate four key dimensions:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-sm">
            <li><strong>Environmental Performance:</strong> Carbon intensity per unit, water recycling rates, and zero-waste-to-landfill status.</li>
            <li><strong>Technical Compliance:</strong> Valid, up-to-date certifications (BPI, TUV, GRS) with verifiable license numbers.</li>
            <li><strong>Social Responsibility:</strong> SEDEX SMETA or SA8000 audits ensuring ethical labor and human rights standards.</li>
            <li><strong>Transparency:</strong> Willingness to provide raw data, LCA reports, and third-party lab results without NDA hurdles.</li>
          </ul>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "What is an EcoVadis rating, and why does it matter?",
      answer: "EcoVadis is the world's most trusted provider of business sustainability ratings. An EcoVadis audit evaluates a company across four themes: Environment, Labor & Human Rights, Ethics, and Sustainable Procurement. A 'Silver' or 'Gold' medal is a major indicator of a supplier's operational integrity and long-term sustainability commitment."
    },
    {
      question: "How do I verify if a supplier's 'compostable' certificate is real?",
      answer: "Always ask for the unique license number and search it on the certifier's website (e.g., the BPI or TUV Austria database). If the certificate is in a different company's name, ask for a 'Letter of Authorization' or a 'Sub-license' that proves the link between the manufacturer and the seller."
    },
    {
      question: "What is the difference between ISO 9001 and ISO 14001?",
      answer: "ISO 9001 focuses on Quality Management (making sure the product is consistent). ISO 14001 focuses on Environmental Management (making sure the production process minimizes impact). A world-class eco-supplier will maintain both."
    },
    {
      question: "Do you provide Product Carbon Footprint (PCF) data?",
      answer: "Yes. For our enterprise clients, we can provide a detailed LCA report for your specific pouch structure, measuring the CO2e impact from 'Cradle-to-Gate'. This data is essential for accurate ESG reporting and carbon-neutral branding."
    },
    {
      question: "What is a SEDEX SMETA audit?",
      answer: "SMETA (Sedex Members Ethical Trade Audit) is one of the most widely used ethical audit formats in the world. it ensures that the people making your packaging are working in safe, fair, and legal conditions. Social sustainability is a core part of being 'eco-friendly'."
    },
    {
      question: "Why should I trust Achieve Pack for my verification?",
      answer: "Achieve Pack was built on a foundation of engineering transparency. We don't just provide packaging; we provide a 'Technical Compliance File' for every client, containing every certificate, test report, and audit document required to defend your brand's claims in any global market."
    }
  ];

  return (
    <SEOPageLayout
      title="Eco-Friendly Supplier Verification Guide 2026: E-E-A-T Standards"
      description="The definitive guide to verifying eco-friendly packaging suppliers. Learn about ISO 14001, EcoVadis ratings, and technical LCA verification. 800+ words of technical research."
      heroTitle="Eco-Verification: Transparency Beyond the Label"
      heroSubtitle="Mastering the technical complexity of environmental audits, carbon reporting, and global supply chain transparency."
      heroImage="/imgs/generated/eco_audit.png"
      introSummary="In an era of high regulatory scrutiny, 'Eco-Friendly' is a technical claim that must be defended with data. This 800+ word master guide explores the science of environmental auditing, the metrics of Product Carbon Footprints (PCF), and the verification protocols required to ensure your supply chain is audit-proof. Learn how to build a sustainable procurement strategy based on 'Authoritativeness' and 'Trustworthiness'."
      sections={sections}
      faqs={faqs}
      keywords={['eco-friendly supplier verification', 'ISO 14001 packaging', 'EcoVadis sustainability rating', 'SEDEX SMETA audit', 'LCA packaging report', 'sustainable procurement policy', 'greenwashing liability prevention', 'supply chain transparency 2026']}
      canonicalUrl="https://achievepack.com/topics/eco-supplier-verification"
    />
  );
};

export default EcoFriendlySupplierVerificationPage;
