import React from 'react';
import Head from 'next/head';

const RiceFlatBottomBagPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Premium Flat Bottom Bags for Rice Packaging | Achieve Pack</title>
        <meta name="description" content="Discover Achieve Pack's highly stable, visually striking flat bottom bags engineered specifically for bulk rice and grain packaging." />
      </Head>
      <div className="bg-white min-h-screen font-sans text-gray-900">
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/imgs/topics/rice-flat-bottom-bag/rice_flat_bottom_bag_hero.jpg" 
              alt="Premium Flat Bottom Bag for Rice" 
              className="w-full h-full object-cover opacity-80 bg-gray-200"
            />
          </div>
          <div className="z-10 text-center max-w-4xl mx-auto px-4 bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">Elevate Your Grain: Premium Flat Bottom Bags</h1>
            <p className="text-lg md:text-xl text-slate-700">Exceptional stability, maximum shelf appeal, and superior puncture resistance for bulk rice packaging.</p>
          </div>
        </section>

        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The Challenge of Bulk Packaging</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rice and grains are dense, heavy, and notoriously difficult to package effectively. Traditional pillow pouches slump on shelves, looking unappealing and taking up valuable retail space. Rigid containers are expensive to ship and prone to cracking. You need a solution that stands tall, protects against pests and moisture, and presents your brand beautifully. Our Flat Bottom Bags are engineered to solve exactly these pain points, ensuring your product dominates the aisle.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/imgs/topics/rice-flat-bottom-bag/rice_flat_bottom_bag_process.jpg" 
                alt="Manufacturing Flat Bottom Bags" 
                className="w-full h-auto rounded-xl shadow-md bg-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Engineered for Strength</h3>
              <p className="text-gray-600 mb-4">
                Our flat bottom bags utilize a multi-layered laminated structure designed specifically to handle the sheer weight of bulk grains without tearing or bursting. The flat, rigid base ensures the bag stands perfectly upright, maximizing visibility.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Quad-seal construction for reinforced corners</li>
                <li>Heavy-duty zippers or sliders for consumer convenience</li>
                <li>High-barrier films to lock out moisture and oxygen</li>
                <li>Five panels of printable surface area for maximum branding</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Stand Out from the Crowd</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-green-600">Flat Bottom Bags</h4>
                  <p className="text-gray-600">Stands rigidly upright, offers a premium "billboard" effect on shelves, highly space-efficient for shipping and display, and feels like a premium product to consumers.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-red-600">Traditional Pillow Pouches</h4>
                  <p className="text-gray-600">Slouches or falls over, difficult to display neatly, limited branding area, and often perceived as a lower-value economy option.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img 
                src="/imgs/topics/rice-flat-bottom-bag/rice_flat_bottom_bag_comparison.jpg" 
                alt="Flat Bottom Bag vs Pillow Pouch" 
                className="w-full h-auto rounded-xl shadow-md bg-gray-200"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-900 text-white text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Packaging?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact Achieve Pack to request samples and discuss custom printing options for your rice or grain products.</p>
          <a href="/contact" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Request Samples
          </a>
        </section>
      </div>
    </>
  );
};

export default RiceFlatBottomBagPage;
