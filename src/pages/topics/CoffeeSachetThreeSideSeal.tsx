import React from 'react';

export default function CoffeeSachetThreeSideSeal() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Premium Three-Side Seal Coffee Sachets
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Advanced barrier technology for maximum freshness.
        </p>
      </div>

      <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Empathy Hook: The Freshness Dilemma</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            You source the finest beans, roast them to perfection, and then... they go stale on the shelf. We understand the pain of losing your product's delicate aroma and flavor due to inadequate packaging. Our three-side seal sachets are engineered to stop oxygen and moisture dead in their tracks, ensuring your customers experience the perfect brew, every time.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Technical Specifications</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                - Multi-layer laminated film (PET/AL/PE)<br/>
                - OTR (Oxygen Transmission Rate): {'<'} 0.1 cc/m².24h<br/>
                - WVTR (Water Vapor Transmission Rate): {'<'} 0.1 g/m².24h<br/>
                - High-speed automated filling compatibility
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Visuals</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-wrap gap-4">
                <img src="/imgs/topics/coffee-sachet-three-side-seal/hero.png" alt="Hero" className="w-48 h-auto object-cover rounded-md shadow" />
                <img src="/imgs/topics/coffee-sachet-three-side-seal/process.png" alt="Process" className="w-48 h-auto object-cover rounded-md shadow" />
                <img src="/imgs/topics/coffee-sachet-three-side-seal/comparison.png" alt="Comparison" className="w-48 h-auto object-cover rounded-md shadow" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
