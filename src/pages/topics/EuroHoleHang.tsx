import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function EuroHoleHang() {
  return (
    <div className="topic-container p-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Retail-Ready Pouches with Euro Hole Hang Tags | Achieve Pack</title>
        <meta name="description" content="Maximize retail visibility with premium Euro Hole hang tag pouches." />
      </Helmet>
      
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Retail-Ready Pouches with Euro Hole Hang Tags</h1>
        <p className="text-xl text-gray-600">Empowering your B2B supply chain with technical excellence.</p>
        <div className="mt-8">
           <img src="/imgs/topics/euro-hole-hang/hero.png" alt="Hero" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">The Technical Edge</h2>
        <p className="text-gray-700 leading-relaxed">
          At Achieve Pack, we understand that precision and compliance are critical. 
          Our retail-ready pouches with euro hole hang tags solutions are engineered to meet the highest 
          industry standards, ensuring your products are protected and your operations run smoothly.
          We feel your pain when quality issues cause downtime—that's why we build for zero defects.
        </p>
      </section>

      <section className="mb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Manufacturing Process</h3>
          <img src="/imgs/topics/euro-hole-hang/process.png" alt="Process" className="rounded-lg shadow-md mb-4" />
          <p className="text-gray-700">Rigorous quality control at every step.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Performance Comparison</h3>
          <img src="/imgs/topics/euro-hole-hang/comparison.png" alt="Comparison" className="rounded-lg shadow-md mb-4" />
          <p className="text-gray-700">See how our solutions outperform conventional options.</p>
        </div>
      </section>
    </div>
  );
}
