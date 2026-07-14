import React from 'react';

const BeverageSoftStandUpPouch: React.FC = () => {
  return (
    <div className="topic-page bg-gray-50 min-h-screen">
      <header className="hero-section text-center py-16 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">High-Performance Beverage Stand-Up Pouches</h1>
        <p className="text-lg text-gray-600 mb-8">Advanced flexible packaging for liquids, designed for durability and logistics efficiency.</p>
        <img src="/imgs/topics/beverage-soft-stand-up-pouch/hero.png" alt="Beverage Stand-Up Pouch" className="mx-auto rounded-lg shadow-xl max-w-3xl w-full" />
      </header>

      <section className="empathy-hook py-16 bg-blue-50 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Losing Margins to Shipping Costs and Breakage?</h2>
          <p className="text-blue-800 text-lg leading-relaxed">
            If you're still using rigid glass or heavy plastic bottles for your beverages, you are bleeding money in freight and warehousing. We know the logistics nightmare of shipping liquids. Our soft stand-up pouches with integrated spouts drastically reduce dead weight, eliminate shatter risks, and maximize pallet density.
          </p>
        </div>
      </section>

      <section className="technical-details py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Robust Filling Process</h3>
          <p className="text-gray-700 mb-4">Engineered for high-speed automated liquid filling lines. The reinforced gussets and ultrasonic spout sealing withstand high pressure and hot-fill applications up to 85°C.</p>
          <img src="/imgs/topics/beverage-soft-stand-up-pouch/process.png" alt="Liquid Filling Process" className="rounded-lg shadow-md w-full" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Logistics Comparison</h3>
          <p className="text-gray-700 mb-4">Switching to flexible pouches reduces packaging weight by 80% and takes up 1/10th of the space of empty rigid bottles, directly improving your bottom line.</p>
          <img src="/imgs/topics/beverage-soft-stand-up-pouch/comparison.png" alt="Flexible Pouch vs Rigid Bottle" className="rounded-lg shadow-md w-full" />
        </div>
      </section>
    </div>
  );
};

export default BeverageSoftStandUpPouch;
