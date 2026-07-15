import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

export default function PremiumTea() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Premium Tea Packaging Solutions | Achieve Pack</title>
        <meta name="description" content="Discover technical B2B packaging solutions for premium tea. Elevate your brand with our advanced material science." />
      </Helmet>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Advanced Premium Tea Packaging</h1>
        <p className="text-xl mb-8 text-gray-700">We know how frustrating it is when your delicate tea leaves lose their aroma due to poor barrier protection. Our high-barrier films ensure your premium tea retains its freshness, protecting your brand's reputation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/premium-tea/premium-tea_hero.webp" alt="Premium Tea Packaging Hero" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Industry-Leading Barriers</h3>
          </div>
          <div>
            <img src="/imgs/topics/premium-tea/premium-tea_process.webp" alt="Premium Tea Packaging Process" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Optimized Manufacturing</h3>
          </div>
          <div>
            <img src="/imgs/topics/premium-tea/premium-tea_comparison.webp" alt="Premium Tea Packaging Comparison" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Superior Shelf Appeal</h3>
          </div>
        </div>
        
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">Request a Quote</Link>
      </main>
    </div>
  );
}
