import React from 'react';
import { Recycle, CheckCircle, Info, Settings, ArrowRight, FlaskConical, Binary, Scale } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const RecyclablePackagingGuidePage: React.FC = () => {
  const sections = [
    {
      id: 'engineering-recyclability',
      title: 'The Engineering of Modern Recyclability: Mono-Material Science',
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            True recyclability is an engineering challenge, not just a label. In the traditional flexible packaging world, "performance" was achieved by laminating incompatible plastics (e.g., PET/PE or PET/Aluminum). While these protect the product, they are a nightmare for recycling facilities because they cannot be separated.
          </p>
          <p className="text-md leading-relaxed">
            The solution is <strong>Mono-Material Engineering</strong>. By utilizing Machine Direction Orientation (MDO) and specific resin blends, we can create a 100% Polyethylene (PE) or Polypropylene (PP) pouch that provides the same stiffness, heat resistance, and barrier properties as old-school multi-material laminates.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="bg-blue-50 border-4 border-blue-200 p-8 rounded-2xl">
              <h4 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                <Binary className="h-4 w-4" /> MDO-PE Technology
              </h4>
              <p className="text-sm leading-relaxed">
                MDO-PE (Machine Direction Oriented PE) involves stretching the film in the machine direction. This process aligns the polymer chains, significantly increasing the film's tensile strength, optical clarity, and thermal stability. This allows us to use PE as the printing layer, which traditionally required PET.
              </p>
            </div>
            <div className="bg-green-50 border-4 border-green-200 p-8 rounded-2xl">
              <h4 className="text-green-900 font-bold mb-4 flex items-center gap-2">
                <Settings className="h-4 w-4" /> High-Barrier Coatings
              </h4>
              <p className="text-sm leading-relaxed">
                To achieve high OTR (Oxygen Transmission Rate) and WVTR (Water Vapor Transmission Rate), we integrate ultra-thin EVOH layers (less than 5% of total weight) or AlOx/SiOx coatings. These are compatible with existing PE recycling streams (Category 4) according to CEFLEX and APR guidelines.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'design-for-circularity',
      title: 'Design for Circularity: Beyond the Material',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Recyclability doesn't end with the film. Every component of the pouch must be evaluated to ensure it doesn't contaminate the recycling stream. Our <strong>E-E-A-T driven design process</strong> considers:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">01</div>
              <div>
                <h4 className="font-bold">Inks and Coatings</h4>
                <p className="text-xs text-neutral-500 mt-1">We use non-toxic, low-migration inks and ensure that the total ink coverage does not interfere with NIR (Near-Infrared) sorting sensors at Material Recovery Facilities (MRFs).</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">02</div>
              <div>
                <h4 className="font-bold">Zippers and Fitments</h4>
                <p className="text-xs text-neutral-500 mt-1">All our recyclable pouches feature PE-compatible zippers. Using a different polymer for the closure (e.g., a standard PP zipper on a PE bag) would downgrade the recyclability of the entire package.</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">03</div>
              <div>
                <h4 className="font-bold">Adhesives</h4>
                <p className="text-xs text-neutral-500 mt-1">We utilize solvent-free lamination technology, which reduces VOC emissions during production and ensures the material remains pure for high-quality PCR generation.</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'testing-performance',
      title: 'Expert Testing: Ensuring Real-World Protection',
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            A recyclable pouch is useless if it doesn't protect the product. We subject our mono-material structures to rigorous stress testing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-neutral-200 rounded-2xl">
              <h5 className="font-bold text-neutral-900 mb-2 italic">1. Drop & Burst Testing</h5>
              <p className="text-sm text-neutral-600">Testing seal integrity under extreme pressure to ensure the pouch can survive the rigors of e-commerce shipping (Amazon Prep standards).</p>
            </div>
            <div className="p-6 border border-neutral-200 rounded-2xl">
              <h5 className="font-bold text-neutral-900 mb-2 italic">2. Barrier Verification</h5>
              <p className="text-sm text-neutral-600">Utilizing MOCON testing to verify OTR and WVTR levels after the lamination process, ensuring the barrier layer wasn't compromised.</p>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/recyclable_guide.png" 
            alt="Recyclable Mono-PE Pouch Gallery" 
            className="w-full h-96 object-cover rounded-3xl border border-neutral-200 shadow-2xl"
          />
        </div>
      )
    },
    {
      id: 'compliance-labeling',
      title: 'Compliance & Consumer Labeling (Trustworthiness)',
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Transparency is key to consumer trust. We help brands implement accurate labeling systems like <strong>How2Recycle</strong> (US/Canada) or <strong>OPRL</strong> (UK).
          </p>
          <div className="bg-neutral-900 p-8 rounded-2xl text-white">
            <h4 className="font-bold mb-4 text-primary-400">The "Store Drop-off" Reality</h4>
            <p className="text-sm leading-relaxed">
              In many regions, curbside recycling for flexible films is still developing. We advise brands to use "Store Drop-off" labels where appropriate, directing consumers to the thousands of retail collection points that accept PE film. This level of honesty prevents consumer frustration and builds long-term brand integrity.
            </p>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Can mono-PE pouches be used for vacuum packaging?",
      answer: "Yes. By optimizing the blend of LLDPE and HDPE and ensuring precise seal bar temperature control, we can achieve the high seal strength required for vacuum-packed products like nuts or dried meats."
    },
    {
      question: "Do recyclable pouches have the same shelf life as foil?",
      answer: "While foil is an absolute barrier, modern high-barrier Mono-PE structures can achieve shelf lives of 12-24 months for most dry food products. We conduct shelf-life acceleration testing to provide you with definitive data for your specific product."
    },
    {
      question: "Are these pouches recognized by the APR (Association of Plastic Recyclers)?",
      answer: "Our Mono-PE structures are designed to meet APR Critical Guidance for PE film and flexible packaging, ensuring they contribute to high-quality post-consumer resin (PCR) streams."
    },
    {
      question: "What is the minimum thickness for a high-barrier recyclable pouch?",
      answer: "Depending on the product weight and barrier needs, we typically range from 80 microns to 140 microns. We always aim for 'lightweighting' to minimize material usage without compromising safety."
    }
  ];

  return (
    <SEOPageLayout
      title="Recyclable Packaging Design: The Engineering Guide to Mono-Materials"
      description="Deep technical guide to recyclable flexible packaging. Explore Mono-PE engineering, MDO technology, high-barrier coatings, and global recycling compliance standards."
      heroTitle="Recyclable Design: Engineered for the Circular Economy"
      heroSubtitle="Moving beyond theory into technical reality with high-performance mono-material structures that protect your product and the planet."
      heroImage="/imgs/generated/recyclable_guide.png"
      introSummary="Designing for recyclability is the most effective way for brands to reduce their environmental liability. This expert guide explores the material science, manufacturing technology, and waste stream logistics required to transition from multi-material waste to high-value circularity."
      sections={sections}
      faqs={faqs}
      keywords={['recyclable packaging design', 'mono-material engineering', 'MDO-PE technology', 'EVOH barrier performance', 'APR compliance packaging', 'soft plastic recycling guide']}
      canonicalUrl="https://achievepack.com/topics/recyclable-packaging"
    />
  );
};

export default RecyclablePackagingGuidePage;
