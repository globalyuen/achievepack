import React from 'react';
import { Helmet } from 'react-helmet-async';

const PetTreatStandUpZipperPouch: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Stand Up Zipper Pouches for Pet Treats | Resealable Freshness</title>
        <meta name="description" content="Premium stand-up zipper pouches for pet treats. Ensure maximum freshness with high-quality resealable closures and excellent barrier properties." />
      </Helmet>
      <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-white shadow-sm">
          <div className="absolute inset-0 z-0">
            <img src="/imgs/topics/pet-treat-stand-up-zipper-pouch/pet_treat_stand_up_zipper_pouch_hero.jpg" alt="Pet Treat Stand Up Zipper Pouch Hero" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">Lock in Flavor with Stand-Up Zipper Pouches</h1>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
              Pet treats are highly value-added products that demand packaging reflecting their premium quality. Our stand-up pouches with integrated zippers provide the ultimate convenience for consumers while guaranteeing that every treat stays as fresh and flavorful as the day it was packed. Enhance your brand's perceived value with packaging that performs flawlessly.
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-all shadow-md">
              Order Samples
            </button>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Power of Resealability</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Consumers despise treats that go stale or bags that tear unpredictably. Our premium zippers are engineered for smooth, repetitive opening and closing. Unlike standard single-use bags, our stand-up zipper pouches encourage continuous use and keep your brand front-and-center in the consumer's home over the product's entire lifespan.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Premium zippers for effortless resealability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">Stands upright for excellent retail visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-xl">✓</span>
                <span className="text-gray-700">High oxygen and moisture barrier protection</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img src="/imgs/topics/pet-treat-stand-up-zipper-pouch/pet_treat_stand_up_zipper_pouch_comp.jpg" alt="Zipper Pouch Comparison" className="w-full h-auto" />
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img src="/imgs/topics/pet-treat-stand-up-zipper-pouch/pet_treat_stand_up_zipper_pouch_process.jpg" alt="Manufacturing Process" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Precision Zipper Integration</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Applying zippers to flexible packaging requires exact tension control and precise heat sealing. Our advanced pouch converting lines flawlessly integrate press-to-close zippers, ensuring a hermetic seal that withstands the rigors of distribution. We offer various zipper styles, including child-resistant and powder-proof options, tailored to your specific treat formulation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PetTreatStandUpZipperPouch;
