import React from 'react';
import { Helmet } from 'react-helmet-async';

const FdaBrcCertified = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>FDA & BRC Certified Food Packaging | Achieve Pack</title>
        <meta name="description" content="Ensure compliance and safety with our FDA and BRC certified food packaging solutions. High-barrier, reliable, and rigorously tested for B2B applications." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">FDA & BRC Certified Packaging</h1>
          <p className="text-xl text-gray-600">You pour everything into perfecting your food product—don't let substandard packaging risk a recall or damage your brand reputation.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/fda-brc-certified/hero.webp" alt="FDA BRC Certified Packaging" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Uncompromising Quality & Compliance</h2>
            <p className="mb-4">Our facilities operate under the strictest international standards. BRC and FDA certifications mean our manufacturing environment, materials, and processes are audited and verified to keep your food products completely safe.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>100% Food-Grade Materials</li>
              <li>ISO-certified cleanroom production</li>
              <li>Complete traceability for every batch</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Certification Process</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p>From incoming raw material inspection to final outbound QA, our multi-stage quality control ensures zero defects. We handle the regulatory compliance so you can focus on scaling your food brand.</p>
            <img src="/imgs/topics/fda-brc-certified/process.webp" alt="Certification Process" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Standard vs. Certified Packaging</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/imgs/topics/fda-brc-certified/comparison.webp" alt="Standard vs Certified Packaging" className="rounded-lg shadow-lg w-full" />
            <div>
              <p>Choosing an uncertified supplier introduces hidden risks: contamination, material leaching, and regulatory fines. Our certified pouches guarantee absolute barrier integrity and legal compliance across all global markets.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default FdaBrcCertified;
