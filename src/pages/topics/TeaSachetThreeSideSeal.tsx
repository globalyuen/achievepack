import React from 'react';

const TeaSachetThreeSideSeal: React.FC = () => {
  return (
    <div className="topic-page-container bg-white text-gray-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto my-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Tea Sachet Three Side Seal Packaging</h1>
      
      {/* Empathy Hook */}
      <section className="empathy-hook mb-8 bg-blue-50 p-6 rounded-md border-l-4 border-blue-600">
        <p className="text-lg italic text-blue-800">
          Struggling to keep your premium tea blends fresh while maintaining a luxurious unboxing experience? You're not alone. The right packaging is critical for protecting delicate tea leaves from moisture and oxygen, ensuring every cup delivers the perfect aroma and flavor your brand promises.
        </p>
      </section>

      <section className="hero-section mb-10">
        <img 
          src="/imgs/topics/tea-sachet-three-side-seal/hero_tea_sachet_three_side_seal.webp" 
          alt="Premium Tea Sachet Three Side Seal" 
          className="w-full h-auto rounded-lg shadow-sm"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">High-barrier three side seal tea sachets designed for maximum freshness.</p>
      </section>

      <section className="technical-details mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Technical Specifications & Advantages</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Superior Barrier Properties:</strong> Multi-layer laminated films (e.g., PET/AL/PE) provide excellent resistance to oxygen, moisture, and UV light.</li>
          <li><strong>Precision Sealing:</strong> Three-side ultrasonic or heat sealing ensures zero leakage and extends shelf life significantly.</li>
          <li><strong>Space Efficiency:</strong> Flat profile maximizes shipping density and retail shelf space utilization.</li>
          <li><strong>Customizable Finishes:</strong> Available in matte, gloss, or metallic finishes with high-resolution rotogravure printing.</li>
        </ul>
      </section>

      <section className="process-section mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Manufacturing Process</h2>
        <img 
          src="/imgs/topics/tea-sachet-three-side-seal/process_tea_sachet_three_side_seal.webp" 
          alt="Manufacturing process of three side seal tea sachets" 
          className="w-full h-auto rounded-lg shadow-sm mb-4"
        />
        <p className="text-gray-700">
          Our automated vertical form-fill-seal (VFFS) machinery operates in ISO-certified cleanrooms, ensuring hygienic handling. The process involves precise dosing, inert gas flushing (optional for extended freshness), and rigorous seal integrity testing.
        </p>
      </section>

      <section className="comparison-section mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Quality Comparison</h2>
        <img 
          src="/imgs/topics/tea-sachet-three-side-seal/comparison_tea_sachet_three_side_seal.webp" 
          alt="Comparison of premium vs standard tea sachet packaging" 
          className="w-full h-auto rounded-lg shadow-sm mb-4"
        />
        <p className="text-gray-700">
          Unlike inferior alternatives that suffer from delamination and weak seals, our premium three side seal sachets maintain their structural integrity and premium feel even under rigorous transport conditions.
        </p>
      </section>

      <section className="cta-section text-center mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to upgrade your tea packaging?</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Request a Quote Today
        </button>
      </section>
    </div>
  );
};

export default TeaSachetThreeSideSeal;
