import React from 'react';
import { ShieldCheck, Info, HelpCircle, FileCheck, ArrowLeftRight, ArrowRight, ClipboardCheck, Scale, Search } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CompostableCertificationFAQPage: React.FC = () => {
  const sections = [
    {
      id: 'why-certification-matters',
      title: 'Why Certification is the Only Trustworthy Proof of Compostability',
      icon: <ShieldCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed">
            In the global packaging market, the term "compostable" is a regulated claim. Without a third-party certification number from a recognized body, any claim of compostability should be viewed with skepticism. Certification ensures that the material has been <strong>independently tested</strong> in a laboratory to vanish completely without leaving toxic trace elements behind.
          </p>
          <p className="text-md leading-relaxed">
            For brands, certification is more than just an "eco-badge"—it is <strong>legal protection</strong>. Regulators like the FTC in the US and the CMA in the UK are actively fining brands that use vague environmental claims without technical proof.
          </p>
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 flex gap-6 items-start">
            <ClipboardCheck className="h-8 w-8 text-primary-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-primary-900 mb-2">The E-E-A-T Standard of Proof</h4>
              <p className="text-sm text-primary-800 leading-relaxed">
                A trustworthy supplier will provide a <strong>Certificate of Compliance</strong> and a unique <strong>License Number</strong>. You can verify these numbers on the official databases of BPI (North America) or TUV Austria (Europe). If a supplier only offers a "test report" but no license number, they have likely not completed the full certification process.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'technical-comparison',
      title: 'Technical Breakdown: EN 13432 vs. ASTM D6400',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            While both standards cover industrially compostable packaging, they serve different jurisdictions and have slightly different testing protocols.
          </p>
          <div className="overflow-x-auto border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left border-r border-white/20">Testing Pillar</th>
                  <th className="p-4 text-left border-r border-white/20">EN 13432 (Europe)</th>
                  <th className="p-4 text-left">ASTM D6400 (USA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr className="bg-white">
                  <td className="p-4 font-bold border-r border-neutral-100 italic">Disintegration</td>
                  <td className="p-4 border-r border-neutral-100">90% of fragments must pass through a 2mm sieve within 12 weeks.</td>
                  <td className="p-4">Same requirement (90% fragmentation within 84 days).</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold border-r border-neutral-100 italic">Biodegradability</td>
                  <td className="p-4 border-r border-neutral-100">90% of organic carbon converted to CO2 within 180 days.</td>
                  <td className="p-4">Relative biodegradation of 90% vs. positive control (cellulose).</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold border-r border-neutral-100 italic">Eco-toxicity</td>
                  <td className="p-4 border-r border-neutral-100">Plant growth in the resulting compost must be >90% of control compost.</td>
                  <td className="p-4">Similar terrestrial plant growth and seed germination tests.</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold border-r border-neutral-100 italic">Heavy Metals</td>
                  <td className="p-4 border-r border-neutral-100">Strict limits on 11 elements including Cadmium, Mercury, and Lead.</td>
                  <td className="p-4">Compliance with EPA 40 CFR 503.13 metal limits.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'certification-bodies',
      title: 'Who Certifies What? The Global Authorities',
      icon: <Search className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            To navigate the market, you must recognize the logos of the primary certification bodies. Each logo signifies a different level of expertise and environmental rigor.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border-2 border-neutral-200 rounded-xl">
              <h5 className="font-bold mb-3 flex items-center gap-2"><Scale className="h-4 w-4 text-primary-600" /> TUV Austria (OK Compost)</h5>
              <p className="text-xs leading-relaxed">The global gold standard. Their "OK Compost INDUSTRIAL" (EN13432) and "OK Compost HOME" marks are the most recognized labels in Europe and Asia.</p>
            </div>
            <div className="p-6 bg-white border-2 border-neutral-200 rounded-xl">
              <h5 className="font-bold mb-3 flex items-center gap-2"><Scale className="h-4 w-4 text-primary-600" /> BPI (Biodegradable Products Institute)</h5>
              <p className="text-xs leading-relaxed">The primary authority in North America. BPI certification (ASTM D6400) is mandatory for many retailers and municipal composting programs in the US and Canada.</p>
            </div>
            <div className="p-6 bg-white border-2 border-neutral-200 rounded-xl">
              <h5 className="font-bold mb-3 flex items-center gap-2"><Scale className="h-4 w-4 text-primary-600" /> DIN CERTCO / Seedling</h5>
              <p className="text-xs leading-relaxed">A collaboration between European Bioplastics and DIN CERTCO. The "Seedling" logo is widely used to denote compliance with EN 13432 across the EU.</p>
            </div>
            <div className="p-6 bg-white border-2 border-neutral-200 rounded-xl">
              <h5 className="font-bold mb-3 flex items-center gap-2"><Scale className="h-4 w-4 text-primary-600" /> ABA (Australasian Bioplastics Association)</h5>
              <p className="text-xs leading-relaxed">Authorizes the use of the "Home Compostable" (AS 5810) and "Industrially Compostable" (AS 4736) logos in Australia and New Zealand.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-checklist',
      title: 'Expert Audit: How to Verify a Compostable Supplier',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            As a brand owner, you are responsible for the claims on your packaging. Use this <strong>E-E-A-T verification checklist</strong> when auditing a supplier:
          </p>
          <ul className="space-y-3">
            {[
              "Does the supplier have a valid License Number (not just a test report)?",
              "Is the certification issued in the supplier's company name?",
              "Does the certificate cover the specific material structure you are buying?",
              "Is the certificate still within its validity period?",
              "If using ink or zippers, are those individual components also certified?"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
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
      question: "Is 'biodegradable' the same as 'compostable'?",
      answer: "No. Everything biodegradable is not necessarily compostable. 'Biodegradable' simply means a material will eventually break down, but it specifies no timeframe and no toxicity limits. 'Compostable' is a strictly defined, certified claim with clear time and safety parameters."
    },
    {
      question: "Can I use the OK Compost logo if my material isn't certified?",
      answer: "Absolutely not. Using these registered trademarks without a license is trademark infringement and a primary form of greenwashing. It can lead to legal action and immediate loss of consumer trust."
    },
    {
      question: "How long does the certification process take?",
      answer: "A full industrial composting certification (EN13432) typically takes 6 to 9 months, as the biodegradation test itself requires 180 days of continuous monitoring in a laboratory."
    },
    {
      question: "Do individual components (zippers, valves) need their own certification?",
      answer: "Yes. For a finished pouch to be certified, all sub-components including the zipper, one-way valve, and the adhesive must be proven to be compostable to avoid contaminating the final compost."
    },
    {
      question: "Why do some compostable bags feel 'plastic-y'?",
      answer: "Materials like PBS (Polybutylene Succinate) and PBAT (Polybutylene adipate terephthalate) are bio-polymers designed to behave like plastic (stretchy, heat-sealable) while remaining fully susceptible to microbial breakdown. High-quality engineering allows for this 'best of both worlds' performance."
    }
  ];

  return (
    <SEOPageLayout
      title="Compostable Certification Standards: The Expert Guide to EN 13432 & ASTM D6400"
      description="Deep technical analysis of global compostable packaging certifications. Learn the differences between EN 13432 and ASTM D6400, and how to verify supplier claims using E-E-A-T."
      heroTitle="Compostable Certification: The Global Standard of Proof"
      heroSubtitle="Navigating the technical requirements, testing protocols, and legal obligations of certified compostable packaging for global brands."
      heroImage="/imgs/generated/certification_faq.png"
      introSummary="In the absence of clear certification, environmental claims are merely marketing promises. This authority guide provides the technical expertise needed to understand the four pillars of compostability testing and the differences between major global standards, ensuring your brand stays compliant and trustworthy."
      sections={sections}
      faqs={faqs}
      keywords={['compostable certification EN 13432', 'ASTM D6400 vs EN 13432', 'BPI certification guide', 'TUV OK Compost standards', 'disintegration testing packaging', 'compostable supplier audit']}
      canonicalUrl="https://achievepack.com/topics/compostable-certification"
    />
  );
};

export default CompostableCertificationFAQPage;
