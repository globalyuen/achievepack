import React from 'react';
import { Helmet } from 'react-helmet';

const TeaStandUpZipperPouch: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Premium Tea Stand-Up Zipper Pouches | B2B Packaging Solutions | AchievePack</title>
        <meta name="description" content="High-barrier stand-up zipper pouches designed for premium tea packaging. Ensure freshness with our advanced oxygen and moisture protection." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-50 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/imgs/topics/tea-stand-up-zipper-pouch/hero_tea_stand_up_zipper_pouch.webp" 
            alt="Hero Premium Tea Stand-up Zipper Pouch" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-white/70 p-2 rounded">
            Advanced Tea Stand-Up Zipper Pouches
          </h1>
          <p className="text-xl text-gray-800 font-medium bg-white/70 p-2 rounded inline-block">
            Engineered for optimal barrier protection and shelf presence.
          </p>
        </div>
      </section>

      {/* Empathy Hook */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Are you losing the aromatic profile of your premium tea blends?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Tea leaves are highly sensitive to oxygen, moisture, and UV light. Substandard packaging can cause rapid degradation, leading to lost flavor, reduced shelf life, and ultimately, dissatisfied customers. You need a packaging solution that preserves the integrity of your product from the processing facility to the consumer's cup.
        </p>
      </section>

      {/* Process & Technical Specs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Precision Manufacturing Process</h3>
            <p className="text-gray-600 mb-6">
              Our pouches are manufactured using multi-layer laminated films (e.g., PET/AL/PE) under strict ISO-certified cleanroom conditions. This ensures structural integrity and high puncture resistance, vital for automated filling lines and rigorous supply chains.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>High Oxygen Transmission Rate (OTR) Barrier</li>
              <li>Low Water Vapor Transmission Rate (WVTR)</li>
              <li>Resealable Press-to-Close (PTC) Zipper</li>
              <li>FDA-Approved Food Contact Materials</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/imgs/topics/tea-stand-up-zipper-pouch/process_tea_stand_up_zipper_pouch.webp" 
              alt="Tea Pouch Manufacturing Process" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-row-reverse">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/imgs/topics/tea-stand-up-zipper-pouch/comparison_tea_stand_up_zipper_pouch.webp" 
              alt="Quality Comparison of Tea Pouches" 
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The AchievePack Advantage</h3>
            <p className="text-gray-600 mb-6">
              Don't compromise your brand equity with inferior packaging. Our stand-up zipper pouches maintain their shape, prevent leaks, and feature superior printability for your branding compared to traditional paper bags or unlaminated plastics.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors">
              Request a Technical Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeaStandUpZipperPouch;
