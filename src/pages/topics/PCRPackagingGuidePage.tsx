import React from 'react';
import { Recycle, ShieldCheck, Info, BarChart, CheckCircle, FlaskConical, Globe, Scale, ClipboardList } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const PCRPackagingGuidePage: React.FC = () => {
  const sections = [
    {
      id: 'what-is-pcr',
      title: 'Post-Consumer Recycled (PCR) Resin: The Science of Giving Waste a Second Life',
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            Post-Consumer Recycled (PCR) resin is material that has completed its lifecycle as a consumer product, been recovered through recycling streams, and reprocessed into new raw pellets. Unlike "Post-Industrial" (PIR) waste, which is essentially factory scrap, <strong>PCR is the true engine of the circular economy</strong> because it diverts waste directly from landfills and oceans.
          </p>
          <div className="grid md:grid-cols-2 gap-8 py-4">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-primary-600" /> Molecular Integrity
              </h4>
              <p className="text-sm leading-relaxed text-neutral-600">
                Every time plastic is recycled mechanically, the polymer chains are shortened by heat and shear force. Our engineering expertise lies in <strong>balancing PCR content with virgin resin</strong> to ensure the pouch maintains its tensile strength, puncture resistance, and seal integrity.
              </p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary-600" /> Carbon Reduction
              </h4>
              <p className="text-sm leading-relaxed text-neutral-600">
                Utilizing PCR resin typically reduces the carbon footprint of the material by 25-40% compared to virgin fossil-based plastics, as it bypasses the energy-intensive extraction and refining of petroleum.
              </p>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/pcr_guide.png" 
            alt="High-quality PCR Resin Pellets" 
            className="rounded-3xl border border-neutral-200 shadow-xl"
          />
        </div>
      )
    },
    {
      id: 'food-grade-compliance',
      title: 'Food-Grade PCR: Safety, Migration, and EFSA/FDA Standards',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            Not all PCR is suitable for food contact. To ensure consumer safety, we utilize PCR resins produced through <strong>FDA-cleared and EFSA-approved</strong> "super-clean" recycling processes.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
            <h4 className="text-blue-900 font-bold mb-3">Expert Insight: The Challenge of PCR Migration</h4>
            <p className="text-sm text-blue-800 leading-relaxed mb-4">
              When using mechanical PCR, there is a risk of "non-intentionally added substances" (NIAS) migrating from the recycled layer into the food. We mitigate this by using <strong>multi-layer co-extrusion</strong>, where the PCR is safely sandwiched between layers of virgin functional barrier film. This "AB-A" structure ensures the food only touches virgin, food-grade polymer while the package still contains 30% or more recycled content.
            </p>
          </div>
          <p className="text-md leading-relaxed">
            Our <strong>E-E-A-T commitment</strong> means every batch of PCR-content pouch we produce is backed by migration testing reports and a clear chain-of-custody documentation.
          </p>
        </div>
      )
    },
    {
      id: 'physical-properties',
      title: 'The Reality of PCR: Aesthetics vs. Impact',
      icon: <BarChart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            Brands must understand that PCR resin introduces certain physical characteristics that differ from virgin plastic. We believe in being transparent about these "trust-building" traits:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-primary-600">01</div>
              <div>
                <strong>Visual Variance:</strong> PCR can introduce a very slight grey or yellow tint and occasional "gels" (tiny specks). We view these as <strong>proof of sustainability</strong> that consumers increasingly appreciate as authentic.
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-primary-600">02</div>
              <div>
                <strong>Odor Control:</strong> Low-quality PCR can have a "burnt plastic" scent. We only source high-grade, de-volatilized PCR to ensure your product's aroma remains pure.
              </div>
            </li>
            <li className="flex gap-4 p-4 bg-white border border-neutral-100 rounded-xl">
              <div className="font-bold text-primary-600">03</div>
              <div>
                <strong>Blending Ratios:</strong> While 100% PCR is possible for some non-food items, 30% is the industry standard for maintaining high mechanical performance in food pouches.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'verification-audit',
      title: 'Expert Audit: Verifying the Chain of Custody',
      icon: <ClipboardList className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            To avoid greenwashing, brands must be able to prove the recycled content in their packaging. We utilize the <strong>Global Recycled Standard (GRS)</strong> and <strong>ISCC PLUS</strong> certification systems.
          </p>
          <div className="bg-neutral-900 p-8 rounded-2xl text-white">
            <h4 className="font-bold mb-4 text-primary-400 flex items-center gap-2"><Scale className="h-4 w-4" /> Mass Balance vs. Segregated PCR</h4>
            <p className="text-sm leading-relaxed mb-4">
              We help you navigate the two main verification methods. <strong>Segregated PCR</strong> provides a physical trace of recycled molecules in your specific pouch, while <strong>Mass Balance</strong> (often used in advanced chemical recycling) allows brands to claim a percentage of recycled content based on the total recycled input into the refinery system.
            </p>
            <p className="text-xs text-neutral-400 italic">
              Our audit team provides the Transaction Certificates (TC) required for you to confidently display recycled content claims on your retail packaging.
            </p>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Is PCR packaging more expensive than virgin plastic?",
      answer: "Yes, currently PCR resin carries a premium of 10-20% due to the costs of collection, sorting, and advanced cleaning. However, in regions with Plastic Taxes (like the UK and EU), using 30% PCR can often result in a net cost saving by avoiding those taxes."
    },
    {
      question: "Can I get 100% PCR pouches?",
      answer: "For non-food applications (like detergents or fertilizers), 100% PCR is achievable. For food applications, we generally recommend a maximum of 50% PCR in a co-extruded structure to ensure the barrier and safety of the package."
    },
    {
      question: "Will PCR affect the shelf life of my product?",
      answer: "When engineered correctly with a virgin barrier layer, PCR content does not affect OTR or WVTR. Your product will have the same shelf life as it would in a virgin plastic pouch."
    },
    {
      question: "How do I know the PCR isn't contaminated with toxins?",
      answer: "We only source PCR from suppliers who utilize multi-stage 'super-clean' recycling involving high-vacuum and high-temperature decontamination, verified by EFSA or FDA migration limits."
    },
    {
      question: "What is the difference between PIR and PCR?",
      answer: "PIR (Post-Industrial Recycled) is factory waste that never reached a consumer. PCR (Post-Consumer Recycled) is waste collected from households. PCR is much more impactful for sustainability because it directly reduces the amount of plastic entering the waste stream."
    }
  ];

  return (
    <SEOPageLayout
      title="PCR Packaging Guide: Post-Consumer Recycled Resin in Flexible Pouches"
      description="Deep technical guide to PCR (Post-Consumer Recycled) resin. Learn about food-grade safety standards (FDA/EFSA), mechanical vs chemical recycling, and how to verify recycled content claims."
      heroTitle="PCR Packaging: Closing the Loop with Recycled Content"
      heroSubtitle="Transforming consumer waste into high-performance packaging with technical precision, safety compliance, and verified circularity."
      heroImage="/imgs/generated/pcr_guide.png"
      introSummary="Integrating Post-Consumer Recycled (PCR) resin is the most direct way for brands to participate in the circular economy. However, successfully implementing PCR requires a deep understanding of polymer degradation, food-grade safety protocols, and supply chain transparency. This guide leverages our engineering expertise to help you build a trustworthy, high-impact recycled packaging strategy."
      sections={sections}
      faqs={faqs}
      keywords={['PCR packaging guide', 'post-consumer recycled resin food grade', 'FDA EFSA PCR standards', 'recycled content verification GRS', 'mechanical recycling polymers', 'sustainable pouch engineering']}
      canonicalUrl="https://achievepack.com/topics/pcr-packaging"
    />
  );
};

export default PCRPackagingGuidePage;
