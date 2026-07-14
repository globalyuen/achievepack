import React from 'react';
import Head from 'next/head';

export default function SnackSachetThreeSideSeal() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Snack Sachet Three Side Seal | Achieve Pack</title>
        <meta name="description" content="Technical excellence in snack sachet three side seal for B2B brands." />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Snack Sachet Three Side Seal</h1>
        <p className="text-xl text-gray-500 mb-12">
          We understand the precise engineering required for optimal shelf life and line efficiency. 
          Our snack sachet three side seal solutions deliver the technical performance you need without compromising on aesthetics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/imgs/topics/snack-sachet-three-side-seal/snack-sachet-three-side-seal_hero.jpg`} alt="Snack Sachet Three Side Seal Hero" className="w-full h-64 object-cover" />
            <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Premium Finish</h3></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/imgs/topics/snack-sachet-three-side-seal/snack-sachet-three-side-seal_process.jpg`} alt="Snack Sachet Three Side Seal Process" className="w-full h-64 object-cover" />
            <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">High-Speed Line Efficiency</h3></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/imgs/topics/snack-sachet-three-side-seal/snack-sachet-three-side-seal_comparison.jpg`} alt="Snack Sachet Three Side Seal Comparison" className="w-full h-64 object-cover" />
            <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Material Superiority</h3></div>
          </div>
        </div>
      </main>
    </div>
  );
}
