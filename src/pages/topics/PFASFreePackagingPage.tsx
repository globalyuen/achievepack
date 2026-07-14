import React from 'react';
import Head from 'next/head';

const PFASFreePackagingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>PFAS-Free Packaging | Secure & Sustainable Barrier Pouches</title>
        <meta name="description" content="Discover premium PFAS-free packaging solutions for your brand. Maintain ultimate barrier properties without harmful "forever chemicals". B2B sustainable packaging at its finest." />
      </Head>
      <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-white shadow-sm">
          <div className="absolute inset-0 z-0">
            <img src="/imgs/topics/pfas-free-packaging/pfas_free_packaging_hero.jpg" alt="PFAS-Free Packaging Hero" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">The Future of Safe, Sustainable Barrier Packaging</h1>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              For decades, "forever chemicals" have been the industry standard for resisting grease and water. But as consumer awareness shifts and regulations tighten, the true cost of PFAS is clear. We understand the challenge of eliminating these chemicals without sacrificing the critical barrier performance your products demand. Our innovative PFAS-free packaging solutions deliver the ultimate balance of safety and uncompromising quality.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-all shadow-md">
              Request a Sample
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Make the Switch?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Traditional packaging often relies on fluorinated compounds (PFAS) to repel moisture and oils. While effective, they linger indefinitely in the environment and pose potential health risks. Switching to our advanced PFAS-free material ensures your brand meets the highest ecological standards, future-proofs your compliance strategy, and builds trust with conscious consumers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Exceptional oil and grease resistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">FDA-approved for direct food contact</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Maintains structural integrity and premium feel</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img src="/imgs/topics/pfas-free-packaging/pfas_free_packaging_comp.jpg" alt="PFAS-Free Comparison" className="w-full h-auto" />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img src="/imgs/topics/pfas-free-packaging/pfas_free_packaging_process.jpg" alt="Manufacturing Process" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Advanced Manufacturing</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our state-of-the-art production facilities utilize proprietary aqueous coatings and specialized barrier films that completely eliminate the need for PFAS. Engineered for high-speed automated filling lines, our pouches offer excellent seal strength, puncture resistance, and printability, ensuring your supply chain runs seamlessly while elevating your brand's commitment to a cleaner planet.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PFASFreePackagingPage;
