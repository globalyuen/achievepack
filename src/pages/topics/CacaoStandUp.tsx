import React from 'react';

const CacaoStandUp: React.FC = () => {
  return (
    <div className="topic-container bg-white text-gray-900 font-sans">
      <header className="hero-section relative bg-gray-900 py-24 px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-500">Premium Stand-Up Pouches for Cacao & Cocoa Products</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          Engineered for ultimate barrier protection, preserving the complex volatile compounds of premium cacao.
        </p>
        <img 
          src="/imgs/topics/cacao-stand-up/hero.png" 
          alt="Premium cacao stand up pouch" 
          className="mx-auto rounded-lg shadow-2xl max-w-full md:max-w-4xl object-cover border-4 border-gray-800"
        />
      </header>

      <section className="empathy-hook py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Is Oxidation Destroying Your Cacao's Flavor Profile?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Cacao powder is highly susceptible to oxidation, moisture absorption, and UV degradation. When packaged in standard, low-barrier bags, the rich, nuanced flavors of your high-grade cacao rapidly degrade into a flat, stale product before it even reaches the consumer. This isn't just a loss of quality; it's a loss of the premium value you've worked hard to cultivate.
          </p>
          <p className="text-lg text-gray-700">
            Our high-barrier stand-up pouches are specifically engineered for sensitive powders. Featuring advanced multi-layer laminations, they create a near-impenetrable shield against oxygen and moisture, ensuring your cacao retains its complex aroma and deep flavor profile from roasting to consumption.
          </p>
        </div>
      </section>

      <section className="technical-details py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/imgs/topics/cacao-stand-up/process.png" 
              alt="Hygienic manufacturing process for cacao pouches" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Specifications & Barrier Properties</h2>
            <p className="text-lg text-gray-700 mb-4">
              Designed for high-speed automated filling lines and stringent food-safety standards.
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li><strong>Ultra-High Barrier Films:</strong> Constructed with PET/AL/PE or metallized layers (VMPET) to achieve an OTR of &lt; 0.1 cc/m2/24hr and MVTR of &lt; 0.1 g/m2/24hr.</li>
              <li><strong>Powder-Resistant Zippers:</strong> Specialized press-to-close zippers designed to resist clogging from fine cacao powder, ensuring a reliable reseal every time.</li>
              <li><strong>Puncture Resistance:</strong> Heavy-duty laminations prevent punctures during transit, reducing product loss and returns.</li>
              <li><strong>Food-Grade Certification:</strong> Manufactured in ISO 22000 and BRC certified cleanrooms.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="comparison-section py-16 px-8 bg-amber-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">The Ultimate Protection vs. Generic Packaging</h2>
          <div className="flex justify-center">
            <img 
              src="/imgs/topics/cacao-stand-up/comparison.png" 
              alt="Premium pouch vs generic packaging" 
              className="rounded-lg shadow-xl max-w-full md:max-w-4xl object-cover"
            />
          </div>
          <div className="mt-8 text-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Generic packaging compromises your product. Our premium stand-up pouches not only provide superior shelf presence with a sturdy, unyielding base but also guarantee the integrity of your cacao powder, ensuring the consumer experiences exactly what you intended.
            </p>
          </div>
        </div>
      </section>
      
      <section className="cta-section py-20 px-8 text-center bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Product's Premium Quality</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Partner with Achieve Pack for custom structural design and advanced barrier technology.
        </p>
        <button className="bg-amber-500 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-amber-400 transition duration-300">
          Request a Sample & Consultation
        </button>
      </section>
    </div>
  );
};

export default CacaoStandUp;
