import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const BeefJerkyBarrier: React.FC = () => {
  return (
    <>
      <Head>
        <title>High-Barrier Beef Jerky Pouches | Achieve Pack</title>
        <meta name="description" content="Technical, high-barrier beef jerky packaging for B2B food brands." />
      </Head>
      <main className="bg-white min-h-screen font-sans text-gray-900">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/imgs/topics/beef-jerky-barrier/hero.png"
              alt="High-Barrier Beef Jerky Pouch"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Lock In the Flavor. Lock Out the Oxygen.
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Your jerky's worst enemies are oxygen and moisture. Our technical barrier films are engineered to keep your product as fresh as the day it was cured.
            </p>
            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Request Technical Specs
            </button>
          </div>
        </section>

        {/* Empathy Hook */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">The Spoilage Threat</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            There is nothing more devastating to a jerky brand than a customer opening a bag only to find stale, discolored, or spoiled meat. Standard plastics allow micro-amounts of oxygen to seep in over time, destroying shelf life. We understand the precise OTR (Oxygen Transmission Rate) and MVTR (Moisture Vapor Transmission Rate) needed to prevent this disaster, ensuring your premium product remains premium.
          </p>
        </section>

        {/* Technical Specs & Process */}
        <section className="py-20 bg-gray-50 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/imgs/topics/beef-jerky-barrier/process.png"
                alt="Beef Jerky Film Co-extrusion Process"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Engineered for Preservation</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-700 mr-3 font-bold">✓</span>
                  <span><strong>EVOH Co-extruded Barrier:</strong> Providing an ultra-low OTR to prevent oxidation and rancidity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 mr-3 font-bold">✓</span>
                  <span><strong>Foil and Metallized Options:</strong> For absolute light and moisture protection, maximizing shelf life to 12+ months.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-700 mr-3 font-bold">✓</span>
                  <span><strong>Resealable Press-to-Close Zipper:</strong> Keeps jerky tender and moist long after the first open.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-white px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">See the Difference Barrier Makes</h2>
            <div className="relative h-[500px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/imgs/topics/beef-jerky-barrier/comparison.png"
                alt="High-Barrier vs Low-Barrier Beef Jerky Packaging"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BeefJerkyBarrier;
