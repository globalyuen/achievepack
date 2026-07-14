import React from 'react';
import { Helmet } from 'react-helmet';

export default function EprTaxMinimizationStrategies() {
  return (
    <div className="topic-container p-8 max-w-7xl mx-auto">
      <Helmet>
        <title>EPR Tax Minimization Strategies for B2B Packaging | Achieve Pack</title>
        <meta name="description" content="Navigate Extended Producer Responsibility (EPR) regulations effectively with sustainable packaging." />
      </Helmet>
      
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">EPR Tax Minimization Strategies for B2B Packaging</h1>
        <p className="text-xl text-gray-600">Empowering your B2B supply chain with technical excellence.</p>
        <div className="mt-8">
           <img src="/imgs/topics/epr-tax-minimization-strategies/hero.png" alt="Hero" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">The Technical Edge</h2>
        <p className="text-gray-700 leading-relaxed">
          At Achieve Pack, we understand that precision and compliance are critical. 
          Our epr tax minimization strategies for b2b packaging solutions are engineered to meet the highest 
          industry standards, ensuring your products are protected and your operations run smoothly.
          We feel your pain when quality issues cause downtime—that's why we build for zero defects.
        </p>
      </section>

      <section className="mb-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Manufacturing Process</h3>
          <img src="/imgs/topics/epr-tax-minimization-strategies/process.png" alt="Process" className="rounded-lg shadow-md mb-4" />
          <p className="text-gray-700">Rigorous quality control at every step.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Performance Comparison</h3>
          <img src="/imgs/topics/epr-tax-minimization-strategies/comparison.png" alt="Comparison" className="rounded-lg shadow-md mb-4" />
          <p className="text-gray-700">See how our solutions outperform conventional options.</p>
        </div>
      </section>
    </div>
  );
}
