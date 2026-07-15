import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function RecyclablePackagingGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Recyclable Packaging Guide | Achieve Pack</title>
        <meta name="description" content="Technical guidelines for adopting and optimizing fully recyclable packaging structures." />
      </Helmet>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Your Guide to Recyclable Packaging</h1>
        <p className="text-xl mb-8 text-gray-700">Navigating the complexities of recyclable packaging structures can be overwhelming. We take the confusion out of the process, providing certified mono-material films that perform on your production lines.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/recyclable-packaging-guide/recyclable-packaging-guide_hero.webp" alt="Recyclable Packaging Guide Hero" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Clear Compliance</h3>
          </div>
          <div>
            <img src="/imgs/topics/recyclable-packaging-guide/recyclable-packaging-guide_process.webp" alt="Recyclable Packaging Process" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Production Ready</h3>
          </div>
          <div>
            <img src="/imgs/topics/recyclable-packaging-guide/recyclable-packaging-guide_comparison.webp" alt="Recyclable Packaging Comparison" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Superior Quality</h3>
          </div>
        </div>
        
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">Request a Quote</Link>
      </main>
    </div>
  );
}
