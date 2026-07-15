import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function RealWorldSustainabilityPage() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Real-World Sustainability Packaging | Achieve Pack</title>
        <meta name="description" content="Transition your brand to sustainable packaging with confidence. Technical and reliable eco-friendly material solutions." />
      </Helmet>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Real-World Sustainability Packaging Solutions</h1>
        <p className="text-xl mb-8 text-gray-700">Transitioning to sustainable packaging is daunting. You shouldn't have to compromise on shelf life or performance just to be eco-friendly. We engineer solutions that deliver both green credentials and robust protection.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/real-world-sustainability/real-world-sustainability_hero.webp" alt="Real World Sustainability Hero" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Durable Eco-Materials</h3>
          </div>
          <div>
            <img src="/imgs/topics/real-world-sustainability/real-world-sustainability_process.webp" alt="Sustainability Process" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Streamlined Integration</h3>
          </div>
          <div>
            <img src="/imgs/topics/real-world-sustainability/real-world-sustainability_comparison.webp" alt="Sustainability Comparison" className="w-full rounded-lg shadow-lg object-cover" />
            <h3 className="text-2xl font-semibold mt-4 text-gray-800">Proven Performance</h3>
          </div>
        </div>
        
        <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">Request a Quote</Link>
      </main>
    </div>
  );
}
