import React from 'react';
import { Leaf, ShieldCheck, AlertTriangle, CheckCircle, Info, HelpCircle, FileText, Globe, BarChart3 } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { useCalendly } from '../../contexts/CalendlyContext';

const SustainablePackagingPillarPage: React.FC = () => {
  const { openCalendly } = useCalendly();

  const sections = [
    {
      id: 'comprehensive-definition',
      title: 'A Science-Based Definition of Sustainable Packaging',
      icon: <HelpCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            Sustainability in the packaging industry has evolved far beyond the binary choice of "plastic vs. paper." According to the Sustainable Packaging Coalition (SPC) and international standards like ISO 14021, a package is only truly sustainable if it meets a rigorous set of criteria throughout its entire lifecycle.
          </p>
          <div className="grid md:grid-cols-2 gap-8 py-4">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-600" /> Lifecycle Thinking
              </h4>
              <p className="text-sm leading-relaxed">
                We must evaluate the <strong>cradle-to-grave</strong> impact. This includes the energy intensity of raw material extraction (bio-based vs. fossil), the efficiency of the manufacturing process (water usage and carbon emissions), and the viability of the end-of-life recovery (recycling, composting, or reuse).
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary-600" /> Material Circularity
              </h4>
              <p className="text-sm leading-relaxed">
                The shift from a linear "take-make-waste" model to a <strong>circular economy</strong> is the cornerstone of modern sustainability. This involves designing packaging that can be continuously recovered and reintegrated into the production loop without losing significant material value.
              </p>
            </div>
          </div>
          <p className="text-md leading-relaxed">
            At Achieve Pack, our expertise lies in bridging the gap between theoretical sustainability and operational reality. We focus on materials that not only have a lower initial footprint but also have high recovery rates in existing waste infrastructures.
          </p>
        </div>
      )
    },
    {
      id: 'regulatory-landscape',
      title: 'Navigating the Global Regulatory Landscape (E-E-A-T focus)',
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Regulatory pressure is the primary driver for packaging innovation today. From the <strong>EU Green Claims Directive</strong> to California's <strong>SB 54</strong> (Plastic Pollution Prevention and Packaging Producer Responsibility Act), brands face increasing legal liability for their environmental claims.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-2xl">
            <h4 className="text-amber-900 font-bold mb-3">Expert Insight: The End of Vague Claims</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Terms like "eco-friendly," "earth-positive," or "green" are increasingly restricted by the FTC Green Guides and UK CMA. Brands must now provide <strong>technical evidence</strong> and third-party certifications to support every claim. For example, claiming a pouch is "compostable" without specifying the certification standard (EN13432/ASTM D6400) is now considered a significant legal risk in many jurisdictions.
            </p>
          </div>
          <p className="text-md leading-relaxed">
            Our approach is built on <strong>Authoritativeness and Trustworthiness</strong>. We don't just provide materials; we provide the certification documentation and technical data sheets (TDS) required to satisfy legal audits and consumer transparency demands.
          </p>
        </div>
      )
    },
    {
      id: 'material-innovations',
      title: 'Key Material Innovations: Beyond Fossil-Based Plastics',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            To achieve true sustainability, brands must evaluate the material science behind the barrier properties. A sustainable pouch that fails to protect the product results in <strong>food waste</strong>, which often has a significantly higher carbon footprint than the packaging itself.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h5 className="font-bold text-primary-700 mb-2">Mono-PE (High Recyclability)</h5>
              <p className="text-xs text-neutral-600">Engineered with MDO (Machine Direction Orientation) technology to provide PET-like stiffness while remaining 100% recyclable in soft plastic streams.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h5 className="font-bold text-green-700 mb-2">NK/Kraft/PBS (Compostable)</h5>
              <p className="text-xs text-neutral-600">A multi-layer barrier structure derived from renewable plant-based sources, certified for industrial composting and offering high oxygen barrier (OTR).</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h5 className="font-bold text-blue-700 mb-2">PCR-Content (Circularity)</h5>
              <p className="text-xs text-neutral-600">Integrating 30-50% Post-Consumer Recycled resin back into the structure to reduce the demand for virgin fossil-based polymers.</p>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/sustainable_pillar.png" 
            alt="Technical cross-section of sustainable pouch" 
            className="rounded-2xl border border-neutral-200 shadow-lg"
          />
        </div>
      )
    },
    {
      id: 'avoiding-greenwashing',
      title: 'Avoiding the Greenwashing Trap: A Brand Audit',
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Greenwashing happens when a brand's marketing outpaces its technical reality. Our experience shows that the most common traps include:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">TRAP 1</div>
              <div className="text-sm">
                <strong>Degradable vs. Compostable:</strong> "Degradable" often means the plastic simply breaks into microplastics faster. Only "Compostable" with certification (EN13432) ensures a safe biological return.
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">TRAP 2</div>
              <div className="text-sm">
                <strong>Bio-based but non-biodegradable:</strong> Bio-PE is made from sugarcane but is identical to fossil-PE; it's renewable but still lasts hundreds of years if not recycled.
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-red-500">TRAP 3</div>
              <div className="text-sm">
                <strong>Theoretical vs. Real-world Recyclability:</strong> A multi-material pouch labeled as "recyclable" is technically not recyclable in 99% of municipal facilities. Mono-material is the only trustworthy answer.
              </div>
            </li>
          </ul>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Is sustainable packaging always more expensive?",
      answer: "Initially, material costs can be 15-30% higher due to the R&D and specialized raw materials required. However, when you factor in brand loyalty, carbon tax savings, and waste reduction (right-sizing), the long-term ROI is significantly positive."
    },
    {
      question: "Can sustainable materials match the barrier of foil (Aluminum)?",
      answer: "Yes. Innovations in vacuum-metallized Mono-PE and multi-layer PBS/NK structures can now reach OTR and WVTR levels that meet or exceed standard foil-laminates for many food applications, including coffee and nuts."
    },
    {
      question: "How do I verify a supplier's sustainability claims?",
      answer: "Always request the third-party certification number (e.g., BPI or TUV number), the Technical Data Sheet (TDS), and if using recycled content, the Global Recycled Standard (GRS) transaction certificate. A trustworthy supplier will provide these without hesitation."
    },
    {
      question: "What is the shelf life of compostable packaging?",
      answer: "Compostable materials are designed to break down under specific conditions. In controlled storage (cool, dry), they typically have a shelf life of 12-18 months. Beyond this, you may see changes in mechanical properties or seal strength."
    },
    {
      question: "Does switching to sustainable packaging require new machinery?",
      answer: "Most of our Mono-PE and compostable films are designed to run on existing Form-Fill-Seal (FFS) machinery with only minor adjustments to temperature and dwell time settings."
    }
  ];

  return (
    <SEOPageLayout
      title="What is Sustainable Packaging? A Master Guide for Brands in 2026"
      description="Deep research into sustainable packaging definitions, material science (Mono-PE, PCR, Compostable), and global regulatory compliance. Learn how to avoid greenwashing and audit your brand."
      heroTitle="Sustainable Packaging: The Ultimate Authority Guide"
      heroSubtitle="Mastering the technical complexity of material science, circularity, and regulatory compliance to build a future-proof brand."
      heroImage="/imgs/generated/sustainable_pillar.png"
      introSummary="Sustainability is no longer a marketing option; it is a technical requirement for global commerce. This guide leverages a decade of packaging engineering expertise to help you navigate the transition from fossil-based linear models to circular, evidence-based systems."
      sections={sections}
      faqs={faqs}
      keywords={['sustainable packaging guide', 'material science packaging', 'mono-PE recyclability', 'compostable certification EN13432', 'circular economy packaging', 'greenwashing audit']}
      canonicalUrl="https://achievepack.com/topics/sustainable-packaging"
    />
  );
};

export default SustainablePackagingPillarPage;
