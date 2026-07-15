import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function RicePaperArtisanal() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Artisanal Rice Paper Pouches | Achieve Pack</title>
        <meta name="description" content="Technical excellence in artisanal rice paper pouches for B2B brands." />
      </Helmet>
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Artisanal Rice Paper Pouches</h1>
        <p className="text-xl text-gray-500 mb-12">
          We understand the precise engineering required for optimal shelf life and line efficiency. 
          Our artisanal rice paper pouches solutions deliver the technical performance you need without compromising on aesthetics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/imgs/topics/rice-paper-artisanal/rice-paper-artisanal_hero.jpg`} alt="Artisanal Rice Paper Pouches Hero" className="w-full h-64 object-cover" />
            <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Premium Finish</h3></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/imgs/topics/rice-paper-artisanal/rice-paper-artisanal_process.jpg`} alt="Artisanal Rice Paper Pouches Process" className="w-full h-64 object-cover" />
            <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">High-Speed Line Efficiency</h3></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={`/imgs/topics/rice-paper-artisanal/rice-paper-artisanal_comparison.jpg`} alt="Artisanal Rice Paper Pouches Comparison" className="w-full h-64 object-cover" />
            <div className="p-6"><h3 className="text-xl font-bold text-gray-900 mb-2">Material Superiority</h3></div>
          </div>
        </div>
      </main>
    </div>
  );
}
