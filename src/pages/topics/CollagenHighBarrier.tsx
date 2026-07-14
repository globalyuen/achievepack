import React from 'react';

export default function CollagenHighBarrier() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          High-Barrier Collagen Powder Packaging
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Uncompromised protection for sensitive nutraceuticals.
        </p>
      </div>

      <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Empathy Hook: Protecting Your Premium Formulation</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Formulating a high-quality collagen supplement takes intense R&D and premium ingredients. But all that value is lost if moisture causes clumping or oxygen degrades the active peptides before it reaches the consumer. We understand the critical stakes. Our ultra-high-barrier packaging guarantees extended shelf life and maintains the pristine, free-flowing state of your product, protecting your brand's reputation and bottom line.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Technical Specifications</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                - Specialized Alu-Foil Laminate or EVOH high-barrier films<br/>
                - Extreme moisture resistance: WVTR {'<'} 0.05 g/m².24h<br/>
                - Premium matte or soft-touch finish for luxury branding<br/>
                - Resealable zipper systems for consumer convenience
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Visuals</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex flex-wrap gap-4">
                <img src="/imgs/topics/collagen-high-barrier/hero.png" alt="Hero" className="w-48 h-auto object-cover rounded-md shadow" />
                <img src="/imgs/topics/collagen-high-barrier/process.png" alt="Process" className="w-48 h-auto object-cover rounded-md shadow" />
                <img src="/imgs/topics/collagen-high-barrier/comparison.png" alt="Comparison" className="w-48 h-auto object-cover rounded-md shadow" />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
