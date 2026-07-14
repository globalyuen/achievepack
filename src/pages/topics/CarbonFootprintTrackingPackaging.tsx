import React from 'react';
import Head from 'next/head';

const CarbonFootprintTrackingPackaging: React.FC = () => {
  return (
    <>
      <Head>
        <title>Carbon Footprint Tracking Packaging | Achieve Pack</title>
        <meta name="description" content="Advanced B2B packaging solutions with integrated carbon footprint tracking." />
      </Head>
      <div className="topic-container">
        {/* Empathy Hook */}
        <section className="empathy-hook bg-gray-100 p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Facing Pressure to Report Scope 3 Emissions?</h1>
          <p className="text-xl">Supply chain transparency is no longer optional. Our carbon footprint tracking packaging provides the exact data you need for compliance and ESG reporting.</p>
        </section>

        {/* Hero Section */}
        <section className="hero-section">
          <img src="/imgs/topics/carbon-footprint-tracking-packaging/hero.png" alt="Carbon Footprint Tracking Packaging" className="w-full h-auto" />
        </section>

        {/* Technical Details */}
        <section className="technical-details p-8">
          <h2 className="text-3xl font-semibold mb-4">Data-Driven Packaging</h2>
          <p>We integrate lifecycle assessment (LCA) data directly into the packaging supply chain. Through QR codes and centralized databases, wholesale clients can access real-time emission metrics.</p>
        </section>

        {/* Process Section */}
        <section className="process-section grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Tracking the Lifecycle</h2>
            <p>From raw material extraction to final delivery, every step is quantified, audited, and logged in our B2B portal.</p>
          </div>
          <img src="/imgs/topics/carbon-footprint-tracking-packaging/process.png" alt="Tracking Process" className="w-full h-auto rounded" />
        </section>

        {/* Comparison Section */}
        <section className="comparison-section p-8 bg-gray-50">
          <h2 className="text-3xl font-semibold mb-4 text-center">Standard vs. Tracked Packaging</h2>
          <div className="flex justify-center">
            <img src="/imgs/topics/carbon-footprint-tracking-packaging/comparison.png" alt="Standard vs Tracked Comparison" className="w-3/4 h-auto rounded shadow-lg" />
          </div>
        </section>
      </div>
    </>
  );
};

export default CarbonFootprintTrackingPackaging;
