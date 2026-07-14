import React from 'react';

const CerealSachetThreeSideSeal: React.FC = () => {
  return (
    <div className="topic-container bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <header className="hero-section relative w-full h-[60vh] flex items-center justify-center bg-gray-100 overflow-hidden">
        <img src="/imgs/topics/cereal-sachet-three-side-seal/hero.png" alt="Cereal Sachet Three Side Seal Hero" className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Precision Engineering for Breakfast Essentials</h1>
          <p className="text-xl md:text-2xl font-light">3-Side Seal Sachets: Optimize your production line without compromising shelf appeal.</p>
        </div>
      </header>

      {/* Empathy Hook Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Struggling with Inefficient Fill Rates?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We understand that in the highly competitive cereal market, every second of downtime and every millimeter of wasted film eats into your margins. You need a packaging solution that scales with high-speed automated lines while maintaining a robust seal integrity. Our 3-side seal sachets are engineered precisely for this balance—delivering flawless machinability and extending product shelf-life.
        </p>
      </section>

      {/* Technical Process Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Seamless Manufacturing Integration</h2>
            <p className="text-gray-700 mb-6">
              Our advanced multi-layer laminates are designed for optimal slip characteristics and low sealing temperatures. This ensures high-speed vertical form-fill-seal (VFFS) compatibility, reducing machine wear and energy consumption while guaranteeing an airtight environment that keeps cereal crisp.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>High-barrier EVOH and METPET layer options</li>
              <li>Engineered for rapid heat transfer and quick cooling</li>
              <li>Exceptional puncture resistance for sharp granola clusters</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src="/imgs/topics/cereal-sachet-three-side-seal/process.png" alt="Manufacturing Process of 3 Side Seal Sachet" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img src="/imgs/topics/cereal-sachet-three-side-seal/comparison.png" alt="Comparison: 3 Side Seal vs Traditional Box" className="w-full h-auto object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4">The Modern Advantage</h2>
            <p className="text-gray-700 mb-6">
              Transitioning from bulky bag-in-box formats to sleek 3-side seal sachets dramatically reduces your warehousing and logistics footprint. Not only do you save on material costs, but the expanded printable surface area provides a premium canvas for your brand's technical specifications and nutritional information.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Request a Technical Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CerealSachetThreeSideSeal;
