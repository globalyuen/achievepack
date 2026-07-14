import React from 'react';

const BeefJerkyPillowPouch: React.FC = () => {
  return (
    <div className="topic-page bg-gray-50 min-h-screen">
      <header className="hero-section text-center py-16 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Beef Jerky Pillow Pouches</h1>
        <p className="text-lg text-gray-600 mb-8">Optimize your meat snack packaging with high-barrier, cost-effective solutions.</p>
        <img src="/imgs/topics/beef-jerky-pillow-pouch/hero.png" alt="Beef Jerky Pillow Pouch" className="mx-auto rounded-lg shadow-xl max-w-3xl w-full" />
      </header>

      <section className="empathy-hook py-16 bg-blue-50 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Struggling with Shelf Life and Oxygen Permeation?</h2>
          <p className="text-blue-800 text-lg leading-relaxed">
            As a beef jerky manufacturer, your biggest enemy is oxygen. Stale product leads to returns, damaged brand reputation, and lost margins. We understand the precise EVOH barrier requirements needed to keep your jerky fresh, tender, and flavorful for months, not weeks.
          </p>
        </div>
      </section>

      <section className="technical-details py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Manufacturing Process</h3>
          <p className="text-gray-700 mb-4">Our pillow pouches are manufactured using state-of-the-art co-extrusion and lamination, ensuring a hermetic seal that withstands nitrogen flushing and vacuum sealing processes without compromising the structural integrity of the pouch.</p>
          <img src="/imgs/topics/beef-jerky-pillow-pouch/process.png" alt="Manufacturing Process" className="rounded-lg shadow-md w-full" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Material Comparison</h3>
          <p className="text-gray-700 mb-4">Compared to standard single-layer plastics, our multi-layer barrier films offer up to 5x lower Oxygen Transmission Rate (OTR) and Moisture Vapor Transmission Rate (MVTR), vastly outperforming competitors.</p>
          <img src="/imgs/topics/beef-jerky-pillow-pouch/comparison.png" alt="Comparison vs Standard" className="rounded-lg shadow-md w-full" />
        </div>
      </section>
    </div>
  );
};

export default BeefJerkyPillowPouch;
