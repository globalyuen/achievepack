import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RecyclableSnackPackagingPage() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Recyclable Snack Packaging | Achieve Pack</title>
        <meta name="description" content="High-performance recyclable packaging films engineered for the snack industry." />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Recyclable Snack Packaging Solutions</h1>
        <p className="text-xl mb-8 text-gray-700">Finding recyclable films that don't compromise the crispness of your snacks shouldn't be a struggle. Our advanced mono-layer structures offer the excellent moisture and oxygen barriers your products need.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/recyclable-snack-packaging/recyclable-snack-packaging_hero.webp" alt="Recyclable Snack Packaging Hero" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Crisp Freshness</h3>
          </div>
          <div>
            <img src="/imgs/topics/recyclable-snack-packaging/recyclable-snack-packaging_process.webp" alt="Recyclable Snack Packaging Process" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">High-Speed Sealing</h3>
          </div>
          <div>
            <img src="/imgs/topics/recyclable-snack-packaging/recyclable-snack-packaging_comparison.webp" alt="Recyclable Snack Packaging Comparison" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Standout Display</h3>
          </div>
        </div>
        
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">Request a Quote</Link>
      </main>
    </div>
  );
}
