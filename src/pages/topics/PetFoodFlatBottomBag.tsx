import React from 'react';
import Head from 'next/head';

const PetFoodFlatBottomBag: React.FC = () => {
  return (
    <>
      <Head>
        <title>Flat Bottom Bags for Pet Food | Premium Branding & Stability</title>
        <meta name="description" content="Discover premium flat bottom bags for pet food. Five panels of printable space, exceptional stability, and superior barrier properties for your top-tier pet food products." />
      </Head>
      <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-white shadow-sm">
          <div className="absolute inset-0 z-0">
            <img src="/imgs/topics/pet-food-flat-bottom-bag/pet_food_flat_bottom_bag_hero.jpg" alt="Pet Food Flat Bottom Bag Hero" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Command Attention with Flat Bottom Bags</h1>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              In a crowded pet food aisle, standing out is everything. Our premium flat bottom bags offer an unparalleled canvas for your brand with five fully printable panels. Designed for stability and visual impact, these pouches never topple over, ensuring your product is always presented perfectly. We understand the need for packaging that works as hard as you do to win customer loyalty.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-all shadow-md">
              Get a Quote Today
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Flat Bottom Advantage</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Standard stand-up pouches can sometimes lose their shape or stability when filled with heavy kibble. Flat bottom bags feature a rigid, square base that guarantees they stand perfectly upright, maximizing shelf space and visual appeal. It's the premium touch that reassures pet owners they are buying top-quality food.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Five panels for maximum branding real estate</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Incredible stability on shelves and in pantries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Excellent barrier protection to keep kibble fresh</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img src="/imgs/topics/pet-food-flat-bottom-bag/pet_food_flat_bottom_bag_comp.jpg" alt="Flat Bottom Comparison" className="w-full h-auto" />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img src="/imgs/topics/pet-food-flat-bottom-bag/pet_food_flat_bottom_bag_process.jpg" alt="Manufacturing Process" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Precision Engineered for Performance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our manufacturing process employs advanced converting technology to fold and seal these intricate bags with pinpoint accuracy. The robust side gussets and flat base are formed seamlessly, allowing for high-speed automated filling. We deliver consistency and durability in every batch, so your production lines never slow down.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PetFoodFlatBottomBag;
