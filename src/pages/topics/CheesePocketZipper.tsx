import React from 'react';

const CheesePocketZipper: React.FC = () => {
  return (
    <div className="topic-container bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="hero-section relative w-full h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <img src="/imgs/topics/cheese-pocket-zipper/hero.png" alt="Cheese Pocket Zipper Pouch Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">High-Barrier Resealable Solutions for Dairy</h1>
          <p className="text-xl md:text-2xl font-light text-gray-200">Pocket Zipper Pouches: Advanced moisture control and oxygen barrier technology.</p>
        </div>
      </header>

      {/* Empathy Hook Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Combatting Spoilage and Clumping?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Grated and shredded cheeses present a unique packaging challenge: they are highly sensitive to oxygen and moisture, which rapidly leads to mold or clumping. When your packaging fails after the first open, consumer trust erodes. You need a reliable closure system that withstands repeated use while maintaining an impermeable barrier. Our pocket zipper technology guarantees that your product stays fresh from the factory floor to the final serving.
        </p>
      </section>

      {/* Technical Process Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Engineered for Shelf-Life Optimization</h2>
            <p className="text-gray-700 mb-6">
              The integration of a pocket zipper mechanism during the automated converting process ensures a tamper-evident, easy-open experience without sacrificing the structural integrity of the pouch. Coupled with our co-extruded EVOH barriers, we aggressively mitigate Oxygen Transmission Rates (OTR) and Moisture Vapor Transmission Rates (MVTR).
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Integrated front-panel pocket zipper for robust resealability</li>
              <li>Modified Atmosphere Packaging (MAP) compatible films</li>
              <li>Anti-fog coating options for premium product visibility</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src="/imgs/topics/cheese-pocket-zipper/process.png" alt="Manufacturing Process of Cheese Pocket Zipper" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img src="/imgs/topics/cheese-pocket-zipper/comparison.png" alt="Comparison: Pocket Zipper vs Traditional Wrapper" className="w-full h-auto object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4">Elevate the Consumer Experience</h2>
            <p className="text-gray-700 mb-6">
              Unlike traditional pillow pouches that require scissors and secondary storage bags once opened, our pocket zipper stand-up pouches provide unparalleled convenience. This functionality not only reduces food waste but directly increases perceived brand value, encouraging repeat purchases from satisfied customers.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Download Material Specs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheesePocketZipper;
