import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PlaRice: React.FC = () => {
  return (
    <>
      <Head>
        <title>Heavy-Duty PLA Biodegradable Rice Bags | Achieve Pack</title>
        <meta name="description" content="Industrial-grade PLA biodegradable packaging engineered for bulk rice and grains." />
      </Head>
      <main className="bg-gray-50 min-h-screen font-sans text-gray-900">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/imgs/topics/pla-rice/hero.jpg"
              alt="Pla Rice Hero"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-60"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Heavy-Duty PLA Biodegradable Rice Bags
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Engineered for absolute reliability, compliance, and structural integrity.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Request Technical Specs
            </button>
          </div>
        </section>

        {/* Empathy Hook */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">The Cost of Packaging Failure</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sustainability is no excuse for structural failure. When shipping 5kg to 10kg of rice, traditional eco-films burst under transit stress, leading to massive product loss. Our advanced PLA composites deliver the heavy-duty tensile strength required for bulk grains without sacrificing biodegradability.
          </p>
        </section>

        {/* Technical Specs & Process */}
        <section className="py-20 bg-white px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Precision Engineering</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Advanced Material Science:</strong> Tailored barrier layers for maximum product protection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>High-Speed Machinability:</strong> Optimized slip coefficients for seamless automated production.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Stringent Quality Control:</strong> Defect-free manufacturing tolerances.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/imgs/topics/pla-rice/process.jpg"
                alt="Pla Rice Process"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">The Achieve Pack Difference</h2>
            <div className="relative h-[500px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/imgs/topics/pla-rice/comparison.jpg"
                alt="Pla Rice Comparison"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PlaRice;
