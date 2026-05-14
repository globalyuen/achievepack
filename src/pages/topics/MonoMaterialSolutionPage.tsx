import React from 'react';
import { Layers, Recycle, Zap, CheckCircle, Info, ShieldCheck, FlaskConical, Scale, History } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const MonoMaterialSolutionPage: React.FC = () => {
  const sections = [
    {
      id: 'engineering-mono-material',
      title: 'The Polymer Science of Mono-Material Engineering',
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            For decades, the flexible packaging industry relied on "multi-material" laminates (e.g., PET/Nylon/PE) to achieve the necessary combination of stiffness, barrier, and sealability. While effective for product protection, these structures are non-recyclable because the layers cannot be economically separated. <strong>Mono-material packaging</strong> is the breakthrough solution that uses a single polymer family—typically 100% Polyethylene (PE) or 100% Polypropylene (PP)—to fulfill all these functions.
          </p>
          <p className="text-md leading-relaxed">
            The technical key to this transition is <strong>MDO (Machine Direction Orientation)</strong> technology. By stretching the PE film in the machine direction, we align the molecular chains, which exponentially increases the material's modulus (stiffness) and heat resistance. This allows the MDO-PE layer to replace the traditional PET outer layer, creating a "Mono-PE" structure that is fully compatible with soft plastic recycling streams.
          </p>
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-4">The Performance/Recyclability Paradox</h4>
            <p className="text-sm leading-relaxed italic">
              "The challenge was never just about making a single-material bag; it was about making a single-material bag that didn't shrink in the heat-sealer or allow the product to go stale within a week. Through advanced co-extrusion and nano-coating technology, we've finally reached parity with traditional laminates." — Achieve Pack Engineering Team.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'barrier-technologies',
      title: 'High-Barrier Innovations for Mono-Material Pouches',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            The primary concern for brands moving to mono-materials is the <strong>Oxygen and Moisture Barrier</strong>. Standard PE is naturally porous. To achieve industrial-grade protection (OTR & WVTR), we employ several expert-level technologies:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <h5 className="font-bold text-primary-700 mb-2">AlOx & SiOx Nano-Coatings</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">A transparent, ultra-thin layer of Aluminum Oxide or Silicon Oxide is applied via vacuum deposition. It provides glass-like barrier properties without interfering with the recycling machinery's sensors or the material's purity.</p>
            </div>
            <div className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <h5 className="font-bold text-blue-700 mb-2">EVOH Co-Extrusion</h5>
              <p className="text-xs text-neutral-600 leading-relaxed">Ethylene Vinyl Alcohol (EVOH) is co-extruded within the PE layers. As long as the EVOH content remains below 5% of the total pouch weight, it is considered fully recyclable under CEFLEX and APR guidelines.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recycling-efficiency',
      title: 'Mechanical Recycling Efficiency: A Data-Driven Approach',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Mono-material packaging isn't just "recyclable" in theory; it is highly valuable in the recycling market.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>High Purity:</strong> Produces high-quality Post-Consumer Resin (PCR) that can be used for new packaging, not just low-value "down-cycled" products like park benches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Reduced Sorting Costs:</strong> NIR (Near-Infrared) sorting machines at recycling centers easily identify mono-material PE, reducing rejection rates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Energy Savings:</strong> Processing mono-materials into pellets requires lower temperatures and less chemical cleaning than complex laminates.</span>
                </li>
              </ul>
            </div>
            <div className="border-8 border-black p-4 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
              <ClickableImage 
                src="/imgs/generated/mono_material.png" 
                alt="Mono-PE Material Structure Visualization" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'regulatory-alignment',
      title: 'Regulatory Alignment: The Future of Global Compliance',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Global packaging laws are moving away from encouraging recycling to <strong>mandating</strong> it.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-2xl">
            <h4 className="text-amber-900 font-bold mb-3 flex items-center gap-2"><History className="h-4 w-4" /> Policy Insight: EU PPWR</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              The European Union's <strong>Packaging and Packaging Waste Regulation (PPWR)</strong> aims for all packaging to be recyclable by 2030. Mono-materials are designated as the primary pathway for flexible packaging. Brands that transition now avoid the "Extended Producer Responsibility" (EPR) penalties associated with hard-to-recycle multi-material structures.
            </p>
          </div>
          <p className="text-md">
            Our team maintains constant contact with regulatory bodies to ensure that our Mono-PE and Mono-PP structures stay ahead of tightening definitions of "recyclability" in both Europe and North America.
          </p>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Can I switch from PET/PE to Mono-PE without losing shelf life?",
      answer: "In most cases, yes. By selecting a Mono-PE with EVOH or AlOx coatings, we can match the oxygen and moisture barrier of a standard PET/PE pouch. We offer barrier testing to confirm parity for your specific product."
    },
    {
      question: "Is Mono-PE compatible with coffee valves?",
      answer: "Yes. We offer PE-based one-way degassing valves that are ultrasonic or heat-welded to the pouch. This ensures the entire assembly is made of the same polymer family, maintaining recyclability."
    },
    {
      question: "Why is Mono-PP used less than Mono-PE?",
      answer: "Mono-PP is excellent for its high clarity and superior heat resistance (suitable for retort/autoclave), but it can be more brittle at low temperatures. Mono-PE is generally more versatile for ambient and frozen storage."
    },
    {
      question: "Does mono-material packaging cost more?",
      answer: "While the raw resins are standard, the advanced processing (MDO/BOPE) and coating technologies add a small premium (typically 10-20%) over non-recyclable laminates. However, the reduction in EPR taxes often offsets this cost."
    },
    {
      question: "What is the clarity of Mono-PE compared to standard plastic?",
      answer: "Thanks to MDO technology, our Mono-PE films have excellent clarity and high gloss, nearly identical to traditional PET-laminated pouches, ensuring your product remains the hero of the shelf."
    }
  ];

  return (
    <SEOPageLayout
      title="Mono-Material Packaging: The Expert Guide to Single-Polymer Solutions"
      description="Deep technical exploration of mono-material packaging technology. Learn about MDO-PE, high-barrier nano-coatings, mechanical recycling efficiency, and global regulatory compliance."
      heroTitle="Mono-Material: Engineering the Future of Recyclability"
      heroSubtitle="Mastering the technical transition from complex laminates to high-performance, single-polymer structures that power the circular economy."
      heroImage="/imgs/generated/mono_material.png"
      introSummary="Mono-material packaging is the cornerstone of a truly circular flexible packaging industry. By moving from complex, multi-polymer laminates to engineered single-polymer structures, brands can ensure their packaging has a high recovery value and a lower environmental footprint. This guide leverages our deep expertise in polymer science to explain how this transition works without compromising product safety."
      sections={sections}
      faqs={faqs}
      keywords={['mono-material packaging science', 'MDO-PE technology guide', 'mono-PP vs mono-PE', 'high barrier recyclable pouches', 'EU PPWR compliance', 'single polymer packaging design']}
      canonicalUrl="https://achievepack.com/topics/mono-material-packaging"
    />
  );
};

export default MonoMaterialSolutionPage;
