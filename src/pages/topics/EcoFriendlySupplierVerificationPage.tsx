import React from 'react';
import { Leaf, Search, ShieldCheck, Info, BarChart3, Globe, Zap, ClipboardCheck, Scale, History } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const EcoFriendlySupplierVerificationPage: React.FC = () => {
  const sections = [
    {
      id: 'lca-methodology',
      title: 'Life Cycle Assessment (LCA): The Scientific Basis for Eco-Claims',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            In the sustainable packaging world, "eco-friendly" is a relative term. To move from marketing hype to technical reality, we utilize <strong>Life Cycle Assessment (LCA)</strong> methodology. LCA measures the total environmental burden of a package from raw material extraction to final disposal.
          </p>
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-4">The 4 Pillars of LCA Verification</h4>
            <p className="text-sm leading-relaxed mb-4">
              When we audit a supplier, we evaluate their data across four critical impact categories:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-neutral-100">
                <span className="font-bold block text-primary-600">Global Warming Potential (GWP)</span>
                <span className="text-xs text-neutral-500">Total CO2 equivalent emissions per 1,000 pouches.</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-neutral-100">
                <span className="font-bold block text-primary-600">Water Consumption</span>
                <span className="text-xs text-neutral-500">Net freshwater use in the polymer extrusion and lamination phases.</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-neutral-100">
                <span className="font-bold block text-primary-600">Abiotic Depletion</span>
                <span className="text-xs text-neutral-500">The consumption of non-renewable fossil-based resources.</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-neutral-100">
                <span className="font-bold block text-primary-600">Eutrophication Potential</span>
                <span className="text-xs text-neutral-500">The potential for wastewater to affect local ecosystem nutrient balance.</span>
              </div>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/eco_audit.png" 
            alt="Eco-friendly Supplier Lab Verification" 
            className="rounded-2xl border border-neutral-200 shadow-lg"
          />
        </div>
      )
    },
    {
      id: 'environmental-management',
      title: 'ISO 14001: More Than Just a Certificate',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            A truly sustainable supplier doesn't just have an eco-product; they have an <strong>Eco-Operational Mindset</strong>. We verify this through the implementation of ISO 14001 (Environmental Management Systems).
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-2xl">
            <h4 className="text-amber-900 font-bold mb-3">Expert Insight: The Scope 3 Emissions Gap</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              For most brands, 80-90% of their carbon footprint lies in their supply chain (Scope 3). A trustworthy packaging partner should be able to provide <strong>Primary Emission Data</strong> (actual energy bills and resin footprint) rather than just industry averages. This allows you to accurately report your sustainability progress to stakeholders and regulators.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sustainable-sourcing',
      title: 'Chain of Custody: FSC, PEFC, and ISCC PLUS',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            The foundation of E-E-A-T in eco-packaging is <strong>Chain of Custody (CoC)</strong>. You must be able to trace every gram of material back to a sustainable source.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <h5 className="font-bold text-primary-700 mb-2">FSC/PEFC (Paper)</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">Verification that the wood pulp used in our Kraft paper pouches comes from responsibly managed forests that provide environmental, social, and economic benefits.</p>
            </div>
            <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <h5 className="font-bold text-blue-700 mb-2">ISCC PLUS (Bio-polymers)</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">A global certification system that ensures the circular and bio-based origin of polymers (like bio-PE made from sugarcane) is tracked via a mass-balance system.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'verification-checklist',
      title: 'Expert Audit: 5 Red Flags of Greenwashing Suppliers',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            When auditing a supplier's "eco" claims, look for these specific indicators of low-trust partners:
          </p>
          <ul className="space-y-3">
            {[
              "Lack of third-party certification numbers (BPI, TUV, FSC).",
              "Using vague terms like 'natural' or 'green' without technical definitions.",
              "Claiming 'recyclable' for multi-material structures (PET/PE) without a mono-material structure.",
              "Inability to provide a formal Life Cycle Assessment (LCA) for their core products.",
              "No formal environmental policy or ISO 14001 registration."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <History className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "What is ISCC PLUS certification?",
      answer: "ISCC PLUS is an international certification system for circular and bio-based materials. It ensures that the recycled or bio-based content in a plastic product is tracked through the supply chain using a mass-balance approach."
    },
    {
      question: "How do you verify the percentage of recycled content in PCR pouches?",
      answer: "We verify recycled content through Transaction Certificates (TC) provided by GRS (Global Recycled Standard) or ISCC PLUS certified suppliers, which audit the physical flow of material."
    },
    {
      question: "Is your factory powered by renewable energy?",
      answer: "Many of our production partners utilize solar arrays or purchase certified Renewable Energy Certificates (RECs) to offset their production electricity usage. We can provide site-specific energy reports during the audit process."
    },
    {
      question: "What is a Life Cycle Assessment (LCA)?",
      answer: "An LCA is a comprehensive, scientific study that measures the environmental impacts of a product from its 'cradle' (raw material) to its 'grave' (disposal). It's the only objective way to compare the sustainability of different materials."
    },
    {
      question: "Can you provide environmental data for my sustainability report?",
      answer: "Yes. We provide our brand partners with detailed 'Eco-Data Packs' including carbon footprint estimates, material weight reduction data, and certification numbers to simplify your ESG reporting."
    }
  ];

  return (
    <SEOPageLayout
      title="Eco-Friendly Supplier Verification: A Deep Technical Audit Guide"
      description="Learn how to verify eco-friendly packaging suppliers using LCA methodology, ISO 14001 standards, and CoC certifications (FSC, ISCC). Avoid greenwashing with expert E-E-A-T auditing."
      heroTitle="Auditing for Real Impact: Eco-Supplier Verification"
      heroSubtitle="Moving beyond marketing to technical verification of environmental management, carbon footprinting, and sustainable sourcing."
      heroImage="/imgs/generated/eco_audit.png"
      introSummary="In the rush to be 'green,' many suppliers rely on vague promises and unverified claims. This guide leverages our decade of environmental engineering experience to help you perform a professional, data-driven audit of your packaging supply chain, ensuring every claim you make to your customers is backed by technical proof."
      sections={sections}
      faqs={faqs}
      keywords={['eco-friendly supplier verification', 'packaging LCA methodology', 'ISO 14001 packaging audit', 'ISCC PLUS certification guide', 'FSC chain of custody', 'sustainable packaging supply chain']}
      canonicalUrl="https://achievepack.com/topics/eco-supplier-verification"
    />
  );
};

export default EcoFriendlySupplierVerificationPage;
