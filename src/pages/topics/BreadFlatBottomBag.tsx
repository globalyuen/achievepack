import React from 'react';

const BreadFlatBottomBag: React.FC = () => {
  return (
    <div className="topic-container bg-white text-gray-900 font-sans">
      <header className="hero-section relative bg-gray-100 py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Premium Flat Bottom Bags for Bakery & Bread</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          Engineered for structural integrity, extended shelf-life, and superior retail presentation.
        </p>
        <img 
          src="/imgs/topics/bread-flat-bottom-bag/hero.png" 
          alt="Premium flat bottom bag for artisanal bread" 
          className="mx-auto rounded-lg shadow-xl max-w-full md:max-w-4xl object-cover"
        />
      </header>

      <section className="empathy-hook py-16 px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Are Your Artisan Breads Losing Their Freshness and Appeal?</h2>
          <p className="text-lg text-gray-700 mb-4">
            We understand the frustration of commercial bakeries. You pour hours into crafting the perfect artisanal loaf, only to have standard loose plastic bags compromise the crust, allow moisture to degrade the crumb, and look messy on the retail shelf. When your packaging fails, your brand value diminishes.
          </p>
          <p className="text-lg text-gray-700">
            Our high-barrier flat bottom bags are engineered to solve this. They provide a stable, box-like structure that stands upright, maximizing branding space while utilizing advanced multi-layer films to lock in freshness and protect that perfect crust.
          </p>
        </div>
      </section>

      <section className="technical-details py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Advanced Manufacturing Process</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Achieve Pack, our BRC-certified facilities utilize state-of-the-art servo-driven FFS (Form-Fill-Seal) compatible machinery to produce flat bottom bags with precise tolerances.
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li><strong>Multi-Layer Extrusion:</strong> Custom barrier films (PET/VMPET/PE) to control OTR (Oxygen Transmission Rate) and MVTR (Moisture Vapor Transmission Rate).</li>
              <li><strong>Gusset Engineering:</strong> Side and bottom gussets are reinforced with heat-seal technology for maximum burst strength.</li>
              <li><strong>High-Definition Rotogravure:</strong> Up to 10-color printing for vibrant, photo-quality brand reproduction.</li>
            </ul>
          </div>
          <div>
            <img 
              src="/imgs/topics/bread-flat-bottom-bag/process.png" 
              alt="Manufacturing process of flat bottom bag" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="comparison-section py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">The Achieve Pack Advantage</h2>
          <div className="flex justify-center">
            <img 
              src="/imgs/topics/bread-flat-bottom-bag/comparison.png" 
              alt="Comparison of flat bottom bag vs standard bread bag" 
              className="rounded-lg shadow-xl max-w-full md:max-w-4xl object-cover"
            />
          </div>
          <div className="mt-8 text-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Unlike conventional wicketed bags that collapse and wrinkle, our flat bottom structure offers a 360-degree billboard for your brand. The five panels provide ample space for nutritional information, storytelling, and striking graphics, ensuring your product dominates the bakery aisle.
            </p>
          </div>
        </div>
      </section>
      
      <section className="cta-section py-20 px-8 text-center bg-blue-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Bakery Packaging Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact our technical packaging specialists for custom structural engineering and barrier consultation.
        </p>
        <button className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300">
          Request a Technical Quote
        </button>
      </section>
    </div>
  );
};

export default BreadFlatBottomBag;
